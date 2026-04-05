/** Website Carbon marketing site root (not the per-domain report path). */
export const WEBSITE_CARBON_SITE_HOME = "https://www.websitecarbon.com/";

/**
 * Website Carbon hosts per-site reports at:
 * `https://www.websitecarbon.com/website/{hostname-with-dots-replaced-by-dashes}/`
 * (e.g. `themusictree.org` → `…/website/themusictree-org/`).
 *
 * `hostOrOrigin` is a hostname (e.g. `themusictree.org`) or full origin (`https://…`), same shape as **`NEXT_PUBLIC_SITE_ORIGIN`**.
 */
export function websiteCarbonWebsiteResultsUrl(
  hostOrOrigin: string | undefined | null,
): string | null {
  const t = hostOrOrigin?.trim().replace(/\/+$/, "");
  if (!t) return null;
  const withScheme = /^https?:\/\//i.test(t) ? t : `https://${t}`;
  let host: string;
  try {
    host = new URL(withScheme).hostname;
  } catch {
    return null;
  }
  if (!host) return null;
  const slug = host.replace(/\./g, "-");
  return `https://www.websitecarbon.com/website/${slug}/`;
}

/**
 * Report URL for the badge / copy. Uses **`NEXT_PUBLIC_SITE_ORIGIN`** (validated in **`next.config.ts`**). Server Components only.
 */
export function websiteCarbonReportPageHref(): string {
  return (
    websiteCarbonWebsiteResultsUrl(process.env.NEXT_PUBLIC_SITE_ORIGIN) ??
    WEBSITE_CARBON_SITE_HOME
  );
}
