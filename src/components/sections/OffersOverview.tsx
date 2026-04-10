import { Link } from "react-router-dom"
import {
  Bot,
  ChartNoAxesCombined,
  Search,
  Workflow,
} from "lucide-react"
import { OFFERS } from "@/data/offers"
import { ScrollReveal } from "@/components/common/ScrollReveal"
import { SectionLabel } from "@/components/common/SectionLabel"

const overviewOffers = [...OFFERS].sort((a, b) => Number(b.featured) - Number(a.featured))

const iconMap = {
  diagnostic: Search,
  "architecture-revenue": Workflow,
  "ai-ops": Bot,
  fractional: ChartNoAxesCombined,
} as const

interface OffersOverviewProps {
  label?: string
  title?: string
  intro?: string
  showViewAllButton?: boolean
}

export function OffersOverview({
  label = "Modules d'intervention",
  title = "Quatre formats. Un choix lisible, vite.",
  intro = "Chaque service correspond a un niveau de profondeur precis pour cadrer, architecturer, automatiser ou piloter.",
  showViewAllButton = true,
}: OffersOverviewProps) {
  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-[92rem] px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <ScrollReveal>
              <div className="system-shell rounded-[0.5rem] px-6 py-7 md:px-7">
                <SectionLabel number="02" label={label} />
                <h2
                  className="mb-5 font-display font-bold text-ivory leading-[1.06] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(1.9rem, 3.3vw, 2.8rem)" }}
                >
                  {title}
                </h2>
                <p className="font-body text-sm leading-7 text-ivory-muted">{intro}</p>
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-8">
            <div className="-mx-4 overflow-x-auto px-4 pb-2 md:mx-0 md:px-0 md:pb-0">
              <div className="grid auto-cols-[88%] grid-flow-col gap-5 md:grid-flow-row md:grid-cols-2 md:auto-cols-auto">
                {overviewOffers.map((offer, index) => {
                  const Icon = iconMap[offer.id as keyof typeof iconMap]

                  return (
                    <ScrollReveal key={offer.id} delay={index * 70}>
                      <article
                        className={`flex h-full snap-start flex-col rounded-[0.5rem] border px-6 py-6 ${
                          offer.featured
                            ? "border-copper/30 bg-gradient-to-br from-copper/6 to-graphite-light"
                            : "border-mineral-dark bg-graphite-light"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <span className="grid size-11 place-items-center rounded-[0.5rem] border border-copper/20 bg-copper/10 text-copper">
                              <Icon className="size-5" aria-hidden="true" />
                            </span>
                            <div>
                              <p className="font-mono text-xs uppercase tracking-[0.16em] text-copper">
                                {offer.number}
                                {offer.tag ? ` · ${offer.tag}` : ""}
                              </p>
                              <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.02em] text-ivory">
                                {offer.title}
                              </h3>
                            </div>
                          </div>
                          <span className="rounded-[0.5rem] border border-mineral-dark px-3 py-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-steel-light">
                            {offer.duration}
                          </span>
                        </div>

                        <p className="mt-4 font-body text-sm leading-7 text-ivory-soft">
                          {offer.subtitle}
                        </p>
                        <p className="mt-4 font-body text-sm leading-7 text-ivory-muted">
                          {offer.persona}
                        </p>

                        <ul className="mt-5 space-y-2">
                          {offer.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-3">
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-copper" aria-hidden="true" />
                              <span className="font-body text-sm text-ivory-muted">{benefit}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-auto pt-6">
                          <div className="mb-4 flex flex-wrap items-center gap-3">
                            <span className="system-chip text-steel-light">{offer.budgetSignal}</span>
                          </div>
                          <Link
                            to={offer.ctaHref}
                            className="system-button-text inline-flex items-center justify-center rounded-[0.5rem] bg-copper px-6 py-3 text-graphite-deep transition-all duration-300 hover:bg-copper-light"
                          >
                            {offer.cta}
                          </Link>
                        </div>
                      </article>
                    </ScrollReveal>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {showViewAllButton && (
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
        )}
      </div>
    </section>
  )
}
