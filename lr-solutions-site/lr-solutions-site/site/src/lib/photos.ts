import type { ImageMetadata } from "astro";

/**
 * Photos du site. Déposer la version HD dans src/assets/photos/<nom>.jpg :
 * elle remplace automatiquement l'aperçu basse définition preview-<nom>.jpg.
 */
const fichiers = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/photos/*.{jpg,jpeg,png,webp}",
  { eager: true },
);

export type NomPhoto =
  | "hero-bureau-factures"
  | "echeancier-ensemble"
  | "relances-telephone"
  | "secteurs-commerce";

export const altPhotos: Record<NomPhoto, string> = {
  "hero-bureau-factures":
    "Bureau en marbre clair avec une pile de factures, un stylo plume et un carnet vert",
  "echeancier-ensemble": "Deux professionnels étudient ensemble un échéancier de paiement",
  "relances-telephone":
    "Professionnelle en blazer noir au téléphone devant un tableau de suivi des relances",
  "secteurs-commerce": "Comptoir d’un petit commerce avec documents et tasse de café",
};

function trouver(base: string): ImageMetadata | undefined {
  for (const ext of ["jpg", "jpeg", "png", "webp"]) {
    const f = fichiers[`../assets/photos/${base}.${ext}`];
    if (f) return f.default;
  }
  return undefined;
}

export interface Photo {
  src: ImageMetadata;
  alt: string;
  /** true = seul l'aperçu basse définition est disponible */
  apercu: boolean;
}

export function getPhoto(nom: NomPhoto): Photo | undefined {
  const hd = trouver(nom);
  if (hd) return { src: hd, alt: altPhotos[nom], apercu: false };
  const apercu = trouver(`preview-${nom}`);
  if (apercu) return { src: apercu, alt: altPhotos[nom], apercu: true };
  return undefined;
}
