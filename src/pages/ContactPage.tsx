import { useState } from "react"
import { ArrowUpRight, Globe } from "lucide-react"
import { ScrollReveal } from "@/components/common/ScrollReveal"
import { SectionLabel } from "@/components/common/SectionLabel"
import { isSupabaseConfigured, supabase } from "@/lib/supabase"
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

export function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    context: "",
    friction: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSelectChange = (key: "context" | "friction", value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!supabase) {
      setError(
        "Le formulaire n'est pas encore connecté. Renseigne les variables Supabase pour activer l'envoi."
      )
      return
    }
    setLoading(true)
    setError(null)

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

    setLoading(false)

    if (supabaseError) {
      setError("Une erreur est survenue. Merci de réessayer ou de me contacter directement.")
    } else {
      setSubmitted(true)
    }
  }

  const inputStyle = {
    backgroundColor: "var(--graphite-light)",
    border: "1px solid var(--mineral-dark)",
    color: "var(--ivory)",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    padding: "12px 16px",
    width: "100%",
    transition: "border-color 0.2s ease",
  }

  const labelStyle = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "11px",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "var(--ivory-muted)",
    display: "block",
    marginBottom: "8px",
  }

  return (
    <>
      <section
        className="pt-40 pb-20"
        style={{ backgroundColor: "var(--graphite-deep)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="system-shell rounded-[0.5rem] px-6 py-8 md:px-8 md:py-9">
              <SectionLabel label="Diagnostic" />
              <h1
                className="font-display font-extrabold mb-6"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                  color: "var(--ivory)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                }}
              >
                Voir où ça bloque.
                <br />
                <span style={{ color: "var(--copper)" }}>Avant d'agir.</span>
              </h1>
              <p
                className="font-body text-lg max-w-3xl"
                style={{ color: "var(--ivory-muted)", lineHeight: 1.8 }}
              >
                Un premier échange de 30 minutes pour comprendre votre situation, identifier les
                frictions principales et déterminer si, et comment, on peut intervenir.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section
        className="py-20"
        style={{ backgroundColor: "var(--graphite-mid)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <ScrollReveal>
                <div className="md:sticky md:top-32">
                  <p
                    className="font-mono text-xs tracking-widest mb-6"
                    style={{ color: "var(--copper)" }}
                  >
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
                        title: "Je vous réponds sous 24h",
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
                        <span
                          className="font-mono text-xs tracking-widest flex-shrink-0"
                          style={{ color: "var(--copper)" }}
                        >
                          {step.number}
                        </span>
                        <div>
                          <p
                            className="font-display font-semibold text-sm mb-1"
                            style={{ color: "var(--ivory)" }}
                          >
                            {step.title}
                          </p>
                          <p
                            className="font-body text-xs leading-6"
                            style={{ color: "var(--ivory-muted)" }}
                          >
                            {step.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="system-panel mt-10 rounded-[0.5rem] p-6">
                    <p
                      className="font-mono text-xs tracking-widest mb-3"
                      style={{ color: "var(--copper)" }}
                    >
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
                          className="flex items-start gap-2 font-body text-xs"
                          style={{ color: "var(--ivory-muted)" }}
                        >
                          <span style={{ color: "var(--system-success)" }}>✓</span>
                          {cond}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="system-panel mt-6 rounded-[0.5rem] p-6">
                    <p
                      className="font-mono text-xs tracking-widest mb-3"
                      style={{ color: "var(--copper)" }}
                    >
                      VALIDATION EXTERNE
                    </p>
                    <p
                      className="font-body text-xs leading-6 mb-4"
                      style={{ color: "var(--ivory-muted)" }}
                    >
                      Avant de demander un diagnostic, vous pouvez aussi consulter le site personnel et le
                      profil expert publics de Samuel.
                    </p>
                    <div className="flex flex-col gap-3">
                      <a
                        href={PUBLIC_PROFILE.portfolioUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider transition-colors duration-200 hover:text-[var(--copper)]"
                        style={{ color: "var(--ivory-muted)" }}
                      >
                        <Globe className="size-3.5" />
                        Site personnel
                        <ArrowUpRight className="size-3.5" />
                      </a>
                      <a
                        href={PUBLIC_PROFILE.linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider transition-colors duration-200 hover:text-[var(--copper)]"
                        style={{ color: "var(--ivory-muted)" }}
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
                  <div
                    className="system-shell rounded-[0.5rem] p-12 text-center"
                    style={{ borderColor: "var(--system-success)" }}
                  >
                    <div
                      className="font-mono text-xs tracking-widest mb-4"
                      style={{ color: "var(--system-success)" }}
                    >
                      DEMANDE REÇUE
                    </div>
                    <h2
                      className="font-display font-bold text-2xl mb-4"
                      style={{ color: "var(--ivory)" }}
                    >
                      Merci pour votre message.
                    </h2>
                    <p
                      className="font-body text-sm leading-7"
                      style={{ color: "var(--ivory-muted)" }}
                    >
                      Je prends connaissance de votre situation et vous réponds dans les 24 heures ouvrées avec un premier regard structuré.
                    </p>
                  </div>
                ) : (
                  <>
                    {!isSupabaseConfigured && (
                      <div
                        className="p-4 border mb-6"
                        style={{
                          borderColor: "var(--bronze)",
                          backgroundColor: "rgba(196,133,60,0.06)",
                        }}
                      >
                        <p
                          className="font-body text-sm"
                          style={{ color: "var(--ivory-muted)" }}
                        >
                          Le formulaire est affiché, mais l'envoi dépend encore de la configuration Supabase.
                        </p>
                      </div>
                    )}
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="system-shell rounded-[0.5rem] p-8 mb-6">
                      <p
                        className="font-mono text-xs tracking-widest mb-6"
                        style={{ color: "var(--copper)" }}
                      >
                        VOS COORDONNÉES
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" style={labelStyle}>
                            Nom / Prénom *
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={handleChange}
                            style={inputStyle}
                            placeholder="Votre nom complet"
                            onFocus={(e) => (e.target.style.borderColor = "var(--copper)")}
                            onBlur={(e) => (e.target.style.borderColor = "var(--mineral-dark)")}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" style={labelStyle}>
                            Email *
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            style={inputStyle}
                            placeholder="contact@exemple.com"
                            onFocus={(e) => (e.target.style.borderColor = "var(--copper)")}
                            onBlur={(e) => (e.target.style.borderColor = "var(--mineral-dark)")}
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label htmlFor="company" style={labelStyle}>
                            Entreprise / Projet
                          </label>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            value={form.company}
                            onChange={handleChange}
                            style={inputStyle}
                            placeholder="Nom de votre société ou projet"
                            onFocus={(e) => (e.target.style.borderColor = "var(--copper)")}
                            onBlur={(e) => (e.target.style.borderColor = "var(--mineral-dark)")}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="system-shell rounded-[0.5rem] p-8 mb-6">
                      <p
                        className="font-mono text-xs tracking-widest mb-6"
                        style={{ color: "var(--copper)" }}
                      >
                        VOTRE SITUATION
                      </p>
                      <div className="flex flex-col gap-5">
                        {DIAGNOSTIC_QUESTIONS.map((q) => (
                          <div key={q.id}>
                            <label htmlFor={`${q.id}-trigger`} style={labelStyle}>
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
                                className="w-full rounded-none border-[var(--mineral-dark)] bg-[var(--graphite-light)] px-4 py-6 text-left text-[14px] text-[var(--ivory)] data-[placeholder]:text-[var(--ivory-muted)]"
                              >
                                <SelectValue placeholder="Sélectionner…" />
                              </SelectTrigger>
                              <SelectContent className="border-[var(--mineral-dark)] bg-[var(--graphite-light)] text-[var(--ivory)]">
                                <SelectGroup>
                                  {q.options.map((opt) => (
                                    <SelectItem
                                      key={opt}
                                      value={opt}
                                      className="text-sm text-[var(--ivory-muted)] focus:bg-[var(--mineral-dark)] focus:text-[var(--ivory)]"
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
                          <label htmlFor="message" style={labelStyle}>
                            Décrivez votre situation *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            style={{
                              ...inputStyle,
                              resize: "vertical",
                              lineHeight: "1.6",
                            }}
                            placeholder="Quel est votre principal défi en ce moment ? Qu'est-ce qui ne fonctionne pas comme vous le souhaiteriez ?"
                            onFocus={(e) => (e.target.style.borderColor = "var(--copper)")}
                            onBlur={(e) => (e.target.style.borderColor = "var(--mineral-dark)")}
                          />
                        </div>
                      </div>
                      </div>

                      {error && (
                        <p
                          className="font-body text-sm mb-4 p-4 border"
                          style={{
                            color: "var(--system-error)",
                            borderColor: "var(--system-error)",
                            backgroundColor: "rgba(180,60,60,0.06)",
                          }}
                        >
                          {error}
                        </p>
                      )}
                      <button
                        type="submit"
                        disabled={
                          loading ||
                          !form.name ||
                          !form.email ||
                          !form.message ||
                          !supabase
                        }
                        className="system-button-text flex w-full items-center justify-center gap-3 rounded-[0.5rem] py-5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed btn-copper-glow"
                        style={{
                          backgroundColor: "var(--copper)",
                          color: "var(--graphite-deep)",
                        }}
                      >
                        {loading ? (
                          <>
                            <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                            Envoi en cours…
                          </>
                        ) : !supabase ? (
                          "Configuration requise"
                        ) : (
                          <>
                            Envoyer ma demande de diagnostic
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </>
                        )}
                      </button>
                      <p
                        className="text-center font-mono text-xs mt-4"
                        style={{ color: "var(--ivory-muted)" }}
                      >
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
