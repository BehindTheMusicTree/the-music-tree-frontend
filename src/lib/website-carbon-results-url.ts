/**
 * Website Carbon hosts per-site reports at:
 * `https://www.websitecarbon.com/website/{hostname-with-dots-replaced-by-dashes}/`
 * (e.g. `themusictree.org` → `…/website/themusictree-org/`).
 *
 * `orgUrl` is the apex or host only (see `NEXT_PUBLIC_ORG_URL`), optionally with `https://`.
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
