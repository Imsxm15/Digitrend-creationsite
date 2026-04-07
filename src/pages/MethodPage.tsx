import { ScrollReveal } from "@/components/common/ScrollReveal"
import { SectionLabel } from "@/components/common/SectionLabel"
import { CtaBanner } from "@/components/sections/CtaBanner"

const PRINCIPLES = [
  {
    number: "I",
    title: "La structure avant la vitesse",
    description: "Aller vite sur un système mal conçu, c'est creuser plus vite la mauvaise direction. On prend le temps de comprendre avant d'agir. La cartographie vient avant l'exécution.",
  },
  {
    number: "II",
    title: "L'impact comme boussole",
    description: "Pas de perfectionnisme gratuit. Pas d'optimisation pour l'optimisation. Chaque choix de conception et d'implémentation est évalué à l'aune de son impact mesurable sur le business.",
  },
  {
    number: "III",
    title: "La preuve plutôt que la promesse",
    description: "On ne vend pas du potentiel. On livre des systèmes fonctionnels avec des livrables précis, documentés et testés. La crédibilité se construit sur ce qui est réellement livré.",
  },
  {
    number: "IV",
    title: "L'IA au service du problème",
    description: "L'IA n'est pas un objectif. C'est un levier parmi d'autres. On l'utilise quand elle résout un problème précis mieux que les alternatives — jamais pour faire de l'IA pour de l'IA.",
  },
  {
    number: "V",
    title: "La documentation comme fondation",
    description: "Un système non documenté est un système fragile. Chaque automatisation, chaque architecture, chaque outil déployé est accompagné d'une documentation claire pour le faire vivre.",
  },
]

const TOOLS = [
  { category: "Automation", items: ["Make (Integromat)", "Zapier", "n8n", "Airtable"] },
  { category: "IA appliquée", items: ["OpenAI API", "Claude API", "LangChain", "Perplexity"] },
  { category: "Interfaces", items: ["React / TypeScript", "Next.js", "Webflow", "Framer"] },
  { category: "Data & Analytics", items: ["Google Analytics 4", "Metabase", "Looker Studio", "Segment"] },
  { category: "CRM & Marketing", items: ["HubSpot", "Brevo", "ActiveCampaign", "Lemlist"] },
  { category: "Gestion & Ops", items: ["Notion", "Linear", "ClickUp", "Loom"] },
]

export function MethodPage() {
  return (
    <>
      <section
        className="pt-40 pb-20"
        style={{ backgroundColor: "var(--graphite-deep)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionLabel label="Méthode" />
            <h1
              className="font-display font-extrabold mb-6"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                color: "var(--ivory)",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
              }}
            >
              Comment on travaille.
              <br />
              <span style={{ color: "var(--copper)" }}>Et pourquoi ça compte.</span>
            </h1>
            <p
              className="font-editorial italic text-xl max-w-2xl"
              style={{ color: "var(--ivory-muted)", lineHeight: 1.6 }}
            >
              Une approche n'est pas une méthodologie rigide. C'est un ensemble de principes qui guident chaque décision — de la première analyse au dernier livrable.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section
        className="py-20"
        style={{ backgroundColor: "var(--graphite-mid)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-6">
              <ScrollReveal>
                <h2
                  className="font-display font-bold text-2xl mb-4"
                  style={{ color: "var(--ivory)", letterSpacing: "-0.02em" }}
                >
                  Le processus type
                </h2>
                <p
                  className="font-body text-sm leading-7"
                  style={{ color: "var(--ivory-muted)" }}
                >
                  Chaque mission suit une progression logique, même si le point d'entrée varie. L'objectif constant : comprendre avant d'agir, concevoir avant de déployer, mesurer avant de valider.
                </p>
              </ScrollReveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { phase: "01", title: "Écoute", detail: "Comprendre le contexte, les contraintes et l'objectif business réel." },
              { phase: "02", title: "Analyse", detail: "Cartographier les flux, les outils, les données et les blocages." },
              { phase: "03", title: "Design", detail: "Concevoir l'architecture cible et les solutions à déployer." },
              { phase: "04", title: "Exécution", detail: "Implémenter avec rigueur, tester et documenter." },
              { phase: "05", title: "Transmission", detail: "Livrer un système autonome et former les utilisateurs." },
            ].map((step, i) => (
              <ScrollReveal key={step.phase} delay={i * 60}>
                <div
                  className="p-6 border h-full"
                  style={{
                    borderColor: "var(--mineral-dark)",
                    backgroundColor: "var(--graphite-deep)",
                  }}
                >
                  <span
                    className="font-mono text-xs tracking-widest block mb-3"
                    style={{ color: "var(--copper)" }}
                  >
                    {step.phase}
                  </span>
                  <h3
                    className="font-display font-bold text-lg mb-3"
                    style={{ color: "var(--ivory)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="font-body text-xs leading-6"
                    style={{ color: "var(--ivory-muted)" }}
                  >
                    {step.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20"
        style={{ backgroundColor: "var(--graphite-deep)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <ScrollReveal>
              <h2
                className="font-display font-bold text-2xl mb-4"
                style={{ color: "var(--ivory)", letterSpacing: "-0.02em" }}
              >
                Les principes qui guident chaque intervention
              </h2>
            </ScrollReveal>
          </div>
          <div className="flex flex-col gap-6">
            {PRINCIPLES.map((p, i) => (
              <ScrollReveal key={p.number} delay={i * 70}>
                <div
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 p-8 border"
                  style={{
                    borderColor: "var(--mineral-dark)",
                    backgroundColor: "var(--graphite-mid)",
                  }}
                >
                  <div className="md:col-span-1">
                    <span
                      className="font-display font-bold text-2xl"
                      style={{ color: "var(--mineral-warm)" }}
                    >
                      {p.number}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3
                      className="font-display font-bold text-lg"
                      style={{ color: "var(--ivory)", letterSpacing: "-0.01em" }}
                    >
                      {p.title}
                    </h3>
                  </div>
                  <div className="md:col-span-7">
                    <p
                      className="font-body text-sm leading-7"
                      style={{ color: "var(--ivory-muted)" }}
                    >
                      {p.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20"
        style={{ backgroundColor: "var(--mineral-dark)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2
              className="font-display font-bold text-2xl mb-4"
              style={{ color: "var(--ivory)", letterSpacing: "-0.02em" }}
            >
              Outillage de référence
            </h2>
            <p
              className="font-body text-sm leading-7 mb-12 max-w-2xl"
              style={{ color: "var(--ivory-muted)" }}
            >
              Le bon outil dépend du problème. Voici les catégories et outils couramment utilisés dans mes interventions. Aucun dogmatisme — je choisis en fonction du contexte client.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOOLS.map((tool, i) => (
              <ScrollReveal key={tool.category} delay={i * 60}>
                <div
                  className="p-6 border"
                  style={{
                    borderColor: "var(--mineral-warm)",
                    backgroundColor: "var(--graphite-mid)",
                  }}
                >
                  <p
                    className="font-mono text-xs tracking-widest mb-4"
                    style={{ color: "var(--copper)" }}
                  >
                    {tool.category.toUpperCase()}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {tool.items.map((item) => (
                      <li
                        key={item}
                        className="font-body text-sm"
                        style={{ color: "var(--ivory-muted)" }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="La méthode, c'est bien. L'appliquer, c'est mieux."
        subtitle="Discutons de votre situation spécifique. 30 minutes pour identifier si et comment on peut avancer ensemble."
        primaryLabel="Démarrer un diagnostic"
        primaryHref="/diagnostic"
        secondaryLabel="Voir les services"
        secondaryHref="/services"
      />
    </>
  )
}
