"use client";

import { useTranslations } from "next-intl";
import { NewsletterSubscribeForm } from "@/components/NewsletterSubscribeForm";

type Variant = "contact" | "contribute";

type Props = {
  variant: Variant;
  trackLabel: string;
  headingId: string;
};

/** Shared newsletter title + lead + form (same copy as **`/contribute`** via **`newsletter.contributeSection*`**). */
export function NewsletterSignupInCard({ variant, trackLabel, headingId }: Props) {
  "use no memo";

  const t = useTranslations("newsletter");

  return (
    <>
      <h3
        id={headingId}
        className="mb-2 text-base font-semibold text-zinc-900 dark:text-zinc-50"
      >
        {t("contributeSectionTitle")}
      </h3>
      <p className="mb-3 max-w-prose text-sm font-medium leading-snug text-zinc-900 dark:text-zinc-50">
        {t("contributeSectionLead")}
      </p>
      <div className="w-full">
        <NewsletterSubscribeForm variant={variant} trackLabel={trackLabel} />
      </div>
    </>
  );
}
