"use client";

import {
  IconGitHubSponsorsColored,
  IconTipeeeColored,
} from "@behindthemusictree/assets/components";
import { useMessages } from "next-intl";
import Script from "next/script";
import { GITHUB_ORG_SPONSORS_URL } from "@/constants/github-org";
import {
  ICON_LINK_PILL_CLASS,
  ICON_LINK_PILL_ICON_CLASS,
  ICON_LINK_TIPEEE_WORDMARK_CLASS,
} from "@/constants/icon-link-pill";
import type { Messages } from "@/i18n/messages";

const cardClassName =
  "rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900";
const sponsorLeadClassName =
  "mb-2 text-sm font-medium leading-snug text-zinc-900 dark:text-zinc-50";
const sponsorGridClassName =
  "grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-6 md:gap-y-4";
const sponsorOptionCardClassName =
  "flex flex-col items-center text-center rounded-lg border border-zinc-200 bg-zinc-50/70 p-4 dark:border-zinc-700 dark:bg-zinc-950/40";

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
        <div className={sponsorGridClassName}>
          <div
            className={sponsorOptionCardClassName}
            aria-labelledby="sponsor-tipeee-lead"
          >
            <p id="sponsor-tipeee-lead" className={sponsorLeadClassName}>
              {copy.tipeeeLead}
            </p>
            <a
              href="https://fr.tipeee.com/growthemusictree"
              className={`tipeee-project-cart-simple ${ICON_LINK_TIPEEE_WORDMARK_CLASS}`}
              data-orientation="line"
              data-rewards="1"
              data-track-event="cta_click"
              data-track-label="contribute_tipeee_popin"
              rel="noopener noreferrer"
              aria-label={copy.tipeeeCta}
              title={copy.tipeeeCta}
            >
              <IconTipeeeColored aria-hidden />
            </a>
          </div>

          <div
            className={sponsorOptionCardClassName}
            aria-labelledby="sponsor-github-lead"
          >
            <p id="sponsor-github-lead" className={sponsorLeadClassName}>
              {copy.githubLead}
            </p>
            <a
              href={GITHUB_ORG_SPONSORS_URL}
              className={`${ICON_LINK_PILL_CLASS} min-h-11 max-w-full`}
              data-track-event="cta_click"
              data-track-label="contribute_github_sponsors"
              rel="noopener noreferrer"
            >
              <IconGitHubSponsorsColored
                className={ICON_LINK_PILL_ICON_CLASS}
                aria-hidden
              />
              {copy.githubCta}
            </a>
          </div>
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
