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
                  className="mb-5 font-display font-bold text-ivory leading-[1.06] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(1.9rem, 3.3vw, 2.8rem)" }}
                >
                  Quatre formats.
                  <br />
                  <span className="text-copper">Un syst&egrave;me de d&eacute;cision simple.</span>
                </h2>
                <p className="font-body text-sm leading-7 text-ivory-muted">
                  Chaque offre joue un r&ocirc;le pr&eacute;cis dans la mise en ordre : cadrer, architecturer,
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
                        <span className="system-chip text-copper">
                          {offer.number}
                        </span>
                        <div className="flex flex-wrap items-center justify-end gap-2">
                          {offer.featured && (
                            <Badge className="border-none bg-copper/15 font-mono text-xs tracking-[0.2em] text-copper">
                              OFFRE SIGNATURE
                            </Badge>
                          )}
                          {offer.tag && (
                            <Badge className="border-none bg-steel/15 font-mono text-xs tracking-[0.18em] text-steel-light">
                              {offer.tag}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className={offer.featured ? "grid gap-6 md:grid-cols-12" : ""}>
                        <div className={offer.featured ? "md:col-span-8" : ""}>
                          <h3
                            className={`font-display font-bold text-ivory tracking-[-0.02em] ${offer.featured ? "mb-3 text-3xl" : "mb-2 text-xl"}`}
                          >
                            {offer.title}
                          </h3>
                          <p className="mb-4 font-body text-sm text-ivory-soft">
                            {offer.subtitle}
                          </p>
                          <p className="font-body text-sm leading-7 text-ivory-muted">
                            {offer.description}
                          </p>
                        </div>

                        <div className={offer.featured ? "md:col-span-4 md:flex md:flex-col md:justify-between" : ""}>
                          {offer.featured && (
                            <div className="mb-5 rounded-[0.5rem] border border-copper/20 px-4 py-4 md:mb-0">
                              <p className="mb-2 font-mono text-xs tracking-[0.18em] text-steel-light">
                                QUAND L&apos;ACTIVER
                              </p>
                              <p className="font-body text-sm leading-7 text-ivory-soft">
                                D&egrave;s que le revenu, les outils et les &eacute;quipes doivent enfin fonctionner comme un flux unique.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="my-5 system-divider-soft" />

                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="system-chip text-steel-light">
                            {offer.duration}
                          </span>
                          <Badge className="border-none bg-steel/15 font-mono text-xs tracking-[0.16em] text-steel-light">
                            {offer.budgetSignal}
                          </Badge>
                        </div>
                        <span className="system-interface text-copper transition-transform duration-200 group-hover:translate-x-1">
                          {offer.cta} &rarr;
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
              className="system-button-text inline-flex items-center rounded-[0.5rem] border border-mineral-warm px-8 py-4 text-ivory-muted transition-all duration-300 hover:border-copper hover:text-copper"
            >
              Voir tous les services
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
