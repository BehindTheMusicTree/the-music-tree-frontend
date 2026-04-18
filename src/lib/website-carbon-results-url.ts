import { getSiteOrigin } from "@/lib/site-origin";

/** Website Carbon marketing site root (not the per-domain report path). */
export const WEBSITE_CARBON_SITE_HOME = "https://www.websitecarbon.com/";

/**
 * Website Carbon hosts per-site reports at:
 * `https://www.websitecarbon.com/website/{hostname-with-dots-replaced-by-dashes}/`
 * (e.g. `themusictree.org` → `…/website/themusictree-org/`).
 *
 * `hostOrOrigin` is a hostname (e.g. `themusictree.org`) or full origin (`https://…`).
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
 * Report URL for the badge / copy. Uses the canonical site origin.
 */
export function websiteCarbonReportPageHref(): string {
  return (
    websiteCarbonWebsiteResultsUrl(getSiteOrigin()) ?? WEBSITE_CARBON_SITE_HOME
  );
}
