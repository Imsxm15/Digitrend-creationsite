import { Link } from "react-router-dom"
import { ArrowUpRight, ChartNoAxesCombined, Route, Sparkles } from "lucide-react"
import { PageHeroTitle } from "@/components/common/PageHeroTitle"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/common/ScrollReveal"
import { FEATURED_OFFER } from "@/data/offers"
import { pageHeroes } from "@/data/pageCopy"
import { preloadDiagnosticRoute, preloadServicesRoute } from "@/lib/routePreload"

const hero = pageHeroes.home

const heroSignals = [
  {
    title: "Flux lisibles",
    detail: "Acquisition, conversion, CRM et pilotage remis sur le meme axe.",
    icon: Route,
  },
  {
    title: "Priorites actionnables",
    detail: "Les quick wins et les chantiers structurants sont distingues tout de suite.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "IA utile",
    detail: "Automatisations et assistants IA cadres par un objectif business reel.",
    icon: Sparkles,
  },
] as const

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-28 md:px-6 md:pb-20 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] lg:items-end">
          <div>
            <ScrollReveal delay={50}>
              <p className="system-eyebrow mb-6 text-copper">{hero.eyebrow}</p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <PageHeroTitle className="md:max-w-4xl">
                {hero.title}
              </PageHeroTitle>
            </ScrollReveal>

            <ScrollReveal delay={180}>
              <p className="mt-6 max-w-3xl text-[clamp(1rem,1.5vw,1.15rem)] font-body leading-8 text-ivory-muted">
                {hero.description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={220}>
              <ul className="mt-6 max-w-3xl space-y-3">
                {hero.bullets?.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-copper" aria-hidden="true" />
                    <span className="font-body text-sm leading-7 text-ivory-soft md:text-base">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={260}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <div className="flex flex-col gap-2">
                  <Button
                    asChild
                    size="lg"
                    className="system-button-text h-11 rounded-[4px] bg-copper px-7 text-graphite-deep shadow-none hover:bg-copper-light"
                  >
                    <Link to={hero.primaryHref} onMouseEnter={preloadDiagnosticRoute}>
                      {hero.primaryLabel}
                    </Link>
                  </Button>
                  <p className="font-body text-xs text-ivory-muted">{hero.primarySubtext}</p>
                </div>

                <div className="flex flex-col gap-2">
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="system-button-text h-11 rounded-[4px] border-ivory-muted bg-transparent px-7 text-ivory shadow-none hover:bg-[rgba(196,133,60,0.05)] hover:text-copper"
                  >
                    <Link to={hero.secondaryHref} onMouseEnter={preloadServicesRoute}>
                      {hero.secondaryLabel}
                    </Link>
                  </Button>
                  <p className="font-body text-xs text-ivory-muted">{hero.secondarySubtext}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={280}>
            <div className="system-shell system-shell-warm rounded-[0.5rem] border-copper/20 px-6 py-6 shadow-none md:px-7">
              <p className="system-eyebrow mb-4 text-copper">COMMENCER PAR</p>
              <h2 className="font-display text-2xl font-bold tracking-[-0.03em] text-ivory">
                {FEATURED_OFFER.title}
              </h2>
              <p className="mt-3 font-body text-sm leading-7 text-ivory-muted">
                {FEATURED_OFFER.subtitle}
              </p>

              <div className="my-6 system-divider-soft" />

              <ul className="space-y-4">
                {heroSignals.map((signal) => {
                  const Icon = signal.icon

                  return (
                    <li key={signal.title} className="flex items-start gap-3">
                      <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-[0.5rem] border border-copper/20 bg-copper/10 text-copper">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="font-display text-base font-semibold text-ivory">
                          {signal.title}
                        </p>
                        <p className="mt-1 font-body text-sm leading-7 text-ivory-muted">
                          {signal.detail}
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-6">
                <Link
                  to={FEATURED_OFFER.ctaHref}
                  onMouseEnter={preloadServicesRoute}
                  className="system-button-text inline-flex items-center gap-2 text-copper transition-colors duration-200 hover:text-copper-light"
                >
                  Explorer l'offre signature
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
