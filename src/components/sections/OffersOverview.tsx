import { Link } from "react-router-dom"
import { OFFERS } from "@/data/offers"
import { ScrollReveal } from "@/components/common/ScrollReveal"
import { SectionLabel } from "@/components/common/SectionLabel"
import { Badge } from "@/components/ui/badge"

const OVERVIEW_OFFERS = [...OFFERS].sort((a, b) => Number(b.featured) - Number(a.featured))

export function OffersOverview() {
  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-[92rem] px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <ScrollReveal>
              <div className="system-shell rounded-[0.5rem] px-6 py-7 md:px-7">
                <SectionLabel number="02" label="Modules d'intervention" />
                <h2
                  className="mb-5 font-display font-bold"
                  style={{
                    fontSize: "clamp(1.9rem, 3.3vw, 2.8rem)",
                    color: "var(--ivory)",
                    lineHeight: 1.06,
                    letterSpacing: "-0.03em",
                  }}
                >
                  Quatre formats.
                  <br />
                  <span style={{ color: "var(--copper)" }}>Un système de décision simple.</span>
                </h2>
                <p
                  className="font-body text-sm leading-7"
                  style={{ color: "var(--ivory-muted)" }}
                >
                  Chaque offre joue un rôle précis dans la mise en ordre : cadrer, architecturer,
                  automatiser ou piloter. Pas de prestation fourre-tout, pas de flou sur le format.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-8">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {OVERVIEW_OFFERS.map((offer, index) => (
                <ScrollReveal key={offer.id} delay={index * 70}>
                  <Link
                    to={`/services/${offer.id === "diagnostic" ? "diagnostic" : offer.id}`}
                    className={offer.featured ? "group block md:col-span-2" : "group block"}
                    data-cursor-hover
                  >
                    <article
                      className={`system-panel system-panel-hover h-full rounded-[0.5rem] px-6 py-6 ${offer.featured ? "system-shell-warm md:px-8 md:py-7" : ""}`}
                    >
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <span className="system-chip" style={{ color: "var(--copper)" }}>
                          {offer.number}
                        </span>
                        <div className="flex flex-wrap items-center justify-end gap-2">
                          {offer.featured && (
                            <Badge className="border-none bg-[rgba(196,133,60,0.14)] font-mono text-[10px] tracking-[0.2em] text-[var(--copper)]">
                              OFFRE SIGNATURE
                            </Badge>
                          )}
                          {offer.tag && (
                            <Badge className="border-none bg-[rgba(107,130,153,0.16)] font-mono text-[10px] tracking-[0.18em] text-[var(--steel-light)]">
                              {offer.tag}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className={offer.featured ? "grid gap-6 md:grid-cols-12" : ""}>
                        <div className={offer.featured ? "md:col-span-8" : ""}>
                          <h3
                            className={offer.featured ? "mb-3 font-display text-3xl font-bold" : "mb-2 font-display text-xl font-bold"}
                            style={{ color: "var(--ivory)", letterSpacing: "-0.02em" }}
                          >
                            {offer.title}
                          </h3>
                          <p
                            className="mb-4 font-body text-sm"
                            style={{ color: "var(--ivory-soft)" }}
                          >
                            {offer.subtitle}
                          </p>
                          <p
                            className="font-body text-sm leading-7"
                            style={{ color: "var(--ivory-muted)" }}
                          >
                            {offer.description}
                          </p>
                        </div>

                        <div className={offer.featured ? "md:col-span-4 md:flex md:flex-col md:justify-between" : ""}>
                          {offer.featured && (
                            <div className="mb-5 rounded-[0.5rem] border px-4 py-4 md:mb-0" style={{ borderColor: "rgba(196,133,60,0.18)" }}>
                              <p
                                className="mb-2 font-mono text-[10px] tracking-[0.18em]"
                                style={{ color: "var(--steel-light)" }}
                              >
                                QUAND L&apos;ACTIVER
                              </p>
                              <p className="font-body text-sm leading-7" style={{ color: "var(--ivory-soft)" }}>
                                Dès que le revenu, les outils et les équipes doivent enfin fonctionner comme un flux unique.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="my-5 system-divider-soft" />

                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="system-chip" style={{ color: "var(--steel-light)" }}>
                            {offer.duration}
                          </span>
                          <Badge className="border-none bg-[rgba(107,130,153,0.16)] font-mono text-[10px] tracking-[0.16em] text-[var(--steel-light)]">
                            {offer.budgetSignal}
                          </Badge>
                        </div>
                        <span
                          className="system-interface transition-transform duration-200 group-hover:translate-x-1"
                          style={{ color: "var(--copper)" }}
                        >
                          {offer.cta} →
                        </span>
                      </div>
                    </article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        <ScrollReveal delay={180}>
          <div className="mt-10 flex justify-center">
            <Link
              to="/services"
              className="system-button-text inline-flex items-center rounded-[0.5rem] border px-8 py-4 transition-all duration-300 hover:border-[var(--copper)] hover:text-[var(--copper)]"
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
