const base = import.meta.env.BASE_URL.replace(/\/+$/, "");
const baseRoot = base === "" ? "/" : `${base}/`;

function isExternal(path: string): boolean {
  return /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(path);
}

// File-like paths (have an extension) are left bare; page routes get a
// trailing slash so links match the canonical URL Astro/Cloudflare Pages
// actually serves (directory-style `/path/index.html` -> `/path/`, with
// `/path` 308-redirecting to it). Without this, every internal link points
// at a redirect stub instead of the canonical URL — invisible to users,
// but crawlers/SEO tools count it as zero direct internal links to the
// canonical page.
function isFileLikePath(path: string): boolean {
  return /\.[a-zA-Z0-9]+$/.test(path);
}

export function getAssetPath(path: string): string {
  if (isExternal(path)) return path;

  const normalized = path.replace(/^\/+/, "");

  if (!normalized) return baseRoot;

  const withTrailingSlash =
    normalized.endsWith("/") || isFileLikePath(normalized)
      ? normalized
      : `${normalized}/`;

  return `${baseRoot}${withTrailingSlash}`;
}

export function absoluteUrl(
  path: string,
  site?: string | URL
): string {
  return new URL(getAssetPath(path), site).toString();
}

/**
 * OG image path for a given route, mirroring src/pages/og/[...path].png.ts's
 * getStaticPaths 1:1 — the homepage's activePath ("/") maps to /og/home.png.
 */
export function getOgImagePath(activePath: string): string {
  const normalized = activePath.replace(/\/+$/, "");
  return normalized === "" ? "/og/home.png" : `/og${normalized}.png`;
}