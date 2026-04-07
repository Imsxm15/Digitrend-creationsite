export interface Offer {
  id: string
  number: string
  tag?: string
  title: string
  subtitle: string
  description: string
  problem: string
  symptoms: string[]
  deliverables: string[]
  format: string
  duration: string
  budgetSignal: string
  cta: string
  ctaHref: string
  featured?: boolean
}

export const OFFERS: Offer[] = [
  {
    id: "diagnostic",
    number: "01",
    title: "Diagnostic Frictions",
    subtitle: "Voir où ça bloque — avant d'intervenir",
    description: "Un diagnostic structuré de vos flux digitaux et business pour identifier les blocages réels, les pertes silencieuses et les priorités d'action.",
    problem: "Vous sentez que quelque chose ne tourne pas rond, mais vous ne savez pas exactement où. Temps perdu sur des tâches manuelles, conversions en berne, outils qui ne se parlent pas, données inutilisables.",
    symptoms: [
      "Des processus manuels répétitifs qui absorbent de l'énergie",
      "Des outils qui se multiplient sans cohérence",
      "Des conversions stagnantes malgré le trafic",
      "Une sensation de désordre sans prise claire sur les priorités",
      "Des données présentes mais inexploitées",
    ],
    deliverables: [
      "Cartographie des frictions identifiées par ordre d'impact",
      "Analyse des flux existants (outils, process, données)",
      "Priorisation en 3 niveaux : quick wins, chantiers, fonds de cale",
      "Recommandations d'intervention actionnables",
      "Document de synthèse structuré livré sous 5 jours",
    ],
    format: "Entretien de cadrage + analyse documentaire + restitution structurée",
    duration: "4–6 jours ouvrés",
    budgetSignal: "À partir de 1 800€",
    cta: "Lancer mon diagnostic",
    ctaHref: "/diagnostic",
  },
  {
    id: "architecture-revenue",
    number: "02",
    tag: "SIGNATURE",
    title: "Architecture Revenue",
    subtitle: "Structurer le système qui convertit et génère",
    description: "Refonte complète de votre système de conversion, d'acquisition et de rétention. Je conçois l'architecture qui aligne vos flux, vos données et vos outils autour d'un objectif business clair.",
    problem: "Vous avez du trafic, des produits, des équipes — mais le système ne produit pas ce qu'il devrait. Les leads se perdent, les tunnels fuient, les opérations coûtent trop pour ce qu'elles rapportent.",
    symptoms: [
      "Tunnel de conversion non tracé ou mal optimisé",
      "Leads qui entrent mais ne se transforment pas",
      "Pas de vision claire sur les leviers de croissance",
      "Outils marketing et CRM non connectés",
      "Reporting inexistant ou illisible",
    ],
    deliverables: [
      "Audit complet du système de conversion actuel",
      "Architecture cible : funnel, CRM, automation, tracking",
      "Wireframes des points de friction prioritaires",
      "Plan d'implémentation par sprint",
      "Setup des outils et connexions prioritaires",
      "Dashboard de pilotage opérationnel",
    ],
    format: "Sprint de 2 semaines structuré en phases analyse → design → déploiement",
    duration: "10–14 jours ouvrés",
    budgetSignal: "3 500–6 000€ selon périmètre",
    cta: "Explorer cette offre",
    ctaHref: "/services/architecture-revenue",
    featured: true,
  },
  {
    id: "ai-ops",
    number: "03",
    tag: "PREMIUM",
    title: "AI Product Ops",
    subtitle: "Outils internes, agents métier, interfaces IA utiles",
    description: "Conception et déploiement d'outils internes, dashboards opérationnels et agents IA adaptés à vos flux métier. Pas de l'IA pour faire de l'IA — des outils qui résolvent des problèmes précis.",
    problem: "Vos équipes utilisent des LLM en mode copier-coller sans process. Vous avez des données mais pas d'interface pour les exploiter. Certaines tâches pourraient être automatisées mais personne ne sait par où commencer.",
    symptoms: [
      "Usage IA anarchique et non structuré dans les équipes",
      "Données présentes mais aucun outil pour les activer",
      "Processus métier qui pourraient être partiellement automatisés",
      "Besoin d'un dashboard interne mais pas les ressources pour le construire",
      "Workflows répétitifs qui consomment du temps de valeur",
    ],
    deliverables: [
      "Audit des cas d'usage IA et automation pertinents",
      "Design de l'outil ou de l'agent cible",
      "Développement du prototype fonctionnel",
      "Tests et itérations avec les utilisateurs finaux",
      "Documentation d'usage et formation",
      "Maintenance et évolution sur 30 jours",
    ],
    format: "Sprint de conception → développement → déploiement avec points hebdomadaires",
    duration: "15–25 jours ouvrés selon périmètre",
    budgetSignal: "Sur devis · engagement moyen terme",
    cta: "Voir ce qui est possible",
    ctaHref: "/services/ai-product-ops",
  },
  {
    id: "fractional",
    number: "04",
    title: "Pilotage Fractionnel",
    subtitle: "Un directeur opérationnel à temps partagé",
    description: "Présence régulière pour piloter la mise en ordre, prioriser les chantiers, superviser les implémentations et maintenir le cap opérationnel — sans le coût d'un profil senior à temps plein.",
    problem: "Vous avancez mais sans fil conducteur. Les priorités changent, les outils s'accumulent, les équipes manquent de cadre. Vous avez besoin d'un regard structurant de façon régulière.",
    symptoms: [
      "Roadmap opérationnelle absente ou non tenue",
      "Décisions techniques prises sans vision d'ensemble",
      "Manque de lien entre stratégie et exécution",
      "Prestataires qui travaillent en silo",
      "Pertes d'énergie sur des sujets qui reviennent en boucle",
    ],
    deliverables: [
      "Point hebdomadaire de pilotage (1h)",
      "Priorisation mensuelle des chantiers",
      "Revue des outils et des process en continu",
      "Supervision des implémentations",
      "Accès async pour les questions urgentes",
      "Compte-rendu mensuel d'avancement",
    ],
    format: "Engagement mensuel renouvelable — 2 ou 4 jours/mois",
    duration: "Abonnement mensuel",
    budgetSignal: "À partir de 800€/mois",
    cta: "Discuter de mon besoin",
    ctaHref: "/diagnostic",
  },
]

export const FEATURED_OFFER = OFFERS.find(o => o.featured) ?? OFFERS[1]
