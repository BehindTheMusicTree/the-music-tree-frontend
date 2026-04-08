"use client";

import {
  DiscordSocialLink,
  DiscussionLink,
  GithubSocialLink,
  InformationLink,
} from "@behindthemusictree/assets/components";
import {
  GITHUB_ORG_DISCUSSIONS_URL,
  GITHUB_ORG_ISSUES_SEARCH_URL,
  GITHUB_ORG_PROFILE_URL,
} from "@/constants/github-org";
import { useI18n } from "@/components/LanguageProvider";
import {
  ICON_LINK_PILL_CLASS,
  ICON_LINK_PILL_ICON_CLASS,
} from "@/constants/icon-link-pill";

const cardClassName =
  "rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900";
const linkDescriptionClassName =
  "mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400";

export function ContributeWhereToStartSection() {
  const { messages } = useI18n();
  const copy = messages.contribute.whereToStart;

  return (
    <section className="mb-10" aria-labelledby="where-to-start-heading">
      <h2
        id="where-to-start-heading"
        className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
      >
        {copy.sectionTitle}
      </h2>
      <div className={cardClassName}>
        <ul className="flex flex-col gap-5">
          <li>
            <DiscordSocialLink
              showText
              unstyled
              className={ICON_LINK_PILL_CLASS}
              iconClassName={ICON_LINK_PILL_ICON_CLASS}
              text="Discord"
            />
            <p className={linkDescriptionClassName}>
              {copy.discordDescription}
            </p>
          </li>
          <li>
            <GithubSocialLink
              href={GITHUB_ORG_PROFILE_URL}
              showText
              unstyled
              className={ICON_LINK_PILL_CLASS}
              iconClassName={ICON_LINK_PILL_ICON_CLASS}
              text="GitHub"
            />
            <p className={linkDescriptionClassName}>
              {copy.githubDescription}
            </p>
          </li>
          <li>
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
