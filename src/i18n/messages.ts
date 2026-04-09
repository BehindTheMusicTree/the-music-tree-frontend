import en from "../messages/en.json";
import { routing } from "@/i18n/routing";

export type Messages = typeof en;

export type Language = (typeof routing.locales)[number];
