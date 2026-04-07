import { Link } from "react-router-dom"
import { ScrollReveal } from "@/components/common/ScrollReveal"
import { SectionLabel } from "@/components/common/SectionLabel"

const STEPS = [
  {
    number: "01",
    title: "Cartographier",
    phase: "Diagnostic",
    duration: "J1–J2",
    description: "Avant d'intervenir, comprendre. Je cartographie les flux existants, les outils, les processus et les données pour identifier où le système perd de l'énergie.",
    detail: "Entretien de cadrage · Audit documentaire · Analyse des outils",
  },
  {
    number: "02",
    title: "Diagnostiquer",
    phase: "Diagnostic",
    duration: "J3–J5",
    description: "Identifier les frictions réelles par ordre d'impact. Distinguer ce qui est urgent, ce qui est structurant et ce qui peut attendre. Prioriser avec des critères business clairs.",
    detail: "Matrice de priorisation · Score d'impact · Plan d'action",
  },
  {
    number: "03",
    title: "Architecturer",
    phase: "Exécution",
    duration: "J6–J10",
    description: "Concevoir le système cible : flux optimisés, outils connectés, automatisations pertinentes, interfaces utiles. Pas de sur-ingénierie — le bon niveau de complexité pour l'objectif.",
    detail: "Architecture système · Wireframes · Spécifications techniques",
  },
  {
    number: "04",
    title: "Déployer",
    phase: "Exécution",
    duration: "J11–J12",
    description: "Implémenter avec rigueur : configuration des outils, développement des automatisations, mise en place des interfaces, tests de validation. Chaque livrable est fonctionnel.",
    detail: "Setup · Développement · Tests · Documentation",
  },
  {
    number: "05",
    title: "Piloter",
    phase: "Exécution",
    duration: "J13–J14",
    description: "Un système déployé sans suivi se dégrade. Je mets en place les indicateurs de pilotage, les alertes et la revue régulière pour que les gains perdurent.",
    detail: "Dashboard · KPI · Revue mensuelle · Ajustements continus",
  },
]

export function MethodSection() {
  return (
    <section
      className="py-28"
      style={{ backgroundColor: "var(--mineral-dark)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-7">
            <ScrollReveal>
              <SectionLabel number="03" label="Méthode" />
              <h2
                className="font-display font-bold"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  color: "var(--ivory)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                Cinq phases. Une logique de système.
                <br />
                <span style={{ color: "var(--ivory-muted)" }}>Pas de magie — de la méthode.</span>
              </h2>
            </ScrollReveal>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute left-[calc(2rem+0.5px)] top-0 bottom-0 w-px hidden md:block"
            style={{ backgroundColor: "var(--mineral-warm)" }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-0">
            {STEPS.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 80}>
                <div className="group relative flex gap-8 pb-12 md:gap-12 last:pb-0">
                  <div className="flex-shrink-0 relative">
                    <div
                      className="flex size-16 items-center justify-center border-2 transition-all duration-400 group-hover:border-[var(--copper)]"
                      style={{
                        borderColor:
                          step.phase === "Diagnostic"
                            ? "rgba(196,133,60,0.55)"
                            : "var(--mineral-warm)",
                        backgroundColor: "var(--mineral-dark)",
                      }}
                    >
                      <span
                        className="font-mono text-xs tracking-widest"
                        style={{ color: "var(--copper)" }}
                      >
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 pt-3">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span
                        className="font-mono text-[10px] tracking-[0.18em] uppercase"
                        style={{
                          color:
                            step.phase === "Diagnostic"
                              ? "var(--copper)"
                              : "var(--steel-light)",
                        }}
                      >
                        {step.phase}
                      </span>
                      <span
                        className="font-mono text-[10px] tracking-[0.18em] uppercase"
                        style={{ color: "var(--ivory-muted)" }}
                      >
                        {step.duration}
                      </span>
                    </div>
                    <h3
                      className="font-display font-bold text-xl mb-3"
                      style={{ color: "var(--ivory)", letterSpacing: "-0.01em" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="font-body text-sm leading-7 mb-3 max-w-2xl"
                      style={{ color: "var(--ivory-muted)" }}
                    >
                      {step.description}
                    </p>
                    <p
                      className="font-mono text-xs"
                      style={{ color: "var(--steel)" }}
                    >
                      {step.detail}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={200}>
          <div
            className="mt-16 flex flex-col gap-4 border-t pt-12"
            style={{ borderColor: "var(--mineral-warm)" }}
          >
            <p
              className="font-mono text-xs tracking-widest"
              style={{ color: "var(--steel-light)" }}
            >
              EXEMPLE DE PLANNING POUR UNE INTERVENTION DE 14 JOURS · AJUSTÉ SELON LE PÉRIMÈTRE
            </p>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p
                className="font-editorial italic text-xl mb-2"
                style={{ color: "var(--ivory-muted)" }}
              >
                La méthode s'adapte au contexte.
              </p>
              <p
                className="font-body text-sm"
                style={{ color: "var(--ivory-muted)" }}
              >
                Chaque intervention ne commence pas au même endroit. Parfois on entre par le diagnostic, parfois directement par l'architecture. L'objectif reste le même.
              </p>
            </div>
            <Link
              to="/methode"
              className="flex-shrink-0 font-mono text-xs tracking-wider uppercase px-7 py-4 border transition-all duration-300 hover:border-[var(--copper)] hover:text-[var(--copper)] whitespace-nowrap"
              style={{
                borderColor: "var(--mineral-warm)",
                color: "var(--ivory-muted)",
              }}
            >
              Voir la méthode complète
            </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
