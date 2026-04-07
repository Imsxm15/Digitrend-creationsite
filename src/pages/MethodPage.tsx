import { PageMeta } from "@/components/common/PageMeta"
import { ScrollReveal } from "@/components/common/ScrollReveal"
import { SectionLabel } from "@/components/common/SectionLabel"
import { CtaBanner } from "@/components/sections/CtaBanner"

const PRINCIPLES = [
  {
    number: "I",
    title: "La structure avant la vitesse",
    description: "Aller vite sur un système mal conçu, c'est creuser plus vite la mauvaise direction. Nous prenons le temps de comprendre avant d'agir. La cartographie vient avant l'exécution.",
  },
  {
    number: "II",
    title: "L'impact comme boussole",
    description: "Pas de perfectionnisme gratuit. Pas d'optimisation pour l'optimisation. Chaque choix de conception et d'implementation est evalue a l'aune de son impact mesurable sur le business.",
  },
  {
    number: "III",
    title: "La preuve plutot que la promesse",
    description: "Nous ne vendons pas du potentiel. Nous livrons des systèmes fonctionnels avec des livrables précis, documentes et testes. La credibilite se construit sur ce qui est reellement livre.",
  },
  {
    number: "IV",
    title: "L'IA au service du problème",
    description: "L'IA n'est pas un objectif. C'est un levier parmi d'autres. Nous l'utilisons quand elle resout un problème précis mieux que les alternatives — jamais pour faire de l'IA pour de l'IA.",
  },
  {
    number: "V",
    title: "La documentation comme fondation",
    description: "Un système non documente est un système fragile. Chaque automatisation, chaque architecture, chaque outil deploye est accompagne d'une documentation claire pour le faire vivre.",
  },
]

const TOOLS = [
  { category: "Automation", items: ["Make (Integromat)", "Zapier", "n8n", "Airtable"] },
  { category: "IA appliquee", items: ["OpenAI API", "Claude API", "LangChain", "Perplexity"] },
  { category: "Interfaces", items: ["React / TypeScript", "Next.js", "Webflow", "Framer"] },
  { category: "Data & Analytics", items: ["Google Analytics 4", "Metabase", "Looker Studio", "Segment"] },
  { category: "CRM & Marketing", items: ["HubSpot", "Brevo", "ActiveCampaign", "Lemlist"] },
  { category: "Gestion & Ops", items: ["Notion", "Linear", "ClickUp", "Loom"] },
]

export function MethodPage() {
  return (
    <>
      <PageMeta
        title="Méthode"
        description="Cinq phases pour transformer vos frictions en systèmes opérationnels. Écoute, analyse, design, exécution, transmission."
      />
      <section className="pt-40 pb-20 bg-graphite-deep">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="system-shell rounded-[0.5rem] px-6 py-8 md:px-8 md:py-9">
              <SectionLabel label="Methode" />
              <h1
                className="font-display font-extrabold mb-6 text-ivory tracking-[-0.03em] leading-[1.05]"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
              >
                Comment nous travaillons.
                <br />
                <span className="text-copper">Et pourquoi ça compte.</span>
              </h1>
              <p className="font-body text-lg max-w-3xl text-ivory-muted leading-[1.8]">
                Une approche n&apos;est pas une méthode plaquee. C&apos;est un protocole de lecture,
                de décision, d&apos;exécution et de transmission qui garde le système exploitable.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-graphite-mid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-6">
              <ScrollReveal>
                <h2 className="font-display font-bold text-2xl mb-4 text-ivory tracking-[-0.02em]">
                  Le processus type
                </h2>
                <p className="font-body text-sm leading-7 text-ivory-muted">
                  Chaque mission suit une progression logique, meme si le point d'entree varie. L'objectif constant : comprendre avant d'agir, concevoir avant de déployer, mesurer avant de valider.
                </p>
              </ScrollReveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { phase: "01", title: "Ecoute", detail: "Comprendre le contexte, les contraintes et l'objectif business réel." },
              { phase: "02", title: "Analyse", detail: "Cartographier les flux, les outils, les données et les blocages." },
              { phase: "03", title: "Design", detail: "Concevoir l'architecture cible et les solutions a déployer." },
              { phase: "04", title: "Execution", detail: "Implementer avec rigueur, tester et documenter." },
              { phase: "05", title: "Transmission", detail: "Livrer un système autonome et former les utilisateurs." },
            ].map((step, i) => (
              <ScrollReveal key={step.phase} delay={i * 60}>
                <div className="system-panel rounded-[0.5rem] p-6 h-full">
                  <span className="font-mono text-xs tracking-widest block mb-3 text-copper">
                    {step.phase}
                  </span>
                  <h3 className="font-display font-bold text-lg mb-3 text-ivory">
                    {step.title}
                  </h3>
                  <p className="font-body text-xs leading-6 text-ivory-muted">
                    {step.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-graphite-deep">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <ScrollReveal>
              <h2 className="font-display font-bold text-2xl mb-4 text-ivory tracking-[-0.02em]">
                Les principes qui guident chaque intervention
              </h2>
            </ScrollReveal>
          </div>
          <div className="flex flex-col gap-6">
            {PRINCIPLES.map((p, i) => (
              <ScrollReveal key={p.number} delay={i * 70}>
                <div className="system-panel grid grid-cols-1 md:grid-cols-12 gap-6 p-8 rounded-[0.5rem]">
                  <div className="md:col-span-1">
                    <span className="font-display font-bold text-2xl text-mineral-warm">
                      {p.number}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-display font-bold text-lg text-ivory tracking-[-0.01em]">
                      {p.title}
                    </h3>
                  </div>
                  <div className="md:col-span-7">
                    <p className="font-body text-sm leading-7 text-ivory-muted">
                      {p.description}
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
            <h2 className="font-display font-bold text-2xl mb-4 text-ivory tracking-[-0.02em]">
              Outillage de référence
            </h2>
            <p className="font-body text-sm leading-7 mb-12 max-w-2xl text-ivory-muted">
              Le bon outil depend du problème. Voici les categories et outils couramment utilises dans nos interventions. Aucun dogmatisme — nous choisissons en fonction du contexte client.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOOLS.map((tool, i) => (
              <ScrollReveal key={tool.category} delay={i * 60}>
                <div className="system-panel rounded-[0.5rem] p-6">
                  <p className="font-mono text-xs tracking-widest mb-4 text-copper">
                    {tool.category.toUpperCase()}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {tool.items.map((item) => (
                      <li
                        key={item}
                        className="font-body text-sm text-ivory-muted"
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
        subtitle="Discutons de votre situation spécifique. 30 minutes pour identifier si et comment nous pouvons avancer avec vous."
        primaryLabel="Demarrer un diagnostic"
        primaryHref="/diagnostic"
        secondaryLabel="Voir les services"
        secondaryHref="/services"
      />
    </>
  )
}

export default MethodPage
