/**
 * Source unique des coordonnées et informations légales de LR Solutions.
 * Toute valeur commençant par « [À COMPLÉTER » / « [À VALIDER » / « [À VÉRIFIER »
 * s'affiche surlignée en jaune sur le site (et disparaît avec PUBLIC_HIDE_TODOS=true).
 *
 * Pour mettre en ligne : remplacer chaque marqueur par la vraie valeur.
 */
export const site = {
  nom: "LR Solutions",
  sousTitre: "Experte recouvrement",
  baseline: "Écoute · Réactivité · Résultats",
  cibles: "Entreprises · TPE · PME · Indépendants",
  url: "https://[À COMPLÉTER : domaine]",
  gerante: {
    prenom: "Laurine",
    nom: "[À COMPLÉTER : nom de famille]",
    qualite: "[À COMPLÉTER : qualité (gérante, présidente…)]",
  },
  /** Format affiché, ex. « 06 12 34 56 78 » */
  telephone: "[À COMPLÉTER : téléphone]",
  /** Format international pour le lien tel:, ex. « +33612345678 » */
  telephoneLien: "",
  email: "[À COMPLÉTER : e-mail]",
  instagram: "https://www.instagram.com/lrsolutions.recouvrement/",
  instagramHandle: "@lrsolutions.recouvrement",
  zone: "Île-de-France & à distance",
  delaiReponse: "sous 24 h ouvrées",
  delaiReponseAValider: true,
  legal: {
    formeJuridique: "[À COMPLÉTER : forme juridique]",
    siret: "[À COMPLÉTER : SIRET]",
    rcs: "[À COMPLÉTER : mention RCS / RNE]",
    adresse: "[À COMPLÉTER : adresse du siège]",
    tva: "[À COMPLÉTER : n° de TVA ou « TVA non applicable, art. 293 B du CGI »]",
    assureurRcPro: "[À COMPLÉTER : assureur]",
    numeroContratRcPro: "[À COMPLÉTER : n° de contrat]",
    banqueCompteDedie: "[À COMPLÉTER : établissement]",
    tribunalDeclaration: "[À COMPLÉTER : tribunal judiciaire]",
    hebergeur: {
      nom: "Vercel Inc.",
      adresse: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
      adresseAVerifier: true,
      site: "https://vercel.com",
    },
  },
  web3formsKey: (import.meta.env.PUBLIC_WEB3FORMS_KEY ?? "") as string,
};

export const hideTodos = import.meta.env.PUBLIC_HIDE_TODOS === "true";

const TODO_RE = /\[À (COMPLÉTER|VALIDER|VÉRIFIER)[^\]]*\]/;

/** Vrai si la valeur est (ou contient) un marqueur d'information manquante. */
export function isTodo(value: string | undefined | null): boolean {
  return !value || TODO_RE.test(value);
}

/** Valeur exploitable (sans marqueur), sinon undefined. */
export function known(value: string | undefined | null): string | undefined {
  return isTodo(value) ? undefined : (value as string);
}

export const telHref = known(site.telephone)
  ? `tel:${site.telephoneLien || site.telephone.replace(/[^\d+]/g, "")}`
  : undefined;
export const mailHref = known(site.email) ? `mailto:${site.email}` : undefined;
export const nomComplet = `${site.gerante.prenom} ${site.gerante.nom}`;
