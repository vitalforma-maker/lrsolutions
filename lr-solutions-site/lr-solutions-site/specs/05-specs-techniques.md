# 05 — Spécifications techniques

## Stack
- **Astro** (dernière version stable), sortie `static`
- **Tailwind CSS** (tokens de la spec 04 dans la config / variables CSS)
- `@fontsource/montserrat`, `@fontsource/inter`, `@fontsource/parisienne`
- `lucide-astro` (ou SVG inline)
- `@astrojs/sitemap`
- Node 20+

## Structure attendue
```
src/
  data/
    site.ts          # nom, coordonnées, réseaux, infos légales, flags (cf. ci-dessous)
    secteurs.ts      # 5 secteurs : slug, titre, icône, accroche, listes, CTA
    etapes.ts        # 5 étapes du processus
    faq.ts           # 8 questions
  layouts/BaseLayout.astro   # <head> SEO, header, footer, barre mobile
  components/
    Header.astro  Footer.astro  MobileActionBar.astro
    Hero.astro  ProcessSchema.astro  ServiceCards.astro  ServiceBadge.astro
    SectorCards.astro  SectorTabs.astro  ValuesBand.astro
    CtaBand.astro  Faq.astro  ContactForm.astro  Todo.astro
    decor/Arcs.astro  decor/GoldRule.astro
  pages/
    index.astro  comment-ca-marche.astro  secteurs.astro  a-propos.astro
    contact.astro  mentions-legales.astro  politique-de-confidentialite.astro  404.astro
  assets/            # logo + photos (copiés depuis /assets du dossier)
public/
  favicon.svg  robots.txt  og-image.jpg (1200×630, généré : fond crème + logo + « Votre argent est dehors ? »)
```

## `src/data/site.ts` (modèle)
```ts
export const site = {
  nom: "LR Solutions",
  sousTitre: "Experte recouvrement",
  baseline: "Écoute · Réactivité · Résultats",
  url: "https://[À COMPLÉTER : domaine]",
  gerante: { prenom: "Laurine", nom: "[À COMPLÉTER]" },
  telephone: "[À COMPLÉTER]",          // format affiché : 06 xx xx xx xx ; lien tel:+33...
  email: "[À COMPLÉTER]",
  instagram: "https://www.instagram.com/lrsolutions.recouvrement/",
  instagramHandle: "@lrsolutions.recouvrement",
  zone: "Île-de-France & à distance",
  delaiReponse: "sous 24 h ouvrées",   // [À VALIDER]
  legal: {
    formeJuridique: "[À COMPLÉTER]", siret: "[À COMPLÉTER]", adresse: "[À COMPLÉTER]",
    tva: "[À COMPLÉTER ou 'TVA non applicable, art. 293 B du CGI']",
    assureurRcPro: "[À COMPLÉTER]", numeroContratRcPro: "[À COMPLÉTER]",
    banqueCompteDedie: "[À COMPLÉTER]",
    tribunalDeclaration: "[À COMPLÉTER : TJ du siège]",
    hebergeur: { nom: "Vercel Inc.", adresse: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis [À VÉRIFIER]" },
  },
  web3formsKey: import.meta.env.PUBLIC_WEB3FORMS_KEY ?? "",
};
```
Un composant `<Todo>` affiche toute valeur commençant par `[À COMPLÉTER` / `[À VALIDER` avec la classe `.todo` (fond jaune pâle, bordure pointillée). **Une variable d'env `PUBLIC_HIDE_TODOS=true` les masque** pour une préproduction présentable.

## Formulaire
- Envoi `fetch` POST JSON vers `https://api.web3forms.com/submit` avec `access_key`, `subject: "Nouvelle demande LR Solutions — {secteur}"`, `from_name: "Site LR Solutions"`, champs du formulaire, et champ anti-spam `botcheck` (honeypot caché).
- Pré-remplissage du secteur via `?secteur=` (lecture de `URLSearchParams` côté client).
- Validation HTML5 + messages d'erreur sous les champs (aria-describedby), focus sur le 1er champ en erreur.
- États : envoi en cours (bouton désactivé + spinner), succès (message, formulaire masqué), erreur (message + lien mailto).
- Si `web3formsKey` vide : le bouton ouvre un `mailto:` pré-rempli avec le contenu.
- Pas de stockage local de données personnelles.

## Onglets secteurs
- Pattern ARIA « tabs » : `role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls`, `role="tabpanel"`, flèches gauche/droite, Home/End.
- Hash synchronisé (`history.replaceState`), lecture du hash au chargement et sur `hashchange` (les liens du sous-menu doivent fonctionner même si on est déjà sur la page).
- Sans JS : tous les panneaux affichés en liste.

## Schéma du processus
- HTML/CSS (pas d'image), 5 étapes : numéro dans un cercle or, icône, titre, texte court.
- ≥ 1024 px : horizontal, ligne or reliant les cercles, étape 5 décalée vers le bas avec un trait pointillé (« si nécessaire »).
- < 1024 px : timeline verticale, ligne or à gauche.
- Données depuis `etapes.ts` (réutilisées sur /comment-ca-marche en version détaillée).

## Performance
- Aucune librairie JS côté client hormis de petits scripts inline/îlots.
- Image hero en `fetchpriority="high"`, dimensions explicites, AVIF/WebP.
- Polices : sous-ensemble latin, `font-display: swap`, préchargement de Montserrat 800.
- Objectif : LCP < 2 s en 4G, CLS < 0,05.

## Accessibilité
- `lang="fr"`, un seul H1 par page, hiérarchie de titres respectée.
- Lien d'évitement « Aller au contenu ».
- Focus visibles (outline or-500 2 px + offset).
- Menu mobile : `aria-expanded`, piège de focus, fermeture à Échap.
- Accordéon FAQ avec `<details>/<summary>`.

## Analytics & cookies
- V1 : **Vercel Web Analytics** (sans cookie) ou aucun outil → **pas de bandeau cookies nécessaire**. Ne pas ajouter Google Analytics.
- Lien Instagram simple (pas d'embed Instagram, qui dépose des cookies).

## Déploiement
- Dépôt Git → projet **Vercel** (preset Astro), variable `PUBLIC_WEB3FORMS_KEY`.
- Domaine personnalisé à brancher ([À COMPLÉTER] — suggestion : `lr-solutions-recouvrement.fr` ou `lrsolutions-recouvrement.fr`, disponibilité à vérifier).
- Redirection www → apex, HTTPS forcé.
- README avec : installation, lancement local, déploiement, où modifier les textes et coordonnées.
