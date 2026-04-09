"use client";

import {
  DiscordSocialLinkColored,
  DiscussionLinkColored,
  GithubSocialLinkColored,
  InformationLinkColored,
} from "@behindthemusictree/assets/components";
import { useMessages } from "next-intl";
import { NewsletterSubscribeForm } from "@/components/NewsletterSubscribeForm";
import {
  GITHUB_ORG_DISCUSSIONS_URL,
  GITHUB_ORG_ISSUES_SEARCH_URL,
  GITHUB_ORG_PROFILE_URL,
} from "@/constants/github-org";
import {
  ICON_LINK_PILL_CLASS,
  ICON_LINK_PILL_ICON_CLASS,
} from "@/constants/icon-link-pill";
import type { Messages } from "@/i18n/messages";

const cardClassName =
  "rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900";
const listClassName =
  "grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-6 md:gap-y-4";
const channelCardClassName = "flex flex-col items-center text-center";
const linkDescriptionClassName =
  "mt-1.5 max-w-prose text-sm leading-relaxed text-zinc-600 dark:text-zinc-400";
const newsletterInnerCardClassName =
  "flex flex-col items-center text-center rounded-lg border border-zinc-200 bg-zinc-50/70 p-4 dark:border-zinc-700 dark:bg-zinc-950/40";

export function ContributeWhereToStartSection() {
  const { contribute, newsletter: newsletterCopy } = useMessages() as Messages;
  const copy = contribute.whereToStart;

  return (
    <section className="mb-10" aria-labelledby="where-to-start-heading">
      <h2
        id="where-to-start-heading"
        className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
      >
        {copy.sectionTitle}
      </h2>
      <p className="mb-3 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {copy.intro}
      </p>
      <div className={cardClassName}>
        <ul className={listClassName}>
          <li className={channelCardClassName}>
            <h3 className="sr-only">{copy.discordLabel}</h3>
            <DiscordSocialLinkColored
              showText
              unstyled
              className={ICON_LINK_PILL_CLASS}
              iconClassName={ICON_LINK_PILL_ICON_CLASS}
              text={copy.discordLabel}
            />
            <p className={linkDescriptionClassName}>
              {copy.discordDescription}
            </p>
          </li>
          <li className={channelCardClassName}>
            <h3 className="sr-only">{copy.githubLabel}</h3>
            <GithubSocialLinkColored
              href={GITHUB_ORG_PROFILE_URL}
              showText
              unstyled
              className={ICON_LINK_PILL_CLASS}
              iconClassName={ICON_LINK_PILL_ICON_CLASS}
              text={copy.githubLabel}
            />
            <p className={linkDescriptionClassName}>
              {copy.githubDescription}
            </p>
          </li>
          <li className={channelCardClassName}>
            <h3 className="sr-only">{copy.issuesLabel}</h3>
            <InformationLinkColored
              href={GITHUB_ORG_ISSUES_SEARCH_URL}
              showText
              unstyled
              className={ICON_LINK_PILL_CLASS}
              iconClassName={ICON_LINK_PILL_ICON_CLASS}
              text={copy.issuesLabel}
            />
            <p className={linkDescriptionClassName}>
              {copy.issuesDescription}
            </p>
          </li>
          <li className={channelCardClassName}>
            <h3 className="sr-only">{copy.discussionsLabel}</h3>
            <DiscussionLinkColored
              href={GITHUB_ORG_DISCUSSIONS_URL}
              showText
              unstyled
              className={ICON_LINK_PILL_CLASS}
              iconClassName={ICON_LINK_PILL_ICON_CLASS}
              text={copy.discussionsLabel}
            />
            <p className={linkDescriptionClassName}>
              {copy.discussionsDescription}
            </p>
          </li>
        </ul>
        <div
          className={`${newsletterInnerCardClassName} mt-4`}
          aria-labelledby="where-to-start-newsletter-heading"
        >
          <h3
            id="where-to-start-newsletter-heading"
            className="mb-2 text-base font-semibold text-zinc-900 dark:text-zinc-50"
          >
            {newsletterCopy.contributeSectionTitle}
          </h3>
          <p className="mb-3 max-w-prose text-sm font-medium leading-snug text-zinc-900 dark:text-zinc-50">
            {newsletterCopy.contributeSectionLead}
          </p>
          <div className="w-full">
            <NewsletterSubscribeForm
              variant="contribute"
              trackLabel="contribute_newsletter_submit"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
