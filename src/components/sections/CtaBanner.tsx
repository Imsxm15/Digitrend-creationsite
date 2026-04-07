import { Link } from "react-router-dom"
import { ScrollReveal } from "@/components/common/ScrollReveal"

interface CtaBannerProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export function CtaBanner({
  title = "Votre système mérite mieux.",
  subtitle = "Un diagnostic de 30 minutes suffit souvent à identifier les 3 priorités qui font la différence. Sans engagement, sans bla-bla.",
  primaryLabel = "Recevoir un diagnostic",
  primaryHref = "/diagnostic",
  secondaryLabel = "Voir la méthode",
  secondaryHref = "/methode",
}: CtaBannerProps) {
  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-[92rem] px-4 md:px-6">
        <ScrollReveal>
          <div className="system-shell system-shell-warm rounded-[0.5rem] px-6 py-7 md:px-8 md:py-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center md:gap-10">
              <div className="md:col-span-6">
                <p className="mb-4 font-mono text-[11px] tracking-[0.18em]" style={{ color: "var(--copper)" }}>
                  PROCHAINE DÉCISION
                </p>
                <h2
                  className="mb-4 font-display font-bold"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.4rem)",
                    color: "var(--ivory)",
                    lineHeight: 1.04,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {title}
                </h2>
                <p className="font-body text-sm leading-7" style={{ color: "var(--ivory-muted)" }}>
                  {subtitle}
                </p>
              </div>

              <div className="md:col-span-3">
                <div className="space-y-3">
                  {[
                    "Lecture du contexte",
                    "3 priorités visibles",
                    "Sans engagement",
                  ].map((item) => (
                    <div key={item} className="system-chip" style={{ color: "var(--ivory-muted)" }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-3 md:flex md:flex-col md:items-end">
                <div className="flex w-full flex-col gap-3 md:max-w-[15rem]">
                  <Link
                    to={primaryHref}
                    className="system-button-text btn-copper-glow inline-flex items-center justify-center gap-2 rounded-[0.5rem] px-8 py-4 transition-all duration-300"
                    style={{
                      backgroundColor: "var(--copper)",
                      color: "var(--graphite-deep)",
                    }}
                    data-cursor-hover
                  >
                    {primaryLabel}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <Link
                    to={secondaryHref}
                    className="system-button-text inline-flex items-center justify-center rounded-[0.5rem] border px-8 py-4 transition-all duration-300 hover:border-[var(--copper)] hover:text-[var(--copper)]"
                    style={{
                      borderColor: "var(--mineral-warm)",
                      color: "var(--ivory-muted)",
                    }}
                  >
                    {secondaryLabel}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
