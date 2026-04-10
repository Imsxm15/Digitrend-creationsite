import { Bot, Route, TrendingDown, Workflow } from "lucide-react"
import { ScrollReveal } from "@/components/common/ScrollReveal"
import { SectionLabel } from "@/components/common/SectionLabel"
import { StepCards, type StepCardItem } from "@/components/common/StepCards"

const frictionItems: StepCardItem[] = [
  {
    id: "manual",
    eyebrow: "F01",
    title: "Processus manuels",
    description: "Des taches repetitives absorbent les equipes alors que le systeme pourrait deja en faire une partie.",
    bullets: [
      "Temps perdu sur du copier-coller",
      "Dependance forte a une ou deux personnes",
      "Peu de visibilite sur ce qui bloque vraiment",
    ],
    meta: "Temps perdu chaque semaine",
    icon: Workflow,
  },
  {
    id: "tools",
    eyebrow: "F02",
    title: "Outils qui s'accumulent",
    description: "CRM, analytics, support et marketing existent mais sans lecture commune ni priorite partagée.",
    bullets: [
      "Donnees presentes mais peu exploitables",
      "Aucune vue systeme fiable",
      "Decisions prises avec trop d'intuition",
    ],
    meta: "Vision fragmentee",
    icon: Route,
  },
  {
    id: "conversion",
    eyebrow: "F03",
    title: "Conversion qui fuit",
    description: "Le trafic arrive, mais le tunnel casse entre la promesse, le formulaire, le CRM ou la relance.",
    bullets: [
      "Signal d'intention mal capte",
      "Friction commerciale mal localisee",
      "Revenu sous-exploite",
    ],
    meta: "KPI qui stagnent",
    icon: TrendingDown,
  },
  {
    id: "ai",
    eyebrow: "F04",
    title: "IA utilisee a l'envers",
    description: "Des prompts, beaucoup d'essais, peu de cadre et encore moins de sortie vraiment exploitable.",
    bullets: [
      "Pas de gouvernance ni de role clair",
      "Des usages disperses sans process",
      "Beaucoup d'energie, peu d'effet reel",
    ],
    meta: "Usage non pilote",
    icon: Bot,
  },
]

export function FrictionsSection() {
  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-[92rem] px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4 md:sticky md:top-28 md:self-start">
            <ScrollReveal>
              <div className="system-shell rounded-[0.5rem] px-6 py-7 md:px-7">
                <SectionLabel number="01" label="Points de rupture" />
                <h2
                  className="mb-5 font-display font-bold text-ivory leading-[1.06] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(1.9rem, 3.3vw, 2.8rem)" }}
                >
                  Le frein principal n'est presque jamais l'outil.
                </h2>
                <p className="mb-6 font-body text-base leading-8 text-ivory-soft">
                  C'est le systeme qui n'est plus lisible.
                </p>
                <p className="font-body text-sm leading-7 text-ivory-muted">
                  Quand acquisition, operations, CRM et automatisation ne se parlent plus, la
                  performance devient une somme d'efforts locaux. Le diagnostic commence ici.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-8">
            <StepCards
              items={frictionItems}
              desktopColumnsClassName="md:grid-cols-2"
              cardWidthClassName="auto-cols-[86%] sm:auto-cols-[65%]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
