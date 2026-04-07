"use client";

import {
  BtmtSponsorButton,
  TipeeeSocialLink,
} from "@behindthemusictree/assets/components";
import Script from "next/script";

const cardClassName =
  "rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900";

export function ContributeSupportSection() {
  return (
    <section aria-labelledby="financial-support-heading" className="mb-10">
      <h2
        id="financial-support-heading"
        className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
      >
        Support financially
      </h2>
      <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
        If you want to support the project financially, you can use GitHub
        Sponsors or Tipeee.
      </p>

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <BtmtSponsorButton className="block max-w-none" />
        <TipeeeSocialLink text="Tipeee" />
      </div>

      <div className="grid gap-4">
        <article className={cardClassName} aria-labelledby="tipeee-iframe-heading">
          <h3
            id="tipeee-iframe-heading"
            className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50"
          >
            Tipeee embed mode: iFrame
          </h3>
          <p className="mb-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            The payment module is displayed directly in the page.
          </p>
          <a
            href="https://fr.tipeee.com/growthemusictree"
            className="tipeee-project-cart-iframe inline-flex items-center justify-center rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500"
            data-orientation="line"
            data-rewards="0"
          >
            Soutenez GrowTheMusicTree sur Tipeee
          </a>
        </article>

        <article className={cardClassName} aria-labelledby="tipeee-popin-heading">
          <h3
            id="tipeee-popin-heading"
            className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50"
          >
            Tipeee embed mode: pop-in
          </h3>
          <p className="mb-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            The payment module opens in a popup after a click.
          </p>
          <a
            href="https://fr.tipeee.com/growthemusictree"
            className="tipeee-project-cart-simple inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            data-orientation="line"
            data-rewards="1"
          >
            Soutenez GrowTheMusicTree sur Tipeee
          </a>
        </article>
      </div>

      <Script
        src="https://plugin.tipeee.com/widget.js"
        strategy="afterInteractive"
        charSet="utf-8"
      />
    </section>
  );
}
