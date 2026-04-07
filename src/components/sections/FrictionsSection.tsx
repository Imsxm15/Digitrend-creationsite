import { ScrollReveal } from "@/components/common/ScrollReveal"
import { SectionLabel } from "@/components/common/SectionLabel"

const FRICTION_ITEMS = [
  {
    icon: "⟳",
    title: "Processus manuels absurdes",
    description: "Des tâches répétitives qui absorbent des heures précieuses. Des copier-coller entre outils qui ne se parlent pas. De l'énergie gaspillée sur ce qui pourrait être automatisé.",
  },
  {
    icon: "⊕",
    title: "Outils qui s'accumulent",
    description: "CRM, analytics, marketing, support — chaque outil fonctionne en silo. Aucune cohérence. Pas de vision d'ensemble. Les données existent mais personne ne les utilise.",
  },
  {
    icon: "↘",
    title: "Conversion qui fuit",
    description: "Du trafic. Des leads. Des prospects. Mais le tunnel est mal calibré, les points de friction inconnus, les décisions prises à l'aveugle. La croissance plafonne.",
  },
  {
    icon: "◈",
    title: "IA utilisée à l'envers",
    description: "Des LLM en copier-coller sans process. Des prompts isolés sans système. Aucun outil interne construit autour des cas d'usage réels. L'IA coûte du temps au lieu d'en faire gagner.",
  },
]

export function FrictionsSection() {
  return (
    <section
      className="py-28"
      style={{ backgroundColor: "var(--graphite-mid)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 md:sticky md:top-32">
            <ScrollReveal>
              <SectionLabel number="01" label="Le problème réel" />
              <h2
                className="font-display font-bold mb-6"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  color: "var(--ivory)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                Votre business n'a pas besoin de plus d'outils.
              </h2>
              <p
                className="font-editorial italic text-lg mb-8"
                style={{ color: "var(--ivory-muted)", lineHeight: 1.6 }}
              >
                Il a besoin d'un système qui tient.
              </p>
              <p
                className="font-body text-sm leading-7"
                style={{ color: "var(--ivory-muted)" }}
              >
                La plupart des problèmes de performance ne viennent pas d'un manque de ressources. Ils viennent de flux mal conçus, d'outils mal connectés et d'une architecture qui n'a jamais été pensée globalement.
              </p>
            </ScrollReveal>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <div className="flex flex-col gap-6">
              {FRICTION_ITEMS.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 80}>
                  <div
                    className="flex gap-6 p-6 border transition-all duration-400 group"
                    style={{
                      borderColor: "var(--mineral-dark)",
                      backgroundColor: "var(--graphite-deep)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--bronze)"
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--mineral-dark)"
                    }}
                  >
                    <div
                      className="font-mono text-xl flex-shrink-0 mt-0.5 w-8 text-center"
                      style={{ color: "var(--copper)" }}
                      aria-hidden="true"
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3
                        className="font-display font-semibold text-base mb-2"
                        style={{ color: "var(--ivory)" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="font-body text-sm leading-7"
                        style={{ color: "var(--ivory-muted)" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
