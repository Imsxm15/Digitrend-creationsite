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
    body: "Les demandes sans suite commerciale devraient être conservées au maximum 12 mois après le dernier échange. Les éléments nécessaires à une relation contractuelle ou comptable peuvent être conservés plus longtemps pour respecter les obligations légales applicables.",
  },
  {
    heading: "Destinataires et sous-traitants",
    body: "Les données sont destinées à ${PUBLIC_PROFILE.ownerName}. Si le formulaire est activé en production, l'hébergement applicatif et la base de données réellement utilisés devront être listés ici, par exemple l'hébergeur du site et Supabase pour le stockage des demandes.",
  },
  {
    heading: "Vos droits",
    body: "Vous pouvez demander l'accès, la rectification, l'effacement, la limitation ou l'opposition au traitement de vos données. Avant publication, cette page doit afficher un moyen de contact direct dédié aux demandes RGPD ainsi que l'hébergeur de production effectivement retenu.",
  },
]

export function ConfidentialitePage() {
  return (
    <LegalPage
      label="Confidentialité"
      title="Politique de confidentialité"
      intro="Le cadre de collecte et d'usage des données de diagnostic, pensé pour rester sobre, lisible et conforme."
      sections={sections}
    />
  )
}
