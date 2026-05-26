import en from "../messages/en.json";
import { routing } from "@/i18n/routing";

type RawMessages = typeof en;

export type ProjectI18nOverride =
  RawMessages["project"]["perProject"]["the-music-deck"];

export type Messages = Omit<RawMessages, "project"> & {
  project: Omit<RawMessages["project"], "perProject"> & {
    perProject: Partial<Record<string, ProjectI18nOverride>>;
  };
};

export type Language = (typeof routing.locales)[number];
