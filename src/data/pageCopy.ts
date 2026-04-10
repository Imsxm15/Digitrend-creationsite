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
    eyebrow: "SYSTEMES DIGITAUX CLAIRS",
    title: "Nous structurons vos flux digitaux pour generer plus de revenu.",
    description:
      "Diagnostic, architecture et automatisation pour rendre acquisition, conversion, CRM et pilotage enfin lisibles et actionnables.",
    bullets: [
      "Reduire les frictions qui coutent du temps et du revenu",
      "Prioriser les chantiers qui font vraiment bouger les KPI",
      "Relier outils, donnees et equipes dans un systeme operatif",
    ],
    primaryLabel: "Demander un diagnostic gratuit",
    primaryHref: "/diagnostic",
    primarySubtext: "30 min, sans engagement",
    secondaryLabel: "Voir la methode",
    secondaryHref: "/methode",
    secondarySubtext: "Lire les 5 etapes",
  },
  methode: {
    eyebrow: "METHODE",
    title: "Notre methode pour structurer vos flux et accelerer la croissance.",
    description:
      "Une progression simple pour transformer des frictions diffuses en priorites, architecture et livrables directement exploitables.",
    bullets: [
      "Comprendre avant d'agir",
      "Prioriser selon l'impact business reel",
      "Livrer des systemes documentes et pilotables",
    ],
    primaryLabel: "Commencer mon diagnostic gratuit",
    primaryHref: "/diagnostic",
    primarySubtext: "Reponse sous 24h",
    secondaryLabel: "Voir les cas clients",
    secondaryHref: "/cas",
    secondarySubtext: "Exemples concrets",
  },
  cas: {
    eyebrow: "CAS CLIENTS",
    title: "Des cas clients qui rendent les resultats visibles.",
    description:
      "Diagnostics, architectures et outils IA relies a des gains concrets de conversion, de vitesse d'execution et de lisibilite business.",
    bullets: [
      "Probleme, actions et resultats sur le meme ecran",
      "Schemas lisibles plutot que promesses abstraites",
      "Preuves contextualisees et citations publiques",
    ],
    primaryLabel: "Obtenir mon diagnostic gratuit",
    primaryHref: "/diagnostic",
    primarySubtext: "30 minutes, sans engagement",
    secondaryLabel: "Voir la methode",
    secondaryHref: "/methode",
    secondarySubtext: "Comprendre l'approche",
  },
  services: {
    eyebrow: "SERVICES",
    title: "Choisissez le service qui debloquera vos frictions.",
    description:
      "Chaque format correspond a un niveau de maturite precis pour cadrer, architecturer, automatiser ou piloter un systeme digital.",
    bullets: [
      "Diagnostic structure pour voir clair vite",
      "Architecture revenue pour reconnecter le tunnel et le CRM",
      "Outils IA et pilotage pour tenir la cadence ensuite",
    ],
    primaryLabel: "Demander un diagnostic gratuit",
    primaryHref: "/diagnostic",
    primarySubtext: "Gratuit, sans engagement",
    secondaryLabel: "Voir la methode",
    secondaryHref: "/methode",
    secondarySubtext: "Comprendre le process",
  },
  diagnostic: {
    eyebrow: "DIAGNOSTIC GRATUIT",
    title: "Identifiez vos frictions et vos priorites en 30 minutes.",
    description:
      "Un premier echange pour PME, e-commerce et equipes marketing qui veulent qualifier le probleme, la prochaine decision et le bon niveau d'intervention.",
    bullets: [
      "Un appel court pour clarifier le contexte",
      "Un premier tri entre quick wins et chantier structurant",
      "Une reponse rapide, sans pression commerciale",
    ],
    primaryLabel: "Demander mon diagnostic gratuit",
    primaryHref: "#diagnostic-form",
    primarySubtext: "30 min, sans engagement",
    secondaryLabel: "Nous contacter par email",
    secondaryHref: "mailto:samuel@digitrend.fr",
    secondarySubtext: "Reponse sous 24h",
  },
}

export const pageCtas: Record<CoreRouteKey, CtaCopy> = {
  home: {
    title: "Passez d'un probleme flou a une priorite claire.",
    subtitle:
      "Un diagnostic de 30 minutes suffit souvent a rendre visibles les blocages, les priorites et la meilleure prochaine etape.",
    primaryLabel: "Demander un diagnostic gratuit",
    primaryHref: "/diagnostic",
    primarySubtext: "30 min, sans engagement",
    secondaryLabel: "Voir la methode",
    secondaryHref: "/methode",
  },
  methode: {
    title: "Vous avez maintenant la logique. Voyons votre cas reel.",
    subtitle:
      "Nous vous repondons sous 24h avec un premier tri entre correction ciblee, architecture plus large et sujet a laisser de cote.",
    primaryLabel: "Demarrer mon diagnostic gratuit",
    primaryHref: "/diagnostic",
    primarySubtext: "Reponse sous 24h",
    secondaryLabel: "Voir les cas clients",
    secondaryHref: "/cas",
  },
  cas: {
    title: "Votre cas merite lui aussi une lecture exploitable.",
    subtitle:
      "Un diagnostic permet de distinguer ce qui releve d'une optimisation rapide, d'une architecture a reprendre ou d'un vrai chantier produit.",
    primaryLabel: "Obtenir mon diagnostic gratuit",
    primaryHref: "/diagnostic",
    primarySubtext: "30 minutes, sans engagement",
    secondaryLabel: "Voir nos services",
    secondaryHref: "/services",
  },
  services: {
    title: "Le bon format apparait plus vite quand la friction est claire.",
    subtitle:
      "Decrivez votre situation en quelques lignes. Nous vous aidons a choisir la profondeur utile, pas l'offre la plus lourde.",
    primaryLabel: "Demander un diagnostic gratuit",
    primaryHref: "/diagnostic",
    primarySubtext: "Gratuit, sans engagement",
    secondaryLabel: "Voir la methode",
    secondaryHref: "/methode",
  },
  diagnostic: {
    title: "Vous preferez commencer par un message simple ?",
    subtitle:
      "Contactez-nous par email si le formulaire n'est pas disponible ou si vous voulez partager le contexte avant un echange.",
    primaryLabel: "Nous contacter par email",
    primaryHref: "mailto:samuel@digitrend.fr",
    primarySubtext: "Reponse sous 24h",
    secondaryLabel: "Voir les cas clients",
    secondaryHref: "/cas",
  },
}
