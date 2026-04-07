import { ScrollReveal } from "@/components/common/ScrollReveal"
import { SectionLabel } from "@/components/common/SectionLabel"

const EVIDENCE_BLOCKS = [
  {
    eyebrow: "Diagnostic",
    value: "4–6j",
    title: "pour rendre les frictions visibles",
    detail:
      "Cartographie des blocages, lecture des flux existants et priorisation entre quick wins, chantiers et dette silencieuse.",
    toneClass: "text-copper",
  },
  {
    eyebrow: "Architecture Revenue",
    value: "10–14j",
    title: "pour réaligner acquisition, conversion et CRM",
    detail:
      "Audit, architecture cible, points de friction prioritaires et plan de déploiement par sprint plutôt qu'une promesse vague de refonte.",
    toneClass: "text-steel-light",
  },
  {
    eyebrow: "Pilotage",
    value: "1 synthèse",
    title: "pour repartir avec une suite claire",
    detail:
      "Un document court, exploitable et partageable pour que la prochaine décision soit plus simple à prendre.",
    toneClass: "text-system-success",
  },
] as const

const BEFORE_AFTER = [
  {
    before: "Des problèmes décrits à l'oral, sans ordre ni niveau d'impact",
    after: "Un système lu par flux, avec priorités nommées et séquence d'action",
  },
  {
    before: "Des outils présents mais pas de lecture commune de ce qu'ils produisent",
    after: "Une architecture cible, des responsables identifiés et des signaux suivis",
  },
  {
    before: "Des idées d'IA ou d'automatisation sans garde-fous ni rôle clair",
    after: "Des usages cadrés, documentés et reliés à un problème métier réel",
  },
  {
    before: "Une impression de complexité diffuse qui fatigue les équipes",
    after: "Un problème cadré, un ordre de traitement et des arbitrages assumés",
  },
] as const

export function ProofSection() {
  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <SectionLabel number="04" label="Preuves directes" />
            <h2
              className="mb-5 font-display font-bold text-ivory"
              style={{
                fontSize: "clamp(1.9rem, 3.3vw, 2.8rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
              }}
            >
              La preuve tient dans le niveau de sortie.
            </h2>
            <p className="font-body text-sm leading-7 text-ivory-muted">
              Pas de score magique ni de promesse abstraite. Ce qui compte ici, c'est la qualité
              du cadrage, la clarté des livrables et la facilité avec laquelle une équipe peut
              décider quoi faire ensuite.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {EVIDENCE_BLOCKS.map((block, index) => (
            <ScrollReveal key={block.title} delay={index * 70}>
              <article className="system-panel rounded-[0.5rem] px-6 py-6">
                <p className="mb-5 font-mono text-xs tracking-[0.18em] text-steel-light">
                  {block.eyebrow.toUpperCase()}
                </p>
                <div
                  className={`mb-3 font-display text-[clamp(2.4rem,4vw,3.3rem)] font-bold leading-none tracking-[-0.04em] ${block.toneClass}`}
                >
                  {block.value}
                </div>
                <p className="mb-3 font-display text-lg font-semibold tracking-[-0.02em] text-ivory">
                  {block.title}
                </p>
                <p className="font-body text-sm leading-7 text-ivory-muted">{block.detail}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={160}>
          <div className="system-shell mt-8 rounded-[0.5rem] px-6 py-6 md:px-7">
            <p className="mb-6 font-mono text-xs tracking-[0.18em] text-copper">AVANT → APRÈS</p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="system-panel rounded-[0.5rem] px-5 py-5">
                <p className="mb-5 font-mono text-xs tracking-[0.18em] text-system-error">
                  AVANT L'INTERVENTION
                </p>
                <ul className="space-y-4">
                  {BEFORE_AFTER.map((item) => (
                    <li key={item.before} className="flex items-start gap-3">
                      <span className="mt-1 font-mono text-xs text-system-error">&#10007;</span>
                      <span className="font-body text-sm leading-7 text-ivory-muted">
                        {item.before}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="system-panel rounded-[0.5rem] px-5 py-5">
                <p className="mb-5 font-mono text-xs tracking-[0.18em] text-system-success">
                  APRÈS LE CADRAGE
                </p>
                <ul className="space-y-4">
                  {BEFORE_AFTER.map((item) => (
                    <li key={item.after} className="flex items-start gap-3">
                      <span className="mt-1 font-mono text-xs text-system-success">&#10003;</span>
                      <span className="font-body text-sm leading-7 text-ivory-soft">
                        {item.after}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
