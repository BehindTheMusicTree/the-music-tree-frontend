import type { Metadata } from "next";
import { NewsletterSubscribeForm } from "@/components/NewsletterSubscribeForm";
import { getServerI18n } from "@/i18n/server";
import {
  GITHUB_ORG_DISCUSSIONS_URL,
  GITHUB_ORG_PROFILE_URL,
} from "@/constants/github-org";
import {
  ICON_LINK_PILL_CLASS,
  ICON_LINK_PILL_ICON_CLASS,
} from "@/constants/icon-link-pill";
import {
  DiscussionLink,
  DiscordSocialLink,
  EmailSocialLink,
  InformationLink,
  LinkedInSocialLink,
  MastodonSocialLink,
  XSocialLink,
} from "@behindthemusictree/assets/components";
import { pageMetadata } from "@/i18n/page-metadata";

const LINKEDIN = "https://www.linkedin.com/in/andreas-garcia/";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/contact");
}

/** Icon-only social controls on one row (accessible names come from each link’s default `aria-label`). */
const contactSocialIconOnlyClass =
  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-800 shadow-sm transition-colors hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-800 dark:focus-visible:outline-zinc-500";

async function ContactPage() {
  const { language } = await getServerI18n();
  const copy =
    language === "fr"
      ? {
          title: "Nous contacter",
          issues: "Issues GitHub — parcourir les depots de l'organisation",
          discussions: "Discussions de l'organisation sur GitHub",
          openTo: "Ouverts a :",
          openToText:
            "Collaborations et echanges avec des developpeurs et passionnes de technologie musicale.",
        }
      : {
          title: "Connect With Us",
          issues: "GitHub Issues — browse organization repositories",
          discussions: "Organization discussions on GitHub",
          openTo: "Open to:",
          openToText:
            "Collaborations and connecting with fellow developers and music technology enthusiasts.",
        };
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {copy.title}
      </h1>

      <ul className="flex flex-col gap-3">
        <li>
          <InformationLink
            href={GITHUB_ORG_PROFILE_URL}
            showText
            unstyled
            className={ICON_LINK_PILL_CLASS}
            iconClassName={ICON_LINK_PILL_ICON_CLASS}
            text={copy.issues}
          />
        </li>
        <li>
          <DiscussionLink
            href={GITHUB_ORG_DISCUSSIONS_URL}
            showText
            unstyled
            className={ICON_LINK_PILL_CLASS}
            iconClassName={ICON_LINK_PILL_ICON_CLASS}
            text={copy.discussions}
          />
        </li>
        <li>
          <NewsletterSubscribeForm
            variant="contact"
            trackLabel="contact_newsletter_submit"
          />
        </li>
        <li className="flex flex-wrap items-center gap-2">
          <LinkedInSocialLink
            href={LINKEDIN}
            unstyled
            className={contactSocialIconOnlyClass}
            iconClassName="h-5 w-5 shrink-0"
          />
          <XSocialLink
            unstyled
            className={contactSocialIconOnlyClass}
            iconClassName="h-5 w-5 shrink-0"
          />
          <MastodonSocialLink
            href={process.env.MASTODON_URL}
            unstyled
            className={contactSocialIconOnlyClass}
            iconClassName="h-5 w-5 shrink-0"
          />
          <DiscordSocialLink
            unstyled
            className={contactSocialIconOnlyClass}
            iconClassName="h-5 w-5 shrink-0"
          />
          <EmailSocialLink
            unstyled
            className={contactSocialIconOnlyClass}
            iconClassName="h-5 w-5 shrink-0"
          />
        </li>
      </ul>

      <p className="mt-10 text-zinc-600 dark:text-zinc-400">
        <strong className="text-zinc-800 dark:text-zinc-300">{copy.openTo}</strong>{" "}
        {copy.openToText}
      </p>
    </div>
  );
}

export default ContactPage;
