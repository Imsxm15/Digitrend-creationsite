import { PageMeta } from "@/components/common/PageMeta"
import { LegalPage } from "@/pages/LegalPage"
import { PUBLIC_PROFILE } from "@/data/profile"

const sections = [
  {
    heading: "Responsable du traitement",
    body: `${PUBLIC_PROFILE.ownerName}, ${PUBLIC_PROFILE.brandName}, agit comme responsable du traitement pour les données transmises via le formulaire de diagnostic. ${PUBLIC_PROFILE.legalNotice}`,
  },
  {
    heading: "Données collectées",
    body: "Le formulaire collecte le nom, l'email, l'entreprise ou le projet, le contexte, la friction principale et le message libre. Ces données servent uniquement à comprendre la demande, qualifier le besoin et revenir vers la personne concernée.",
  },
  {
    heading: "Finalités et base légale",
    body: "Les données sont utilisées pour répondre à une demande entrante, préparer un échange de diagnostic et, le cas échéant, poursuivre une relation précontractuelle. La base légale est l'exécution de mesures précontractuelles demandées par la personne concernée.",
  },
  {
    heading: "Durée de conservation",
    body: "Les demandes sans suite commerciale sont conservées au maximum 12 mois après le dernier échange. Les éléments nécessaires à une relation contractuelle ou comptable peuvent être conservés plus longtemps pour respecter les obligations légales applicables.",
  },
  {
    heading: "Destinataires et sous-traitants",
    body: `Les données sont destinées à ${PUBLIC_PROFILE.ownerName}. L'hébergement applicatif est assuré par Netlify, Inc. (San Francisco, USA). Les données du formulaire de diagnostic sont stockées dans une base de données hébergée par Supabase, Inc. (San Francisco, USA). La mesure d'audience du site repose sur Plausible Analytics, chargé uniquement sur le domaine canonique de production.`,
  },
  {
    heading: "Mesure d'audience",
    body: "Le site utilise Plausible Analytics pour mesurer l'audience et les conversions du site sans charger de cookies marketing. Les données consultées sont agrégées pour comprendre les pages visitées, les sources de trafic et les événements clés du site, dont l'envoi du formulaire de diagnostic.",
  },
  {
    heading: "Vos droits",
    body: "Vous pouvez demander l'accès, la rectification, l'effacement, la limitation ou l'opposition au traitement de vos données en écrivant à samuel@digitrend.fr. Si vous estimez, après m'avoir contacté, que vos droits ne sont pas respectés, vous pouvez saisir la CNIL.",
  },
]

export function ConfidentialitePage() {
  return (
    <>
      <PageMeta
        title="Confidentialité"
        description="Politique de confidentialité et protection des données personnelles."
      />
      <LegalPage
        label="Confidentialité"
        title="Politique de confidentialité"
        intro="Le cadre de collecte et d'usage des données de diagnostic, pensé pour rester sobre, lisible et conforme."
        sections={sections}
      />
    </>
  )
}

export default ConfidentialitePage
