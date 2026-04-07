import { ScrollReveal } from "@/components/common/ScrollReveal"
import { SectionLabel } from "@/components/common/SectionLabel"

const CAPABILITIES = [
  { label: "Architecture de conversion", tag: "Funnel · CRO · UX", status: "Revenue" },
  { label: "Automatisation des processus", tag: "Zapier · Make · API", status: "Ops" },
  { label: "Outils IA internes", tag: "LLM · Agents · Workflows", status: "AI" },
  { label: "Dashboards & interfaces", tag: "Data · BI · Produit", status: "Pilotage" },
  { label: "Structuration opérationnelle", tag: "Process · OKR · Ops", status: "Coordination" },
  { label: "Gouvernance IA pragmatique", tag: "Conformité · Policy · Usage", status: "Cadre" },
] as const

export function PositioningSection() {
  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-[92rem] px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <ScrollReveal>
              <div className="system-shell rounded-[0.5rem] px-6 py-7 md:px-7">
                <SectionLabel number="05" label="Positionnement" />
                <h2
                  className="mb-5 font-display font-bold"
                  style={{
                    fontSize: "clamp(1.9rem, 3.3vw, 2.8rem)",
                    color: "var(--ivory)",
                    lineHeight: 1.06,
                    letterSpacing: "-0.03em",
                  }}
                >
                  Architecte opérationnel.
                  <br />
                  <span style={{ color: "var(--copper)" }}>Designer de systèmes business.</span>
                </h2>
                <p className="mb-6 font-body text-sm leading-7" style={{ color: "var(--ivory-muted)" }}>
                  Ma valeur n&apos;est pas une addition de compétences. Elle est dans la capacité à relier
                  stratégie, conversion, IA appliquée, automatisation, données et exécution jusqu&apos;à un
                  système mesurable.
                </p>
                <div className="system-panel rounded-[0.5rem] px-5 py-5">
                  <p className="mb-2 font-mono text-[10px] tracking-[0.18em]" style={{ color: "var(--steel-light)" }}>
                    PRINCIPE DE LECTURE
                  </p>
                  <p className="font-body text-sm leading-7" style={{ color: "var(--ivory-soft)" }}>
                    Je ne construis pas des pages isolées. Je construis des systèmes qui produisent,
                    se pilotent et restent utilisables après livraison.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-8">
            <ScrollReveal delay={80}>
              <div className="system-shell rounded-[0.5rem] px-6 py-7 md:px-7">
                <p className="mb-6 font-mono text-[11px] tracking-[0.18em]" style={{ color: "var(--steel-light)" }}>
                  MATRICE D&apos;INTERVENTION
                </p>
                <div className="space-y-4">
                  {CAPABILITIES.map((cap) => (
                    <div
                      key={cap.label}
                      className="system-panel system-panel-hover rounded-[0.5rem] px-5 py-5"
                    >
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-center">
                        <div className="md:col-span-5">
                          <p className="font-display text-lg font-semibold" style={{ color: "var(--ivory)" }}>
                            {cap.label}
                          </p>
                        </div>
                        <div className="md:col-span-5">
                          <p className="font-mono text-[11px] tracking-[0.14em]" style={{ color: "var(--steel-light)" }}>
                            {cap.tag}
                          </p>
                        </div>
                        <div className="md:col-span-2 md:flex md:justify-end">
                          <span className="system-chip" style={{ color: "var(--copper)" }}>
                            {cap.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
