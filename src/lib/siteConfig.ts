export const CANONICAL_HOSTNAME = "digitrend-creation.fr"
export const CANONICAL_HOSTNAMES = new Set([
  CANONICAL_HOSTNAME,
  `www.${CANONICAL_HOSTNAME}`,
])

export const PLAUSIBLE_DOMAIN = CANONICAL_HOSTNAME
export const DIAGNOSTIC_SUBMISSION_ENDPOINT =
  import.meta.env.VITE_DIAGNOSTIC_SUBMISSION_ENDPOINT?.trim() ||
  "/.netlify/functions/submit-diagnostic"

export function isCanonicalProductionHost(hostname: string) {
  return CANONICAL_HOSTNAMES.has(hostname.toLowerCase())
}
