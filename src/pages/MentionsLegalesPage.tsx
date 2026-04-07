import { LegalPage } from "@/pages/LegalPage"
import { PUBLIC_PROFILE } from "@/data/profile"

const sections = [
  {
    heading: "Éditeur du site",
    body: `${PUBLIC_PROFILE.ownerName} exerce sous la marque ${PUBLIC_PROFILE.brandName}, en ${PUBLIC_PROFILE.legalForm}. Références publiques utilisées pour ce site : SIREN ${PUBLIC_PROFILE.siren}, SIRET ${PUBLIC_PROFILE.siret}, ${PUBLIC_PROFILE.registry}. ${PUBLIC_PROFILE.legalNotice}`,
  },
  {
    heading: "Objet du site",
    body: "Ce site présente des prestations d'architecture opérationnelle, de conversion, d'automatisation et d'IA appliquée. Il permet aussi de transmettre une demande de diagnostic via un formulaire de contact.",
  },
  {
    heading: "Propriété intellectuelle",
    body: "Les textes, visuels, schémas, maquettes et composants présents sur ce site sont protégés par le droit d'auteur. Sauf mention contraire, ils ne peuvent pas être réutilisés, copiés ou diffusés sans autorisation préalable.",
  },
  {
    heading: "Hébergement",
    body: "Le site est conçu pour être déployé sur une plateforme moderne de type Vercel, Netlify ou équivalent. L'hébergeur effectivement retenu pour la production devra être indiqué ici avec sa dénomination sociale, son adresse et ses coordonnées de contact.",
  },
  {
    heading: "Responsabilité",
    body: "Les informations diffusées sont fournies à titre indicatif et peuvent évoluer. Chaque intervention démarre par un cadrage spécifique ; aucune page publique ne remplace un échange de diagnostic ou une proposition formalisée.",
  },
]

export function MentionsLegalesPage() {
  return (
    <LegalPage
      label="Mentions légales"
      title="Mentions légales"
      intro="Le cadre juridique minimum pour identifier l'éditeur, l'objet du site et les responsabilités associées."
      sections={sections}
    />
  )
}
