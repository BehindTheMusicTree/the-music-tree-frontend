/** Website Carbon marketing site root (not the per-domain report path). */
export const WEBSITE_CARBON_SITE_HOME = "https://www.websitecarbon.com/";

/**
 * Website Carbon hosts per-site reports at:
 * `https://www.websitecarbon.com/website/{hostname-with-dots-replaced-by-dashes}/`
 * (e.g. `themusictree.org` → `…/website/themusictree-org/`).
 *
 * `orgUrl` is the apex or host only (typically **`ORG_URL`**), optionally with `https://`.
 */
export function websiteCarbonWebsiteResultsUrl(
  orgUrl: string | undefined | null,
): string | null {
  const t = orgUrl?.trim().replace(/\/+$/, "");
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
 * Report URL for the badge / copy, from server env only. Call from Server Components
 * (`ORG_URL` is not available in the browser bundle as a public env).
 */
export function websiteCarbonReportPageHrefFromOrgUrl(): string {
  return (
    websiteCarbonWebsiteResultsUrl(process.env.ORG_URL) ??
    WEBSITE_CARBON_SITE_HOME
  );
}
