import { ScrollReveal } from "@/components/common/ScrollReveal"
import { SectionLabel } from "@/components/common/SectionLabel"

const beforeAfter = [
  {
    label: "Lecture du probleme",
    before: "Des symptomes disperses et beaucoup d'intuition.",
    after: "Une carte claire des frictions et de leur impact.",
  },
  {
    label: "Priorisation",
    before: "Tout semble urgent, donc rien ne l'est vraiment.",
    after: "3 priorites visibles, ordonnees et defendables.",
  },
  {
    label: "Execution",
    before: "Des outils et des idees sans sequence commune.",
    after: "Un systeme cible, des quick wins et un plan realiste.",
  },
] as const

const deliveryOutputs = [
  {
    title: "Cartographie des frictions",
    detail: "Outil, flux, point de rupture et manque de signal sur le meme plan.",
  },
  {
    title: "Priorites et quick wins",
    detail: "Ce qui peut etre corrige vite, ce qui merite une architecture et ce qu'il faut laisser hors perimetre.",
  },
  {
    title: "Architecture cible",
    detail: "Tunnel, CRM, automatisation et pilotage reconnectes autour d'une logique commune.",
  },
  {
    title: "Suite exploitable",
    detail: "Un document court qui aide a arbitrer, deployer et mesurer la prochaine etape.",
  },
] as const

export function ProofSection() {
  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <SectionLabel number="04" label="Avant / apres" />
            <h2
              className="mb-5 font-display font-bold text-ivory"
              style={{
                fontSize: "clamp(1.9rem, 3.3vw, 2.8rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
              }}
            >
              Une lecture qui se comprend vite et s'execute mieux.
            </h2>
            <p className="font-body text-sm leading-7 text-ivory-muted">
              Le vrai gain n'est pas un mot plus ambitieux. C'est la capacite a passer d'un
              systeme flou a des priorites, une architecture et une prochaine etape claires.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="overflow-x-auto rounded-[0.5rem] border border-mineral-dark">
            <div className="grid grid-cols-[1.1fr_1fr_1fr] bg-graphite-mid">
              <div className="border-b border-r border-mineral-dark px-4 py-4 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ivory-muted">
                Sujet
              </div>
              <div className="border-b border-r border-mineral-dark px-4 py-4 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-system-error">
                Avant
              </div>
              <div className="border-b border-mineral-dark px-4 py-4 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-system-success">
                Apres
              </div>

              {beforeAfter.map((item) => (
                <div key={item.label} className="contents">
                  <div className="border-r border-t border-mineral-dark bg-graphite-light px-4 py-4 font-display text-base font-semibold text-ivory">
                    {item.label}
                  </div>
                  <div className="border-r border-t border-mineral-dark bg-graphite-light px-4 py-4 font-body text-sm leading-7 text-ivory-muted">
                    {item.before}
                  </div>
                  <div className="border-t border-mineral-dark bg-graphite-light px-4 py-4 font-body text-sm leading-7 text-ivory-soft">
                    {item.after}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {deliveryOutputs.map((output, index) => (
            <ScrollReveal key={output.title} delay={200 + index * 60}>
              <article className="system-panel rounded-[0.5rem] px-5 py-5">
                <p className="font-display text-lg font-semibold tracking-[-0.02em] text-ivory">
                  {output.title}
                </p>
                <p className="mt-3 font-body text-sm leading-7 text-ivory-muted">
                  {output.detail}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
