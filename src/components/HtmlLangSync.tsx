"use client";

import { useLocale } from "next-intl";
import { useLayoutEffect } from "react";

/** Root layout keeps a default `<html lang>`; this aligns the DOM with the active next-intl locale after navigation. */
export function HtmlLangSync() {
  const locale = useLocale();

  useLayoutEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
