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
    <section
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "var(--mineral-dark)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(196,133,60,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <p
            className="font-mono text-xs tracking-widest mb-6"
            style={{ color: "var(--copper)" }}
          >
            PRÊT À STRUCTURER ?
          </p>
          <h2
            className="font-display font-bold mb-6"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
              color: "var(--ivory)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </h2>
          <p
            className="font-body text-base leading-7 mb-10 max-w-xl mx-auto"
            style={{ color: "var(--ivory-muted)" }}
          >
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to={primaryHref}
              className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase px-8 py-4 transition-all duration-300 btn-copper-glow"
              style={{
                backgroundColor: "var(--copper)",
                color: "var(--graphite-deep)",
                fontWeight: 600,
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
              className="inline-flex items-center font-mono text-xs tracking-wider uppercase px-8 py-4 border transition-all duration-300 hover:border-[var(--copper)] hover:text-[var(--copper)]"
              style={{
                borderColor: "var(--mineral-warm)",
                color: "var(--ivory-muted)",
              }}
            >
              {secondaryLabel}
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, var(--mineral-warm), var(--copper), var(--mineral-warm), transparent)",
          opacity: 0.3,
        }}
        aria-hidden="true"
      />
    </section>
  )
}
