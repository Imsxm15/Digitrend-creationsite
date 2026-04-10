import type { WithContext } from "@/types/seo"

const siteUrl = "https://digitrend-creation.fr"
const defaultOgImage = `${siteUrl}/og-image.jpg`

export const organizationSchema: WithContext = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Digitrend Creation",
  url: siteUrl,
  founder: "Samuel Huys",
  image: defaultOgImage,
  description:
    "Digitrend Creation structure, automatise et optimise des systemes digitaux pour des resultats mesurables.",
  sameAs: [
    "https://www.linkedin.com/in/samuel-huys",
    "https://samuel-huys.com",
  ],
}

export const pageMetaContent = {
  home: {
    title: "Accueil",
    description:
      "Digitrend Creation structure vos flux digitaux pour generer plus de revenu, moins de friction et une meilleure lecture business.",
    canonical: `${siteUrl}/`,
    twitterTitle: "Digitrend Creation - Systeme digital clair",
    twitterDescription:
      "Diagnostic, architecture revenue et IA appliquee pour rendre vos operations enfin lisibles.",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Accueil Digitrend Creation",
        url: `${siteUrl}/`,
        description:
          "Page d'accueil presentant les services, la methode et les preuves de Digitrend Creation.",
      },
    ] satisfies WithContext[],
  },
  methode: {
    title: "Methode",
    description:
      "Notre methode en 5 phases pour transformer des frictions diffuses en priorites, architecture et systeme pilotable.",
    canonical: `${siteUrl}/methode`,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Methode", item: `${siteUrl}/methode` },
        ],
      },
    ] satisfies WithContext[],
  },
  cas: {
    title: "Cas d'etudes",
    description:
      "Des cas clients pour rendre visibles les gains de conversion, de vitesse d'execution et de clarte business obtenus par Digitrend Creation.",
    canonical: `${siteUrl}/cas`,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Cas clients Digitrend Creation",
        url: `${siteUrl}/cas`,
        description:
          "Cas d'etudes, schemas et resultats anonymises relies a des interventions reelles.",
      },
    ] satisfies WithContext[],
  },
  services: {
    title: "Services",
    description:
      "Quatre formats d'intervention pour cadrer, architecturer, automatiser et piloter vos operations digitales.",
    canonical: `${siteUrl}/services`,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Services Digitrend Creation",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Diagnostic Frictions",
              description: "Diagnostic structure pour identifier les blocages et priorites.",
            },
            url: `${siteUrl}/diagnostic`,
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Architecture Revenue",
              description: "Architecture cible pour reconnecter tunnel, CRM et pilotage.",
            },
            url: `${siteUrl}/services/architecture-revenue`,
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Product Ops",
              description: "Outils IA, interfaces et automatisations utiles aux equipes.",
            },
            url: `${siteUrl}/services/ai-product-ops`,
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pilotage Fractionnel",
              description: "Pilotage regulier pour tenir le cap sur les operations digitales.",
            },
            url: `${siteUrl}/services/fractional`,
          },
        ],
      },
    ] satisfies WithContext[],
  },
  diagnostic: {
    title: "Diagnostic",
    description:
      "Diagnostic gratuit de 30 minutes pour identifier vos frictions, vos priorites et la prochaine decision utile.",
    canonical: `${siteUrl}/diagnostic`,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Que comprend le diagnostic gratuit ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Un premier echange pour clarifier le contexte, qualifier les frictions et proposer une prochaine etape lisible.",
            },
          },
          {
            "@type": "Question",
            name: "Combien de temps dure l'echange ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Le format de base est un appel de 30 minutes, sans engagement.",
            },
          },
          {
            "@type": "Question",
            name: "Quand recevez-vous une reponse ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Digitrend Creation repond sous 24 heures ouvrees avec un premier retour structure.",
            },
          },
        ],
      },
    ] satisfies WithContext[],
  },
} as const

export const sharedOgImage = defaultOgImage
