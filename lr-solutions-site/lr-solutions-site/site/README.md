# Site LR Solutions — V1

Site vitrine de **LR Solutions — Experte recouvrement** (recouvrement amiable de factures impayées).
Astro + Tailwind CSS, 100 % statique, prêt pour Vercel.

## Lancer le site en local

Prérequis : **Node.js 22.12 ou plus récent**.

```bash
cd site
npm install
npm run dev          # http://localhost:4321  (rechargement automatique)
```

Version de production en local :

```bash
npm run build        # vérifie les types puis génère dist/
npm run preview      # http://localhost:4321
```

## Où modifier quoi

| Je veux changer… | Fichier |
|---|---|
| Téléphone, e-mail, nom, SIRET, assurance, adresse… | `src/data/site.ts` (**seul endroit**) |
| Les 5 secteurs (textes des onglets) | `src/data/secteurs.ts` |
| Les 5 étapes du processus + délais indicatifs | `src/data/etapes.ts` |
| La FAQ | `src/data/faq.ts` |
| Les textes d'une page | `src/pages/<page>.astro` |
| Couleurs, polices, boutons | `src/styles/global.css` |

Les informations manquantes s'affichent en **jaune** `[À COMPLÉTER …]`. Remplacez-les dans `src/data/site.ts`
(ou dans la page concernée) : le surlignage disparaît tout seul.

Pour une préproduction présentable sans les marqueurs jaunes : variable `PUBLIC_HIDE_TODOS=true`.

### Photos

Les photos actuelles sont des **aperçus basse définition** (`src/assets/photos/preview-*.jpg`), affichés floutés
sous un voile. Pour passer en HD, déposez simplement le fichier HD dans `src/assets/photos/` sous le nom sans
`preview-` (ex. `hero-bureau-factures.jpg`) : le site l'utilise automatiquement. Liens Canva dans
`../assets/photos/PHOTOS.md`. Pour le portrait de Laurine : remplacer `relances-telephone.jpg`.

### Logo

`src/assets/logo/logo.png` (extrait de l'Instagram, définition moyenne). Remplacer par le fichier HD, même nom.
Puis régénérer favicon / logo JSON-LD / image de partage : `node scripts/generate-assets.mjs`
(l'image de partage `og-image.jpg` est rendue depuis `scripts/og.html`, voir le commentaire du script).

## Formulaire de contact

Le formulaire envoie les demandes via **Web3Forms** (gratuit) :
1. Créer une clé sur https://web3forms.com avec l'adresse e-mail qui doit recevoir les demandes.
2. La renseigner dans la variable d'environnement `PUBLIC_WEB3FORMS_KEY` (fichier `.env` en local, réglages Vercel en ligne).

Sans clé, le bouton « Envoyer ma demande » ouvre un e-mail pré-rempli (repli `mailto:`).

## Mise en ligne sur Vercel

1. Pousser le projet sur GitHub.
2. Sur vercel.com : **Add New → Project**, importer le dépôt, **Root Directory = `site`** (preset Astro détecté).
3. Variables d'environnement :
   - `PUBLIC_WEB3FORMS_KEY` = la clé Web3Forms
   - `SITE_URL` = l'URL définitive, ex. `https://lrsolutions-recouvrement.fr` (balises canonical, sitemap, partage)
4. Déployer, puis brancher le nom de domaine (Settings → Domains), redirection www → domaine principal.

Voir `.env.example` pour la liste des variables.

## Avant la mise en ligne publique

Compléter tous les marqueurs jaunes (liste dans `../specs/08-infos-a-completer.md`), en particulier les mentions
obligatoires de l'activité réglementée : assurance RC pro, compte bancaire dédié, déclaration au procureur.
Ensuite : Google Search Console, fiche Google Business Profile, lien du site dans la bio Instagram.
