export type IconName =
  | "building"
  | "hammer"
  | "house"
  | "briefcase"
  | "graduation";

export interface Secteur {
  slug: string;
  /** Libellé court (onglets, menus, formulaire) */
  label: string;
  icon: IconName;
  /** Ligne de la carte « Pour qui ? » de l'accueil */
  ligne: string;
  titre: string;
  accroche: string;
  impayes: string[];
  methode: string[];
  reassurance: string;
  cta: string;
  note?: string;
}

export const secteurs: Secteur[] = [
  {
    slug: "tpe-pme",
    label: "TPE / PME",
    icon: "building",
    ligne: "Des factures qui s'accumulent et pas le temps de relancer.",
    titre: "TPE / PME : récupérez votre trésorerie sans y passer vos journées",
    accroche:
      "Dans une petite structure, chaque facture impayée pèse directement sur la trésorerie… et sur l'agenda du dirigeant.",
    impayes: [
      "factures clients en retard de 30, 60, 90 jours",
      "clients qui promettent sans payer",
      "petites factures qu'on n'a jamais le temps de relancer",
      "retards qui s'accumulent en fin d'année",
    ],
    methode: [
      "relances structurées par ancienneté",
      "rappel des pénalités de retard et de l'indemnité forfaitaire prévues entre professionnels",
      "échéanciers réalistes",
      "point régulier avec vous",
    ],
    reassurance:
      "Vous vous concentrez sur votre activité, je m'occupe de faire rentrer l'argent.",
    cta: "Confier mes impayés",
  },
  {
    slug: "artisans-liberaux",
    label: "Artisans & libéraux",
    icon: "hammer",
    ligne: "Chantiers, prestations, honoraires : être payé pour le travail fait.",
    titre: "Artisans & professions libérales : être payé pour le travail fait",
    accroche:
      "Le chantier est terminé, la prestation réalisée… et le solde n'arrive pas. Relancer soi-même est gênant et prend du temps sur le terrain.",
    impayes: [
      "soldes de chantier",
      "acomptes non versés",
      "honoraires impayés",
      "clients qui contestent pour retarder le paiement",
    ],
    methode: [
      "analyse du devis signé et des échanges",
      "relances adaptées aux clients particuliers comme professionnels",
      "proposition d'échéancier quand c'est la solution la plus sûre",
    ],
    reassurance:
      "Vous restez sur vos chantiers et auprès de vos clients, je gère la relance.",
    cta: "Confier mes impayés",
  },
  {
    slug: "immobilier",
    label: "Professions immobilières",
    icon: "house",
    ligne: "Loyers, charges, honoraires : relancer avec tact.",
    titre: "Professions immobilières : relancer avec tact, encaisser avec méthode",
    accroche:
      "Agences, administrateurs de biens, syndics, propriétaires bailleurs : les impayés de loyers et de charges demandent de la réactivité et beaucoup de tact.",
    impayes: [
      "loyers et charges en retard",
      "régularisations de charges",
      "honoraires de gestion ou de transaction",
      "charges de copropriété",
    ],
    methode: [
      "relances rapides dès les premiers retards",
      "dialogue avec l'occupant pour comprendre la situation",
      "échéanciers suivis",
      "relais commissaire de justice si nécessaire",
    ],
    reassurance:
      "Un traitement humain des situations, avec un objectif clair : le paiement.",
    cta: "Confier mes impayés",
    note: "[À VALIDER par Laurine : périmètre exact — bailleurs particuliers ? syndics ?]",
  },
  {
    slug: "services-b2b",
    label: "Prestations de services B2B",
    icon: "briefcase",
    ligne: "Entre professionnels, des relances qui préservent le partenariat.",
    titre: "Prestations de services B2B : être payé sans fragiliser le partenariat",
    accroche:
      "Entre professionnels, on veut être payé… sans perdre le client. Une relance confiée à un tiers permet de rester ferme tout en préservant la relation.",
    impayes: [
      "factures bloquées « en validation »",
      "retards de paiement chroniques",
      "prestations contestées après livraison",
      "clients grands comptes aux circuits de paiement complexes",
    ],
    methode: [
      "identification du bon interlocuteur (comptabilité, achats, direction)",
      "relances professionnelles et documentées",
      "rappel des conditions de paiement, pénalités et indemnité forfaitaire de recouvrement",
      "suivi jusqu'à l'encaissement",
    ],
    reassurance: "Vous gardez la relation commerciale, je porte la relance.",
    cta: "Confier mes impayés",
  },
  {
    slug: "associations-formation",
    label: "Associations & organismes de formation",
    icon: "graduation",
    ligne: "Cotisations, formations, financements : relancer sans brusquer.",
    titre: "Associations & organismes de formation : relancer sans brusquer",
    accroche:
      "Cotisations, frais de formation, participations non réglées : des sommes souvent modestes, mais qui finissent par peser lourd sur le budget.",
    impayes: [
      "cotisations d'adhérents",
      "formations suivies et non réglées",
      "restes à charge après financement",
      "factures d'entreprises clientes en retard",
    ],
    methode: [
      "relances bienveillantes et claires",
      "prise en compte de la relation avec vos adhérents ou stagiaires",
      "échéanciers adaptés",
      "suivi régulier",
    ],
    reassurance:
      "Vous préservez la confiance de vos adhérents et clients, je récupère les sommes dues.",
    cta: "Confier mes impayés",
  },
];

