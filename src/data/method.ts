import type { LucideIcon } from "lucide-react"
import { ClipboardList, Search, Settings2, Workflow } from "lucide-react"

export type MethodStep = {
  id: string
  eyebrow: string
  title: string
  description: string
  bullets: string[]
  meta: string
  icon: LucideIcon
}

export const METHOD_STEPS: MethodStep[] = [
  {
    id: "cartographier",
    eyebrow: "Étape 01",
    title: "Cartographier",
    description:
      "Je lis les flux, les outils, les données et les dépendances pour voir où l’énergie se perd vraiment.",
    bullets: [
      "Entretien de cadrage",
      "Lecture des outils et du tunnel",
      "Identification des points de rupture",
    ],
    meta: "Diagnostic · J1 à J2",
    icon: Search,
  },
  {
    id: "prioriser",
    eyebrow: "Étape 02",
    title: "Prioriser",
    description:
      "Je distingue ce qui est urgent de ce qui est structurant avec un ordre de traitement défendable.",
    bullets: [
      "Matrice impact / effort",
      "Quick wins versus architecture",
      "Risques de mise en œuvre rendus visibles",
    ],
    meta: "Diagnostic · J3 à J5",
    icon: ClipboardList,
  },
  {
    id: "architecturer",
    eyebrow: "Étape 03",
    title: "Architecturer",
    description:
      "Je conçois le système cible : tunnel, CRM, automatisations, interfaces utiles et logique métier.",
    bullets: [
      "Schéma cible par flux",
      "Priorités techniques et business",
      "Choix d’outillage avant implémentation",
    ],
    meta: "Architecture · J6 à J10",
    icon: Workflow,
  },
  {
    id: "deployer",
    eyebrow: "Étape 04",
    title: "Déployer",
    description:
      "Je configure, j’implémente, je teste et je documente ce qui doit devenir opératif dans le réel.",
    bullets: [
      "Configuration et connexions utiles",
      "QA sur le parcours réel",
      "Documentation minimale exploitable",
    ],
    meta: "Exécution · J11 à J14",
    icon: Settings2,
  },
]
