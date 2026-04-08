import { routing } from "@/i18n/routing";
import { getSiteOrigin } from "@/lib/site-origin";
import { pathnameForHref } from "@/lib/i18n-path";

/** Path without locale treatment of default locale, e.g. `/` or `/docs`. */
export function absoluteUrlForLocale(locale: string, pathname: string): string {
  const base = getSiteOrigin().replace(/\/$/, "");
  const path = pathnameForHref(pathname === "/" ? "/" : pathname, locale);
  return `${base}${path}`;
}

export function languageAlternates(pathname: string): Record<string, string> {
  return Object.fromEntries(
    routing.locales.map((locale) => [
      locale,
      absoluteUrlForLocale(locale, pathname),
    ]),
  );
}
