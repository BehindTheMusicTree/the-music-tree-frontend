import { messages, type Language } from "@/i18n/messages";
import { withLocalePrefix } from "@/i18n/routing";
import { resolveRequestLocale } from "@/i18n/request-locale";

export async function getServerI18n() {
  const language: Language = await resolveRequestLocale();

  return {
    language,
    messages: messages[language],
    withLocalePath: (pathname: string) => withLocalePrefix(pathname, language),
  };
}
