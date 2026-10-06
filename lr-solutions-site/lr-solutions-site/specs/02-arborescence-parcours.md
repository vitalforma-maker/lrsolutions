# 02 — Arborescence, navigation et parcours

## Plan du site (V1)

```
/                         Accueil
/comment-ca-marche        Comment ça marche (processus détaillé + FAQ)
/secteurs                 Secteurs (page à onglets)
   #tpe-pme
   #artisans-liberaux
   #immobilier
   #services-b2b
   #associations-formation
/a-propos                 À propos (Laurine, valeurs, engagements)
/contact                  Contact + formulaire « Déposer un impayé »
/mentions-legales
/politique-de-confidentialite
/404
```

## Navigation (header) — « en mode onglets »
- Desktop : logo à gauche ; onglets au centre : **Accueil · Comment ça marche · Secteurs ▾ · À propos · Contact** ; bouton à droite **« Déposer un impayé »** (bouton or).
- L'onglet actif est souligné d'un filet or (comme les filets sous les titres des visuels Insta).
- « Secteurs ▾ » ouvre au survol/clic un sous-menu des 5 secteurs (liens vers `/secteurs#…`).
- Mobile : logo + burger ; menu plein écran fond vert foncé, liens crème ; en bas du menu : téléphone, Instagram, bouton « Déposer un impayé ».
- Mobile : **barre d'action collante en bas d'écran** (apparaît après 300 px de scroll) avec 2 boutons : 📞 Appeler · ✉️ Déposer un impayé.
- Header collant, fond crème translucide + flou léger au scroll.

## Footer
- Logo + baseline « Écoute · Réactivité · Résultats »
- Colonne Navigation (toutes les pages)
- Colonne Secteurs (5 liens)
- Colonne Contact : téléphone, e-mail, Instagram, zone « Île-de-France & à distance »
- Ligne légale : © 2026 LR Solutions · Mentions légales · Confidentialité · mention de l'assurance RC pro (voir spec 07)

---

## Page Accueil — sections dans l'ordre
1. **Hero** — titre « Votre argent est dehors ? » + « On passe à l'action. » (reprise du post Insta), sous-titre, 2 boutons (Déposer un impayé / Comment ça marche), 3 pastilles de réassurance. Photo hero à droite (desktop) / en fond atténué (mobile). Petite ligne manuscrite : « Une trésorerie saine, des projets qui avancent. »
2. **Brève description** — 3-4 lignes : qui je suis, ce que je fais, pour qui.
3. **Grand schéma « Comment ça se passe »** — 5 étapes reliées par une ligne or (horizontal desktop, vertical timeline mobile). Étape 5 en branche secondaire (« si nécessaire »). Lien vers /comment-ca-marche.
4. **Ce que je prends en charge** — 4 cartes (Relances, Suivi des dossiers, Échéanciers, Encaissement) + encart balance « Et si l'amiable ne suffit pas… ».
5. **Pour qui ?** — 5 cartes secteurs cliquables (icône + titre + 1 ligne) → `/secteurs#…`.
6. **Pourquoi me confier vos impayés** — 3 colonnes Écoute / Réactivité / Résultats (bandeau vert foncé, texte crème).
7. **Bandeau CTA** — « Un impayé ? On s'en occupe ensemble. » + boutons formulaire / téléphone / Instagram « IMPAYÉ ».
8. Footer.

## Page Comment ça marche
1. En-tête de page (titre + chapô)
2. Schéma détaillé : les 5 étapes avec, pour chacune, « Ce que je fais » / « Ce que vous faites » / « Délai indicatif » ([À COMPLÉTER] pour les délais)
3. « Ce que vous devez me transmettre » (checklist documents)
4. Encart honoraires : principe + [À COMPLÉTER] (ne pas inventer de tarif)
5. FAQ (accordéon, 8 questions — textes en spec 03) avec données structurées FAQPage
6. Bandeau CTA

## Page Secteurs (onglets)
- En-tête : « Chaque secteur a ses impayés. Et sa façon de les traiter. »
- Barre d'onglets (5) ; sur mobile, onglets en défilement horizontal (scroll-snap) ou liste déroulante.
- Contenu de chaque onglet (même gabarit) : titre, accroche, « Les impayés que je rencontre souvent » (liste), « Ma façon de faire chez vous » (liste), une phrase de réassurance, bouton CTA pré-remplissant le secteur dans le formulaire (`/contact?secteur=immobilier`).
- Hash dans l'URL synchronisé avec l'onglet actif ; un lien direct ouvre le bon onglet.
- Contenu sans JS : tous les panneaux visibles les uns sous les autres (amélioration progressive).

## Page À propos
1. Portrait de Laurine ([À COMPLÉTER : photo portrait] — en attendant, photo `relances-telephone` ou monogramme du logo)
2. Mon parcours ([À COMPLÉTER] — texte gabarit en spec 03)
3. Ma méthode : ferme sur le fond, respectueuse sur la forme
4. Mes engagements (5 points)
5. Cadre légal de l'activité (encart sobre : assurance, compte dédié, déclaration — voir spec 07)
6. CTA

## Page Contact
- Gauche : formulaire « Déposer un impayé / Me poser une question »
- Droite : téléphone, e-mail, Instagram (« Écrivez IMPAYÉ en message privé »), zone d'intervention, délai de réponse (« sous 24 h ouvrées » [À VALIDER])
- Champs du formulaire : Vous êtes (Entreprise / Indépendant / Association / Autre) · Secteur (liste des 5 + Autre, pré-rempli via `?secteur=`) · Nom et prénom* · Société / structure · E-mail* · Téléphone* · Montant total des impayés (tranches : < 1 000 € / 1 000–5 000 € / 5 000–20 000 € / > 20 000 €) · Ancienneté de la plus vieille facture (< 3 mois / 3–12 mois / > 1 an) · Message* · Case RGPD* · bouton « Envoyer ma demande »
- Pas d'upload de fichier en V1 (on indique : « Ne joignez pas encore vos factures : je vous indiquerai comment me les transmettre en toute sécurité. »)

## Parcours visiteur prioritaires
1. Instagram → Accueil (mobile) → schéma → bouton « Déposer un impayé » → formulaire. **≤ 2 clics.**
2. Mail de prospection → `/secteurs#immobilier` → onglet du secteur → contact pré-rempli.
3. Recherche Google « recouvrement factures impayées Île-de-France » → Accueil ou Comment ça marche → contact.
