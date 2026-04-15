import { type ChangeEvent, type FocusEvent, type FormEvent, useMemo, useRef, useState } from "react"
import { ArrowUpRight, CheckCircle, Clock3, FileText, Globe, Mail, MessagesSquare, Phone, Search, ShieldCheck } from "lucide-react"
import { PageMeta } from "@/components/common/PageMeta"
import { PageHeroTitle } from "@/components/common/PageHeroTitle"
import { ScrollReveal } from "@/components/common/ScrollReveal"
import { SectionLabel } from "@/components/common/SectionLabel"
import { StepCards, type StepCardItem } from "@/components/common/StepCards"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { pageCtas, pageHeroes } from "@/data/pageCopy"
import { organizationSchema, pageMetaContent } from "@/data/pageMeta"
import { PUBLIC_PROFILE } from "@/data/profile"
import {
  REQUIRED_DIAGNOSTIC_FIELDS,
  type DiagnosticFieldErrors,
  type DiagnosticFormState,
  type RequiredDiagnosticField,
  validateDiagnosticField,
  validateDiagnosticForm,
} from "@/lib/diagnosticForm"
import { trackEvent } from "@/lib/analytics"
import { DIAGNOSTIC_SUBMISSION_ENDPOINT } from "@/lib/siteConfig"
import { cn } from "@/lib/utils"

const questions = [
  {
    id: "context",
    label: "Votre contexte",
    options: ["Startup / Scale-up", "PME établie", "Grande entreprise", "Indépendant / Solopreneur", "Autre"],
  },
  {
    id: "friction",
    label: "Principale friction identifiée",
    options: [
      "Processus manuels trop chronophages",
      "Conversion faible malgré le trafic",
      "Outils non connectés",
      "Besoin d'un outil IA interne",
      "Manque de structure opérationnelle",
      "Je ne sais pas encore exactement",
    ],
  },
] as const

const guarantees = [
  {
    icon: ShieldCheck,
    eyebrow: "Cadre",
    value: "Gratuit",
    detail: "Le premier échange sert à lire la situation, pas à vous pousser dans un tunnel commercial.",
  },
  {
    icon: Clock3,
    eyebrow: "Réponse",
    value: "24h",
    detail: "Premier retour structuré sous 24 heures ouvrées.",
  },
  {
    icon: FileText,
    eyebrow: "Sortie",
    value: "30 min utiles",
    detail: "Vous repartez avec une priorité, un angle mort et une prochaine décision plus lisible.",
  },
] as const

const steps: StepCardItem[] = [
  {
    id: "brief",
    eyebrow: "01",
    title: "Vous posez le contexte",
    description:
      "Quelques lignes suffisent pour décrire le blocage, l’urgence et ce qui coûte déjà du temps ou du revenu.",
    bullets: ["Pas de brief lourd", "Contexte business avant la solution", "Niveau d’enjeu lu vite"],
    meta: "Message ou formulaire",
    icon: MessagesSquare,
  },
  {
    id: "tri",
    eyebrow: "02",
    title: "Je fais un premier tri",
    description: "Je clarifie la profondeur utile avant de vous proposer une suite.",
    bullets: ["Correction rapide ou chantier plus large", "Sujets à laisser hors périmètre", "Niveau d’urgence clarifié"],
    meta: "Sous 24h",
    icon: Search,
  },
  {
    id: "call",
    eyebrow: "03",
    title: "Appel de 30 minutes",
    description:
      "L’échange sert à qualifier le vrai problème, pas à répéter une page commerciale.",
    bullets: ["Frictions et flux concernés", "Priorités courtes vs structuration", "Suite recommandée"],
    meta: "Visio ou téléphone",
    icon: Phone,
  },
  {
    id: "follow-up",
    eyebrow: "04",
    title: "Vous repartez avec une suite claire",
    description:
      "La valeur du diagnostic est de rendre la prochaine décision plus simple, même si aucun chantier ne suit.",
    bullets: ["Quick wins si c’est suffisant", "Architecture si le sujet est plus large", "Synthèse réutilisable par votre équipe"],
    meta: "Retour structuré",
    icon: FileText,
  },
] as const

const INITIAL_FORM_STATE: DiagnosticFormState = {
  name: "",
  email: "",
  company: "",
  context: "",
  friction: "",
  message: "",
  website: "",
}

type SubmitDiagnosticResponse = {
  ok?: boolean
  error?: string
}

export function ContactPage() {
  const hero = pageHeroes.diagnostic
  const meta = pageMetaContent.diagnostic
  const cta = pageCtas.diagnostic
  const [form, setForm] = useState<DiagnosticFormState>(INITIAL_FORM_STATE)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [errors, setErrors] = useState<DiagnosticFieldErrors>({})
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const errorSummary = useMemo(
    () =>
      REQUIRED_DIAGNOSTIC_FIELDS.filter((field) => errors[field]).map((field) => ({
        field,
        label:
          field === "name"
            ? "Nom / prénom"
            : field === "email"
              ? "Email"
              : "Description de la situation",
      })),
    [errors]
  )

  const fieldClassName =
    "h-12 rounded-[0.5rem] border-mineral-dark bg-graphite-light px-4 text-sm text-ivory placeholder:text-ivory-muted/70 shadow-none focus-visible:border-copper focus-visible:ring-[3px] focus-visible:ring-copper/20"
  const textareaClassName =
    "min-h-[148px] rounded-[0.5rem] border-mineral-dark bg-graphite-light px-4 py-3 text-sm leading-7 text-ivory placeholder:text-ivory-muted/70 shadow-none focus-visible:border-copper focus-visible:ring-[3px] focus-visible:ring-copper/20"
  const labelClassName = "mb-2 block font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ivory-muted"
  const hintClassName = "mt-2 font-body text-xs leading-6 text-ivory-muted/70"

  const focusField = (field: RequiredDiagnosticField) => {
    const target =
      field === "name" ? nameRef.current : field === "email" ? emailRef.current : messageRef.current

    if (!target) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    target.focus({ preventScroll: true })
    target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "center" })
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setForm((previous) => ({ ...previous, [name]: value }))

    if (REQUIRED_DIAGNOSTIC_FIELDS.includes(name as RequiredDiagnosticField) && errors[name as RequiredDiagnosticField]) {
      const field = name as RequiredDiagnosticField
      setErrors((previous) => ({ ...previous, [field]: validateDiagnosticField(field, value) }))
    }
  }

  const handleBlur = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target

    if (!REQUIRED_DIAGNOSTIC_FIELDS.includes(name as RequiredDiagnosticField)) return

    const field = name as RequiredDiagnosticField
    setErrors((previous) => ({ ...previous, [field]: validateDiagnosticField(field, value) }))
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const validationErrors = validateDiagnosticForm(form)
    if (Object.keys(validationErrors).length > 0) {
      setError(null)
      setErrors(validationErrors)
      const firstInvalidField = REQUIRED_DIAGNOSTIC_FIELDS.find((field) => validationErrors[field])
      if (firstInvalidField) {
        window.requestAnimationFrame(() => focusField(firstInvalidField))
      }
      return
    }

    if (form.website) {
      setSubmitted(true)
      return
    }

    setIsSubmitting(true)
    setError(null)
    setErrors({})

    try {
      const response = await fetch(DIAGNOSTIC_SUBMISSION_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          context: form.context,
          friction: form.friction,
          message: form.message,
          website: form.website,
        }),
      })

      const result = (await response.json().catch(() => ({}))) as SubmitDiagnosticResponse

      if (!response.ok || !result.ok) {
        setError(
          result.error ||
            "Le formulaire est momentanément indisponible. Merci de m’écrire directement à samuel@digitrend.fr."
        )
        return
      }

      trackEvent("diagnostic_submit")
      setSubmitted(true)
      setForm(INITIAL_FORM_STATE)
    } catch {
      setError("Le formulaire est momentanément indisponible. Merci de m’écrire directement à samuel@digitrend.fr.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <PageMeta
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        schema={[organizationSchema, ...meta.schema]}
      />

      <section className="bg-graphite-deep pb-18 pt-36 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="system-shell rounded-[0.5rem] px-6 py-7 md:px-8 md:py-8">
                  <SectionLabel label={hero.eyebrow} />
                  <PageHeroTitle>
                    {hero.title}
                  </PageHeroTitle>
                  <p className="mt-5 max-w-3xl font-body text-base leading-8 text-ivory-muted md:text-lg">
                    {hero.description}
                  </p>
                  <ul className="mt-6 max-w-3xl space-y-3">
                    {hero.bullets?.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-copper" aria-hidden="true" />
                        <span className="font-body text-sm leading-7 text-ivory-soft">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <a
                      href={hero.primaryHref}
                      className="system-button-text inline-flex items-center justify-center rounded-[0.5rem] bg-copper px-7 py-4 text-graphite-deep transition-all duration-300 hover:bg-copper-light"
                    >
                      {hero.primaryLabel}
                    </a>
                    <a
                      href={hero.secondaryHref}
                      className="system-button-text inline-flex items-center justify-center rounded-[0.5rem] border border-mineral-warm px-7 py-4 text-ivory-muted transition-all duration-300 hover:border-copper hover:text-copper"
                    >
                      {hero.secondaryLabel}
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal delay={90}>
                <div className="system-shell system-shell-warm rounded-[0.5rem] p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-copper">Garantie de cadrage</p>
                  <div className="mt-5 space-y-4">
                    {guarantees.map((item) => {
                      const Icon = item.icon

                      return (
                        <div key={item.eyebrow} className="rounded-[0.5rem] border border-mineral-dark bg-graphite-light px-4 py-4">
                          <div className="flex items-center gap-3">
                            <span className="grid size-10 place-items-center rounded-[0.5rem] border border-copper/20 bg-copper/10 text-copper">
                              <Icon className="size-4" aria-hidden="true" />
                            </span>
                            <div>
                              <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-steel-light">
                                {item.eyebrow}
                              </p>
                              <p className="mt-1 font-display text-xl font-bold tracking-[-0.02em] text-ivory">
                                {item.value}
                              </p>
                            </div>
                          </div>
                          <p className="mt-3 font-body text-sm leading-7 text-ivory-muted">{item.detail}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-graphite-mid py-18 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <ScrollReveal>
                <div className="rounded-[0.5rem] border border-mineral-dark bg-graphite-light px-6 py-6">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-copper">En savoir plus</p>
                  <p className="mt-4 font-body text-sm leading-7 text-ivory-muted">
                    Si vous préférez vérifier le contexte avant l’échange, voici les points d’entrée publics les plus utiles.
                  </p>
                  <div className="mt-5 flex flex-col gap-3">
                    <a
                      href={PUBLIC_PROFILE.portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-copper"
                    >
                      <Globe className="size-4" />
                      Site personnel
                      <ArrowUpRight className="size-4" />
                    </a>
                    <a
                      href={PUBLIC_PROFILE.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-copper"
                    >
                      <ArrowUpRight className="size-4" />
                      LinkedIn
                    </a>
                    <a
                      href="mailto:samuel@digitrend.fr"
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-copper"
                    >
                      <Mail className="size-4" />
                      samuel@digitrend.fr
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-8" id="diagnostic-form">
              <ScrollReveal delay={70}>
                {submitted ? (
                  <div className="rounded-[0.5rem] border border-system-success bg-graphite-light p-10 text-center md:p-12">
                    <div className="mb-6 flex justify-center">
                      <div className="flex size-16 items-center justify-center rounded-full bg-system-success/10">
                        <CheckCircle className="size-8 text-system-success" />
                      </div>
                    </div>
                    <div className="mb-4 font-mono text-xs tracking-widest text-system-success">DEMANDE REÇUE</div>
                    <h2 className="mb-4 font-display text-2xl font-bold text-ivory">Merci pour votre message.</h2>
                    <p className="mx-auto max-w-md font-body text-sm leading-7 text-ivory-muted">
                      Je reviens sous 24 heures ouvrées avec un premier retour structuré.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="rounded-[0.5rem] border border-mineral-dark bg-graphite-light p-6 md:p-8">
                      <div className="mb-6 flex flex-col gap-4 border-b border-mineral-dark/80 pb-6 lg:flex-row lg:items-start lg:justify-between">
                        <div className="max-w-2xl">
                          <p className="mb-3 font-mono text-xs tracking-widest text-copper">DÉMARRER LE DIAGNOSTIC</p>
                          <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-ivory">
                            Décrivez le contexte. Je reviens avec une première lecture utile.
                          </h2>
                        </div>
                        <div className="rounded-[0.5rem] border border-copper/20 bg-copper/6 px-4 py-3 lg:max-w-xs">
                          <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-copper">Ce que vous obtenez</p>
                          <p className="mt-2 font-body text-xs leading-6 text-ivory-muted">
                            Un tri clair entre correction ciblée, chantier structurant ou sujet à ne pas poursuivre.
                          </p>
                        </div>
                      </div>

                      {errorSummary.length > 0 && (
                        <div className="mb-6 rounded-[0.5rem] border border-system-error/60 bg-system-error/8 p-4" role="alert" aria-live="assertive">
                          <p className="font-mono text-xs tracking-widest text-system-error">CORRIGER AVANT ENVOI</p>
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
                        <div className="mb-6 rounded-[0.5rem] border border-system-error bg-system-error/5 p-4 font-body text-sm text-system-error" role="alert">
                          {error}
                        </div>
                      )}

                      <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
                        <div className="space-y-5">
                          <div>
                            <Label htmlFor="name" className={labelClassName}>Nom / prénom *</Label>
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
                              <p id="name-error" className="mt-2 font-body text-xs text-system-error" role="alert">
                                {errors.name}
                              </p>
                            )}
                          </div>

                          <div>
                            <Label htmlFor="email" className={labelClassName}>Email *</Label>
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
                              <p id="email-error" className="mt-2 font-body text-xs text-system-error" role="alert">
                                {errors.email}
                              </p>
                            )}
                          </div>

                          <div>
                            <Label htmlFor="company" className={labelClassName}>Entreprise / projet</Label>
                            <Input
                              id="company"
                              name="company"
                              type="text"
                              value={form.company}
                              onChange={handleChange}
                              className={fieldClassName}
                              placeholder="Nom de votre société ou projet"
                            />
                            <p className={hintClassName}>Facultatif, mais utile pour cadrer plus vite le niveau d’enjeu.</p>
                          </div>
                        </div>

                        <div className="space-y-5">
                          {questions.map((question) => (
                            <div key={question.id}>
                              <Label htmlFor={`${question.id}-trigger`} className={labelClassName}>
                                {question.label}
                              </Label>
                              <Select
                                value={form[question.id as "context" | "friction"]}
                                onValueChange={(value) => setForm((previous) => ({ ...previous, [question.id]: value }))}
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
                            <Label htmlFor="message" className={labelClassName}>Décrivez votre situation *</Label>
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
                              aria-describedby={cn("message-hint", errors.message && "message-error")}
                              aria-invalid={!!errors.message}
                            />
                            <p id="message-hint" className="mt-2 font-body text-xs leading-6 text-ivory-muted/70">
                              Quelques phrases suffisent. Le but est de comprendre la nature du blocage, pas d’avoir un brief exhaustif.
                            </p>
                            {errors.message && (
                              <p id="message-error" className="mt-2 font-body text-xs text-system-error" role="alert">
                                {errors.message}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div
                        aria-hidden="true"
                        style={{ position: "absolute", left: "-9999px", top: "-9999px", opacity: 0, pointerEvents: "none" }}
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
                          {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                        </Button>
                      </div>
                    </div>
                  </form>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-graphite-deep py-18 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <ScrollReveal>
                <div className="max-w-xl">
                  <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-copper">
                    Comment se passe le diagnostic
                  </p>
                  <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-ivory">
                    Quatre étapes courtes, orientées bénéfices.
                  </h2>
                  <p className="mt-4 font-body text-sm leading-7 text-ivory-muted">
                    L’objectif est de qualifier vite, clarifier le bon niveau d’intervention et vous laisser une prochaine décision utile, sans allonger inutilement le parcours.
                  </p>
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-8">
              <StepCards
                items={steps}
                desktopColumnsClassName="md:grid-cols-2 xl:grid-cols-2"
                cardWidthClassName="auto-cols-[88%] sm:auto-cols-[62%]"
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title={cta.title}
        subtitle={cta.subtitle}
        primaryLabel={cta.primaryLabel}
        primaryHref={cta.primaryHref}
        primarySubtext={cta.primarySubtext}
        secondaryLabel={cta.secondaryLabel}
        secondaryHref={cta.secondaryHref}
      />
    </>
  )
}

export default ContactPage
