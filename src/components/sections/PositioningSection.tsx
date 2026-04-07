import { ScrollReveal } from "@/components/common/ScrollReveal"

const CAPABILITIES = [
  { label: "Architecture de conversion", tag: "Funnel · CRO · UX" },
  { label: "Automatisation des processus", tag: "Zapier · Make · API" },
  { label: "Outils IA internes", tag: "LLM · Agents · Workflows" },
  { label: "Dashboards & interfaces", tag: "Data · BI · No-code" },
  { label: "Structuration opérationnelle", tag: "Process · OKR · Ops" },
  { label: "Gouvernance IA pragmatique", tag: "Conformité · Policy · Usage" },
]

export function PositioningSection() {
  return (
    <section
      className="py-28"
      style={{ backgroundColor: "var(--graphite-mid)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <ScrollReveal>
              <p
                className="font-mono text-xs tracking-widest mb-6"
                style={{ color: "var(--copper)" }}
              >
                05 / POSITIONNEMENT
              </p>
              <h2
                className="font-display font-bold mb-6"
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
                  color: "var(--ivory)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                }}
              >
                Architecte opérationnel.
                <br />
                <span style={{ color: "var(--ivory-muted)" }}>Designer de systèmes business.</span>
              </h2>
              <p
                className="font-body text-sm leading-7 mb-6"
                style={{ color: "var(--ivory-muted)" }}
              >
                Ma valeur n'est pas dans un empilement de compétences techniques. Elle est dans ma capacité à relier stratégie business, conversion, IA appliquée, automatisation, données et exécution technique jusqu'à un résultat concret et mesurable.
              </p>
              <p
                className="font-editorial italic text-base leading-7"
                style={{ color: "var(--ivory-muted)" }}
              >
                "Je ne construis pas des sites web. Je construis des systèmes qui produisent. La différence, c'est l'intention derrière chaque choix."
              </p>
              <p
                className="font-mono text-xs tracking-widest mt-3"
                style={{ color: "var(--copper)" }}
              >
                — Samuel Huys
              </p>
            </ScrollReveal>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <ScrollReveal delay={80}>
              <p
                className="font-mono text-xs tracking-widest mb-6"
                style={{ color: "var(--ivory-muted)" }}
              >
                DOMAINES D'INTERVENTION
              </p>
              <div className="flex flex-col gap-0">
                {CAPABILITIES.map((cap) => (
                  <div
                    key={cap.label}
                    className="flex items-center justify-between py-4 border-b transition-colors duration-200 group"
                    style={{
                      borderColor: "var(--mineral-dark)",
                    }}
                  >
                    <span
                      className="font-display font-semibold text-sm group-hover:text-[var(--ivory)] transition-colors duration-200"
                      style={{ color: "var(--ivory-soft)" }}
                    >
                      {cap.label}
                    </span>
                    <span
                      className="font-mono text-xs"
                      style={{ color: "var(--steel)" }}
                    >
                      {cap.tag}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
