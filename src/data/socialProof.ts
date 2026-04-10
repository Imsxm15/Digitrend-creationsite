import adobeLogo from "@/assets/social-proof/adobe.png"
import googleCloudLogo from "@/assets/social-proof/google-cloud.png"
import googleLogo from "@/assets/social-proof/google.png"
import kameleoonLogo from "@/assets/social-proof/kameleoon.png"
import linkedinLearningLogo from "@/assets/social-proof/linkedin-learning.svg"
import maisonsDuMondeLogo from "@/assets/social-proof/maisons-du-monde.png"
import parisiennementVotreLogo from "@/assets/social-proof/parisiennement-votre.png"
import steamoneLogo from "@/assets/social-proof/steamone.png"
import profilePhoto from "@/assets/social-proof/profile-photo.jpg"
import type { CoreRouteKey } from "@/types/site"

export type ProofMetric = {
  label: string
  value: string
  context: string
  source: string
  routeVisibility: CoreRouteKey[]
}

export type Testimonial = {
  name: string
  role: string
  quote: string
  source: string
  portrait?: string
  company?: string
  isPublic: boolean
  routeVisibility: CoreRouteKey[]
}

export type ProofLogo = {
  name: string
  asset: string
  category: "worked_with" | "trained_with" | "tooling"
  routeVisibility: CoreRouteKey[]
}

export type FounderSpotlight = {
  name: string
  role: string
  summary: string
  image: string
  highlights: string[]
}

const allRoutes: CoreRouteKey[] = ["home", "methode", "cas", "services", "diagnostic"]

export const proofLogos: ProofLogo[] = [
  { name: "Maisons du Monde", asset: maisonsDuMondeLogo, category: "worked_with", routeVisibility: allRoutes },
  { name: "SteamOne", asset: steamoneLogo, category: "worked_with", routeVisibility: allRoutes },
  { name: "Parisiennement Vôtre", asset: parisiennementVotreLogo, category: "worked_with", routeVisibility: allRoutes },
  { name: "Google", asset: googleLogo, category: "trained_with", routeVisibility: allRoutes },
  { name: "Google Cloud", asset: googleCloudLogo, category: "trained_with", routeVisibility: allRoutes },
  { name: "Adobe", asset: adobeLogo, category: "trained_with", routeVisibility: allRoutes },
  { name: "Kameleoon", asset: kameleoonLogo, category: "tooling", routeVisibility: allRoutes },
  { name: "LinkedIn Learning", asset: linkedinLearningLogo, category: "trained_with", routeVisibility: allRoutes },
]

export const proofMetrics: ProofMetric[] = [
  {
    label: "conversion e-commerce",
    value: "+35%",
    context: "chatbot sur-mesure branche sur OpenAI pour un site client Digitrend",
    source: "Case Digitrend anonymise mentionne dans la documentation de reference",
    routeVisibility: allRoutes,
  },
  {
    label: "temps de traitement",
    value: "-70%",
    context: "workflows IA et automatisations concus pour reduire les taches repetitives",
    source: "Experience Digitrend Creation - achievements internes CV en ligne",
    routeVisibility: ["home", "methode", "services", "diagnostic"],
  },
  {
    label: "satisfaction client",
    value: "+40%",
    context: "assistants IA et experiences conversationnelles mieux cadrees",
    source: "Experience Digitrend Creation - achievements internes CV en ligne",
    routeVisibility: ["home", "cas", "services"],
  },
]

export const testimonials: Testimonial[] = [
  {
    name: "Alice Le Pincart",
    role: "Experte en orientation et employabilite durable",
    company: "Mission conseil",
    quote:
      "Samuel comprend tres vite les enjeux, les traduit en design et agit comme un partenaire strategique fiable, rapide et tres soigne.",
    source: "Recommendation LinkedIn publique - 26 octobre 2025",
    isPublic: true,
    routeVisibility: allRoutes,
  },
  {
    name: "Nawel Kedairia",
    role: "Marketing & luxury brand",
    company: "Collaboration e-commerce",
    quote:
      "Sur des projets e-commerce exigeants, Samuel a pris en main le web, l'UX et l'optimisation avec rigueur, initiative et sens du resultat.",
    source: "Recommendation LinkedIn publique - 26 mars 2025",
    isPublic: true,
    routeVisibility: ["home", "cas", "services", "diagnostic"],
  },
  {
    name: "Maud Fabre",
    role: "Senior Account Executive",
    company: "Popchef",
    quote:
      "Samuel met en place des outils et des processus utiles avec une grande reactivite, de la polyvalence et une vraie capacite a penser differemment.",
    source: "Recommendation LinkedIn publique - 4 avril 2023",
    isPublic: true,
    routeVisibility: ["methode", "cas", "services"],
  },
]

export const founderSpotlight: FounderSpotlight = {
  name: "Samuel Huys",
  role: "Architecte operationnel & AI Product Builder",
  summary:
    "7 ans entre e-commerce, CRO, automatisation et IA appliquee pour remettre de l'ordre dans des systemes business qui doivent produire vite et proprement.",
  image: profilePhoto,
  highlights: [
    "Diagnostic business et priorisation actionnable",
    "Conversion, CRM et automatisation relies dans un meme systeme",
    "Outils IA utiles, cadres et documentes",
  ],
}

export function filterProofLogos(route: CoreRouteKey) {
  return proofLogos.filter((logo) => logo.routeVisibility.includes(route))
}

export function filterProofMetrics(route: CoreRouteKey) {
  return proofMetrics.filter((metric) => metric.routeVisibility.includes(route))
}

export function filterTestimonials(route: CoreRouteKey) {
  return testimonials.filter((testimonial) => testimonial.routeVisibility.includes(route))
}
