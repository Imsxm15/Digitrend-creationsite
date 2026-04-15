import type { CoreRouteKey } from "@/types/site"

export type MobileCtaConfig = {
  route: CoreRouteKey
  label: string
  href: string
  mode: "anchor" | "route" | "mailto"
  subtext?: string
}

export const mobileCtaConfig: MobileCtaConfig[] = [
  {
    route: "home",
    label: "Diagnostic gratuit",
    href: "/diagnostic",
    mode: "route",
    subtext: "30 min, sans engagement",
  },
  {
    route: "methode",
    label: "Commencer le diagnostic",
    href: "/diagnostic",
    mode: "route",
    subtext: "Réponse sous 24h",
  },
  {
    route: "cas",
    label: "Parler de votre cas",
    href: "/diagnostic",
    mode: "route",
    subtext: "Diagnostic gratuit",
  },
  {
    route: "services",
    label: "Trouver la bonne offre",
    href: "/diagnostic",
    mode: "route",
    subtext: "Diagnostic gratuit",
  },
  {
    route: "diagnostic",
    label: "Aller au diagnostic",
    href: "#diagnostic-form",
    mode: "anchor",
    subtext: "30 min, sans engagement",
  },
]
