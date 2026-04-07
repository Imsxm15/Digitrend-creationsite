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
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Centered narrow header */}
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <SectionLabel number="05" label="Positionnement" />
            <h2
              className="mb-5 font-display font-bold text-ivory"
              style={{
                fontSize: "clamp(1.9rem, 3.3vw, 2.8rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
              }}
            >
              Architecte opérationnel.
              <br />
              <span className="text-copper">Designer de systèmes business.</span>
            </h2>
            <p className="mb-6 font-body text-sm leading-7 text-ivory-muted">
              Notre valeur n&apos;est pas une addition de compétences. Elle est dans la capacité à relier
              stratégie, conversion, IA appliquée, automatisation, données et exécution jusqu&apos;à un
              système mesurable.
            </p>
            <div className="system-panel mx-auto max-w-lg rounded-[0.5rem] px-5 py-5 text-left">
              <p className="mb-2 font-mono text-xs tracking-[0.18em] text-steel-light">
                PRINCIPE DE LECTURE
              </p>
              <p className="font-body text-sm leading-7 text-ivory-soft">
                Nous ne construisons pas des pages isolées. Nous construisons des systèmes qui produisent,
                se pilotent et restent utilisables après livraison.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Full-width capabilities matrix */}
        <ScrollReveal delay={80}>
          <div className="system-shell rounded-[0.5rem] px-6 py-7 md:px-7">
            <p className="mb-6 font-mono text-xs tracking-[0.18em] text-steel-light">
              MATRICE D&apos;INTERVENTION
            </p>
            <div className="space-y-4">
              {CAPABILITIES.map((cap) => (
                <div
                  key={cap.label}
                  className="system-panel rounded-[0.5rem] px-5 py-5"
                >
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-center">
                    <div className="md:col-span-5">
                      <p className="font-display text-lg font-semibold text-ivory">
                        {cap.label}
                      </p>
                    </div>
                    <div className="md:col-span-5">
                      <p className="font-mono text-xs tracking-[0.14em] text-steel-light">
                        {cap.tag}
                      </p>
                    </div>
                    <div className="md:col-span-2 md:flex md:justify-end">
                      <span className="system-chip text-copper">
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
    </section>
  )
}
