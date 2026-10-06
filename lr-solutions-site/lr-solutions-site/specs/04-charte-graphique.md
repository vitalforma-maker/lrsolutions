# 04 — Charte graphique

> Source : les deux posts Instagram de Laurine (`assets/references/`). Elle l'a dit elle-même : **« la charte graphique, c'est mon Insta »**. Le site doit donner l'impression immédiate d'être la même marque.

## Ambiance
Premium, sobre, rassurant. Cabinet de conseil haut de gamme plutôt que société de recouvrement agressive.
Mots-clés : crème, vert forêt profond, or champagne, marbre clair, stylo plume, lumière naturelle, beaucoup d'air.

## Couleurs (relevées sur les visuels)

| Token | Hex | Usage |
|---|---|---|
| `--vert-900` | `#29342E` | Couleur principale : bandeaux, boutons primaires, footer, titres forts |
| `--vert-800` | `#2F3A31` | Vert du logo, survols, dégradés |
| `--vert-700` | `#3E4C43` | Bordures sur fond vert, états actifs |
| `--or-500` | `#A68B6D` | Accent : filets, icônes, boutons secondaires, 2e ligne du H1 en très grand |
| `--or-600` | `#93785A` | Titres accent en grand corps (ex. « EST DEHORS ? ») |
| `--or-700` | `#7A6145` | **Or pour petits textes** sur fond crème (contraste AA 5,4:1) |
| `--or-300` | `#C9AE8A` | Or clair sur fond vert (contraste 6,1:1) |
| `--creme-50` | `#FAF7EE` | Fond principal du site |
| `--creme-100` | `#F3EEE2` | Fonds de sections alternées, cartes |
| `--beige-200` | `#E6DCCB` | Pastilles des icônes (cercles beige des visuels), séparateurs |
| `--texte` | `#1F2622` | Texte courant |
| `--texte-doux` | `#4A524D` | Texte secondaire (contraste 7,5:1) |

**Règles de contraste (vérifiées)**
- Texte crème sur vert-900 : 12:1 ✅
- Or-500 sur crème : 3:1 → **réservé aux textes ≥ 24 px ou gras ≥ 19 px**, et aux éléments décoratifs.
- Petits textes or sur crème → `--or-700`. Petits textes or sur vert → `--or-300`.
- Bouton or : fond `--or-500`, texte `--vert-900` **gras 18 px minimum** (4:1).

## Typographies (auto-hébergées via @fontsource)
| Rôle | Police | Graisse | Remarque |
|---|---|---|---|
| Titres (H1, H2, gros accroches) | **Montserrat** | 800 / 700 | Capitales pour le H1 du hero, comme sur l'Insta. Interlettrage serré (-0,01em) |
| Sur-titres / labels | **Montserrat** | 500, CAPITALES | Interlettrage très large (0,3em) — style « EXPERTE RECOUVREMENT », « ÉCOUTE RÉACTIVITÉ RÉSULTATS » |
| Texte courant | **Inter** | 400 / 600 | 17-18 px sur mobile, interligne 1,6 |
| Accent manuscrit | **Parisienne** | 400 | Uniquement pour 1 phrase par page max (ex. « Une trésorerie saine, des projets qui avancent. »), couleur vert-900, avec un trait or légèrement incliné en dessous |

Échelle : H1 clamp(2.4rem, 7vw, 4.5rem) · H2 clamp(1.8rem, 4vw, 2.6rem) · H3 1.25rem · texte 1.0625rem.

## Logo
- `assets/logo/lr-solutions-logo-transparent.png` : extrait des visuels, fond détouré (définition moyenne : **max 200 px de large à l'écran**).
- `assets/logo/lr-solutions-logo-original-crop.png` : version brute sur fond crème.
- Composition : monogramme « LR » vert + arc or + étoile 4 branches or + « SOLUTIONS » en capitales espacées, et en dessous, séparé par un filet or, « EXPERTE RECOUVREMENT ».
- Dans le header : logo seul (hauteur 48-56 px). Le sous-titre « EXPERTE RECOUVREMENT » est écrit en HTML (pas dans l'image).
- Sur fond vert (footer, menu mobile) : utiliser le PNG détouré à l'intérieur d'une pastille crème arrondie, OU recréer le mot « SOLUTIONS » en crème en HTML à côté. **Ne pas recolorer l'image.**
- Favicon : l'**étoile 4 branches or** sur fond vert-900 (à dessiner en SVG simple : losange étiré à 4 pointes).
- [À COMPLÉTER : fichier source HD/SVG du logo]

## Éléments graphiques signature (à reproduire)
1. **Bloc « ON PASSE / À L'ACTION. »** : deux bandeaux superposés et décalés — le 1er fond vert-900 texte crème, le 2e fond or-500 texte crème, décalé vers la droite, coins légèrement arrondis (6 px). Texte Montserrat 800 en capitales.
2. **Titre bicolore** : 1re ligne vert-900, 2e ligne or-600 (« VOTRE ARGENT / EST DEHORS ? »).
3. **Pastilles d'icônes** : cercle beige-200 (64-72 px) avec icône fine (trait 1,5 px) vert-900 ; label en CAPITALES gras dessous ; description en texte normal ; séparateurs verticaux fins or entre les items (desktop).
4. **Filets or** : petits traits horizontaux or (40-60 px × 2 px) sous les sur-titres et en fin de sections, et longs filets fins de part et d'autre d'une phrase centrée (« — DES CLIENTS RELANCÉS, PAS INQUIÉTÉS. — »).
5. **Arcs décoratifs** : grands quarts de cercle vert-900 (coin haut gauche) et or dégradé (coin bas droit) en bord de sections, comme sur le post « Votre argent est dehors ». En SVG, discrets, cachés sous 768 px si encombrants.
6. **Bandeau CTA arrondi** vert-900 (rayon 16-20 px) avec icône bulle de message à gauche séparée par un trait vertical, texte crème, mot-clé en or (« “IMPAYÉ” »).
7. Ligne de « badges » en bas des cartes : icône localisation + « Île-de-France & à distance », icône groupe + « Entreprises · TPE · PME · Indépendants ».

## Icônes (lucide)
| Usage | Icône lucide |
|---|---|
| Relances | `file-text` |
| Suivi des dossiers | `bar-chart-3` (ou `users-round` comme le post 1) |
| Échéanciers | `calendar-days` |
| Encaissement | `coins` |
| Transmission commissaire de justice | `scale` |
| Message Instagram | `message-circle-more` |
| Localisation | `map-pin` |
| Cibles | `users` |
| TPE/PME | `building-2` · Artisans & libéraux `hammer` · Immobilier `home` · Services B2B `briefcase` · Associations & formation `graduation-cap` |

## Photos (voir `assets/photos/PHOTOS.md`)
- Style : lumière naturelle, tons crème / vert / or, **aucun visage identifiable** (pas de banque d'images « open space souriant »).
- Toujours un léger voile crème ou un dégradé vert-900 → transparent quand du texte passe dessus.

## Composants — règles rapides
- **Bouton primaire** : fond vert-900, texte crème, Montserrat 600, padding 14×28, rayon 999px, flèche → au survol (translation 4 px).
- **Bouton secondaire** : contour 1,5 px vert-900, texte vert-900, fond transparent.
- **Bouton accent** (CTA « Déposer un impayé » du header) : fond or-500, texte vert-900 gras 18 px.
- **Cartes** : fond blanc ou creme-100, rayon 16 px, ombre très douce (0 8px 24px rgba(41,52,46,.06)), filet or 40 px en haut à gauche.
- **Sections** : padding vertical 80-120 px desktop / 56-72 px mobile ; alternance crème / creme-100 / vert-900.
- **Animations** : très sobres (fade-up 12 px au scroll, 300 ms), respect de `prefers-reduced-motion`. Le schéma du processus peut dessiner sa ligne or progressivement à l'apparition.

## Mode sombre
Non prévu en V1 (la charte est claire par nature). Forcer `color-scheme: light`.
