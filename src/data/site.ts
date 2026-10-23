export const SITE = {
  name: "Innov Tech Solutions",
  shortName: "IT Solutions",
  legalForm: "SAS — Société par Actions Simplifiées",
  tagline: "Donner vie aux idées et à l'innovation grâce à la technologie.",
  description:
    "Fondée à Kinshasa (RDC), Innov Tech Solutions SAS conçoit, déploie et exploite des centres de données, des logiciels sur-mesure et ERP, des solutions de cybersécurité, de Business Intelligence & data mining, des solutions bancaires (FinTech) et des plateformes télécoms (VAS, MIS, anti-fraude), en RDC comme à l'international.",
  email: "contact@intechsolu.com",
  phone: "+243 999 964 982",
  address: "Immeuble Sofide, 9-11 Av. Lemarinel, Kinshasa — République Démocratique du Congo",
  hours: "Lun — Ven · 8h30 — 18h00",
} as const;

export const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "À propos" },
  { to: "/partenaires", label: "Partenaires" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export const STATS = [
  { value: 20, suffix: " ans+", label: "D'expertise cumulée" },
  { value: 9, suffix: "", label: "Domaines d'expertise" },
  { value: 18, suffix: "+", label: "Partenaires technologiques" },
  { value: 7, suffix: "/7", label: "Support managé" },
] as const;

export const VALUES = [
  {
    title: "Innovation",
    desc: "Des solutions technologiques de pointe basées sur l'IA, le cloud et la data pour garder une longueur d'avance.",
  },
  {
    title: "Sécurité",
    desc: "Protection des infrastructures, des données et des opérations contre les menaces et les vulnérabilités.",
  },
  {
    title: "Proximité",
    desc: "Une équipe locale à Kinshasa, disponible à distance ou sur site, qui comprend vos réalités métier.",
  },
  {
    title: "Engagement résultat",
    desc: "Des livrables mesurables et une transparence totale, au service de votre efficacité et de votre croissance.",
  },
] as const;


export const PROCESS = [
  { step: "01", title: "Écoute", desc: "Audit de l'existant et cadrage de votre besoin métier." },
  { step: "02", title: "Conception", desc: "Architecture cible, plan de migration, devis détaillé." },
  { step: "03", title: "Déploiement", desc: "Mise en œuvre par phases, tests et formation des équipes." },
  { step: "04", title: "Support", desc: "Exploitation, supervision 24/7 et amélioration continue." },
] as const;

export const VISION =
  "Devenir un leader incontournable de l'innovation technologique en Afrique et à l'international, en offrant des solutions informatiques, bancaires et télécoms de pointe qui transforment la façon dont les entreprises et les industries opèrent, tout en favorisant la sécurité, l'efficacité et la croissance durable.";

export const MISSION = [
  {
    title: "Infrastructure & sécurité IT et télécoms",
    desc: "Des solutions robustes et sécurisées pour les réseaux et centres de données, protégées contre les menaces, notamment en environnement bancaire et télécom.",
  },
  {
    title: "Solutions informatiques sur-mesure",
    desc: "Logiciels, applications web et mobiles répondant aux besoins spécifiques des entreprises pour gagner en productivité et compétitivité.",
  },
  {
    title: "Transformation digitale",
    desc: "Intégration de l'intelligence artificielle, du cloud et de la virtualisation pour maximiser l'efficacité et l'agilité.",
  },
  {
    title: "Détection de fraude télécom",
    desc: "Des outils de détection et de prévention de la fraude dans les réseaux télécoms pour sécuriser le chiffre d'affaires et garantir la transparence.",
  },
  {
    title: "VAS, MIS & Data Mining télécoms",
    desc: "Intégration des services à valeur ajoutée et du Business Intelligence pour la prise de décision : détection de fraude, churn, optimisation réseau, segmentation client.",
  },
  {
    title: "Solutions bancaires",
    desc: "Core Banking, ERP, FinTech et systèmes de lutte contre le blanchiment de capitaux, robustes et sécurisés.",
  },
  {
    title: "Consultance IT & ingénierie civile",
    desc: "Expertise technique et conseil stratégique pour la mise en œuvre de projets IT et d'ingénierie, axés innovation et rentabilité.",
  },
  {
    title: "Gestion & valorisation des données",
    desc: "Business intelligence et data mining pour analyser les données et décider sur la base d'informations pertinentes et précises.",
  },
  {
    title: "Commerce général (import/export)",
    desc: "Participation au commerce général afin de stimuler les échanges économiques à l'échelle locale et internationale.",
  },
] as const;

