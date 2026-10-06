// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// URL de production : à définir dans la variable d'environnement SITE_URL
// (ex. https://lrsolutions-recouvrement.fr) une fois le domaine acheté.
const site = process.env.SITE_URL || "https://lr-solutions.vercel.app";

export default defineConfig({
  site,
  output: "static",
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
