# Consignes pour Claude Code — Site LR Solutions V1

Tu construis le site vitrine de **LR Solutions**, une professionnelle indépendante du **recouvrement amiable de factures impayées** (B2B principalement). Objectif de la V1 : un site sobre, premium, rassurant, rapide, qui génère des demandes de contact.

## Sources de vérité (à lire dans cet ordre)
1. `specs/01-brief-projet.md` — contexte et objectifs
2. `specs/02-arborescence-parcours.md` — pages et sections
3. `specs/03-contenus-textes.md` — **textes définitifs : les intégrer tels quels, sans les réécrire**
4. `specs/04-charte-graphique.md` — design system
5. `specs/05-specs-techniques.md` — stack et contraintes
6. `specs/06-seo.md` — SEO par page
7. `specs/07-conformite-legale.md` — pages légales et règles de rédaction
8. `specs/08-infos-a-completer.md` — données manquantes
Références visuelles : `assets/references/*.png` (posts Instagram = la charte à respecter).

## Stack imposée
- **Astro** (dernière version stable) + **Tailwind CSS**, site 100 % statique.
- Icônes : **lucide** (`lucide-astro` ou SVG inline).
- Polices auto-hébergées via `@fontsource` (pas d'appel Google Fonts au runtime → RGPD).
- Formulaire : **Web3Forms** (clé dans `PUBLIC_WEB3FORMS_KEY`), avec repli `mailto:` si la clé est absente.
- Déploiement cible : **Vercel** (adapter statique, aucun serveur requis).
- Pas de framework JS lourd. Le JS se limite à : menu mobile, onglets secteurs, FAQ accordéon, envoi du formulaire.

## Règles impératives
- **Ne jamais inventer** : pas de faux chiffres, faux avis clients, faux logos clients, faux tarifs, fausse adresse. Toute donnée absente = marqueur `[À COMPLÉTER : …]` stylé en surbrillance jaune (classe `.todo`) pour être repérable, et centralisée dans `src/data/site.ts`.
- Toutes les données de contact et légales (nom, SIRET, téléphone, e-mail, adresse, Instagram, assurance…) viennent **uniquement** de `src/data/site.ts`.
- Langue : français. Typographie française : espace insécable avant `? ! : ;` et dans `« »`, apostrophes typographiques ’.
- Vocabulaire juridique : écrire « commissaire de justice » (et non « huissier » seul). Ne jamais présenter LR Solutions comme ayant un pouvoir de contrainte. Ne jamais promettre un résultat garanti. Voir `specs/07`.
- Accessibilité : contraste AA minimum, focus visibles, `alt` sur toutes les images, navigation clavier des onglets (pattern ARIA tabs), labels sur tous les champs.
- Mobile first : la majorité du trafic viendra d'Instagram, donc **du mobile**. Tester à 360 px, 390 px, 768 px, 1280 px.
- Images : composant `<Image>` d'Astro, WebP/AVIF, `loading="lazy"` sauf l'image du hero.
- Si une photo `assets/photos/<nom>.jpg` (HD) existe, l'utiliser ; sinon utiliser `preview-<nom>.jpg` en fond avec un dégradé de la charte par-dessus (jamais d'image pixellisée en grand : au-delà de 600 px de large, remplacer par le dégradé seul).

## Ordre de construction
1. Initialiser le projet, Tailwind, polices, tokens de couleur (spec 04).
2. `src/data/site.ts` (coordonnées + marqueurs) et `src/data/secteurs.ts` (contenu des 5 secteurs).
3. Layout (header avec onglets, footer, bouton contact flottant mobile).
4. Composants : Hero, Schéma du processus, Cartes services, Onglets secteurs, Bandeau CTA, FAQ, Formulaire.
5. Pages dans l'ordre : Accueil → Comment ça marche → Secteurs → À propos → Contact → Mentions légales → Confidentialité → 404.
6. SEO (spec 06) : balises, sitemap, robots.txt, JSON-LD, favicon depuis le logo.
7. Vérification (ci-dessous) puis corrections.

## Critères de validation (à vérifier toi-même avant de rendre la main)
- `npm run build` sans erreur ni avertissement.
- Chaque page vérifiée en capture à 390 px et 1280 px : pas de débordement horizontal, textes lisibles, CTA visible sans scroller sur mobile dans le hero.
- Lighthouse (mobile) : Performance ≥ 90, Accessibilité ≥ 95, SEO = 100, Bonnes pratiques ≥ 95.
- Tous les liens internes fonctionnent ; le lien Instagram ouvre `https://www.instagram.com/lrsolutions.recouvrement/`.
- Les onglets secteurs fonctionnent au clavier et l'URL change (`/secteurs#immobilier`), un lien direct ouvre le bon onglet.
- Le formulaire valide les champs requis, affiche un message de succès / d'erreur, et la case RGPD est obligatoire.
- Aucun texte inventé hors specs ; tous les `[À COMPLÉTER]` listés dans le résumé final.

## Livrable attendu
- Le projet dans ce dossier (`site/` ou racine, au choix), un `README` de lancement (`npm install`, `npm run dev`, déploiement Vercel), et un résumé : pages créées, points à compléter, suggestions V2.
