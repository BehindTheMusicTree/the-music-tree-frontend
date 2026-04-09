"use client";

import { useMessages } from "next-intl";
import { NewsletterSubscribeForm } from "@/components/NewsletterSubscribeForm";
import type { Messages } from "@/i18n/messages";

const newsletterCardClassName =
  "flex flex-col items-center text-center rounded-lg border border-zinc-200 bg-zinc-50/70 p-4 dark:border-zinc-700 dark:bg-zinc-950/40";

export function ContributeNewsletterSection() {
  const { newsletter: copy } = useMessages() as Messages;

  return (
    <section className="mb-10" aria-labelledby="contribute-newsletter-heading">
      <h2
        id="contribute-newsletter-heading"
        className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
      >
        {copy.contributeSectionTitle}
      </h2>
      <div className={newsletterCardClassName}>
        <p className="mb-3 max-w-prose text-sm font-medium leading-snug text-zinc-900 dark:text-zinc-50">
          {copy.contributeSectionLead}
        </p>
        <div className="w-full">
          <NewsletterSubscribeForm
            variant="contribute"
            trackLabel="contribute_newsletter_submit"
          />
        </div>
      </div>
    </section>
  );
}
