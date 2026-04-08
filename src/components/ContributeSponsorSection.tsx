"use client";

import { BtmtSponsorButton } from "@behindthemusictree/assets/components";
import Script from "next/script";

const cardClassName =
  "rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900";
const linkDescriptionClassName =
  "mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400";

/**
 * Tipeee widget script is loaded only on this client section; pop-in checkout runs after click.
 * Intentional third-party trade-off for on-page support (see /engagement).
 */
export function ContributeSponsorSection() {
  return (
    <section className="mb-10" aria-labelledby="sponsor-heading">
      <h2
        id="sponsor-heading"
        className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
      >
        Sponsor
      </h2>
      <div className={cardClassName}>
        <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Choose one support path: GitHub Sponsors for ecosystem support, or
          Tipeee for direct GrowTheMusicTree support.
        </p>

        <div className="mb-4">
          <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
            GitHub Sponsors
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            <BtmtSponsorButton className="block max-w-none" />
          </div>
          <p className={linkDescriptionClassName}>
            Best if you already use GitHub.
          </p>
        </div>

        <div aria-labelledby="tipeee-embed-heading">
          <h3
            id="tipeee-embed-heading"
            className="mb-2 text-base font-semibold text-zinc-900 dark:text-zinc-50"
          >
            Support on Tipeee
          </h3>
          <p className="mb-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Best for non-GitHub supporters.
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
            Soutenez GrowTheMusicTree sur Tipeee
          </a>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Tipeee checkout may be in French; it is the same
            GrowTheMusicTree project.
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
