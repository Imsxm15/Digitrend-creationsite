import { PageMeta } from "@/components/common/PageMeta"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  ChartColumn,
  Route,
} from "lucide-react"
import { ScrollReveal } from "@/components/common/ScrollReveal"
import { SectionLabel } from "@/components/common/SectionLabel"
import { CtaBanner } from "@/components/sections/CtaBanner"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const FEATURED_CASE = {
  tag: "ARCHITECTURE",
  title: "Architecture d'automatisation CRM",
  subtitle: "Relier formulaire, scoring, CRM, Slack et pilotage sans multiplier les angles morts.",
  description:
    "Le besoin type : un flux de leads qui entre, mais une qualification commerciale encore trop manuelle. Ici, la démonstration porte sur un système ou chaque étape laisse une trace exploitable et declenche la bonne action au bon moment.",
  outputs: [
    "Scoring automatique selon source, urgence et valeur potentielle",
    "Notification Slack contextualisee pour l'équipe commerciale",
    "Creation CRM enrichie avec tags, proprietaire et priorite",
    "Vue de pilotage pour reperer les leads non traites en temps utile",
  ],
  beforeAfter: [
    { label: "Qualification lead", before: "Inbox + copier-coller", after: "3 étapes automatisées" },
    { label: "Temps de reaction", before: "Variable selon la charge", after: "< 15 minutes sur les leads chauds" },
    { label: "Lecture du pipeline", before: "Outils disperses", after: "1 flux tracable de bout en bout" },
  ],
  sheetSections: [
    {
      title: "Ce que le système doit resoudre",
      text: "Eviter que les leads a forte intention se perdent entre le formulaire, le CRM et le suivi humain. Le système doit qualifier, enrichir, notifier et rendre visible ce qui demande encore une intervention.",
    },
    {
      title: "Livrables visibles",
      text: "Cartographie du flux, logique de scoring, regles de routing, structure du tableau de pilotage et protocole de test pour vérifier que le flux reste fiable apres déploiement.",
    },
    {
      title: "Pourquoi c'est une preuve de méthode",
      text: "On voit ici le raisonnement complet : point d'entree, logique metier, declencheurs, enrichissement, sortie CRM et boucle de suivi. Ce n'est pas une promesse abstraite, c'est un système lisible.",
    },
  ],
} as const

const DEMO_CASES = [
  {
    id: "audit-friction",
    icon: Route,
    tag: "FRAMEWORK",
    title: "Framework d'audit des frictions",
    subtitle: "Cartographier un système business en cinq étapes avant de proposer quoi que ce soit.",
    description:
      "Une démonstration de cadrage pour identifier les pertes silencieuses, distinguer l'urgent du structurant et sortir avec un plan d'action defendable.",
    accordion: [
      {
        title: "Ce qui devient visible",
        content:
          "Matrice impact x effort, flux principaux, dependances cachees, points de blocage recurrents et priorites activables sans attendre une refonte complete.",
      },
      {
        title: "Sample deliverable",
        content:
          "Une page de synthese avec score des frictions, liste des quick wins, chantiers structurants et zones a laisser volontairement hors périmètre.",
      },
    ],
    sheetSections: [
      {
        title: "Question de depart",
        text: "Pourquoi l'équipe a-t-elle la sensation de travailler beaucoup sans améliorer vraiment la conversion, la coordination ou la vitesse d'exécution ?",
      },
      {
        title: "Approche",
        text: "Nous partons des flux réels, pas des organigrammes. Ou l'information entre, ou elle est transformee, ou elle se perd et ou une décision manque.",
      },
      {
        title: "Sortie attendue",
        text: "Une carte lisible du système actuel, un niveau de priorite par friction et un ordre de traitement qui protégé le temps du client.",
      },
    ],
  },
  {
    id: "conversion-audit",
    icon: ChartColumn,
    tag: "ANALYSE",
    title: "Diagnostic de conversion",
    subtitle: "Identifier les fuites concretes d'un tunnel avant de relancer l'acquisition.",
    description:
      "Un cas de lecture de tunnel B2B ou les points de friction, les hypotheses de test et les signaux de qualité sont rendus visibles en quelques ecrans.",
    accordion: [
      {
        title: "Ce qui est audite",
        content:
          "Promesse percue, friction formulaire, sequence CRM, qualité de l'offre, cohérence du suivi commercial et signal envoye au decideur dans les trois premieres secondes.",
      },
      {
        title: "Sample deliverable",
        content:
          "Liste priorisee des hypotheses, lecture avant/apres du tunnel, piste d'A/B test et recommandation sur ce qui merite un redesign versus une correction ciblee.",
      },
    ],
    sheetSections: [
      {
        title: "Point d'attention",
        text: "Le tunnel n'est pas evalue comme une page isolee mais comme une chaine complete : acquisition, promesse, friction, relance et transformation réelle.",
      },
      {
        title: "Ce que nous cherchons",
        text: "Rendre explicites les endroits ou l'intention se casse : charge cognitive, absence de preuve, offre mal calibree ou boucle CRM incomplete.",
      },
      {
        title: "Ce que le client recupere",
        text: "Des hypotheses testables, un ordre de traitement et une lecture commerciale defendable aupres d'une équipe marketing ou produit.",
      },
    ],
  },
  {
    id: "ai-tool",
    icon: Bot,
    tag: "OUTIL IA",
    title: "Outil interne de qualification",
    subtitle: "Construire un agent metier utile, pas une demo IA de plus.",
    description:
      "Exemple d'outil interne pour pre-qualifier des demandes entrantes, aider a la réponse et structurer la suite dans le CRM sans sortir du contexte metier.",
    accordion: [
      {
        title: "Ce qui est montre",
        content:
          "Prompt système, logique de garde-fous, validation humaine, format de sortie exploitable et point de reprise si l'agent hesite ou manque de signal.",
      },
      {
        title: "Sample deliverable",
        content:
          "Schema d'orchestration, criteres de qualification, interface de revue et plan de supervision pour eviter les reponses automatiques opaques.",
      },
    ],
    sheetSections: [
      {
        title: "Objectif",
        text: "Aider une équipe a traiter plus vite sans deleguer aveuglement la décision a un modele.",
      },
      {
        title: "Rigueur attendue",
        text: "Tracabilite des regles, sorties structurees, validation humaine et documentation minimale pour que l'outil reste exploitable apres sa livraison.",
      },
      {
        title: "Valeur metier",
        text: "Moins d'allers-retours, meilleure homogeneite de qualification et un gain de temps réel sur les demandes entrantes repetitives.",
      },
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

export function CasPage() {
  return (
    <>
      <PageMeta
        title="Cas d'études"
        description="Exemples concrets d'interventions : architecture CRM, diagnostic de conversion, outils IA internes."
      />
      <section className="pt-40 pb-20 bg-graphite-deep">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="system-shell rounded-[0.5rem] px-6 py-8 md:px-8 md:py-9">
              <SectionLabel label="Cas & démonstrations" />
              <h1
                className="mb-6 font-display font-extrabold text-ivory tracking-[-0.03em] leading-[1.05]"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
              >
                La pensee système,
                <br />
                <span className="text-copper">rendue visible.</span>
              </h1>
              <p className="max-w-3xl font-body text-lg text-ivory-muted leading-[1.8]">
                Ici, nous montrons comment un problème business se transforme en architecture lisible,
                en livrables concrets et en décisions actionnables. Pas des promesses de méthode :
                des systèmes expliques.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-graphite-mid">
        <div className="mx-auto max-w-7xl px-6">
          <div className="system-shell system-shell-warm mb-12 rounded-[0.5rem] p-6">
            <p className="mb-2 font-mono text-xs tracking-widest text-copper">
              NOTE DE TRANSPARENCE
            </p>
            <p className="font-body text-sm leading-7 text-ivory-muted">
              Ces démonstrations reprennent des logiques reellement utilisees dans nos interventions,
              sans exposer de données client. L&apos;objectif est simple : rendre visible la méthode,
              les choix d&apos;architecture et le niveau de rigueur attendu.
            </p>
          </div>

          <ScrollReveal>
            <div className="system-shell system-shell-warm rounded-[0.5rem] p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-12">
                <div className="md:col-span-5">
                  <span className="mb-5 inline-flex font-mono text-xs tracking-[0.2em] text-steel-light">
                    {FEATURED_CASE.tag}
                  </span>
                  <h2 className="mb-3 font-display text-3xl font-bold text-ivory tracking-[-0.02em]">
                    {FEATURED_CASE.title}
                  </h2>
                  <p className="system-interface mb-4 text-ivory-muted">
                    {FEATURED_CASE.subtitle}
                  </p>
                  <p className="mb-6 font-body text-sm leading-7 text-ivory-muted">
                    {FEATURED_CASE.description}
                  </p>

                  <p className="mb-3 font-mono text-xs tracking-widest text-copper">
                    LIVRABLES VISIBLES
                  </p>
                  <ul className="mb-8 flex flex-col gap-3">
                    {FEATURED_CASE.outputs.map((output) => (
                      <li key={output} className="flex items-start gap-3">
                        <span className="mt-1 font-mono text-xs text-system-success">
                          &#10003;
                        </span>
                        <span className="font-body text-sm text-ivory-soft">
                          {output}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Sheet>
                    <SheetTrigger asChild>
                      <button
                        type="button"
                        className="system-button-text btn-copper-glow inline-flex items-center gap-2 rounded-[0.5rem] px-7 py-4 transition-all duration-300 bg-copper text-graphite-deep"
                      >
                        Explorer le cas
                        <ArrowUpRight className="size-3.5" />
                      </button>
                    </SheetTrigger>
                    <SheetContent
                      side="right"
                      className="w-full overflow-y-auto border-mineral-dark bg-graphite-deep text-ivory sm:max-w-2xl"
                    >
                      <SheetHeader className="border-b border-mineral-dark">
                        <SheetTitle className="font-display text-2xl font-bold text-ivory">
                          {FEATURED_CASE.title}
                        </SheetTitle>
                        <SheetDescription className="font-body text-sm leading-7 text-ivory-muted">
                          {FEATURED_CASE.subtitle}
                        </SheetDescription>
                      </SheetHeader>
                      <div className="flex flex-col gap-6 px-4 py-6 md:px-6">
                        {FEATURED_CASE.sheetSections.map((section) => (
                          <div
                            key={section.title}
                            className="border border-mineral-dark bg-graphite-mid p-5"
                          >
                            <h3 className="mb-2 font-display text-lg font-semibold text-ivory">
                              {section.title}
                            </h3>
                            <p className="font-body text-sm leading-7 text-ivory-muted">
                              {section.text}
                            </p>
                          </div>
                        ))}
                      </div>
                      <SheetFooter className="border-t border-mineral-dark">
                        <Link
                          to="/diagnostic"
                          className="system-button-text btn-copper-glow inline-flex items-center justify-center gap-2 rounded-[0.5rem] px-6 py-4 bg-copper text-graphite-deep"
                        >
                          Demander un diagnostic similaire
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>
                </div>

                <div className="md:col-span-7">
                  <div className="system-panel mb-6 rounded-[0.5rem] p-5">
                    <p className="mb-4 font-mono text-xs tracking-widest text-copper">
                      WORKFLOW VISIBLE
                    </p>
                    <AutomationWorkflow />
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    {FEATURED_CASE.beforeAfter.map((metric) => (
                      <div key={metric.label} className="system-panel rounded-[0.5rem] p-5">
                        <p className="mb-3 font-mono text-xs tracking-[0.18em] text-ivory-muted">
                          {metric.label.toUpperCase()}
                        </p>
                        <p className="mb-2 font-body text-xs text-ivory-muted">
                          Avant : {metric.before}
                        </p>
                        <p className="font-body text-sm text-ivory-soft">
                          Apres : {metric.after}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {DEMO_CASES.map((cas, i) => {
              const Icon = cas.icon

              return (
                <ScrollReveal key={cas.id} delay={i * 80}>
                  <div className="system-panel flex h-full flex-col rounded-[0.5rem] p-8">
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <span className="inline-flex font-mono text-xs tracking-[0.2em] text-steel-light">
                        {cas.tag}
                      </span>
                      <Icon className="size-4 text-copper" />
                    </div>

                    <h2 className="mb-2 font-display text-xl font-bold text-ivory tracking-[-0.01em]">
                      {cas.title}
                    </h2>
                    <p className="system-interface mb-4 text-ivory-muted">
                      {cas.subtitle}
                    </p>
                    <p className="mb-6 font-body text-sm leading-7 text-ivory-muted">
                      {cas.description}
                    </p>

                    <Accordion type="single" collapsible className="mb-6 w-full">
                      {cas.accordion.map((item, index) => (
                        <AccordionItem
                          key={item.title}
                          value={`${cas.id}-${index}`}
                          className="border-mineral-dark"
                        >
                          <AccordionTrigger className="font-body text-sm text-ivory hover:no-underline">
                            {item.title}
                          </AccordionTrigger>
                          <AccordionContent className="font-body text-sm leading-7 text-ivory-muted">
                            {item.content}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>

                    <div className="mt-auto">
                      <Sheet>
                        <SheetTrigger asChild>
                          <button
                            type="button"
                            className="system-interface inline-flex items-center gap-2 transition-colors duration-200 text-copper"
                          >
                            Explorer le cas
                            <ArrowUpRight className="size-3.5" />
                          </button>
                        </SheetTrigger>
                        <SheetContent
                          side="right"
                          className="w-full overflow-y-auto border-mineral-dark bg-graphite-deep text-ivory sm:max-w-xl"
                        >
                          <SheetHeader className="border-b border-mineral-dark">
                            <SheetTitle className="font-display text-2xl font-bold text-ivory">
                              {cas.title}
                            </SheetTitle>
                            <SheetDescription className="font-body text-sm leading-7 text-ivory-muted">
                              {cas.subtitle}
                            </SheetDescription>
                          </SheetHeader>
                          <div className="flex flex-col gap-5 px-4 py-6 md:px-6">
                            {cas.sheetSections.map((section) => (
                              <div
                                key={section.title}
                                className="border border-mineral-dark bg-graphite-mid p-5"
                              >
                                <h3 className="mb-2 font-display text-lg font-semibold text-ivory">
                                  {section.title}
                                </h3>
                                <p className="font-body text-sm leading-7 text-ivory-muted">
                                  {section.text}
                                </p>
                              </div>
                            ))}
                          </div>
                          <SheetFooter className="border-t border-mineral-dark">
                            <Link
                              to="/diagnostic"
                              className="system-button-text inline-flex items-center justify-center gap-2 rounded-[0.5rem] px-6 py-4 bg-copper text-graphite-deep"
                            >
                              Parler de votre cas
                              <ArrowRight className="size-3.5" />
                            </Link>
                          </SheetFooter>
                        </SheetContent>
                      </Sheet>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-graphite-deep">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="mb-4 font-mono text-xs tracking-widest text-copper">
                SI VOTRE CAS RESSEMBLE A CA
              </p>
              <h2 className="mb-4 font-display text-2xl font-bold text-ivory tracking-[-0.02em]">
                Nous pouvons le rendre visible avec vous.
              </h2>
              <p className="font-body text-sm leading-7 text-ivory-muted">
                Nous travaillons souvent a partir d&apos;un problème flou : trafic présent mais conversion
                faible, équipes qui bricolent entre plusieurs outils, ou usage IA déjà lance sans
                système de controle. Le diagnostic sert a mettre ce flou en carte, en priorites et
                en trajectoire de mise en ordre.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CtaBanner
        title="Votre cas merite une lecture exploitable."
        subtitle="Un diagnostic de 30 minutes permet de distinguer ce qui releve d'une correction ciblee, d'une architecture a revoir ou d'un vrai chantier produit."
        primaryLabel="Recevoir un diagnostic"
        primaryHref="/diagnostic"
        secondaryLabel="Voir les services"
        secondaryHref="/services"
      />
    </>
  )
}

export default CasPage
