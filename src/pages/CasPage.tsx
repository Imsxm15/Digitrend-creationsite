import { useState } from "react"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  ChartColumn,
  Route,
  Workflow,
} from "lucide-react"
import { PageMeta } from "@/components/common/PageMeta"
import { ScrollReveal } from "@/components/common/ScrollReveal"
import { SectionLabel } from "@/components/common/SectionLabel"
import { SocialProofSection } from "@/components/common/SocialProofSection"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { pageCtas, pageHeroes } from "@/data/pageCopy"
import { organizationSchema, pageMetaContent } from "@/data/pageMeta"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const workflowNodes = [
  {
    id: "form",
    label: "Formulaire",
    detail:
      "Le point d'entree capture le contexte, la friction et le niveau d'urgence pour eviter les leads mal qualifies.",
  },
  {
    id: "logic",
    label: "Logique metier",
    detail:
      "Le scoring et le routing appliquent des regles simples, explicites et testables avant d'alimenter les outils aval.",
  },
  {
    id: "crm",
    label: "CRM",
    detail:
      "Chaque fiche est enrichie avec le bon owner, les bons tags et une priorite lisible sans saisie manuelle supplementaire.",
  },
  {
    id: "slack",
    label: "Slack",
    detail:
      "Les alertes ne partent que quand le contexte est suffisant et que la reaction humaine a une vraie valeur.",
  },
  {
    id: "dashboard",
    label: "Dashboard",
    detail:
      "Le pilotage montre les leads non traites, les delais de reponse et les points ou le flux se casse.",
  },
] as const

const featuredCase = {
  eyebrow: "CAS PHARE",
  title: "Architecture d'automatisation CRM",
  subtitle:
    "Relier formulaire, scoring, CRM, Slack et pilotage sans perdre les leads a forte intention.",
  problem:
    "Des demandes entraient bien, mais la qualification et le suivi commercial restaient trop manuels. Les leads chauds se perdaient entre le formulaire, les messages internes et le CRM.",
  action:
    "Refonte du flux autour d'un scoring simple, de regles de routing visibles, d'une fiche CRM enrichie automatiquement et d'un tableau de pilotage pour verifier le traitement reel.",
  result:
    "Le systeme devient tracable de bout en bout. L'equipe commerciale voit plus vite quoi traiter, pourquoi, et avec quel niveau de priorite.",
  metrics: [
    {
      value: "+35%",
      label: "conversion",
      context: "cas Digitrend contextualise sur un flux e-commerce / lead qualification",
    },
    {
      value: "< 15 min",
      label: "reaction sur les leads chauds",
      context: "des qu'un signal commercial fort est detecte",
    },
    {
      value: "1 flux",
      label: "de bout en bout",
      context: "de l'entree jusqu'au suivi CRM et pilotage",
    },
  ],
} as const

const secondaryCases = [
  {
    id: "audit-frictions",
    tag: "DIAGNOSTIC",
    title: "Framework d'audit des frictions",
    icon: Route,
    problem:
      "L'equipe sent qu'il y a un probleme, mais ne sait pas si le sujet releve du tunnel, du CRM, des process ou de l'organisation.",
    action:
      "Lecture du systeme reel, matrice impact / effort, cartographie des dependances et tri entre quick wins, chantier structurant et faux sujets.",
    result:
      "La discussion ne tourne plus autour d'impressions. Le client repart avec une carte, un ordre de traitement et des arbitrages defendables.",
    metrics: [
      "3 niveaux de priorite rendus visibles",
      "1 synthese livrable pour aligner l'equipe",
    ],
  },
  {
    id: "conversion-review",
    tag: "CONVERSION",
    title: "Diagnostic de conversion",
    icon: ChartColumn,
    problem:
      "Du trafic existe deja, mais la promesse, la preuve et la suite CRM ne produisent pas assez de revenu.",
    action:
      "Lecture du tunnel comme une chaine complete: acquisition, hero, friction formulaire, suivi commercial et qualite du signal des les 3 premieres secondes.",
    result:
      "Les hypotheses de test deviennent concretes. On sait quoi corriger vite, quoi redesign et quoi laisser hors perimetre.",
    metrics: [
      "hypotheses d'A/B test priorisees",
      "avant / apres du tunnel en lecture rapide",
    ],
  },
  {
    id: "ai-tooling",
    tag: "OUTIL IA",
    title: "Outil interne de qualification",
    icon: Bot,
    problem:
      "L'usage IA existe deja, mais reste diffuse, fragile et peu fiable des qu'il faut l'inserer dans un vrai process metier.",
    action:
      "Cadrage du cas d'usage, sortie structuree, garde-fous, validation humaine et interface de reprise au bon endroit du flux.",
    result:
      "L'outil sert un besoin metier clair, fait gagner du temps et reste exploitable apres la livraison.",
    metrics: [
      "-70% de temps de traitement sur les taches repetitives",
      "validation humaine la ou elle cree vraiment de la valeur",
    ],
  },
] as const

function AutomationWorkflow() {
  return (
    <svg viewBox="0 0 640 250" className="w-full" role="img" aria-label="Workflow CRM automatise">
      <defs>
        <marker
          id="arrow-head"
          markerWidth="10"
          markerHeight="10"
          refX="8"
          refY="5"
          orient="auto-start-reverse"
        >
          <path d="M0 0L10 5L0 10Z" fill="#C4853C" />
        </marker>
      </defs>

      <rect x="28" y="28" width="150" height="56" rx="10" fill="#1A1A1A" stroke="#3D3832" />
      <text x="50" y="51" fill="#F2EDE4" fontSize="14" fontFamily="JetBrains Mono, monospace">
        Formulaire
      </text>
      <text x="50" y="69" fill="#B8B2A6" fontSize="11" fontFamily="DM Sans, sans-serif">
        contexte + friction + message
      </text>

      <rect x="240" y="28" width="160" height="56" rx="10" fill="#1A1A1A" stroke="#C4853C" />
      <text x="263" y="51" fill="#F2EDE4" fontSize="14" fontFamily="JetBrains Mono, monospace">
        Make / logique
      </text>
      <text x="263" y="69" fill="#B8B2A6" fontSize="11" fontFamily="DM Sans, sans-serif">
        scoring + tags + routing
      </text>

      <rect x="462" y="28" width="150" height="56" rx="10" fill="#1A1A1A" stroke="#6B8299" />
      <text x="487" y="51" fill="#F2EDE4" fontSize="14" fontFamily="JetBrains Mono, monospace">
        CRM
      </text>
      <text x="487" y="69" fill="#B8B2A6" fontSize="11" fontFamily="DM Sans, sans-serif">
        fiche enrichie + owner
      </text>

      <rect x="138" y="154" width="160" height="56" rx="10" fill="#1A1A1A" stroke="#8AA3B8" />
      <text x="163" y="177" fill="#F2EDE4" fontSize="14" fontFamily="JetBrains Mono, monospace">
        Slack
      </text>
      <text x="163" y="195" fill="#B8B2A6" fontSize="11" fontFamily="DM Sans, sans-serif">
        alerte priorisee au bon moment
      </text>

      <rect x="352" y="154" width="180" height="56" rx="10" fill="#1A1A1A" stroke="#6B8F71" />
      <text x="378" y="177" fill="#F2EDE4" fontSize="14" fontFamily="JetBrains Mono, monospace">
        Dashboard
      </text>
      <text x="378" y="195" fill="#B8B2A6" fontSize="11" fontFamily="DM Sans, sans-serif">
        suivi des leads non traites
      </text>

      <path
        d="M178 56H240"
        stroke="#C4853C"
        strokeWidth="1.5"
        fill="none"
        markerEnd="url(#arrow-head)"
      />
      <path
        d="M400 56H462"
        stroke="#C4853C"
        strokeWidth="1.5"
        fill="none"
        markerEnd="url(#arrow-head)"
      />
      <path
        d="M320 84V132H218V154"
        stroke="#8AA3B8"
        strokeWidth="1.5"
        fill="none"
        markerEnd="url(#arrow-head)"
      />
      <path
        d="M320 84V132H442V154"
        stroke="#6B8F71"
        strokeWidth="1.5"
        fill="none"
        markerEnd="url(#arrow-head)"
      />
    </svg>
  )
}

function WorkflowExplorer() {
  return (
    <div className="rounded-[0.5rem] border border-mineral-dark bg-graphite-light p-5">
      <div className="flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-[0.5rem] border border-copper/20 bg-copper/10 text-copper">
          <Workflow className="size-5" aria-hidden="true" />
        </span>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-copper">
            Workflow visible
          </p>
          <p className="mt-1 font-body text-sm text-ivory-muted">
            Une lecture simple du systeme, puis des zones detaillees ouvrables sur mobile et desktop.
          </p>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-[0.5rem] border border-mineral-dark bg-graphite-mid p-4">
        <AutomationWorkflow />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {workflowNodes.map((node) => (
          <Sheet key={node.id}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="rounded-[0.5rem] border border-mineral-dark bg-graphite-mid px-4 py-4 text-left transition-colors duration-200 hover:border-copper/40"
              >
                <p className="font-display text-base font-semibold text-ivory">{node.label}</p>
                <p className="mt-2 font-body text-sm leading-6 text-ivory-muted">
                  Voir le detail
                </p>
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full overflow-y-auto border-mineral-dark bg-graphite-deep text-ivory sm:max-w-lg"
            >
              <SheetHeader className="border-b border-mineral-dark">
                <SheetTitle className="font-display text-2xl font-bold text-ivory">
                  {node.label}
                </SheetTitle>
                <SheetDescription className="font-body text-sm leading-7 text-ivory-muted">
                  {node.detail}
                </SheetDescription>
              </SheetHeader>
              <div className="px-4 py-6 md:px-6">
                <Link
                  to="/diagnostic"
                  className="system-button-text inline-flex items-center justify-center gap-2 rounded-[0.5rem] bg-copper px-6 py-4 text-graphite-deep"
                >
                  Demander un diagnostic similaire
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        ))}
      </div>
    </div>
  )
}

function CaseCard({
  tag,
  title,
  icon: Icon,
  problem,
  action,
  result,
  metrics,
}: {
  tag: string
  title: string
  icon: typeof Route
  problem: string
  action: string
  result: string
  metrics: readonly string[]
}) {
  return (
    <article className="flex h-full flex-col rounded-[0.5rem] border border-mineral-dark bg-graphite-light p-6">
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-copper">{tag}</span>
        <span className="grid size-10 place-items-center rounded-[0.5rem] border border-copper/20 bg-copper/10 text-copper">
          <Icon className="size-4" aria-hidden="true" />
        </span>
      </div>

      <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.02em] text-ivory">
        {title}
      </h3>

      <div className="mt-6 space-y-5">
        <div>
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-steel-light">
            Probleme
          </p>
          <p className="mt-2 font-body text-sm leading-7 text-ivory-muted">{problem}</p>
        </div>
        <div>
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-steel-light">
            Action
          </p>
          <p className="mt-2 font-body text-sm leading-7 text-ivory-muted">{action}</p>
        </div>
        <div>
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-steel-light">
            Resultat
          </p>
          <p className="mt-2 font-body text-sm leading-7 text-ivory-soft">{result}</p>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        {metrics.map((metric) => (
          <div key={metric} className="flex items-start gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-copper" aria-hidden="true" />
            <span className="font-body text-sm text-ivory-muted">{metric}</span>
          </div>
        ))}
      </div>

      <Link
        to="/diagnostic"
        className="mt-auto inline-flex items-center gap-2 pt-6 font-mono text-xs uppercase tracking-[0.16em] text-copper"
      >
        Demander un diagnostic
        <ArrowUpRight className="size-4" />
      </Link>
    </article>
  )
}

export function CasPage() {
  const hero = pageHeroes.cas
  const meta = pageMetaContent.cas
  const cta = pageCtas.cas
  const [activeMetricIndex, setActiveMetricIndex] = useState(0)

  return (
    <>
      <PageMeta
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        schema={[organizationSchema, ...meta.schema]}
      />

      <section className="bg-graphite-deep pb-18 pt-36 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="system-shell rounded-[0.5rem] px-6 py-7 md:px-8 md:py-8">
                  <SectionLabel label={hero.eyebrow} />
                  <h1
                    className="font-display font-extrabold tracking-[-0.03em] text-ivory leading-[1.04]"
                    style={{ fontSize: "clamp(2.4rem, 5.8vw, 4.9rem)" }}
                  >
                    {hero.title}
                  </h1>
                  <p className="mt-5 max-w-3xl font-body text-base leading-8 text-ivory-muted md:text-lg">
                    {hero.description}
                  </p>
                  <ul className="mt-6 max-w-3xl space-y-3">
                    {hero.bullets?.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-copper" aria-hidden="true" />
                        <span className="font-body text-sm leading-7 text-ivory-soft">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link
                      to={hero.primaryHref}
                      className="system-button-text inline-flex items-center justify-center rounded-[0.5rem] bg-copper px-7 py-4 text-graphite-deep transition-all duration-300 hover:bg-copper-light"
                    >
                      {hero.primaryLabel}
                    </Link>
                    <Link
                      to={hero.secondaryHref}
                      className="system-button-text inline-flex items-center justify-center rounded-[0.5rem] border border-mineral-warm px-7 py-4 text-ivory-muted transition-all duration-300 hover:border-copper hover:text-copper"
                    >
                      {hero.secondaryLabel}
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal delay={90}>
                <div className="system-shell system-shell-warm rounded-[0.5rem] p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-copper">
                    Resultats globaux
                  </p>
                  <div className="mt-5 grid gap-4 md:grid-cols-3 lg:grid-cols-1">
                    {featuredCase.metrics.map((metric, index) => (
                      <button
                        key={metric.label}
                        type="button"
                        onClick={() => setActiveMetricIndex(index)}
                        className={`rounded-[0.5rem] border px-4 py-4 text-left transition-colors duration-200 ${
                          activeMetricIndex === index
                            ? "border-copper/40 bg-copper/8"
                            : "border-mineral-dark bg-graphite-light"
                        }`}
                      >
                        <p className="font-display text-3xl font-bold tracking-[-0.04em] text-copper">
                          {metric.value}
                        </p>
                        <p className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-steel-light">
                          {metric.label}
                        </p>
                        <p className="mt-2 font-body text-xs leading-6 text-ivory-muted">
                          {metric.context}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <SocialProofSection
        route="cas"
        variant="logos+metrics+testimonials"
        title="Des preuves posees avant les cas."
        intro="References, recommandations publiques et chiffres contextualises arrivent avant les demonstrations pour installer un cadre de confiance solide."
      />

      <section className="bg-graphite-mid py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="rounded-[0.5rem] border border-mineral-dark bg-graphite-light px-5 py-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-copper">
                Note de transparence
              </p>
              <p className="mt-3 max-w-4xl font-body text-sm leading-7 text-ivory-muted">
                Les noms clients, donnees sensibles et volumes exacts ne sont pas exposes ici. Les
                cas montrent une logique d'intervention reelle, les types de livrables attendus et
                des resultats contextualises quand ils sont suffisamment defendables.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-graphite-mid py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <ScrollReveal>
                <div className="rounded-[0.5rem] border border-copper/20 bg-gradient-to-br from-copper/6 to-graphite-light px-6 py-6">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-copper">
                    {featuredCase.eyebrow}
                  </p>
                  <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.03em] text-ivory">
                    {featuredCase.title}
                  </h2>
                  <p className="mt-3 font-body text-sm leading-7 text-ivory-soft">
                    {featuredCase.subtitle}
                  </p>

                  <div className="mt-6 space-y-5">
                    <div>
                      <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-steel-light">
                        Probleme
                      </p>
                      <p className="mt-2 font-body text-sm leading-7 text-ivory-muted">
                        {featuredCase.problem}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-steel-light">
                        Action
                      </p>
                      <p className="mt-2 font-body text-sm leading-7 text-ivory-muted">
                        {featuredCase.action}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-steel-light">
                        Resultat
                      </p>
                      <p className="mt-2 font-body text-sm leading-7 text-ivory-soft">
                        {featuredCase.result}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    {featuredCase.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-[0.5rem] border border-mineral-dark bg-graphite-mid px-4 py-4">
                        <p className="font-display text-2xl font-bold tracking-[-0.03em] text-copper">
                          {metric.value}
                        </p>
                        <p className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-steel-light">
                          {metric.label}
                        </p>
                        <p className="mt-2 font-body text-xs leading-6 text-ivory-muted">
                          {metric.context}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/diagnostic"
                    className="system-button-text mt-7 inline-flex items-center justify-center gap-2 rounded-[0.5rem] bg-copper px-7 py-4 text-graphite-deep transition-all duration-300 hover:bg-copper-light"
                  >
                    Demander un diagnostic similaire
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <ScrollReveal delay={90}>
                <WorkflowExplorer />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Vous voyez le type de lecture. Voyons maintenant votre cas."
        subtitle="Le diagnostic gratuit sert a qualifier la bonne profondeur: correction rapide, architecture plus large ou chantier produit plus ambitieux."
        primaryLabel="Obtenir mon diagnostic gratuit"
        primaryHref="/diagnostic"
        primarySubtext="30 minutes, sans engagement"
        secondaryLabel="Voir les services"
        secondaryHref="/services"
      />

      <section className="bg-graphite-deep py-18 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-copper">
                Autres cas types
              </p>
              <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-ivory">
                Meme structure, autres contextes, meme exigence de clarte.
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-8 grid gap-4 xl:grid-cols-3">
            {secondaryCases.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 60}>
                <CaseCard {...item} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title={cta.title}
        subtitle={cta.subtitle}
        primaryLabel={cta.primaryLabel}
        primaryHref={cta.primaryHref}
        primarySubtext={cta.primarySubtext}
        secondaryLabel={cta.secondaryLabel}
        secondaryHref={cta.secondaryHref}
      />
    </>
  )
}

export default CasPage
