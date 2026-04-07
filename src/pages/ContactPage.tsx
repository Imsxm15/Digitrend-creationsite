import { PageMeta } from "@/components/common/PageMeta"
import { useState } from "react"
import { ArrowUpRight, Globe, CheckCircle } from "lucide-react"
import { ScrollReveal } from "@/components/common/ScrollReveal"
import { SectionLabel } from "@/components/common/SectionLabel"
import { isSupabaseConfigured, supabase } from "@/lib/supabase"
import { trackEvent } from "@/lib/analytics"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { PUBLIC_PROFILE } from "@/data/profile"

const DIAGNOSTIC_QUESTIONS = [
  {
    id: "context",
    label: "Votre contexte",
    type: "select",
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
    type: "select",
    options: [
      "Processus manuels trop chronophages",
      "Conversion faible malgré le trafic",
      "Outils non connectés / pas de vision globale",
      "Besoin d'un outil IA interne",
      "Manque de structure opérationnelle",
      "Je ne sais pas encore exactement",
    ],
  },
]

type FormErrors = Partial<Record<"name" | "email" | "message", string>>

function validateForm(form: { name: string; email: string; message: string }): FormErrors {
  const errors: FormErrors = {}
  if (!form.name.trim()) errors.name = "Merci d'indiquer votre nom."
  if (!form.email.trim()) {
    errors.email = "Merci d'indiquer votre email."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "L'adresse email semble invalide."
  }
  if (!form.message.trim()) errors.message = "Merci de décrire votre situation."
  return errors
}

export function ContactPage() {
  const [form, setForm] = useState({
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Clear field error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name as keyof FormErrors]
        return next
      })
    }
  }

  const handleSelectChange = (key: "context" | "friction", value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validationErrors = validateForm(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    // Honeypot anti-spam: if the hidden field is filled, silently fake success
    if (form.website) {
      setSubmitted(true)
      return
    }

    if (!supabase) {
      setError(
        "Le formulaire n'est pas encore actif. Contactez-nous directement par email."
      )
      return
    }

    setIsSubmitting(true)
    setError(null)
    setErrors({})

    const { error: supabaseError } = await supabase
      .from("diagnostic_requests")
      .insert({
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
    } else {
      trackEvent("diagnostic_submit")
      setSubmitted(true)
    }
  }

  const inputClasses =
    "w-full bg-graphite-light border border-mineral-dark text-ivory font-body text-sm px-4 py-3 transition-colors duration-200 focus:border-copper focus:ring-1 focus:ring-copper focus:outline-none"

  const labelClasses = "block mb-2 font-mono text-xs tracking-widest uppercase text-ivory-muted"

  return (
    <>
      <PageMeta
        title="Diagnostic"
        description="Demandez un diagnostic gratuit de vos opérations digitales. Réponse sous 24h, sans engagement."
      />
      <section className="pt-40 pb-20 bg-graphite-deep">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="system-shell rounded-[0.5rem] px-6 py-8 md:px-8 md:py-9">
              <SectionLabel label="Diagnostic" />
              <h1
                className="font-display font-extrabold mb-6 text-ivory"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                }}
              >
                Voir où ça bloque.
                <br />
                <span className="text-copper">Avant d'agir.</span>
              </h1>
              <p className="font-body text-lg max-w-3xl text-ivory-muted leading-relaxed">
                Un premier échange de 30 minutes pour comprendre votre situation, identifier les
                frictions principales et déterminer si, et comment, nous pouvons intervenir.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-graphite-mid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <ScrollReveal>
                <div className="md:sticky md:top-32">
                  <p className="font-mono text-xs tracking-widest mb-6 text-copper">
                    COMMENT ÇA FONCTIONNE
                  </p>
                  <div className="flex flex-col gap-8">
                    {[
                      {
                        number: "01",
                        title: "Vous remplissez le formulaire",
                        detail: "5 minutes. Quelques informations sur votre contexte et ce qui vous préoccupe.",
                      },
                      {
                        number: "02",
                        title: "Nous vous répondons sous 24h",
                        detail: "Un premier regard sur votre situation et, si c'est pertinent, une proposition de créneau.",
                      },
                      {
                        number: "03",
                        title: "On échange 30 minutes",
                        detail: "Un appel structuré pour creuser les frictions, les priorités et ce qui fait sens.",
                      },
                      {
                        number: "04",
                        title: "Vous recevez un récapitulatif",
                        detail: "Un document court avec les 3 priorités identifiées et une proposition d'intervention si pertinente.",
                      },
                    ].map((step) => (
                      <div key={step.number} className="flex gap-4">
                        <span className="font-mono text-xs tracking-widest flex-shrink-0 text-copper">
                          {step.number}
                        </span>
                        <div>
                          <p className="font-display font-semibold text-sm mb-1 text-ivory">
                            {step.title}
                          </p>
                          <p className="font-body text-xs leading-6 text-ivory-muted">
                            {step.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="system-panel mt-10 rounded-[0.5rem] p-6">
                    <p className="font-mono text-xs tracking-widest mb-3 text-copper">
                      CONDITIONS
                    </p>
                    <ul className="flex flex-col gap-2">
                      {[
                        "Gratuit et sans engagement",
                        "Réponse sous 24 heures ouvrées",
                        "Confidentialité garantie",
                        "Pas de démarche commerciale agressive",
                      ].map((cond) => (
                        <li
                          key={cond}
                          className="flex items-start gap-2 font-body text-xs text-ivory-muted"
                        >
                          <span className="text-system-success">&#10003;</span>
                          {cond}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="system-panel mt-6 rounded-[0.5rem] p-6">
                    <p className="font-mono text-xs tracking-widest mb-3 text-copper">
                      VALIDATION EXTERNE
                    </p>
                    <p className="font-body text-xs leading-6 mb-4 text-ivory-muted">
                      Avant de demander un diagnostic, vous pouvez aussi consulter le site personnel et le
                      profil expert publics de Samuel.
                    </p>
                    <div className="flex flex-col gap-3">
                      <a
                        href={PUBLIC_PROFILE.portfolioUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider transition-colors duration-200 text-ivory-muted hover:text-copper"
                      >
                        <Globe className="size-3.5" />
                        Site personnel
                        <ArrowUpRight className="size-3.5" />
                      </a>
                      <a
                        href={PUBLIC_PROFILE.linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider transition-colors duration-200 text-ivory-muted hover:text-copper"
                      >
                        LinkedIn
                        <ArrowUpRight className="size-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <ScrollReveal delay={80}>
                {submitted ? (
                  <div className="system-shell rounded-[0.5rem] p-12 text-center border border-system-success">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-system-success/10 flex items-center justify-center">
                        <CheckCircle className="size-8 text-system-success" />
                      </div>
                    </div>
                    <div className="font-mono text-xs tracking-widest mb-4 text-system-success">
                      DEMANDE RECUE
                    </div>
                    <h2 className="font-display font-bold text-2xl mb-4 text-ivory">
                      Merci pour votre message.
                    </h2>
                    <p className="font-body text-sm leading-7 text-ivory-muted max-w-md mx-auto">
                      Nous prenons connaissance de votre situation et nous vous répondons dans les 24 heures ouvrées avec un premier regard structuré.
                    </p>
                  </div>
                ) : (
                  <>
                    {!isSupabaseConfigured && (
                      <div className="p-4 border border-bronze bg-bronze/5 rounded-[0.5rem] mb-6">
                        <p className="font-body text-sm text-ivory-muted">
                          Le formulaire n'est pas encore actif. Contactez-nous directement par email.
                        </p>
                      </div>
                    )}
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="system-shell rounded-[0.5rem] p-8 mb-6">
                        <p className="font-mono text-xs tracking-widest mb-6 text-copper">
                          VOS COORDONNEES
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="name" className={labelClasses}>
                              Nom / Prénom *
                            </label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={form.name}
                              onChange={handleChange}
                              className={inputClasses}
                              placeholder="Votre nom complet"
                              aria-describedby={errors.name ? "name-error" : undefined}
                              aria-invalid={!!errors.name}
                            />
                            {errors.name && (
                              <p id="name-error" className="mt-1.5 font-body text-xs text-system-error" role="alert">
                                {errors.name}
                              </p>
                            )}
                          </div>
                          <div>
                            <label htmlFor="email" className={labelClasses}>
                              Email *
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={form.email}
                              onChange={handleChange}
                              className={inputClasses}
                              placeholder="contact@exemple.com"
                              aria-describedby={errors.email ? "email-error" : undefined}
                              aria-invalid={!!errors.email}
                            />
                            {errors.email && (
                              <p id="email-error" className="mt-1.5 font-body text-xs text-system-error" role="alert">
                                {errors.email}
                              </p>
                            )}
                          </div>
                          <div className="md:col-span-2">
                            <label htmlFor="company" className={labelClasses}>
                              Entreprise / Projet
                            </label>
                            <input
                              id="company"
                              name="company"
                              type="text"
                              value={form.company}
                              onChange={handleChange}
                              className={inputClasses}
                              placeholder="Nom de votre société ou projet"
                            />
                          </div>
                        </div>
                        {/* Honeypot anti-spam field */}
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
                          <label htmlFor="website">Ne pas remplir ce champ</label>
                          <input
                            id="website"
                            name="website"
                            type="text"
                            value={form.website}
                            onChange={handleChange}
                            tabIndex={-1}
                            autoComplete="off"
                          />
                        </div>
                      </div>

                      <div className="system-shell rounded-[0.5rem] p-8 mb-6">
                        <p className="font-mono text-xs tracking-widest mb-6 text-copper">
                          VOTRE SITUATION
                        </p>
                        <div className="flex flex-col gap-5">
                          {DIAGNOSTIC_QUESTIONS.map((q) => (
                            <div key={q.id}>
                              <label htmlFor={`${q.id}-trigger`} className={labelClasses}>
                                {q.label}
                              </label>
                              <Select
                                value={form[q.id as "context" | "friction"]}
                                onValueChange={(value) =>
                                  handleSelectChange(q.id as "context" | "friction", value)
                                }
                              >
                                <SelectTrigger
                                  id={`${q.id}-trigger`}
                                  className="w-full rounded-none border-mineral-dark bg-graphite-light px-4 py-6 text-left text-sm text-ivory data-[placeholder]:text-ivory-muted focus:border-copper focus:ring-1 focus:ring-copper"
                                >
                                  <SelectValue placeholder="Sélectionner..." />
                                </SelectTrigger>
                                <SelectContent className="border-mineral-dark bg-graphite-light text-ivory">
                                  <SelectGroup>
                                    {q.options.map((opt) => (
                                      <SelectItem
                                        key={opt}
                                        value={opt}
                                        className="text-sm text-ivory-muted focus:bg-mineral-dark focus:text-ivory"
                                      >
                                        {opt}
                                      </SelectItem>
                                    ))}
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </div>
                          ))}
                          <div>
                            <label htmlFor="message" className={labelClasses}>
                              Décrivez votre situation *
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              required
                              rows={5}
                              value={form.message}
                              onChange={handleChange}
                              className={`${inputClasses} resize-y leading-relaxed`}
                              placeholder="Quel est votre principal défi en ce moment ? Qu'est-ce qui ne fonctionne pas comme vous le souhaiteriez ?"
                              aria-describedby={errors.message ? "message-error" : "message-hint"}
                              aria-invalid={!!errors.message}
                            />
                            <p id="message-hint" className="mt-1.5 font-body text-xs text-ivory-muted/60">
                              Décrivez librement votre situation en quelques phrases.
                            </p>
                            {errors.message && (
                              <p id="message-error" className="mt-1 font-body text-xs text-system-error" role="alert">
                                {errors.message}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      {error && (
                        <div
                          className="font-body text-sm mb-4 p-4 border rounded-[0.5rem] border-system-error bg-system-error/5 text-system-error"
                          role="alert"
                        >
                          {error}
                        </div>
                      )}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="system-button-text flex w-full items-center justify-center gap-3 rounded-[0.5rem] py-5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed btn-copper-glow bg-copper text-graphite-deep"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            Envoyer ma demande
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </>
                        )}
                      </button>
                      <p className="text-center font-mono text-xs mt-4 text-ivory-muted">
                        Gratuit · Sans engagement · Réponse sous 24h ouvrées
                      </p>
                    </form>
                  </>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
