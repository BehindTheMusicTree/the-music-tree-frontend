import type { Language } from "@/i18n/messages";

export const LOCALES = ["en", "fr"] as const;
export const DEFAULT_LOCALE: Language = "en";

/** Set on the request by middleware when the public URL is `/en/*` or `/fr/*`. */
export const LOCALE_REQUEST_HEADER = "x-music-tree-locale";

export const LOCALE_COOKIE_NAME = "the-music-tree-language";

export function getLocaleFromPathname(pathname: string): Language | null {
  for (const locale of LOCALES) {
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
      return locale;
    }
  }
  return null;
}

export function stripLocalePrefix(pathname: string): string {
  const locale = getLocaleFromPathname(pathname);
  if (!locale) return pathname;
  const stripped = pathname.slice(locale.length + 1);
  return stripped === "" ? "/" : stripped;
}

export function withLocalePrefix(pathname: string, locale: Language): string {
  const basePath = stripLocalePrefix(pathname);
  if (basePath === "/") return `/${locale}`;
  return `/${locale}${basePath}`;
}
