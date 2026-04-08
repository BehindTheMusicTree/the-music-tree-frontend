"use client";

import {
  DiscordSocialLink,
  DiscussionLink,
  GithubSocialLink,
  InformationLink,
} from "@behindthemusictree/assets/components";
import { useMessages } from "next-intl";
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
const linkDescriptionClassName =
  "mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400";

export function ContributeWhereToStartSection() {
  const { contribute } = useMessages() as Messages;
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
          <li>
            <h3 className="sr-only">{copy.discordLabel}</h3>
            <DiscordSocialLink
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
          <li>
            <h3 className="sr-only">{copy.githubLabel}</h3>
            <GithubSocialLink
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
          <li>
            <h3 className="sr-only">{copy.issuesLabel}</h3>
            <InformationLink
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
          <li>
            <h3 className="sr-only">{copy.discussionsLabel}</h3>
            <DiscussionLink
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
      </div>
    </section>
  );
}
