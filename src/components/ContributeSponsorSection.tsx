"use client";

import { BtmtSponsorButton } from "@behindthemusictree/assets/components";
import { useMessages } from "next-intl";
import Script from "next/script";
import type { Messages } from "@/i18n/messages";

const cardClassName =
  "rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900";
const linkDescriptionClassName =
  "mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400";

/**
 * Tipeee widget script is loaded only on this client section; pop-in checkout runs after click.
 * Intentional third-party trade-off for on-page support (see /engagement).
 */
export function ContributeSponsorSection() {
  const { contribute } = useMessages() as Messages;
  const copy = contribute.sponsor;

  return (
    <section className="mb-10" aria-labelledby="sponsor-heading">
      <h2
        id="sponsor-heading"
        className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
      >
        {copy.sectionTitle}
      </h2>
      <div className={cardClassName}>
        <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {copy.intro}
        </p>

        <div className="mb-4">
          <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
            {copy.githubTitle}
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            <BtmtSponsorButton
              className="block max-w-none"
              title={copy.githubEmbedTitle}
            />
          </div>
          <p className={linkDescriptionClassName}>
            {copy.githubDescription}
          </p>
        </div>

        <div aria-labelledby="tipeee-embed-heading">
          <h3
            id="tipeee-embed-heading"
            className="mb-2 text-base font-semibold text-zinc-900 dark:text-zinc-50"
          >
            {copy.tipeeeTitle}
          </h3>
          <p className="mb-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {copy.tipeeeDescription}
          </p>
          <a
            href="https://fr.tipeee.com/growthemusictree"
            className="tipeee-project-cart-simple inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            data-orientation="line"
            data-rewards="1"
            data-track-event="cta_click"
            data-track-label="contribute_tipeee_popin"
            rel="noopener noreferrer"
          >
            {copy.tipeeeCta}
          </a>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {copy.tipeeeNote}
          </p>
        </div>
      </div>

      <Script
        src="https://plugin.tipeee.com/widget.js"
        strategy="afterInteractive"
        charSet="utf-8"
      />
    </section>
  );
}
