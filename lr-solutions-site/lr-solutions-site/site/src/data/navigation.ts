import { secteurs } from "./secteurs";

export const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/comment-ca-marche", label: "Comment ça marche" },
  { href: "/secteurs", label: "Secteurs", sous: secteurs.map((s) => ({ href: `/secteurs#${s.slug}`, label: s.label })) },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];
