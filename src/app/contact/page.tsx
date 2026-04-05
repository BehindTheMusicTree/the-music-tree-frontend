import Link from "next/link";
import { NewsletterSubscribeForm } from "@/components/NewsletterSubscribeForm";
import {
  GITHUB_ORG_DISCUSSIONS_URL,
  GITHUB_ORG_PROFILE_URL,
} from "@/constants/github-org";
import {
  DiscussionLink,
  EmailSocialLink,
  IconWebsite,
  InformationLink,
  LinkedInSocialLink,
  MastodonSocialLink,
  XSocialLink,
} from "@behindthemusictree/assets/components";

const LINKEDIN = "https://www.linkedin.com/in/andreas-garcia/";

/** Icon + label in one control (`showText`), aligned with org assets icon-link layout. */
const contactPillIconLinkClass =
  "inline-flex max-w-full min-h-11 items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-800 shadow-sm transition-colors hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-800 dark:focus-visible:outline-zinc-500";

/** Icon-only social controls on one row (accessible names come from each link’s default `aria-label`). */
const contactSocialIconOnlyClass =
  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-800 shadow-sm transition-colors hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-800 dark:focus-visible:outline-zinc-500";

function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Connect With Us
      </h1>

      <ul className="flex flex-col gap-3">
        <li>
          <InformationLink
            href={GITHUB_ORG_PROFILE_URL}
            showText
            unstyled
            className={contactPillIconLinkClass}
            iconClassName="h-5 w-5 shrink-0"
            text="GitHub Issues — browse organization repositories"
          />
        </li>
        <li>
          <DiscussionLink
            href={GITHUB_ORG_DISCUSSIONS_URL}
            showText
            unstyled
            className={contactPillIconLinkClass}
            iconClassName="h-5 w-5 shrink-0"
            text="Organization discussions on GitHub"
          />
        </li>
        <li className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Link
              href="/newsletter"
              className={`${contactPillIconLinkClass} bg-white dark:bg-zinc-950`}
            >
              <IconWebsite className="h-5 w-5 shrink-0" aria-hidden />
              <span>Newsletter page</span>
            </Link>
          </div>
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
          <EmailSocialLink
            unstyled
            className={contactSocialIconOnlyClass}
            iconClassName="h-5 w-5 shrink-0"
          />
        </li>
      </ul>

      <p className="mt-10 text-zinc-600 dark:text-zinc-400">
        <strong className="text-zinc-800 dark:text-zinc-300">Open to:</strong>{" "}
        Collaborations and connecting with fellow developers and music technology
        enthusiasts.
      </p>
    </div>
  );
}

export default ContactPage;
