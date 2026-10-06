export interface QuestionFaq {
  question: string;
  reponse: string;
  todo?: string;
}

export const faq: QuestionFaq[] = [
  {
    question: "À partir de quel montant pouvez-vous intervenir ?",
    reponse:
      "Il n'y a pas de petit impayé quand il s'agit de votre trésorerie. J'étudie chaque situation, y compris les factures de quelques centaines d'euros.",
    todo: "[À VALIDER : montant minimum éventuel]",
  },
  {
    question: "Ma facture date de plusieurs mois, est-il trop tard ?",
    reponse:
      "Non, mais plus on agit tôt, plus les chances de paiement sont élevées. Entre professionnels, une créance commerciale se prescrit en principe par 5 ans : on vérifie ensemble la situation de votre dossier.",
  },
  {
    question: "Allez-vous abîmer la relation avec mon client ?",
    reponse:
      "C'est justement tout l'enjeu de ma méthode : des relances fermes mais courtoises. Des clients relancés, pas inquiétés. Dans beaucoup de cas, un tiers professionnel débloque la situation sans conflit.",
  },
  {
    question: "Qu'est-ce que le recouvrement amiable ?",
    reponse:
      "C'est l'ensemble des démarches menées pour obtenir le paiement sans passer par un juge : relances, négociation, échéancier. C'est la première étape, la plus rapide et la moins coûteuse.",
  },
  {
    question: "Et si mon client ne paie toujours pas ?",
    reponse:
      "Avec votre accord, je transmets le dossier à une étude de commissaires de justice partenaire, qui peut engager les démarches judiciaires. Je fais le lien pour que vous n'ayez pas à tout réexpliquer.",
  },
  {
    question: "Combien ça coûte ?",
    reponse:
      "Le tarif dépend du montant et de la nature du dossier. Il est fixé avec vous avant de commencer, dans une convention écrite.",
    todo: "[À COMPLÉTER]",
  },
  {
    question: "Comment récupérez-vous l'argent ?",
    reponse:
      "Les paiements des débiteurs sont versés sur un compte bancaire dédié exclusivement aux fonds encaissés pour mes clients, puis reversés selon les modalités prévues dans notre convention.",
  },
  {
    question: "Intervenez-vous partout en France ?",
    reponse:
      "Oui. Je suis basée en Île-de-France et je traite les dossiers à distance partout en France : tout se fait par téléphone, e-mail et courrier.",
  },
];
