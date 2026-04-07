import { ScrollReveal } from "@/components/common/ScrollReveal"
import { SectionLabel } from "@/components/common/SectionLabel"

const FRICTION_ITEMS = [
  {
    signal: "F01",
    title: "Processus manuels absurdes",
    description:
      "Des tâches répétitives absorbent les équipes, faute d'automatisation utile et de protocole stable.",
    impact: "Temps perdu",
    value: "-12h / semaine",
  },
  {
    signal: "F02",
    title: "Outils qui s'accumulent",
    description:
      "CRM, analytics, support et marketing existent chacun de leur côté. Les données sont là, mais la lecture système n'existe pas.",
    impact: "Vision fragmentée",
    value: "6 outils, 0 pilotage",
  },
  {
    signal: "F03",
    title: "Conversion qui fuit",
    description:
      "Le trafic arrive, mais le tunnel casse dans les angles morts: proposition, friction formulaire, routing CRM ou relance.",
    impact: "Revenu sous-exploité",
    value: "3 points de rupture",
  },
  {
    signal: "F04",
    title: "IA utilisée à l'envers",
    description:
      "Des prompts isolés sans gouvernance, sans flux, sans sortie exploitable. Beaucoup d'énergie, peu d'effet réel.",
    impact: "Usage non piloté",
    value: "0 boucle de contrôle",
  },
] as const

export function FrictionsSection() {
  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-[92rem] px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4 md:sticky md:top-28 md:self-start">
            <ScrollReveal>
              <div className="system-shell rounded-[0.5rem] px-6 py-7 md:px-7">
                <SectionLabel number="01" label="Points de rupture" />
                <h2
                  className="mb-5 font-display font-bold text-ivory leading-[1.06] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(1.9rem, 3.3vw, 2.8rem)" }}
                >
                  Le problème n&apos;est presque jamais le manque d&apos;outils.
                </h2>
                <p className="mb-6 font-body text-base leading-8 text-ivory-soft">
                  Le problème, c&apos;est un système illisible.
                </p>
                <p className="font-body text-sm leading-7 text-ivory-muted">
                  Quand acquisition, opérations, CRM et automatisation ne se parlent plus, la
                  performance devient une addition d&apos;efforts locaux. Notre rôle commence là :
                  remettre de la logique, de la priorité et de la traçabilité.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-8">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {FRICTION_ITEMS.map((item, index) => (
                <ScrollReveal key={item.signal} delay={index * 80}>
                  <article className="system-panel rounded-[0.5rem] px-6 py-6">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <span className="system-chip text-copper">
                        {item.signal}
                      </span>
                      <span className="system-chip text-steel-light">
                        {item.impact}
                      </span>
                    </div>

                    <h3 className="mb-3 font-display text-xl font-bold text-ivory tracking-[-0.02em]">
                      {item.title}
                    </h3>
                    <p className="mb-6 font-body text-sm leading-7 text-ivory-muted">
                      {item.description}
                    </p>

                    <div className="system-divider-soft mb-4" />
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-xs tracking-[0.16em] text-ivory-muted">
                        SIGNAL OPÉRATIF
                      </span>
                      <span className="font-mono text-sm text-copper">
                        {item.value}
                      </span>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
