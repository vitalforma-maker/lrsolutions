/**
 * Typographie française appliquée automatiquement au HTML généré :
 * espaces insécables avant ? ! : ; » et après «, apostrophes typographiques,
 * insécables dans les nombres et unités (1 000 €, 24 h).
 */
const NBSP = " ";

export function typo(text: string): string {
  return text
    .replace(/&#39;|&#x27;|'/g, "’")
    .replace(/ ([?!:;»])/g, `${NBSP}$1`)
    .replace(/« /g, `«${NBSP}`)
    .replace(/(\d) (?=\d{3}(?!\d))/g, `$1${NBSP}`)
    .replace(/(\d) (?=(?:€|%|h\b|ans\b|mois\b|jours\b))/g, `$1${NBSP}`)
    .replace(/n° /g, `n°${NBSP}`)
    .replace(/A à Z/g, `A${NBSP}à${NBSP}Z`);
}

const ATTRS = /(\s(?:alt|title|aria-label|placeholder)=")([^"]*)(")/g;
const META_CONTENT = /(<meta\s+(?:name|property)="(?:description|og:title|og:description|og:image:alt|twitter:title|twitter:description)"\s+content=")([^"]*)(")/g;

/** Applique `typo` aux nœuds texte du HTML (hors <script>, <style>) et aux attributs textuels. */
export function typoHtml(html: string): string {
  const parts = html.split(/(<script\b[\s\S]*?<\/script>|<style\b[\s\S]*?<\/style>|<[^>]+>)/g);
  return parts
    .map((part, i) => {
      if (i % 2 === 0) return typo(part);
      if (part.startsWith("<script") || part.startsWith("<style")) return part;
      return part
        .replace(ATTRS, (_, a, v, z) => a + typo(v) + z)
        .replace(META_CONTENT, (_, a, v, z) => a + typo(v) + z);
    })
    .join("");
}
