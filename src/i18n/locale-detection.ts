import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import type { Language } from "@/i18n/messages";
import { DEFAULT_LOCALE, LOCALES, LOCALE_COOKIE_NAME } from "@/i18n/routing";
import type { NextRequest } from "next/server";

/** `Accept-Language` → supported locale (same stack as next-intl / audiometa-frontend). */
function orderLocales(locales: readonly string[]) {
  return locales.slice().sort((a, b) => b.length - a.length);
}

function mapToProvidedLocale(locales: readonly string[], matched: string) {
  return locales.find((cur) => cur.toLowerCase() === matched.toLowerCase());
}

export function getAcceptLanguageLocale(
  requestHeaders: Pick<Headers, "get">,
  locales: readonly string[],
  defaultLocale: string,
): string | undefined {
  let locale: string | undefined;
  const languages = new Negotiator({
    headers: {
      "accept-language": requestHeaders.get("accept-language") ?? undefined,
    },
  }).languages();
  try {
    const orderedLocales = orderLocales(locales);
    locale = mapToProvidedLocale(
      locales,
      match(languages, orderedLocales, defaultLocale),
    );
  } catch {
    // Invalid `Accept-Language` (next-intl ignores similarly)
  }
  return locale;
}

const SUPPORTED = LOCALES as unknown as readonly string[];

/** When the URL has no `/en/` or `/fr/` prefix: cookie, then `Accept-Language`, then default. */
export function resolveUnprefixedPublicLocale(request: NextRequest): Language {
  const cookieVal = request.cookies.get(LOCALE_COOKIE_NAME)?.value;
  if (cookieVal === "en" || cookieVal === "fr") return cookieVal;

  const fromAccept = getAcceptLanguageLocale(
    request.headers,
    SUPPORTED,
    DEFAULT_LOCALE,
  );
  if (fromAccept === "en" || fromAccept === "fr") return fromAccept;
  return DEFAULT_LOCALE;
}
