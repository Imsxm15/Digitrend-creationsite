import type { CoreRouteKey } from "@/types/site"

type HeroCopy = {
  eyebrow: string
  title: string
  accent?: string
  description: string
  bullets?: string[]
  primaryLabel: string
  primaryHref: string
  primarySubtext?: string
  secondaryLabel: string
  secondaryHref: string
  secondarySubtext?: string
}

type CtaCopy = {
  title: string
  subtitle: string
  primaryLabel: string
  primaryHref: string
  primarySubtext?: string
  secondaryLabel: string
  secondaryHref: string
}

export const pageHeroes: Record<CoreRouteKey, HeroCopy> = {
  home: {
    eyebrow: "SYSTÈMES DIGITAUX CLAIRS",
    title: "Je clarifie les flux qui bloquent votre revenu, votre CRM et vos opérations.",
    description:
      "J’accompagne les dirigeants, équipes e-commerce, SaaS et services qui veulent remettre acquisition, conversion, CRM et pilotage sur un système enfin lisible et actionnable.",
    bullets: [
      "Réduire les frictions qui coûtent du temps et du revenu",
      "Prioriser les chantiers qui font vraiment bouger les KPI",
      "Relier outils, données et équipes dans un système opératif",
    ],
    primaryLabel: "Demander un diagnostic gratuit",
    primaryHref: "/diagnostic",
    primarySubtext: "30 min, sans engagement",
    secondaryLabel: "Voir la méthode",
    secondaryHref: "/methode",
    secondarySubtext: "Lire les 4 étapes",
  },
  methode: {
    eyebrow: "MÉTHODE",
    title: "Ma méthode pour transformer des frictions diffuses en décisions exploitables.",
    description:
      "Une progression courte pour clarifier le problème, prioriser, concevoir l’architecture utile et déployer sans bruit.",
    bullets: [
      "Comprendre avant d’agir",
      "Prioriser selon l’impact business réel",
      "Livrer des systèmes documentés et pilotables",
    ],
    primaryLabel: "Commencer mon diagnostic gratuit",
    primaryHref: "/diagnostic",
    primarySubtext: "Réponse sous 24h",
    secondaryLabel: "Voir les cas clients",
    secondaryHref: "/cas",
    secondarySubtext: "Exemples concrets",
  },
  cas: {
    eyebrow: "CAS CLIENTS",
    title: "Des cas qui rendent les résultats visibles.",
    description:
      "Diagnostics, architectures et outils IA reliés à des gains concrets de conversion, de vitesse d’exécution et de lisibilité business.",
    bullets: [
      "Problème, actions et résultats sur le même écran",
      "Schémas lisibles plutôt que promesses abstraites",
      "Preuves contextualisées et citations publiques",
    ],
    primaryLabel: "Obtenir mon diagnostic gratuit",
    primaryHref: "/diagnostic",
    primarySubtext: "30 minutes, sans engagement",
    secondaryLabel: "Voir la méthode",
    secondaryHref: "/methode",
    secondarySubtext: "Comprendre l’approche",
  },
  services: {
    eyebrow: "SERVICES",
    title: "Choisissez le format qui débloquera vos frictions sans alourdir la suite.",
    description:
      "Chaque format correspond à un niveau de maturité précis pour cadrer, architecturer, automatiser ou piloter un système digital sans surinvestir trop tôt.",
    bullets: [
      "Diagnostic structuré pour voir clair vite",
      "Architecture revenue pour reconnecter le tunnel et le CRM",
      "Outils IA et pilotage pour tenir la cadence ensuite",
    ],
    primaryLabel: "Demander un diagnostic gratuit",
    primaryHref: "/diagnostic",
    primarySubtext: "Gratuit, sans engagement",
    secondaryLabel: "Voir la méthode",
    secondaryHref: "/methode",
    secondarySubtext: "Comprendre le process",
  },
  diagnostic: {
    eyebrow: "DIAGNOSTIC GRATUIT",
    title: "Identifiez vos frictions et votre prochaine décision utile en 30 minutes.",
    description:
      "Un premier échange pour dirigeants, équipes e-commerce, SaaS et services qui veulent qualifier le problème, la prochaine décision et le bon niveau d’intervention.",
    bullets: [
      "Un appel court pour clarifier le contexte",
      "Un premier tri entre quick wins et chantier structurant",
      "Une réponse rapide, sans pression commerciale",
    ],
    primaryLabel: "Demander mon diagnostic gratuit",
    primaryHref: "#diagnostic-form",
    primarySubtext: "30 min, sans engagement",
    secondaryLabel: "Me contacter par email",
    secondaryHref: "mailto:samuel@digitrend.fr",
    secondarySubtext: "Réponse sous 24h",
  },
}

export const pageCtas: Record<CoreRouteKey, CtaCopy> = {
  home: {
    title: "Passez d’un problème flou à une priorité claire.",
    subtitle:
      "Un diagnostic de 30 minutes suffit souvent à rendre visibles les blocages, les priorités et la meilleure prochaine étape.",
    primaryLabel: "Demander un diagnostic gratuit",
    primaryHref: "/diagnostic",
    primarySubtext: "30 min, sans engagement",
    secondaryLabel: "Voir la méthode",
    secondaryHref: "/methode",
  },
  methode: {
    title: "Vous avez la logique. Voyons maintenant votre cas réel.",
    subtitle:
      "Je vous réponds sous 24h avec un premier tri entre correction ciblée, architecture plus large et sujet à laisser de côté.",
    primaryLabel: "Demarrer mon diagnostic gratuit",
    primaryHref: "/diagnostic",
    primarySubtext: "Réponse sous 24h",
    secondaryLabel: "Voir les cas clients",
    secondaryHref: "/cas",
  },
  cas: {
    title: "Votre cas mérite lui aussi une lecture exploitable.",
    subtitle:
      "Un diagnostic permet de distinguer ce qui relève d’une optimisation rapide, d’une architecture à reprendre ou d’un vrai chantier produit.",
    primaryLabel: "Obtenir mon diagnostic gratuit",
    primaryHref: "/diagnostic",
    primarySubtext: "30 minutes, sans engagement",
    secondaryLabel: "Voir les services",
    secondaryHref: "/services",
  },
  services: {
    title: "Le bon format apparaît plus vite quand la friction est claire.",
    subtitle:
      "Décrivez votre situation en quelques lignes. Je vous aide à choisir la profondeur utile, pas l’offre la plus lourde.",
    primaryLabel: "Demander un diagnostic gratuit",
    primaryHref: "/diagnostic",
    primarySubtext: "Gratuit, sans engagement",
    secondaryLabel: "Voir la méthode",
    secondaryHref: "/methode",
  },
  diagnostic: {
    title: "Vous préférez commencer par un message simple ?",
    subtitle:
      "Écrivez-moi par email si vous voulez partager le contexte avant l’échange ou si le formulaire est momentanément indisponible.",
    primaryLabel: "Me contacter par email",
    primaryHref: "mailto:samuel@digitrend.fr",
    primarySubtext: "Réponse sous 24h",
    secondaryLabel: "Voir les cas clients",
    secondaryHref: "/cas",
  },
}
