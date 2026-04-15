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
    "Digitrend Creation structure, automatise et optimise des systèmes digitaux pour des résultats mesurables.",
  sameAs: [
    "https://www.linkedin.com/in/samuel-huys",
    "https://samuel-huys.com",
  ],
}

export const pageMetaContent = {
  home: {
    title: "Accueil",
    description:
      "Digitrend Creation clarifie les flux qui bloquent revenu, CRM et opérations pour les équipes e-commerce, SaaS et services.",
    canonical: `${siteUrl}/`,
    twitterTitle: "Digitrend Creation - Système digital clair",
    twitterDescription:
      "Diagnostic, architecture revenue et IA appliquée pour rendre vos opérations enfin lisibles.",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Accueil Digitrend Creation",
        url: `${siteUrl}/`,
        description:
          "Page d'accueil présentant les services, la méthode et les preuves de Digitrend Creation.",
      },
    ] satisfies WithContext[],
  },
  methode: {
    title: "Méthode",
    description:
      "Une méthode en 4 étapes pour transformer des frictions diffuses en priorités, architecture et système pilotable.",
    canonical: `${siteUrl}/methode`,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Méthode", item: `${siteUrl}/methode` },
        ],
      },
    ] satisfies WithContext[],
  },
  cas: {
    title: "Cas d'études",
    description:
      "Des cas clients pour rendre visibles les gains de conversion, de vitesse d'exécution et de clarté business obtenus par Digitrend Creation.",
    canonical: `${siteUrl}/cas`,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Cas clients Digitrend Creation",
        url: `${siteUrl}/cas`,
        description:
          "Cas d'études, schémas et résultats anonymisés reliés à des interventions réelles.",
      },
    ] satisfies WithContext[],
  },
  services: {
    title: "Services",
    description:
      "Quatre formats d'intervention pour cadrer, architecturer, automatiser et piloter vos opérations digitales.",
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
              description: "Diagnostic structuré pour identifier les blocages et priorités.",
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
              description: "Outils IA, interfaces et automatisations utiles aux équipes.",
            },
            url: `${siteUrl}/services/ai-product-ops`,
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pilotage Fractionnel",
              description: "Pilotage régulier pour tenir le cap sur les opérations digitales.",
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
      "Diagnostic gratuit de 30 minutes pour identifier vos frictions, vos priorités et la prochaine décision utile.",
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
              text: "Un premier échange pour clarifier le contexte, qualifier les frictions et proposer une prochaine étape lisible.",
            },
          },
          {
            "@type": "Question",
            name: "Combien de temps dure l'échange ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Le format de base est un appel de 30 minutes, sans engagement.",
            },
          },
          {
            "@type": "Question",
            name: "Quand recevez-vous une réponse ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Digitrend Creation répond sous 24 heures ouvrées avec un premier retour structuré.",
            },
          },
        ],
      },
    ] satisfies WithContext[],
  },
} as const

export const sharedOgImage = defaultOgImage
