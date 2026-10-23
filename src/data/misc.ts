export type Logo = { name: string; logo: string };

export const PARTNERS: Logo[] = [
  { name: "Cisco", logo: "/partners/cisco.png" },
  { name: "IBM", logo: "/partners/ibm.png" },
  { name: "Lenovo", logo: "/partners/lenovo.png" },
  { name: "Scale Computing", logo: "/partners/scale-computing.png" },
  { name: "Deel", logo: "/partners/deel.png" },
  { name: "Fortinet", logo: "/partners/fortinet.png" },
  { name: "Oracle", logo: "/partners/oracle.png" },
  { name: "VMware", logo: "/partners/vmware.png" },
  { name: "Microsoft", logo: "/partners/microsoft.png" },
  { name: "Palo Alto", logo: "/partners/palo-alto.png" },
  { name: "Odoo", logo: "/partners/odoo.png" },
  { name: "Dolibarr", logo: "/partners/dolibarr.png" },
  { name: "Trend Micro", logo: "/partners/trend-micro.png" },
  { name: "Symantec", logo: "/partners/symantec.png" },
  { name: "Alcatel", logo: "/partners/alcatel.png" },
  { name: "Ericsson", logo: "/partners/ericsson.png" },
  { name: "Grapa", logo: "/partners/grapa.png" },
  { name: "Marben", logo: "/partners/marben.png" },
];

export const REFERENCES: Logo[] = [
  { name: "ANAPI", logo: "/references/anapi.png" },
  { name: "CENI", logo: "/references/ceni.png" },
  { name: "First Bank", logo: "/references/first-bank.png" },
  { name: "Axiz", logo: "/references/axiz.png" },
  { name: "M-Intercom", logo: "/references/m-intercom.png" },
  { name: "NDC Pro", logo: "/references/ndc-pro.png" },
  { name: "Bralima", logo: "/references/bralima.png" },
  { name: "Coginta", logo: "/references/coginta.png" },
  { name: "DGDA", logo: "/references/dgda.png" },
  { name: "DDD", logo: "/references/ddd.png" },
];

export const TESTIMONIALS = [
  {
    quote: "Nous avons gagné un véritable partenaire technologique, pas juste un prestataire. Ils anticipent nos besoins.",
    author: "DSI",
    role: "Banque régionale",
  },
  {
    quote: "L'équipe est exigeante, transparente sur les délais et tient ses engagements. Une rareté.",
    author: "DG",
    role: "Groupe industriel",
  },
  {
    quote: "Ils ont compris notre métier avant de parler technologie. Tout le reste a suivi naturellement.",
    author: "DRH",
    role: "Groupe hospitalier",
  },
];

export const LEADER = {
  name: "Jimmy Mudibu",
  role: "Directeur Général",
  message: `Bienvenue chez Innov Tech Solutions, où l'innovation rencontre l'excellence. Depuis notre création, nous avons pour ambition de fournir des solutions technologiques de pointe, spécialement conçues pour transformer la façon dont les entreprises interagissent avec les technologies de l'information et des télécommunications.

Nous croyons fermement que la technologie doit être un levier de transformation, de croissance et de compétitivité pour toutes les entreprises. Que vous soyez une grande entreprise cherchant à optimiser vos infrastructures IT ou une PME en quête de solutions personnalisées, notre équipe est prête à relever les défis les plus complexes.

Nous mettons un point d'honneur à offrir des services innovants et fiables : développement de logiciels, transformation digitale, gestion des réseaux et centres de données, sécurité informatique et télécommunications. Ensemble, donnons vie à vos idées à travers la technologie.`,
};


export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Cybersécurité" | "Cloud" | "ERP" | "Stratégie IT" | "Innovation";
  author: string;
  date: string;
  readingTime: string;
  content: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "cybersecurite-pme-afrique-2026",
    title: "Cybersécurité : 5 réflexes que toute PME africaine devrait avoir en 2026",
    excerpt: "Les attaques ne ciblent plus seulement les grands groupes. Voici les pratiques simples qui font la différence.",
    category: "Cybersécurité",
    author: "Yao K.",
    date: "12 mai 2026",
    readingTime: "6 min",
    content: `La cybersécurité n'est plus un sujet réservé aux grandes entreprises. En 2026, plus d'une PME sur deux a subi une tentative d'intrusion documentée — et la majorité n'a aucun moyen de le détecter.

## 1. Sauvegarder, vraiment

Une sauvegarde qui n'a jamais été restaurée n'est pas une sauvegarde. Testez vos restaurations au moins deux fois par an.

## 2. Activer l'authentification forte partout

Email, comptes bancaires, ERP, console d'administration : le mot de passe seul n'est plus suffisant. Le MFA réduit de 99 % le risque de compromission de compte.

## 3. Cartographier vos données sensibles

Vous ne pouvez pas protéger ce que vous ne connaissez pas. Faites l'inventaire de vos données critiques et de qui y accède.

## 4. Former vos équipes

Plus de 80 % des intrusions commencent par un email piégé. Une formation de 90 minutes par an change radicalement les comportements.

## 5. Préparer la crise avant qu'elle arrive

Qui appelez-vous à 3h du matin si tout est chiffré ? Avoir un contact de réponse à incident pré-établi évite la panique.

Chez Innov Tech Solutions, nous accompagnons des dizaines de PME sur ces sujets, avec des offres dimensionnées à leur taille.`,
  },
  {
    slug: "erp-reussir-deploiement",
    title: "ERP : 3 erreurs qui font échouer un déploiement (et comment les éviter)",
    excerpt: "Un projet ERP réussi tient à 20 % de technologie et 80 % d'organisation. Voici ce qu'on observe sur le terrain.",
    category: "ERP",
    author: "Aïcha D.",
    date: "28 avril 2026",
    readingTime: "5 min",
    content: `Un ERP qui rate, c'est rarement un problème de logiciel. C'est presque toujours un problème de cadrage, de gouvernance ou de conduite du changement.

## Erreur n°1 : vouloir tout faire en même temps

Comptabilité, RH, ventes, production, achats — déployer les 5 modules en parallèle, c'est la garantie de tout faire mal. Privilégiez un périmètre limité, livré et adopté, avant d'élargir.

## Erreur n°2 : sous-estimer la reprise de données

Vos données existantes sont rarement aussi propres que vous le pensez. Doublons clients, fournisseurs inactifs, écritures non lettrées… Prévoyez 20 à 30 % du budget projet pour ce chantier.

## Erreur n°3 : oublier les utilisateurs

Un ERP qui n'est pas adopté, c'est un investissement perdu. Identifiez des ambassadeurs métier dès la phase de cadrage, formez-les en premier, et faites-les co-construire les processus.`,
  },
  {
    slug: "cloud-souverain-afrique",
    title: "Cloud souverain : la question que toute DSI africaine devrait se poser",
    excerpt: "Hébergement local ou cloud public mondial ? Le choix n'est plus binaire en 2026.",
    category: "Cloud",
    author: "Konan A.",
    date: "10 avril 2026",
    readingTime: "7 min",
    content: `Le débat oppose souvent deux camps : ceux qui veulent tout migrer vers AWS, Azure ou GCP, et ceux qui refusent que la moindre donnée quitte le pays. La réalité est plus nuancée.

## Une approche hybride par défaut

Les architectures les plus robustes que nous déployons aujourd'hui combinent presque toujours du cloud public (pour la scalabilité), du cloud privé local (pour les données sensibles) et de l'edge (pour la latence).

## Trois critères de décision

**Sensibilité de la donnée** : tout ce qui est nominatif, financier ou stratégique mérite une réflexion approfondie.

**Réglementation sectorielle** : banque, santé, télécom — chaque secteur a ses contraintes propres.

**Coût total de possession** : le cloud public n'est pas toujours moins cher à long terme. Faites le calcul sur 3 à 5 ans.`,
  },
];

export const getPost = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);
