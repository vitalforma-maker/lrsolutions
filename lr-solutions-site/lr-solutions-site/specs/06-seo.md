# 06 — SEO

## Mots-clés visés (V1)
Principaux : recouvrement de créances, recouvrement amiable, factures impayées, recouvrement impayés entreprise, relance factures impayées.
Locaux : recouvrement de créances Île-de-France, recouvrement amiable Île-de-France [+ ville du siège quand connue].
Secteurs : recouvrement loyers impayés, recouvrement impayés artisan, recouvrement B2B, recouvrement cotisations association, impayés organisme de formation.

## Balises par page
| Page | `<title>` (≤ 60 car.) | Meta description (≤ 155 car.) |
|---|---|---|
| Accueil | Recouvrement de factures impayées · LR Solutions | Factures impayées ? Je prends en charge votre recouvrement amiable de A à Z : relances, échéanciers, encaissement. Île-de-France & à distance. |
| Comment ça marche | Comment se passe le recouvrement amiable · LR Solutions | Les 5 étapes du recouvrement amiable avec LR Solutions : analyse, relances, échéancier, encaissement et relais commissaire de justice si nécessaire. |
| Secteurs | Recouvrement par secteur d'activité · LR Solutions | TPE/PME, artisans, libéraux, immobilier, services B2B, associations et organismes de formation : un recouvrement adapté à votre métier. |
| À propos | Laurine, experte recouvrement · LR Solutions | Une interlocutrice unique pour vos impayés : écoute, réactivité, résultats. Un recouvrement ferme sur le fond, respectueux sur la forme. |
| Contact | Déposer un impayé · LR Solutions | Décrivez votre situation en 2 minutes : réponse rapide et première analyse sans engagement. Téléphone, formulaire ou Instagram. |
| Mentions légales | Mentions légales · LR Solutions | (noindex non nécessaire, description courte) |
| Confidentialité | Politique de confidentialité · LR Solutions | — |

## Open Graph / réseaux
- `og:image` : `/og-image.jpg` 1200×630 (fond crème, logo, « Votre argent est dehors ? On passe à l'action. »).
- `og:locale` = `fr_FR`, `og:type` = `website`.

## Données structurées (JSON-LD)
- Toutes les pages : `ProfessionalService` (ou `LocalBusiness`) avec `name`, `description`, `url`, `logo`, `telephone`, `email`, `areaServed` (["Île-de-France", "France"]), `sameAs` [Instagram], `address` uniquement si l'adresse est publiée. **Ne pas inclure de champ avec une valeur [À COMPLÉTER]** : filtrer les valeurs vides/marqueurs.
- /comment-ca-marche : `FAQPage` (8 questions de la spec 03).
- `BreadcrumbList` sur les pages internes.

## Technique
- `sitemap-index.xml` via @astrojs/sitemap, `robots.txt` pointant dessus.
- URLs en minuscules sans accents (déjà définies spec 02).
- Balise `canonical` sur chaque page.
- Texte alternatif descriptif sur chaque image (ex. « Bureau avec factures et stylo plume, symbole d'un recouvrement maîtrisé »).

## Après mise en ligne (à faire par Laurine)
- Créer la **fiche Google Business Profile** (catégorie : « Agence de recouvrement »).
- Déclarer le site dans **Google Search Console**.
- Ajouter le lien du site dans la bio Instagram.
