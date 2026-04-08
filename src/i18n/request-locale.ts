import { cookies, headers } from "next/headers";
import type { Language } from "@/i18n/messages";
import { getAcceptLanguageLocale } from "@/i18n/locale-detection";
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_COOKIE_NAME,
  LOCALE_REQUEST_HEADER,
} from "@/i18n/routing";

const SUPPORTED = LOCALES as unknown as readonly string[];

/** Locale for the current request (middleware header, then cookie, then Accept-Language, then default). */
export async function resolveRequestLocale(): Promise<Language> {
  const h = await headers();
  const fromHeader = h.get(LOCALE_REQUEST_HEADER);
  if (fromHeader === "en" || fromHeader === "fr") return fromHeader;
  const cookieLocale = (await cookies()).get(LOCALE_COOKIE_NAME)?.value;
  if (cookieLocale === "en" || cookieLocale === "fr") return cookieLocale;
  const fromAccept = getAcceptLanguageLocale(h, SUPPORTED, DEFAULT_LOCALE);
  if (fromAccept === "en" || fromAccept === "fr") return fromAccept;
  return DEFAULT_LOCALE;
}
