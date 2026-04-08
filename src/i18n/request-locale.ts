import { cookies, headers } from "next/headers";
import type { Language } from "@/i18n/messages";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE_NAME,
  LOCALE_REQUEST_HEADER,
} from "@/i18n/routing";

/** Locale for the current request (middleware header, then cookie, then default). */
export async function resolveRequestLocale(): Promise<Language> {
  const h = await headers();
  const fromHeader = h.get(LOCALE_REQUEST_HEADER);
  if (fromHeader === "en" || fromHeader === "fr") return fromHeader;
  const cookieLocale = (await cookies()).get(LOCALE_COOKIE_NAME)?.value;
  if (cookieLocale === "fr") return "fr";
  return DEFAULT_LOCALE;
}
