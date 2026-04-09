import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  DiscordSocialLinkColored,
  DiscussionLinkColored,
  EmailSocialLinkColored,
  InformationLinkColored,
  LinkedInSocialLinkColored,
  MastodonSocialLinkColored,
  XSocialLinkColored,
} from "@behindthemusictree/assets/components";
import { NewsletterSignupInCard } from "@/components/NewsletterSignupInCard";
import {
  GITHUB_ORG_DISCUSSIONS_URL,
  GITHUB_ORG_ISSUES_SEARCH_URL,
} from "@/constants/github-org";
import {
  ICON_LINK_ICON_ONLY_CLASS,
  ICON_LINK_PILL_CLASS,
  ICON_LINK_PILL_ICON_CLASS,
} from "@/constants/icon-link-pill";
import { pageMetadata } from "@/i18n/page-metadata";

const LINKEDIN = "https://www.linkedin.com/in/andreas-garcia/";

const cardClassName =
  "rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900";
const listClassName =
  "grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-6 md:gap-y-4";
const channelCardClassName = "flex flex-col items-center text-center";
const linkDescriptionClassName =
  "mt-1.5 max-w-prose text-sm leading-relaxed text-zinc-600 dark:text-zinc-400";
const newsletterInnerCardClassName =
  "flex flex-col items-center text-center rounded-lg border border-zinc-200 bg-zinc-50/70 p-4 dark:border-zinc-700 dark:bg-zinc-950/40";

const openCalloutIconWrapClass =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-100 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300";

function ContactOpenCalloutIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.196-.394-2.296-1.068-3.194m0 3.197v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/contact");
}

async function ContactPage() {
  const t = await getTranslations("contact");
  const mastodonUrl = process.env.MASTODON_URL;

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-5 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {t("title")}
      </h1>

      <div
        className="mb-10 flex gap-4 rounded-xl border border-zinc-200 bg-zinc-50/90 p-4 dark:border-zinc-800 dark:bg-zinc-900/50"
        role="note"
      >
        <div className={openCalloutIconWrapClass}>
          <ContactOpenCalloutIcon />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-lg font-semibold leading-snug text-zinc-900 dark:text-zinc-50">
            {t("openIntro")}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {t("openDetail")}
          </p>
        </div>
      </div>

      <section className="mb-10" aria-labelledby="contact-channels-heading">
        <h2
          id="contact-channels-heading"
          className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          {t("channelsSectionTitle")}
        </h2>
        <p className="mb-3 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {t("channelsIntro")}
        </p>

        <div className={cardClassName}>
          <ul className={listClassName}>
            <li className={channelCardClassName}>
              <h3 className="sr-only">{t("issuesLabel")}</h3>
              <InformationLinkColored
                href={GITHUB_ORG_ISSUES_SEARCH_URL}
                showText
                unstyled
                className={ICON_LINK_PILL_CLASS}
                iconClassName={ICON_LINK_PILL_ICON_CLASS}
                text={t("issuesLabel")}
              />
              <p className={linkDescriptionClassName}>
                {t("issuesDescription")}
              </p>
            </li>
            <li className={channelCardClassName}>
              <h3 className="sr-only">{t("discussionsLabel")}</h3>
              <DiscussionLinkColored
                href={GITHUB_ORG_DISCUSSIONS_URL}
                showText
                unstyled
                className={ICON_LINK_PILL_CLASS}
                iconClassName={ICON_LINK_PILL_ICON_CLASS}
                text={t("discussionsLabel")}
              />
              <p className={linkDescriptionClassName}>
                {t("discussionsDescription")}
              </p>
            </li>
            <li className={channelCardClassName}>
              <h3 className="sr-only">{t("discordLabel")}</h3>
              <DiscordSocialLinkColored
                showText
                unstyled
                className={ICON_LINK_PILL_CLASS}
                iconClassName={ICON_LINK_PILL_ICON_CLASS}
                text={t("discordLabel")}
              />
              <p className={linkDescriptionClassName}>
                {t("discordDescription")}
              </p>
            </li>
            <li className={channelCardClassName}>
              <h3 className="mb-1 text-base font-semibold text-zinc-900 dark:text-zinc-50">
                {t("socialHeading")}
              </h3>
              <p className={linkDescriptionClassName}>{t("socialDescription")}</p>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                {mastodonUrl ? (
                  <MastodonSocialLinkColored
                    href={mastodonUrl}
                    unstyled
                    className={ICON_LINK_ICON_ONLY_CLASS}
                    iconClassName="h-5 w-5 shrink-0"
                  />
                ) : null}
                <LinkedInSocialLinkColored
                  href={LINKEDIN}
                  unstyled
                  className={ICON_LINK_ICON_ONLY_CLASS}
                  iconClassName="h-5 w-5 shrink-0"
                />
                <XSocialLinkColored
                  unstyled
                  className={ICON_LINK_ICON_ONLY_CLASS}
                  iconClassName="h-5 w-5 shrink-0"
                />
                <EmailSocialLinkColored
                  unstyled
                  className={ICON_LINK_ICON_ONLY_CLASS}
                  iconClassName="h-5 w-5 shrink-0"
                />
              </div>
            </li>
          </ul>

          <div
            className={`${newsletterInnerCardClassName} mt-4`}
            aria-labelledby="contact-newsletter-heading"
          >
            <NewsletterSignupInCard
              variant="contact"
              trackLabel="contact_newsletter_submit"
              headingId="contact-newsletter-heading"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
