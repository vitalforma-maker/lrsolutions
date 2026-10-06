# Dossier de création — Site LR Solutions (V1)

**LR Solutions — Experte recouvrement**
Recouvrement amiable de factures impayées pour entreprises, TPE, PME, artisans, libéraux et indépendants. Île-de-France & à distance.
Instagram : `@lrsolutions.recouvrement`

Ce dossier contient tout ce qu'il faut pour que **Claude Code** construise une première version du site, prête à être mise en ligne.

---

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `CLAUDE.md` | Consignes de travail pour Claude Code (stack, règles, ordre de construction, critères de validation) |
| `specs/01-brief-projet.md` | Contexte, objectifs, cibles, ton, ce qui est attendu de la V1 |
| `specs/02-arborescence-parcours.md` | Pages, navigation par onglets, sections de chaque page, parcours visiteur |
| `specs/03-contenus-textes.md` | **Tous les textes du site, prêts à intégrer** |
| `specs/04-charte-graphique.md` | Couleurs, typographies, composants, logo, photos — repris de l'Instagram |
| `specs/05-specs-techniques.md` | Stack, structure du projet, formulaire, performance, accessibilité, déploiement |
| `specs/06-seo.md` | Balises title/meta par page, données structurées, mots-clés |
| `specs/07-conformite-legale.md` | Mentions légales, RGPD, règles propres au recouvrement amiable |
| `specs/08-infos-a-completer.md` | **Ce que Laurine doit fournir avant mise en ligne** |
| `assets/logo/` | Logo extrait des visuels Instagram (version détourée + version brute) |
| `assets/photos/` | Photos générées pour le site (aperçus) + fiche de chaque photo |
| `assets/references/` | Visuels Instagram de référence + brief WhatsApp de Laurine |

---

## Comment lancer la construction avec Claude Code

1. Décompresser le dossier sur l'ordinateur.
2. Ouvrir un terminal dans le dossier `lr-solutions-site/` et lancer `claude`.
3. Coller ce message :

```
Lis CLAUDE.md puis tous les fichiers du dossier specs/ dans l'ordre.
Construis la V1 du site LR Solutions en suivant exactement ces specs.
Utilise les textes de specs/03-contenus-textes.md tels quels.
Laisse les informations manquantes sous forme de marqueurs [À COMPLÉTER] bien visibles
et liste-les à la fin.
Quand c'est terminé : lance le build, vérifie chaque page sur mobile et desktop,
corrige ce qui ne va pas, puis donne-moi le résumé et la commande pour voir le site en local.
```

4. Avant la mise en ligne : remplir les éléments listés dans `specs/08-infos-a-completer.md`.

---

## Points d'attention avant mise en ligne

- **Photos** : les fichiers `preview-*.jpg` sont des aperçus basse définition. Les versions HD (1680 px) sont dans le Canva du compte Vital Forma (liens dans `assets/photos/PHOTOS.md`). Les télécharger et les déposer dans `assets/photos/` avec les noms indiqués — le site les prend automatiquement.
- **Logo** : extrait d'une capture d'écran Instagram, donc en définition moyenne. Récupérer le fichier source du logo (PNG HD ou SVG) auprès de Laurine pour la version définitive.
- **Activité réglementée** : le recouvrement amiable pour le compte d'autrui est encadré (assurance RC pro, compte dédié aux fonds, déclaration au procureur). Les mentions correspondantes doivent figurer sur le site — voir `specs/07-conformite-legale.md`.
