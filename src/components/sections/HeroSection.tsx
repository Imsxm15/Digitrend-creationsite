import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/common/ScrollReveal"
import { FEATURED_OFFER } from "@/data/offers"
import { preloadDiagnosticRoute, preloadServicesRoute } from "@/lib/routePreload"

const HERO_MARKERS = [
  {
    label: "Cadrage initial",
    value: "30 min",
    toneClass: "text-copper",
  },
  {
    label: "Diagnostic structuré",
    value: "4–6j",
    toneClass: "text-steel-light",
  },
  {
    label: "Formats d'intervention",
    value: "4 offres",
    toneClass: "text-ivory",
  },
] as const

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-28 md:px-6 md:pb-20 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] lg:items-end">
          <div>
            <ScrollReveal delay={50}>
              <p className="system-eyebrow mb-6 text-copper">
                SYSTÈME OPÉRATIF · V3.2
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1
                className="system-title-hero text-ivory md:max-w-4xl"
                style={{ fontSize: "clamp(2.8rem, 9vw, 5.1rem)" }}
              >
                Votre business mérite un système qui fonctionne
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={180}>
              <p className="mt-6 max-w-3xl text-[clamp(1rem,1.5vw,1.15rem)] font-body leading-8 text-ivory-muted">
                Nous analysons, structurons et automatisons vos opérations digitales pour rendre
                les décisions plus lisibles, les flux plus fiables et les résultats plus faciles à
                piloter.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="system-button-text h-11 rounded-[4px] bg-copper px-7 text-graphite-deep shadow-none hover:bg-copper-light"
                >
                  <Link to="/diagnostic" onMouseEnter={preloadDiagnosticRoute}>
                    Lancer le diagnostic
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="system-button-text h-11 rounded-[4px] border-ivory-muted bg-transparent px-7 text-ivory shadow-none hover:bg-[rgba(196,133,60,0.05)] hover:text-copper"
                >
                  <Link to="/services" onMouseEnter={preloadServicesRoute}>
                    Voir les services
                  </Link>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={320}>
              <div className="mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
                {HERO_MARKERS.map((marker) => (
                  <Card key={marker.label} className="kpi-card gap-0 py-0 shadow-none">
                    <CardContent className="px-5 py-5 text-left">
                      <div className={`kpi-value ${marker.toneClass}`}>{marker.value}</div>
                      <p className="kpi-label mt-3">{marker.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={280}>
            <Card className="system-shell system-shell-warm border-copper/20 shadow-none">
              <CardContent className="px-6 py-6 md:px-7">
                <p className="system-eyebrow mb-4 text-copper">COMMENCER PAR</p>
                <h2 className="font-display text-2xl font-bold tracking-[-0.03em] text-ivory">
                  {FEATURED_OFFER.title}
                </h2>
                <p className="mt-3 font-body text-sm leading-7 text-ivory-muted">
                  {FEATURED_OFFER.subtitle}
                </p>

                <div className="my-6 system-divider-soft" />

                <ul className="space-y-3">
                  <li className="font-body text-sm text-ivory-soft">
                    Diagnostic complet du système de conversion actuel.
                  </li>
                  <li className="font-body text-sm text-ivory-soft">
                    Architecture cible priorisée avant implémentation.
                  </li>
                  <li className="font-body text-sm text-ivory-soft">
                    {FEATURED_OFFER.duration} pour passer d'un constat diffus à une trajectoire
                    lisible.
                  </li>
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
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
