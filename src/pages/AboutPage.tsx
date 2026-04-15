import { PageMeta } from "@/components/common/PageMeta"
import { PageHeroTitle } from "@/components/common/PageHeroTitle"
import { ScrollReveal } from "@/components/common/ScrollReveal"
import { SectionLabel } from "@/components/common/SectionLabel"
import { CtaBanner } from "@/components/sections/CtaBanner"

const EXPERTISE_AREAS = [
  {
    label: "Architecture opérationnelle",
    description:
      "Quand une équipe sent que tout avance mais que rien ne tient vraiment, je reviens au système. Quels flux se contredisent, où les décisions se perdent, et comment redonner une logique commune aux outils, aux rôles et aux priorités.",
  },
  {
    label: "IA appliquée & automation",
    description:
      "Je ne cherche pas à ajouter de l'IA partout. Je cherche où elle remplace une friction concrète : qualification, synthèse, structuration, aide à la décision ou automatisation répétitive réellement utile aux équipes.",
  },
  {
    label: "Architecture de conversion",
    description:
      "Le sujet n'est pas seulement la page ou le tunnel. C'est l'enchaînement complet entre acquisition, proposition, CRM, suivi et lecture des signaux. J'interviens là où le revenu fuit faute d'architecture claire.",
  },
  {
    label: "Gouvernance IA pragmatique",
    description:
      "Dès qu'une équipe utilise plusieurs outils IA sans cadre, les risques montent vite : données, qualité, cohérence. Mon approche consiste à poser des règles simples, documentées et suffisamment légères pour rester utilisables.",
  },
]

const TRAJECTORY = [
  {
    period: "Aujourd'hui",
    role: "Architecte opérationnel & AI Product Builder",
    detail: "Audits, architectures revenue, outils IA internes, accompagnement fractionnel. Interventions sur des systèmes réels avec des résultats mesurables.",
  },
  {
    period: "Moyen terme",
    role: "AI Product Ops & Internal Tool Builder",
    detail: "Positionnement renforcé sur la conception d'outils métier, les agents IA et l'architecture de workflows complexes.",
  },
  {
    period: "Vision",
    role: "Studio opératif & Produits",
    detail: "Développement de micro-SaaS, outils internes packagés et ressources pour des équipes qui veulent s'autonomiser.",
  },
]

export function AboutPage() {
  return (
    <>
      <PageMeta
        title="À propos"
        description="Samuel Huys — architecte opérationnel et AI Product Builder. Structure, automatisation et IA appliquée."
      />
      <section className="pt-40 pb-20 bg-graphite-deep">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="system-shell rounded-[0.5rem] px-6 py-8 md:px-8 md:py-9">
              <SectionLabel label="À propos" />
              <PageHeroTitle className="mb-6">
                Samuel Huys.
                <br />
                <span className="text-copper">Digitrend Creation.</span>
              </PageHeroTitle>
              <p className="font-body text-lg max-w-3xl text-ivory-muted leading-[1.8]">
                Architecte opérationnel, designer de systèmes business, constructeur d&apos;outils.
                Le fil conducteur : relier stratégie, système et exécution jusqu&apos;au résultat concret.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-graphite-mid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-6">
              <ScrollReveal>
                <h2 className="font-display font-bold text-2xl mb-6 text-ivory tracking-[-0.02em]">
                  Ce que je fais. Et comment je le pense.
                </h2>
                <div className="flex flex-col gap-5">
                  <p className="font-body text-sm leading-7 text-ivory-muted">
                    Digitrend Creation n'est pas une agence web. Ce n'est pas non plus un cabinet de consulting générique. C'est un studio opératif construit autour d'une conviction : la plupart des problèmes de performance digitale ne sont pas des problèmes de budget ou de talent, mais des problèmes d'architecture.
                  </p>
                  <p className="font-body text-sm leading-7 text-ivory-muted">
                    Des systèmes mal conçus. Des outils mal connectés. Des processus qui se contredisent. Des décisions prises à l'aveugle faute de données utilisables. Tout cela génère des frictions invisibles qui coûtent cher, en temps, en conversions et en énergie.
                  </p>
                  <p className="font-body text-sm leading-7 text-ivory-muted">
                    Mon travail, c'est de remettre de l'ordre dans ces systèmes. Identifier les blocages réels, concevoir des architectures cohérentes, déployer des outils qui servent vraiment et mesurer que cela fonctionne.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div className="md:col-span-5 md:col-start-8">
              <ScrollReveal delay={80}>
                <div className="system-shell rounded-[0.5rem] p-8">
                  <p className="font-mono text-xs tracking-widest mb-6 text-copper">
                    DOMAINES D'EXPERTISE
                  </p>
                  <div className="flex flex-col gap-6">
                    {EXPERTISE_AREAS.map((area) => (
                      <div
                        key={area.label}
                        className="border-l border-mineral-dark pl-5"
                      >
                        <p className="mb-2 font-display text-base font-semibold text-ivory">
                          {area.label}
                        </p>
                        <p className="font-body text-sm leading-7 text-ivory-muted">
                          {area.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-graphite-deep">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display font-bold text-2xl mb-12 text-ivory tracking-[-0.02em]">
              Trajectoire & vision
            </h2>
          </ScrollReveal>
          <div className="flex flex-col gap-6">
            {TRAJECTORY.map((t, i) => (
              <ScrollReveal key={t.period} delay={i * 70}>
                <div className={`system-panel grid grid-cols-1 md:grid-cols-12 gap-6 p-8 rounded-[0.5rem] ${i === 0 ? "system-shell-warm" : ""}`}>
                  <div className="md:col-span-2">
                    <span className="font-mono text-xs tracking-widest text-copper">
                      {t.period.toUpperCase()}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-display font-bold text-base text-ivory">
                      {t.role}
                    </h3>
                  </div>
                  <div className="md:col-span-6">
                    <p className="font-body text-sm leading-7 text-ivory-muted">
                      {t.detail}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-mineral-dark">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="system-shell rounded-[0.5rem] px-6 py-7 md:px-8 md:py-8 max-w-4xl">
              <p className="font-mono text-xs tracking-widest mb-6 text-copper">
                LA CONVICTION CENTRALE
              </p>
              <blockquote>
                <p
                  className="font-body leading-9 text-ivory-soft"
                  style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)" }}
                >
                  "La performance digitale n'est pas une question de budget ou d'outil. C'est une question de clarté systémique. Quand chaque flux a une logique, quand chaque outil a un rôle précis et quand chaque donnée est exploitable, les résultats suivent."
                </p>
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CtaBanner
        title="Vous travaillez avec une personne, pas une agence."
        subtitle="Chaque mission est portée directement. Pas de sous-traitance, pas d'intermédiaire. Juste un engagement clair sur un résultat défini."
        primaryLabel="Prendre contact"
        primaryHref="/diagnostic"
        secondaryLabel="Voir les services"
        secondaryHref="/services"
      />
    </>
  )
}

export default AboutPage
