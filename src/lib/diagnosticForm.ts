import { z } from "zod"

export const REQUIRED_DIAGNOSTIC_FIELDS = ["name", "email", "message"] as const

export type RequiredDiagnosticField = (typeof REQUIRED_DIAGNOSTIC_FIELDS)[number]

export type DiagnosticFormState = {
  name: string
  email: string
  company: string
  context: string
  friction: string
  message: string
  website: string
}

export type DiagnosticFieldErrors = Partial<Record<RequiredDiagnosticField, string>>

const requiredFieldMessages: Record<RequiredDiagnosticField, { empty: string; invalid?: string }> = {
  name: {
    empty: "Merci d’indiquer votre nom.",
  },
  email: {
    empty: "Merci d’indiquer votre email.",
    invalid: "L’adresse email semble invalide.",
  },
  message: {
    empty: "Merci de décrire votre situation.",
  },
}

const optionalTrimmedString = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .transform((value) => value || undefined)
    .optional()

export const diagnosticRequestSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, requiredFieldMessages.name.empty)
    .max(200, "Le nom est trop long."),
  email: z
    .string()
    .trim()
    .min(1, requiredFieldMessages.email.empty)
    .max(320, "L’adresse email est trop longue.")
    .email(requiredFieldMessages.email.invalid),
  company: optionalTrimmedString(500),
  context: optionalTrimmedString(500),
  friction: optionalTrimmedString(500),
  message: z
    .string()
    .trim()
    .min(1, requiredFieldMessages.message.empty)
    .max(10_000, "La description est trop longue."),
})

export type DiagnosticRequestPayload = z.infer<typeof diagnosticRequestSchema>

const fieldSchemas: Record<RequiredDiagnosticField, z.ZodType<string>> = {
  name: diagnosticRequestSchema.shape.name,
  email: diagnosticRequestSchema.shape.email,
  message: diagnosticRequestSchema.shape.message,
}

export function validateDiagnosticField(field: RequiredDiagnosticField, value: string) {
  const result = fieldSchemas[field].safeParse(value)
  return result.success ? undefined : result.error.issues[0]?.message
}

export function validateDiagnosticForm(form: DiagnosticFormState): DiagnosticFieldErrors {
  return REQUIRED_DIAGNOSTIC_FIELDS.reduce<DiagnosticFieldErrors>((accumulator, field) => {
    const error = validateDiagnosticField(field, form[field])

    if (error) {
      accumulator[field] = error
    }

    return accumulator
  }, {})
}
