import { type ChangeEvent, type FocusEvent, type FormEvent, useMemo, useRef, useState } from "react"
import {
  ArrowUpRight,
  CheckCircle,
  Clock3,
  FileText,
  Globe,
  ShieldCheck,
} from "lucide-react"
import { PageMeta } from "@/components/common/PageMeta"
import { ScrollReveal } from "@/components/common/ScrollReveal"
import { SectionLabel } from "@/components/common/SectionLabel"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { trackEvent } from "@/lib/analytics"
import { cn } from "@/lib/utils"
import { isSupabaseConfigured, supabase } from "@/lib/supabase"
import { PUBLIC_PROFILE } from "@/data/profile"

const DIAGNOSTIC_QUESTIONS = [
  {
    id: "context",
    label: "Votre contexte",
    options: [
      "Startup / Scale-up (< 50 personnes)",
      "PME établie (50–250 personnes)",
      "Grande entreprise (250+ personnes)",
      "Indépendant / Solopreneur",
      "Autre",
    ],
  },
  {
    id: "friction",
    label: "Principale friction identifiée",
    options: [
      "Processus manuels trop chronophages",
      "Conversion faible malgré le trafic",
      "Outils non connectés / pas de vision globale",
      "Besoin d'un outil IA interne",
      "Manque de structure opérationnelle",
      "Je ne sais pas encore exactement",
    ],
  },
] as const

const TRUST_MARKERS = [
  {
    icon: Clock3,
    eyebrow: "Réponse",
    value: "24h",
    detail: "ouvrées, avec un premier retour structuré.",
  },
  {
    icon: FileText,
    eyebrow: "Restitution",
    value: "1 synthèse",
    detail: "avec priorités, angles morts et prochaine étape.",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Cadre",
    value: "Sans engagement",
    detail: "si le sujet n'appelle pas d'intervention, nous vous le disons.",
  },
] as const

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Vous posez le contexte",
    detail: "Nom, email et situation actuelle. L'objectif est de comprendre le problème réel, pas de faire remplir un dossier.",
  },
  {
    number: "02",
    title: "Nous revenons avec un premier tri",
    detail: "Sous 24 heures ouvrées, avec une réponse claire : angle de lecture, niveau d'urgence et pertinence d'un échange.",
  },
  {
    number: "03",
    title: "Nous échangeons 30 minutes",
    detail: "Un appel cadré pour clarifier les frictions, les flux concernés et la bonne profondeur d'intervention.",
  },
  {
    number: "04",
    title: "Vous repartez avec une suite lisible",
    detail: "Les priorités émergent, les quick wins sont nommés et la prochaine décision devient plus simple.",
  },
] as const

const REQUIRED_FIELDS = ["name", "email", "message"] as const

type RequiredField = (typeof REQUIRED_FIELDS)[number]

type FormState = {
  name: string
  email: string
  company: string
  context: string
  friction: string
  message: string
  website: string
}

type FormErrors = Partial<Record<RequiredField, string>>

function validateField(field: RequiredField, value: string) {
  if (field === "name" && !value.trim()) {
    return "Merci d'indiquer votre nom."
  }

  if (field === "email") {
    if (!value.trim()) {
      return "Merci d'indiquer votre email."
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "L'adresse email semble invalide."
    }
  }

  if (field === "message" && !value.trim()) {
    return "Merci de décrire votre situation."
  }

  return undefined
}

function validateForm(form: FormState): FormErrors {
  return REQUIRED_FIELDS.reduce<FormErrors>((acc, field) => {
    const fieldError = validateField(field, form[field])
    if (fieldError) {
      acc[field] = fieldError
    }
    return acc
  }, {})
}

function nextFieldErrors(
  previous: FormErrors,
  field: RequiredField,
  message?: string
) {
  const next = { ...previous }
  if (message) {
    next[field] = message
  } else {
    delete next[field]
  }
  return next
}

export function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    context: "",
    friction: "",
    message: "",
    website: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [errors, setErrors] = useState<FormErrors>({})

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const errorSummary = useMemo(
    () =>
      REQUIRED_FIELDS.filter((field) => errors[field]).map((field) => ({
        field,
        label:
          field === "name"
            ? "Nom / Prénom"
            : field === "email"
              ? "Email"
              : "Description de la situation",
        message: errors[field]!,
      })),
    [errors]
  )

  const fieldClassName =
    "h-12 rounded-[0.5rem] border-mineral-dark bg-graphite-light px-4 text-sm text-ivory placeholder:text-ivory-muted/70 shadow-none focus-visible:border-copper focus-visible:ring-[3px] focus-visible:ring-copper/20"
  const textareaClassName =
    "min-h-[148px] rounded-[0.5rem] border-mineral-dark bg-graphite-light px-4 py-3 text-sm leading-7 text-ivory placeholder:text-ivory-muted/70 shadow-none focus-visible:border-copper focus-visible:ring-[3px] focus-visible:ring-copper/20"
  const labelClassName =
    "mb-2 block font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ivory-muted"
  const hintClassName = "mt-2 font-body text-xs leading-6 text-ivory-muted/70"

  const focusField = (field: RequiredField) => {
    const target =
      field === "name"
        ? nameRef.current
        : field === "email"
          ? emailRef.current
          : messageRef.current

    if (!target) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    target.focus({ preventScroll: true })
    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "center",
    })
  }

  const focusFirstInvalidField = (validationErrors: FormErrors) => {
    const firstInvalidField = REQUIRED_FIELDS.find((field) => validationErrors[field])
    if (!firstInvalidField) return

    window.requestAnimationFrame(() => {
      focusField(firstInvalidField)
    })
  }

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target

    setForm((previous) => ({ ...previous, [name]: value }))

    if (REQUIRED_FIELDS.includes(name as RequiredField)) {
      const field = name as RequiredField
      if (errors[field]) {
        setErrors((previous) => nextFieldErrors(previous, field, validateField(field, value)))
      }
    }
  }

  const handleBlur = (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target

    if (!REQUIRED_FIELDS.includes(name as RequiredField)) {
      return
    }

    const field = name as RequiredField
    setErrors((previous) => nextFieldErrors(previous, field, validateField(field, value)))
  }

  const handleSelectChange = (key: "context" | "friction", value: string) => {
    setForm((previous) => ({ ...previous, [key]: value }))
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const validationErrors = validateForm(form)

    if (Object.keys(validationErrors).length > 0) {
      setError(null)
      setErrors(validationErrors)
      focusFirstInvalidField(validationErrors)
      return
    }

    if (form.website) {
      setSubmitted(true)
      return
    }

    if (!supabase) {
      setError("Le formulaire n'est pas encore actif. Contactez-nous directement par email.")
      return
    }

    setIsSubmitting(true)
    setError(null)
    setErrors({})

    const { error: supabaseError } = await supabase.from("diagnostic_requests").insert({
      name: form.name,
      email: form.email,
      company: form.company,
      context: form.context,
      friction: form.friction,
      message: form.message,
    })

    setIsSubmitting(false)

    if (supabaseError) {
      setError("Une erreur est survenue. Merci de réessayer ou de nous contacter directement.")
      return
    }

    trackEvent("diagnostic_submit")
    setSubmitted(true)
  }

  return (
    <>
      <PageMeta
        title="Diagnostic"
        description="Demandez un diagnostic gratuit de vos opérations digitales. Réponse sous 24h, sans engagement."
      />

      <section className="bg-graphite-deep pb-16 pt-36 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <ScrollReveal>
                <div className="system-shell rounded-[0.5rem] px-6 py-7 md:px-8 md:py-8">
                  <SectionLabel label="Diagnostic" />
                  <h1
                    className="mb-5 font-display font-extrabold text-ivory tracking-[-0.03em] leading-[1.04]"
                    style={{ fontSize: "clamp(2.4rem, 5.2vw, 4.7rem)" }}
                  >
                    Voir où ça bloque.
                    <br />
                    <span className="text-copper">En repartir avec une suite claire.</span>
                  </h1>
                  <p className="max-w-2xl font-body text-base leading-8 text-ivory-muted md:text-lg">
                    Un premier échange de 30 minutes pour qualifier les frictions, comprendre le
                    contexte et décider si le sujet mérite un vrai chantier.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {TRUST_MARKERS.map((marker) => {
                    const Icon = marker.icon

                    return (
                      <div key={marker.eyebrow} className="system-panel rounded-[0.5rem] p-5">
                        <div className="mb-4 flex items-center gap-3">
                          <span className="grid size-9 place-items-center rounded-[0.5rem] border border-copper/25 bg-copper/10 text-copper">
                            <Icon className="size-4" />
                          </span>
                          <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ivory-muted">
                            {marker.eyebrow}
                          </p>
                        </div>
                        <p className="font-display text-2xl font-bold tracking-[-0.03em] text-ivory">
                          {marker.value}
                        </p>
                        <p className="mt-2 font-body text-sm leading-7 text-ivory-muted">
                          {marker.detail}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={140}>
                <div className="system-panel mt-6 rounded-[0.5rem] p-6">
                  <p className="mb-3 font-mono text-xs tracking-widest text-copper">
                    VALIDATION EXTERNE
                  </p>
                  <p className="mb-4 font-body text-sm leading-7 text-ivory-muted">
                    Avant de demander un diagnostic, vous pouvez consulter les références publiques
                    de Samuel et la présence en ligne associée au studio.
                  </p>
                  <div className="flex flex-col gap-3">
                    <a
                      href={PUBLIC_PROFILE.portfolioUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ivory-muted transition-colors duration-200 hover:text-copper"
                    >
                      <Globe className="size-3.5" />
                      Site personnel
                      <ArrowUpRight className="size-3.5" />
                    </a>
                    <a
                      href={PUBLIC_PROFILE.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ivory-muted transition-colors duration-200 hover:text-copper"
                    >
                      LinkedIn
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <ScrollReveal delay={60}>
                {submitted ? (
                  <div className="system-shell rounded-[0.5rem] border border-system-success p-10 text-center md:p-12">
                    <div className="mb-6 flex justify-center">
                      <div className="flex size-16 items-center justify-center rounded-full bg-system-success/10">
                        <CheckCircle className="size-8 text-system-success" />
                      </div>
                    </div>
                    <div className="mb-4 font-mono text-xs tracking-widest text-system-success">
                      DEMANDE RECUE
                    </div>
                    <h2 className="mb-4 font-display text-2xl font-bold text-ivory">
                      Merci pour votre message.
                    </h2>
                    <p className="mx-auto max-w-md font-body text-sm leading-7 text-ivory-muted">
                      Nous prenons connaissance de votre situation et nous revenons sous 24 heures
                      ouvrées avec un premier retour structuré.
                    </p>
                  </div>
                ) : (
                  <>
                    {!isSupabaseConfigured && (
                      <div className="mb-6 rounded-[0.5rem] border border-bronze bg-bronze/5 p-4">
                        <p className="font-body text-sm text-ivory-muted">
                          Le formulaire n'est pas encore actif. Contactez-nous directement par
                          email.
                        </p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} noValidate>
                      <div className="system-shell rounded-[0.5rem] p-6 md:p-8">
                        <div className="mb-6 flex flex-col gap-4 border-b border-mineral-dark/80 pb-6 lg:flex-row lg:items-start lg:justify-between">
                          <div className="max-w-2xl">
                            <p className="mb-3 font-mono text-xs tracking-widest text-copper">
                              DÉMARRER LE DIAGNOSTIC
                            </p>
                            <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-ivory">
                              Décrivez le contexte. Nous revenons avec une première lecture utile.
                            </h2>
                          </div>
                          <div className="rounded-[0.5rem] border border-copper/20 bg-copper/6 px-4 py-3 lg:max-w-xs">
                            <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-copper">
                              Ce que vous obtenez
                            </p>
                            <p className="mt-2 font-body text-xs leading-6 text-ivory-muted">
                              Un tri clair entre correction rapide, chantier structurant ou sujet à
                              ne pas poursuivre.
                            </p>
                          </div>
                        </div>

                        {errorSummary.length > 0 && (
                          <div
                            className="mb-6 rounded-[0.5rem] border border-system-error/60 bg-system-error/8 p-4"
                            role="alert"
                            aria-live="assertive"
                          >
                            <p className="font-mono text-xs tracking-widest text-system-error">
                              CORRIGER AVANT ENVOI
                            </p>
                            <p className="mt-2 font-body text-sm leading-7 text-ivory-soft">
                              Merci de corriger les champs suivants avant d'envoyer votre demande.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {errorSummary.map((entry) => (
                                <button
                                  key={entry.field}
                                  type="button"
                                  onClick={() => focusField(entry.field)}
                                  className="rounded-[0.5rem] border border-system-error/40 px-3 py-2 text-left font-mono text-[0.72rem] uppercase tracking-[0.16em] text-system-error transition-colors duration-200 hover:border-system-error hover:bg-system-error/10"
                                >
                                  {entry.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {error && (
                          <div
                            className="mb-6 rounded-[0.5rem] border border-system-error bg-system-error/5 p-4 font-body text-sm text-system-error"
                            role="alert"
                          >
                            {error}
                          </div>
                        )}

                        <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
                          <div className="space-y-5">
                            <div>
                              <Label htmlFor="name" className={labelClassName}>
                                Nom / Prénom *
                              </Label>
                              <Input
                                ref={nameRef}
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={form.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={fieldClassName}
                                placeholder="Votre nom complet"
                                aria-describedby={errors.name ? "name-error" : undefined}
                                aria-invalid={!!errors.name}
                              />
                              {errors.name && (
                                <p
                                  id="name-error"
                                  className="mt-2 font-body text-xs text-system-error"
                                  role="alert"
                                >
                                  {errors.name}
                                </p>
                              )}
                            </div>

                            <div>
                              <Label htmlFor="email" className={labelClassName}>
                                Email *
                              </Label>
                              <Input
                                ref={emailRef}
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={form.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={fieldClassName}
                                placeholder="contact@exemple.com"
                                aria-describedby={errors.email ? "email-error" : undefined}
                                aria-invalid={!!errors.email}
                              />
                              {errors.email && (
                                <p
                                  id="email-error"
                                  className="mt-2 font-body text-xs text-system-error"
                                  role="alert"
                                >
                                  {errors.email}
                                </p>
                              )}
                            </div>

                            <div>
                              <Label htmlFor="company" className={labelClassName}>
                                Entreprise / Projet
                              </Label>
                              <Input
                                id="company"
                                name="company"
                                type="text"
                                value={form.company}
                                onChange={handleChange}
                                className={fieldClassName}
                                placeholder="Nom de votre société ou projet"
                              />
                              <p className={hintClassName}>
                                Facultatif, mais utile pour cadrer plus vite le niveau d'enjeu.
                              </p>
                            </div>
                          </div>

                          <div className="space-y-5">
                            {DIAGNOSTIC_QUESTIONS.map((question) => (
                              <div key={question.id}>
                                <Label
                                  htmlFor={`${question.id}-trigger`}
                                  className={labelClassName}
                                >
                                  {question.label}
                                </Label>
                                <Select
                                  value={form[question.id as "context" | "friction"]}
                                  onValueChange={(value) =>
                                    handleSelectChange(
                                      question.id as "context" | "friction",
                                      value
                                    )
                                  }
                                >
                                  <SelectTrigger
                                    id={`${question.id}-trigger`}
                                    className="h-12 w-full rounded-[0.5rem] border-mineral-dark bg-graphite-light px-4 text-left text-sm text-ivory shadow-none data-[placeholder]:text-ivory-muted/70 focus:border-copper focus:ring-[3px] focus:ring-copper/20"
                                  >
                                    <SelectValue placeholder="Sélectionner..." />
                                  </SelectTrigger>
                                  <SelectContent className="border-mineral-dark bg-graphite-light text-ivory">
                                    <SelectGroup>
                                      {question.options.map((option) => (
                                        <SelectItem
                                          key={option}
                                          value={option}
                                          className="text-sm text-ivory-muted focus:bg-mineral-dark focus:text-ivory"
                                        >
                                          {option}
                                        </SelectItem>
                                      ))}
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                              </div>
                            ))}

                            <div>
                              <Label htmlFor="message" className={labelClassName}>
                                Décrivez votre situation *
                              </Label>
                              <Textarea
                                ref={messageRef}
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={form.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={textareaClassName}
                                placeholder="Quel est votre principal défi en ce moment ? Qu'est-ce qui vous coûte du temps, du revenu ou de la clarté ?"
                                aria-describedby={cn(
                                  "message-hint",
                                  errors.message && "message-error"
                                )}
                                aria-invalid={!!errors.message}
                              />
                              <p id="message-hint" className={hintClassName}>
                                Quelques phrases suffisent. Le but est de comprendre la nature du
                                blocage, pas d'avoir un brief exhaustif.
                              </p>
                              {errors.message && (
                                <p
                                  id="message-error"
                                  className="mt-2 font-body text-xs text-system-error"
                                  role="alert"
                                >
                                  {errors.message}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>

                        <div
                          aria-hidden="true"
                          style={{
                            position: "absolute",
                            left: "-9999px",
                            top: "-9999px",
                            opacity: 0,
                            pointerEvents: "none",
                          }}
                        >
                          <Label htmlFor="website">Ne pas remplir ce champ</Label>
                          <Input
                            id="website"
                            name="website"
                            type="text"
                            value={form.website}
                            onChange={handleChange}
                            tabIndex={-1}
                            autoComplete="off"
                          />
                        </div>

                        <div className="mt-8 flex flex-col gap-4 border-t border-mineral-dark/80 pt-6 md:flex-row md:items-center md:justify-between">
                          <p className="font-body text-sm leading-7 text-ivory-muted">
                            Gratuit, sans engagement et sans relance commerciale agressive.
                          </p>
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            size="lg"
                            className="system-button-text h-12 rounded-[0.5rem] bg-copper px-6 text-graphite-deep shadow-none hover:bg-copper-light"
                          >
                            {isSubmitting ? (
                              <>
                                <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                                Envoi en cours...
                              </>
                            ) : (
                              <>
                                Envoyer ma demande
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M2 7h10M7 2l5 5-5 5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-graphite-mid py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <ScrollReveal>
                <p className="mb-4 font-mono text-xs tracking-widest text-copper">
                  COMMENT ÇA SE PASSE
                </p>
                <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-ivory">
                  Un parcours court, puis une décision plus claire.
                </h2>
                <p className="mt-4 font-body text-sm leading-7 text-ivory-muted">
                  L'objectif n'est pas de vendre à tout prix. L'objectif est de qualifier le sujet
                  assez tôt pour savoir s'il faut corriger, cadrer plus profondément ou ne pas
                  intervenir.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:col-span-8">
              {PROCESS_STEPS.map((step, index) => (
                <ScrollReveal key={step.number} delay={index * 70}>
                  <div className="system-panel rounded-[0.5rem] p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="font-mono text-xs tracking-widest text-copper">
                        {step.number}
                      </span>
                      <p className="font-display text-base font-semibold text-ivory">
                        {step.title}
                      </p>
                    </div>
                    <p className="font-body text-sm leading-7 text-ivory-muted">
                      {step.detail}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
