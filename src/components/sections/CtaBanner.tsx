import { Link } from "react-router-dom"
import { ScrollReveal } from "@/components/common/ScrollReveal"

interface CtaBannerProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  primarySubtext?: string
  secondaryLabel?: string
  secondaryHref?: string
  secondarySubtext?: string
}

export function CtaBanner({
  title = "Votre système mérite mieux.",
  subtitle = "Un diagnostic de 30 minutes suffit souvent à identifier les 3 priorités qui font la différence. Sans engagement, sans bla-bla.",
  primaryLabel = "Recevoir un diagnostic",
  primaryHref = "/diagnostic",
  primarySubtext = "30 min, sans engagement",
  secondaryLabel = "Voir la méthode",
  secondaryHref = "/methode",
  secondarySubtext = "Comprendre l'approche",
}: CtaBannerProps) {
  const primaryIsMail = primaryHref.startsWith("mailto:")
  const secondaryIsMail = secondaryHref.startsWith("mailto:")

  const primaryClassName =
    "system-button-text btn-copper-glow inline-flex items-center justify-center gap-2 rounded-[0.5rem] bg-copper px-8 py-4 text-graphite-deep transition-all duration-300"
  const secondaryClassName =
    "system-button-text inline-flex items-center justify-center rounded-[0.5rem] border border-mineral-warm px-8 py-4 text-ivory-muted transition-all duration-300 hover:border-copper hover:text-copper"

  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-[92rem] px-4 md:px-6">
        <ScrollReveal>
          <div className="system-shell system-shell-warm rounded-[0.5rem] px-6 py-7 md:px-8 md:py-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center md:gap-10">
              <div className="md:col-span-6">
                <p className="mb-4 font-mono text-xs tracking-[0.18em] text-copper">
                  PROCHAINE DECISION
                </p>
                <h2
                  className="mb-4 font-display font-bold text-ivory"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.4rem)",
                    lineHeight: 1.04,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {title}
                </h2>
                <p className="font-body text-sm leading-7 text-ivory-muted">
                  {subtitle}
                </p>
              </div>

              <div className="md:col-span-3">
                <div className="space-y-3">
                  {[
                    "Lecture du contexte",
                    "Priorites visibles",
                    "Sans engagement",
                  ].map((item) => (
                    <div key={item} className="system-chip text-ivory-muted">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-3 md:flex md:flex-col md:items-end">
                <div className="flex w-full flex-col gap-3 md:max-w-[15rem]">
                  {primaryIsMail ? (
                    <a href={primaryHref} className={primaryClassName} data-cursor-hover>
                      {primaryLabel}
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  ) : (
                    <Link to={primaryHref} className={primaryClassName} data-cursor-hover>
                      {primaryLabel}
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  )}
                  {primarySubtext && (
                    <p className="-mt-1 text-center font-body text-xs leading-5 text-ivory-muted">
                      {primarySubtext}
                    </p>
                  )}

                  {secondaryIsMail ? (
                    <a href={secondaryHref} className={secondaryClassName}>
                      {secondaryLabel}
                    </a>
                  ) : (
                    <Link to={secondaryHref} className={secondaryClassName}>
                      {secondaryLabel}
                    </Link>
                  )}
                  {secondarySubtext && (
                    <p className="-mt-1 text-center font-body text-xs leading-5 text-ivory-muted">
                      {secondarySubtext}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
