import { Link } from "react-router-dom"
import { OFFERS } from "@/data/offers"
import { ScrollReveal } from "@/components/common/ScrollReveal"
import { SectionLabel } from "@/components/common/SectionLabel"
import { Badge } from "@/components/ui/badge"

const OVERVIEW_OFFERS = [...OFFERS].sort((a, b) => Number(b.featured) - Number(a.featured))

export function OffersOverview() {
  return (
    <section
      className="py-28"
      style={{ backgroundColor: "var(--graphite-deep)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          <div className="md:col-span-6">
            <ScrollReveal>
              <SectionLabel number="02" label="Services" />
              <h2
                className="font-display font-bold"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  color: "var(--ivory)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                Quatre formats d'intervention.
                <br />
                <span style={{ color: "var(--ivory-muted)" }}>Un seul objectif : le résultat.</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="md:col-span-5 md:col-start-8 flex items-end">
            <ScrollReveal delay={100}>
              <p
                className="font-body text-sm leading-7"
                style={{ color: "var(--ivory-muted)" }}
              >
                Chaque intervention commence par comprendre le problème réel — pas par vendre une prestation. Le bon format dépend de votre situation, de votre urgence et de ce que vous cherchez à résoudre.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {OVERVIEW_OFFERS.map((offer, i) => (
            <ScrollReveal key={offer.id} delay={i * 80}>
              <Link
                to={`/services/${offer.id === "diagnostic" ? "diagnostic" : offer.id}`}
                className={offer.featured ? "group block md:col-span-2" : "group block"}
                data-cursor-hover
              >
                <div
                  className="relative h-full border p-8 transition-all duration-400 md:p-10"
                  style={{
                    borderColor: offer.featured ? "var(--bronze)" : "var(--mineral-dark)",
                    backgroundColor: offer.featured ? "rgba(42,39,34,0.92)" : "var(--graphite-mid)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = "var(--copper)"
                    el.style.transform = "translateY(-2px)"
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = offer.featured ? "var(--bronze)" : "var(--mineral-dark)"
                    el.style.transform = "translateY(0)"
                  }}
                >
                  {offer.featured && (
                    <div
                      className="absolute top-0 left-0 right-0 h-0.5"
                      style={{ backgroundColor: "var(--copper)" }}
                      aria-hidden="true"
                    />
                  )}

                  <div className={offer.featured ? "grid gap-6 md:grid-cols-12" : ""}>
                    <div className={offer.featured ? "md:col-span-8" : ""}>
                      <div className="mb-6 flex items-start justify-between gap-4">
                        <span
                          className="font-mono text-xs tracking-widest"
                          style={{ color: "var(--copper)" }}
                        >
                          {offer.number}
                        </span>
                        <div className="flex flex-wrap items-center justify-end gap-2">
                          {offer.featured && (
                            <Badge
                              className="border-none bg-[rgba(196,133,60,0.14)] font-mono text-[10px] tracking-[0.2em] text-[var(--copper)]"
                            >
                              OFFRE SIGNATURE
                            </Badge>
                          )}
                          {offer.tag && (
                            <Badge
                              className="border-none bg-[rgba(196,133,60,0.12)] font-mono text-[10px] tracking-[0.2em] text-[var(--copper)]"
                            >
                              {offer.tag}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <h3
                        className={offer.featured ? "mb-3 font-display text-3xl font-bold" : "mb-2 font-display text-xl font-bold"}
                        style={{ color: "var(--ivory)", letterSpacing: "-0.01em" }}
                      >
                        {offer.title}
                      </h3>
                      <p
                        className={offer.featured ? "mb-5 font-editorial text-base italic" : "mb-4 font-editorial text-sm italic"}
                        style={{ color: "var(--ivory-muted)" }}
                      >
                        {offer.subtitle}
                      </p>
                      <p
                        className="mb-6 font-body text-sm leading-7"
                        style={{ color: "var(--ivory-muted)" }}
                      >
                        {offer.description}
                      </p>
                    </div>

                    <div className={offer.featured ? "md:col-span-4 md:flex md:flex-col md:justify-between" : ""}>
                      {offer.featured && (
                        <p
                          className="mb-6 border-l pl-4 font-body text-sm leading-7 md:mb-0"
                          style={{
                            borderColor: "rgba(196,133,60,0.3)",
                            color: "var(--ivory-soft)",
                          }}
                        >
                          L&apos;offre la plus adaptée quand trafic, CRM, tunnel et pilotage doivent enfin
                          fonctionner comme un système.
                        </p>
                      )}

                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-col gap-2">
                          <span
                            className="font-mono text-xs"
                            style={{ color: "var(--steel)" }}
                          >
                            {offer.duration}
                          </span>
                          <Badge className="w-fit border-none bg-[rgba(107,130,153,0.16)] font-mono text-[10px] tracking-[0.16em] text-[var(--steel-light)]">
                            {offer.budgetSignal}
                          </Badge>
                        </div>
                        <span
                          className="font-mono text-xs transition-transform duration-200 group-hover:translate-x-1"
                          style={{ color: "var(--copper)" }}
                        >
                          {offer.cta} →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-10 flex justify-center">
            <Link
              to="/services"
              className="font-mono text-xs tracking-wider uppercase px-8 py-4 border transition-all duration-300 hover:border-[var(--copper)] hover:text-[var(--copper)]"
              style={{
                borderColor: "var(--mineral-warm)",
                color: "var(--ivory-muted)",
              }}
            >
              Voir tous les services
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
