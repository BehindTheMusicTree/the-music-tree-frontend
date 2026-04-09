import { getLocale, getMessages } from "next-intl/server";
import type { Messages } from "@/i18n/messages";

export async function getServerI18n() {
  const language = await getLocale();
  const messages = (await getMessages()) as Messages;
  return {
    language,
    messages,
  };
}
