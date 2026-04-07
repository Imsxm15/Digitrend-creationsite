import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const HERO_METRICS = [
  {
    label: "Projets réussis",
    value: "40+",
    tone: "var(--copper)",
  },
  {
    label: "Diagnostic complet",
    value: "3-6j",
    tone: "var(--steel-light)",
  },
  {
    value: "A+",
    label: "Score systeme moyen",
    tone: "var(--ivory)",
  },
] as const

const smoothEase = [0.22, 1, 0.36, 1] as const

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.45 },
    transition: {
      delay,
      duration: 0.72,
      ease: smoothEase,
    },
  }
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32 md:px-6 md:pb-24 md:pt-36">
      <div className="mx-auto max-w-6xl">
        <motion.p
          className="system-eyebrow mb-6"
          style={{ color: "var(--copper)" }}
          {...fadeUp(0.05)}
        >
          SYSTÈME OPÉRATIF · V3.2
        </motion.p>

        <motion.h1
          className="system-title-hero max-w-[10ch] md:max-w-5xl"
          style={{
            fontSize: "clamp(2.9rem, 11vw, 5.25rem)",
            color: "var(--ivory)",
          }}
          {...fadeUp(0.1)}
        >
          Votre business mérite un système qui fonctionne
        </motion.h1>

        <motion.p
          className="system-copy mt-6 max-w-3xl text-[clamp(1rem,1.6vw,1.2rem)]"
          style={{ color: "var(--ivory-muted)" }}
          {...fadeUp(0.18)}
        >
          Nous analysons, structurons et automatisons vos opérations digitales.
          Résultat : un système clair, mesurable, scalable — qui génère des résultats.
        </motion.p>

        <motion.div className="mt-8 flex flex-wrap gap-4" {...fadeUp(0.24)}>
          <Button
            asChild
            size="lg"
            className="system-button-text h-11 rounded-[4px] bg-[var(--copper)] px-7 text-[var(--graphite-deep)] shadow-none hover:bg-[var(--copper-light)]"
          >
            <Link to="/diagnostic">Lancer le diagnostic</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="system-button-text h-11 rounded-[4px] border-[var(--ivory-muted)] bg-transparent px-7 text-[var(--ivory)] shadow-none hover:bg-[rgba(196,133,60,0.05)] hover:text-[var(--copper)]"
          >
            <Link to="/methode">Voir la méthode</Link>
          </Button>
        </motion.div>

        <motion.div
          className="mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
          {...fadeUp(0.32)}
        >
          {HERO_METRICS.map((metric) => (
            <Card key={metric.label} className="kpi-card gap-0 py-0 shadow-none">
              <CardContent className="px-5 py-5">
                <div className="kpi-value" style={{ color: metric.tone }}>
                  {metric.value}
                </div>
                <p className="kpi-label">{metric.label}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
