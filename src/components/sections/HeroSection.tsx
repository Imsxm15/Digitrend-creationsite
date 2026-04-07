import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/common/ScrollReveal"

const HERO_METRICS = [
  {
    label: "Projets réussis",
    value: "40+",
    toneClass: "text-copper",
  },
  {
    label: "Diagnostic complet",
    value: "3-6j",
    toneClass: "text-steel-light",
  },
  {
    value: "A+",
    label: "Score systeme moyen",
    toneClass: "text-ivory",
  },
] as const

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32 md:px-6 md:pb-24 md:pt-36">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal delay={50}>
          <p className="system-eyebrow mb-6 text-copper">
            SYSTÈME OPÉRATIF · V3.2
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1
            className="system-title-hero text-ivory md:max-w-5xl"
            style={{ fontSize: "clamp(2.9rem, 11vw, 5.25rem)" }}
          >
            Votre business mérite un système qui fonctionne
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={180}>
          <p className="system-copy mt-6 max-w-3xl text-ivory-muted text-[clamp(1rem,1.6vw,1.2rem)]">
            Nous analysons, structurons et automatisons vos opérations digitales.
            Résultat : un système clair, mesurable, scalable — qui génère des résultats.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={240}>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="system-button-text h-11 rounded-[4px] bg-copper px-7 text-graphite-deep shadow-none hover:bg-copper-light"
            >
              <Link to="/diagnostic">Lancer le diagnostic</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="system-button-text h-11 rounded-[4px] border-ivory-muted bg-transparent px-7 text-ivory shadow-none hover:bg-[rgba(196,133,60,0.05)] hover:text-copper"
            >
              <Link to="/methode">Voir la méthode</Link>
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={320}>
          <div className="mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {HERO_METRICS.map((metric) => (
              <Card key={metric.label} className="kpi-card gap-0 py-0 shadow-none">
                <CardContent className="px-5 py-5">
                  <div className={`kpi-value ${metric.toneClass}`}>
                    {metric.value}
                  </div>
                  <p className="kpi-label">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
