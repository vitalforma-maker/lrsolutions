export type EtapeIcon = "folder" | "search" | "send" | "coins" | "scale";

export interface Etape {
  numero: number;
  icon: EtapeIcon;
  titre: string;
  texte: string;
  /** Citation affichée sous le texte (accueil) */
  citation?: string;
  /** Marqueur à compléter affiché après le texte */
  todo?: string;
  /** Étape conditionnelle (« si nécessaire ») */
  optionnelle?: boolean;
  /** Version détaillée (page Comment ça marche) */
  titreDetail: string;
  jeFais: string;
  vousFaites: string;
  delai: string;
}

export const etapes: Etape[] = [
  {
    numero: 1,
    icon: "folder",
    titre: "Vous me confiez le dossier",
    texte:
      "Un échange rapide pour comprendre la situation, puis vous me transmettez les factures et les échanges avec votre client.",
    titreDetail: "Vous me confiez le dossier",
    jeFais: "Premier échange, signature de la convention de recouvrement",
    vousFaites:
      "Me transmettre factures, bons de commande ou devis signés, échanges avec le client",
    delai: "[À COMPLÉTER]",
  },
  {
    numero: 2,
    icon: "search",
    titre: "J'analyse et je vous conseille",
    texte:
      "Je vérifie la créance, les pièces et l'historique, et je vous propose la stratégie la plus adaptée.",
    titreDetail: "Analyse et conseil",
    jeFais: "Vérification des pièces et de la créance, choix de la stratégie",
    vousFaites: "Valider la stratégie proposée",
    delai: "[À COMPLÉTER]",
  },
  {
    numero: 3,
    icon: "send",
    titre: "Je relance, de façon ciblée",
    texte:
      "Courriers, e-mails et appels professionnels. Ferme sur le fond, respectueux sur la forme.",
    citation: "Des clients relancés, pas inquiétés.",
    titreDetail: "Relances",
    jeFais: "Courriers, e-mails, appels ciblés",
    vousFaites: "Me prévenir si le client vous contacte directement",
    delai: "[À COMPLÉTER]",
  },
  {
    numero: 4,
    icon: "coins",
    titre: "Je négocie et j'encaisse",
    texte:
      "Paiement complet ou échéancier adapté à la situation du débiteur. Les sommes sont encaissées sur un compte dédié puis reversées.",
    todo: "[À VALIDER : modalités de reversement]",
    titreDetail: "Négociation et encaissement",
    jeFais: "Paiement ou échéancier, encaissement sur compte dédié, reversement",
    vousFaites: "Valider l'échéancier proposé",
    delai: "[À COMPLÉTER]",
  },
  {
    numero: 5,
    icon: "scale",
    titre: "Si nécessaire : relais à un commissaire de justice",
    texte:
      "Si l'amiable ne suffit pas, et avec votre accord, le dossier peut être transmis à une étude de commissaires de justice partenaire.",
    optionnelle: true,
    titreDetail: "Relais commissaire de justice (si nécessaire)",
    jeFais: "Préparation et transmission du dossier à l'étude partenaire",
    vousFaites: "Donner votre accord",
    delai: "—",
  },
];
