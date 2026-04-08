import { cookies } from "next/headers";
import { messages, type Language } from "@/i18n/messages";
import { DEFAULT_LOCALE, withLocalePrefix } from "@/i18n/routing";

const COOKIE_NAME = "the-music-tree-language";

export async function getServerI18n() {
  const store = await cookies();
  const cookieLocale = store.get(COOKIE_NAME)?.value;
  const language: Language = cookieLocale === "fr" ? "fr" : DEFAULT_LOCALE;

  return {
    language,
    messages: messages[language],
    withLocalePath: (pathname: string) => withLocalePrefix(pathname, language),
  };
}
