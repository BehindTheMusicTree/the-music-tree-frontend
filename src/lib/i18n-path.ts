import { routing } from "@/i18n/routing";

/** Href pathname for `localePrefix: as-needed` (default locale has no `/${locale}` prefix). */
export function pathnameForHref(pathname: string, locale: string): string {
  const p = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (locale === routing.defaultLocale) {
    return p;
  }
  return p === "/" ? `/${locale}` : `/${locale}${p}`;
}
