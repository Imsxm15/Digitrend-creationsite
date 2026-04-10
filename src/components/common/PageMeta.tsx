import { Helmet } from "react-helmet-async"
import type { WithContext } from "@/types/seo"

interface PageMetaProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  twitterTitle?: string
  twitterDescription?: string
  schema?: WithContext | WithContext[]
  noindex?: boolean
}

const defaultOgImage = "https://digitrend-creation.fr/og-image.jpg"

export function PageMeta({
  title,
  description,
  canonical,
  ogImage = defaultOgImage,
  twitterTitle,
  twitterDescription,
  schema,
  noindex = false,
}: PageMetaProps) {
  const fullTitle = title === "Accueil"
    ? "Digitrend Creation — Architecture opérationnelle & IA appliquée"
    : `${title} — Digitrend Creation`
  const robots = noindex ? "noindex, nofollow" : "index, follow"
  const schemaEntries = Array.isArray(schema) ? schema : schema ? [schema] : []

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle ?? fullTitle} />
      <meta name="twitter:description" content={twitterDescription ?? description} />
      <meta name="twitter:image" content={ogImage} />
      {schemaEntries.map((entry, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(entry)}
        </script>
      ))}
    </Helmet>
  )
}
