// Génère les images statiques de public/ (favicons, logo pour JSON-LD, og-image).
// Usage : node scripts/generate-assets.mjs  (og.png doit avoir été produit depuis scripts/og.html)
import sharp from "sharp";
import { readFileSync, existsSync } from "node:fs";

const fav = readFileSync("public/favicon.svg");
await sharp(fav).resize(32, 32).png().toFile("public/favicon-32.png");
await sharp(fav).resize(180, 180).png().toFile("public/apple-touch-icon.png");
await sharp("src/assets/logo/logo.png").resize({ width: 600 }).png({ compressionLevel: 9 }).toFile("public/logo-lr-solutions.png");
if (existsSync("scripts/og.png")) {
  await sharp("scripts/og.png").resize(1200, 630).jpeg({ quality: 86, mozjpeg: true }).toFile("public/og-image.jpg");
}
console.log("ok");
