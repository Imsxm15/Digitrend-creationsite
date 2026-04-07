import { Link } from "react-router-dom"
import { ScrollReveal } from "@/components/common/ScrollReveal"
import { SectionLabel } from "@/components/common/SectionLabel"

const STEPS = [
  {
    number: "01",
    title: "Cartographier",
    phase: "Diagnostic",
    duration: "J1–J2",
    description:
      "Je lis les flux, les outils, les données et les dépendances pour voir où l'énergie se perd vraiment.",
    detail: "Entretien de cadrage · Audit documentaire · Lecture des outils",
  },
  {
    number: "02",
    title: "Diagnostiquer",
    phase: "Diagnostic",
    duration: "J3–J5",
    description:
      "Je distingue ce qui est urgent de ce qui est structurant avec un ordre de traitement défendable côté business.",
    detail: "Matrice d'impact · Priorités · Risques de mise en œuvre",
  },
  {
    number: "03",
    title: "Architecturer",
    phase: "Exécution",
    duration: "J6–J10",
    description:
      "Je conçois le système cible : flux, automatisations, écrans utiles et logique métier connectée.",
    detail: "Architecture système · Wireframes · Décisions techniques",
  },
  {
    number: "04",
    title: "Déployer",
    phase: "Exécution",
    duration: "J11–J12",
    description:
      "Je configure, implémente, teste et documente ce qui doit devenir opératif dans le réel.",
    detail: "Setup · Développement · QA · Documentation",
  },
  {
    number: "05",
    title: "Piloter",
    phase: "Exécution",
    duration: "J13–J14",
    description:
      "Je mets en place les KPI, les alertes et la revue régulière pour que les gains tiennent dans le temps.",
    detail: "Dashboard · KPI · Revue mensuelle · Ajustements",
  },
] as const

export function MethodSection() {
  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-[92rem] px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4 md:sticky md:top-28 md:self-start">
            <ScrollReveal>
              <div className="system-shell rounded-[0.5rem] px-6 py-7 md:px-7">
                <SectionLabel number="03" label="Protocole de livraison" />
                <h2
                  className="mb-5 font-display font-bold"
                  style={{
                    fontSize: "clamp(1.9rem, 3.3vw, 2.8rem)",
                    color: "var(--ivory)",
                    lineHeight: 1.06,
                    letterSpacing: "-0.03em",
                  }}
                >
                  Cinq phases.
                  <br />
                  <span style={{ color: "var(--copper)" }}>Une logique de système.</span>
                </h2>
                <p
                  className="mb-6 font-body text-sm leading-7"
                  style={{ color: "var(--ivory-muted)" }}
                >
                  La méthode n&apos;est pas décorative. Elle sert à décider vite, livrer proprement et
                  garder un pilotage exploitable après déploiement.
                </p>
                <div className="space-y-3">
                  <div className="system-kpi-row py-0 pb-3">
                    <span className="font-mono text-[11px] tracking-[0.16em]" style={{ color: "var(--steel-light)" }}>
                      Diagnostic
                    </span>
                    <span className="font-mono text-sm" style={{ color: "var(--copper)" }}>
                      J1 → J5
                    </span>
                  </div>
                  <div className="system-kpi-row py-0 pb-3">
                    <span className="font-mono text-[11px] tracking-[0.16em]" style={{ color: "var(--steel-light)" }}>
                      Exécution
                    </span>
                    <span className="font-mono text-sm" style={{ color: "var(--ivory-soft)" }}>
                      J6 → J14
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-8">
            <div className="space-y-5">
              {STEPS.map((step, index) => (
                <ScrollReveal key={step.number} delay={index * 70}>
                  <article className="system-panel system-panel-hover rounded-[0.5rem] px-6 py-6 md:px-7">
                    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="system-chip" style={{ color: "var(--copper)" }}>
                          {step.number}
                        </span>
                        <span
                          className="system-chip"
                          style={{
                            color: step.phase === "Diagnostic" ? "var(--copper)" : "var(--steel-light)",
                          }}
                        >
                          {step.phase}
                        </span>
                      </div>
                      <span className="system-chip" style={{ color: "var(--ivory-muted)" }}>
                        {step.duration}
                      </span>
                    </div>

                    <div className="grid gap-4 md:grid-cols-12 md:gap-6">
                      <div className="md:col-span-4">
                        <h3
                          className="font-display text-2xl font-bold"
                          style={{ color: "var(--ivory)", letterSpacing: "-0.02em" }}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <div className="md:col-span-8">
                        <p
                          className="mb-4 font-body text-sm leading-7"
                          style={{ color: "var(--ivory-muted)" }}
                        >
                          {step.description}
                        </p>
                        <div className="system-divider-soft mb-4" />
                        <p
                          className="font-mono text-[11px] tracking-[0.14em]"
                          style={{ color: "var(--steel-light)" }}
                        >
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={180}>
              <div className="system-shell mt-8 rounded-[0.5rem] px-6 py-6 md:px-7">
                <p
                  className="mb-3 font-mono text-[11px] tracking-[0.18em]"
                  style={{ color: "var(--steel-light)" }}
                >
                  EXEMPLE DE PLANNING POUR UNE INTERVENTION DE 14 JOURS
                </p>
                <div className="grid gap-6 md:grid-cols-12 md:items-center">
                  <div className="md:col-span-8">
                    <p className="font-body text-sm leading-7" style={{ color: "var(--ivory-muted)" }}>
                      Le point d&apos;entrée varie selon le contexte, mais la logique reste la même :
                      rendre visible, prioriser, concevoir, déployer et garder le système pilotable.
                    </p>
                  </div>
                  <div className="md:col-span-4 md:flex md:justify-end">
                    <Link
                      to="/methode"
                      className="system-button-text inline-flex items-center rounded-[0.5rem] border px-7 py-4 transition-all duration-300 hover:border-[var(--copper)] hover:text-[var(--copper)]"
                      style={{
                        borderColor: "var(--mineral-warm)",
                        color: "var(--ivory-muted)",
                      }}
                    >
                      Voir la méthode complète
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
