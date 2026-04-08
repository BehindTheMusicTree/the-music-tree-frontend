import { getLocale } from "next-intl/server";
import { messages, type Language } from "@/i18n/messages";

export async function getServerI18n() {
  const language = (await getLocale()) as Language;
  return {
    language,
    messages: messages[language],
  };
}
