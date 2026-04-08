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
import {
  ICON_LINK_PILL_CLASS,
  ICON_LINK_PILL_ICON_CLASS,
} from "@/constants/icon-link-pill";

const cardClassName =
  "rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900";
const linkDescriptionClassName =
  "mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400";

export function ContributeWhereToStartSection() {
  return (
    <section className="mb-10" aria-labelledby="where-to-start-heading">
      <h2
        id="where-to-start-heading"
        className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
      >
        Where to start
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
              Chat with contributors, ask quick questions, and follow project
              updates in real time.
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
              Explore repositories, read code and READMEs, and fork a project
              when you are ready to propose changes.
            </p>
          </li>
          <li>
            <InformationLink
              href={GITHUB_ORG_ISSUES_SEARCH_URL}
              showText
              unstyled
              className={ICON_LINK_PILL_CLASS}
              iconClassName={ICON_LINK_PILL_ICON_CLASS}
              text="GitHub issues"
            />
            <p className={linkDescriptionClassName}>
              Find reported bugs and planned work across org repositories, or
              open a new issue in the repo that best fits your report.
            </p>
          </li>
          <li>
            <DiscussionLink
              href={GITHUB_ORG_DISCUSSIONS_URL}
              showText
              unstyled
              className={ICON_LINK_PILL_CLASS}
              iconClassName={ICON_LINK_PILL_ICON_CLASS}
              text="Organization discussions"
            />
            <p className={linkDescriptionClassName}>
              Share ideas, ask broader questions, and weigh trade-offs before
              turning something into a formal issue or pull request.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
