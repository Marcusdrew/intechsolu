import serviceNetwork from "@/assets/service-network.jpg";
import serviceDev from "@/assets/service-dev.jpg";
import serviceSecurity from "@/assets/service-security.jpg";
import serviceErp from "@/assets/service-erp.jpg";

export type Service = {
  slug: "reseaux" | "developpement" | "cybersecurite" | "erp-bi";
  title: string;
  short: string;
  promise: string;
  image: string;
  icon: "network" | "code" | "shield" | "bar-chart";
  offerings: { title: string; desc: string }[];
  tech: string[];
  faq: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "reseaux",
    title: "Réseaux & Centres de données",
    short: "Conception, déploiement, optimisation et gestion d'infrastructures réseaux et datacenters de haute performance.",
    promise:
      "Des infrastructures critiques sécurisées, fiables et disponibles — conçues pour soutenir durablement votre croissance.",
    image: serviceNetwork,
    icon: "network",
    offerings: [
      { title: "Conception & déploiement", desc: "Architecture, mise en place et optimisation de réseaux et centres de données de haute performance." },
      { title: "Datacenters & virtualisation", desc: "Salle serveur, virtualisation, stockage, sauvegarde et plan de reprise d'activité." },
      { title: "Sécurité & disponibilité", desc: "Garantir la sécurité, la fiabilité et la disponibilité des infrastructures critiques." },
      { title: "Maintenance & supervision", desc: "Mise en place, maintenance et gestion 24/7 des infrastructures IT critiques." },
    ],
    tech: ["Cisco", "Fortinet", "VMware", "Lenovo", "Dell", "Scale Computing"],
    faq: [
      { q: "Combien de temps pour migrer notre réseau ?", a: "Selon la taille, de 3 semaines à 4 mois — avec une mise en service progressive sans rupture de service." },
      { q: "Prenez-vous en charge l'exploitation après livraison ?", a: "Oui, via un contrat de support managé avec engagement de niveau de service (SLA) clair." },
    ],
  },
  {
    slug: "developpement",
    title: "Logiciels, Applications & ERP",
    short: "Logiciels, applications web et mobiles et solutions ERP intégrées pour les entreprises de toute taille.",
    promise:
      "Des solutions qui améliorent la productivité et automatisent vos processus, avec une expérience utilisateur optimale.",
    image: serviceDev,
    icon: "code",
    offerings: [
      { title: "Applications web sur-mesure", desc: "Portails clients, intranets, back-offices et plateformes métier." },
      { title: "Applications mobiles", desc: "iOS et Android, pensées pour vos usages terrain." },
      { title: "ERP intégrés", desc: "Solutions ERP paramétrées pour automatiser vos processus de gestion." },
      { title: "Intégrations & API", desc: "Connexion à vos systèmes bancaires, télécoms ou industriels." },
    ],
    tech: ["Odoo", "Dolibarr", "Oracle", "Microsoft", "PostgreSQL", "IBM"],
    faq: [
      { q: "Travaillez-vous au forfait ou en régie ?", a: "Les deux. Forfait pour un périmètre clair, régie pour un produit qui évolue en continu." },
      { q: "Le code nous appartient-il ?", a: "Oui, intégralement. Vous récupérez les sources, la documentation et les accès." },
    ],
  },
  {
    slug: "cybersecurite",
    title: "Sécurité informatique",
    short: "Solutions robustes pour sécuriser vos infrastructures face aux menaces croissantes de cybersécurité.",
    promise:
      "De la protection des données à la sécurisation des réseaux — prévenir et détecter les attaques avant qu'elles n'affectent vos opérations.",
    image: serviceSecurity,
    icon: "shield",
    offerings: [
      { title: "Protection des données", desc: "Sécurisation, chiffrement et contrôle d'accès de vos données sensibles." },
      { title: "Sécurisation des réseaux", desc: "Firewall nouvelle génération, VPN, segmentation et défense périmétrique." },
      { title: "Détection & réponse", desc: "Surveillance, détection des attaques et réponse aux incidents." },
      { title: "Anti-fraude télécom & bancaire", desc: "Détection de fraude basée sur l'IA et l'analyse comportementale, lutte anti-blanchiment." },
    ],
    tech: ["Fortinet", "Palo Alto", "Trend Micro", "Symantec", "Cisco"],
    faq: [
      { q: "Un service de sécurité managé, ça coûte cher ?", a: "Moins qu'une seule attaque réussie. Nous proposons des offres dimensionnées à la taille de votre SI." },
      { q: "Êtes-vous capables d'intervenir en cas de crise ?", a: "Oui, équipe de réponse à incident disponible pour nos clients sous contrat." },
    ],
  },
  {
    slug: "erp-bi",
    title: "Business Intelligence & Data Mining",
    short: "Exploitez pleinement vos données grâce à nos solutions de business intelligence et d'exploration de données.",
    promise:
      "Des décisions plus éclairées, avec des analyses précises et des rapports en temps réel basés sur des insights précieux.",
    image: serviceErp,
    icon: "bar-chart",
    offerings: [
      { title: "Analyse de données massives", desc: "Exploration et valorisation de gros volumes de données (data mining)." },
      { title: "Tableaux de bord temps réel", desc: "Datawarehouse, reporting et indicateurs décisionnels en temps réel." },
      { title: "Aide à la décision", desc: "Segmentation client, prévision du churn, optimisation et prévision des tendances." },
      { title: "Transformation digitale", desc: "Cloud, IA et virtualisation pour gagner en agilité et en compétitivité." },
    ],
    tech: ["Power BI", "Oracle", "IBM", "Microsoft", "Talend"],
    faq: [
      { q: "Quels résultats attendre de la BI ?", a: "Détection de fraude, segmentation client, optimisation réseau, réduction des coûts et meilleure prévision des tendances." },
      { q: "Pouvez-vous exploiter nos données existantes ?", a: "Oui. Reprise, nettoyage et contrôle qualité font partie intégrante de la démarche." },
    ],
  },
];


export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
