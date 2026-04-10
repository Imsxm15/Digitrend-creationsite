import {
  ClipboardList,
  Gauge,
  Search,
  Settings2,
  Workflow,
} from "lucide-react"
import { Link } from "react-router-dom"
import { ScrollReveal } from "@/components/common/ScrollReveal"
import { SectionLabel } from "@/components/common/SectionLabel"
import { StepCards, type StepCardItem } from "@/components/common/StepCards"

const steps: StepCardItem[] = [
  {
    id: "cartographier",
    eyebrow: "Etape 01",
    title: "Cartographier",
    description: "Nous lisons les flux, les outils, les donnees et les dependances pour voir ou l'energie se perd vraiment.",
    bullets: [
      "Entretien de cadrage",
      "Lecture des outils et du tunnel",
      "Identification des points de rupture",
    ],
    meta: "Diagnostic - J1 a J2",
    icon: Search,
  },
  {
    id: "diagnostiquer",
    eyebrow: "Etape 02",
    title: "Diagnostiquer",
    description: "Nous distinguons ce qui est urgent de ce qui est structurant avec un ordre de traitement defendable.",
    bullets: [
      "Matrice impact / effort",
      "Quick wins versus architecture",
      "Risques de mise en oeuvre rendus visibles",
    ],
    meta: "Diagnostic - J3 a J5",
    icon: ClipboardList,
  },
  {
    id: "architecturer",
    eyebrow: "Etape 03",
    title: "Architecturer",
    description: "Nous concevons le systeme cible : tunnel, CRM, automatisations, interfaces utiles et logique metier.",
    bullets: [
      "Schema cible par flux",
      "Priorites techniques et business",
      "Choix outillage avant implementation",
    ],
    meta: "Execution - J6 a J10",
    icon: Workflow,
  },
  {
    id: "deployer",
    eyebrow: "Etape 04",
    title: "Deployer",
    description: "Nous configurons, implementons, testons et documentons ce qui doit devenir operatif dans le reel.",
    bullets: [
      "Configuration et connexions utiles",
      "QA sur le parcours reel",
      "Documentation minimale exploitable",
    ],
    meta: "Execution - J11 a J12",
    icon: Settings2,
  },
  {
    id: "piloter",
    eyebrow: "Etape 05",
    title: "Piloter",
    description: "Nous mettons en place les KPI, les alertes et la revue reguliere pour que les gains tiennent dans le temps.",
    bullets: [
      "Tableau de bord utile",
      "Signaux de suivi et responsables clairs",
      "Boucle d'ajustement sur les vrais KPI",
    ],
    meta: "Execution - J13 a J14",
    icon: Gauge,
  },
]

export function MethodSection() {
  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-[92rem] px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4 md:sticky md:top-28 md:self-start">
            <ScrollReveal>
              <div className="system-shell rounded-[0.5rem] px-6 py-7 md:px-7">
                <SectionLabel number="03" label="Methode" />
                <h2
                  className="mb-5 font-display font-bold text-ivory leading-[1.06] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(1.9rem, 3.3vw, 2.8rem)" }}
                >
                  Cinq etapes. Une logique simple a suivre.
                </h2>
                <p className="mb-6 font-body text-sm leading-7 text-ivory-muted">
                  Le but n'est pas d'ajouter une couche de process. Le but est de rendre visible,
                  priorisable, deployable et pilotable ce qui compte vraiment.
                </p>
                <Link
                  to="/methode"
                  className="system-button-text inline-flex items-center rounded-[0.5rem] border border-mineral-warm px-6 py-4 text-ivory-muted transition-all duration-300 hover:border-copper hover:text-copper"
                >
                  Voir la methode complete
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-8">
            <StepCards
              items={steps}
              desktopColumnsClassName="md:grid-cols-2 xl:grid-cols-2"
              cardWidthClassName="auto-cols-[88%] sm:auto-cols-[62%]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
