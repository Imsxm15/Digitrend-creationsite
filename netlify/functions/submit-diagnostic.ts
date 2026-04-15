import { createHash } from "node:crypto"
import { createClient } from "@supabase/supabase-js"
import { diagnosticRequestSchema } from "../../src/lib/diagnosticForm"

type HandlerEvent = {
  httpMethod?: string
  body?: string | null
  headers?: Record<string, string | undefined>
}

type HandlerResult = {
  statusCode: number
  headers: Record<string, string>
  body: string
}

const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
}

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000
const RATE_LIMIT_MAX_SUBMISSIONS = 3

function jsonResponse(statusCode: number, payload: Record<string, unknown>): HandlerResult {
  return {
    statusCode,
    headers: JSON_HEADERS,
    body: JSON.stringify(payload),
  }
}

function getClientIp(event: HandlerEvent) {
  const forwardedFor = event.headers?.["x-forwarded-for"] ?? event.headers?.["client-ip"]
  return forwardedFor?.split(",")[0]?.trim() ?? "unknown"
}

function buildFingerprint(event: HandlerEvent) {
  const ip = getClientIp(event)
  const userAgent = event.headers?.["user-agent"]?.trim() || "unknown"
  const salt = process.env.SUPABASE_RATE_LIMIT_SALT || process.env.SUPABASE_SERVICE_ROLE_KEY || "digitrend"

  return createHash("sha256")
    .update(`${ip}:${userAgent}:${salt}`)
    .digest("hex")
}

export async function handler(event: HandlerEvent): Promise<HandlerResult> {
  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { ok: false, error: "Méthode non autorisée." })
  }

  const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceRoleKey) {
    return jsonResponse(503, {
      ok: false,
      error: "Le formulaire est momentanément indisponible. Merci d’écrire à samuel@digitrend.fr.",
    })
  }

  let parsedBody: unknown

  try {
    parsedBody = event.body ? JSON.parse(event.body) : {}
  } catch {
    return jsonResponse(400, { ok: false, error: "La requête envoyée est invalide." })
  }

  const payload = typeof parsedBody === "object" && parsedBody !== null ? parsedBody as Record<string, unknown> : {}

  if (typeof payload.website === "string" && payload.website.trim()) {
    return jsonResponse(202, { ok: true })
  }

  const validationResult = diagnosticRequestSchema.safeParse(payload)

  if (!validationResult.success) {
    return jsonResponse(400, {
      ok: false,
      error: validationResult.error.issues[0]?.message || "Le message envoyé est incomplet.",
    })
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })

  const requestFingerprint = buildFingerprint(event)
  const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MS).toISOString()

  const { count, error: rateLimitError } = await supabase
    .from("diagnostic_requests")
    .select("id", { count: "exact", head: true })
    .eq("request_fingerprint", requestFingerprint)
    .gte("created_at", windowStart)

  if (rateLimitError) {
    return jsonResponse(500, {
      ok: false,
      error: "Impossible de vérifier le rythme d’envoi pour le moment.",
    })
  }

  if ((count ?? 0) >= RATE_LIMIT_MAX_SUBMISSIONS) {
    return jsonResponse(429, {
      ok: false,
      error: "Trop de demandes envoyées récemment. Merci de réessayer dans une heure.",
    })
  }

  const { error: insertError } = await supabase.from("diagnostic_requests").insert({
    ...validationResult.data,
    submission_source: "website",
    request_fingerprint: requestFingerprint,
  })

  if (insertError) {
    return jsonResponse(500, {
      ok: false,
      error: "Une erreur est survenue. Merci de réessayer ou de m’écrire directement.",
    })
  }

  return jsonResponse(200, { ok: true })
}
