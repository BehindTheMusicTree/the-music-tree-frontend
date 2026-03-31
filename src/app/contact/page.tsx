import type { ReactNode } from "react";
import { ProductExternalLink } from "@/components/ProductExternalLink";
import {
  GITHUB_ORG_DISCUSSIONS_URL,
  GITHUB_ORG_PROFILE_URL,
  GITHUB_ORG_SLUG,
} from "@/constants/github-org";
import { MASTODON_PROFILE_URL } from "@/constants/contact";
import {
  IconEmail,
  IconGithub,
  IconGitHubConversation,
  IconIssue,
  IconLinkedIn,
  IconMastodon,
} from "@/components/icons/SocialIcons";

const LINKEDIN = "https://www.linkedin.com/in/andreas-garcia/";
const EMAIL = "garcia.andreas.1991@gmail.com";

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <li className="flex gap-3 text-zinc-600 dark:text-zinc-400">
      <span
        className="mt-0.5 shrink-0 text-zinc-500 dark:text-zinc-500"
        aria-hidden
      >
        {icon}
      </span>
      <div className="min-w-0 leading-relaxed">
        <strong className="text-zinc-800 dark:text-zinc-300">{label}</strong>
        {" — "}
        {children}
      </div>
    </li>
  );
}

function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Connect With Us
      </h1>

      <ul className="space-y-4">
        <ContactRow icon={<IconIssue className="h-5 w-5" />} label="Issues">
          Report bugs or suggest features in individual project repositories.
        </ContactRow>
        <ContactRow
          icon={<IconGitHubConversation className="h-5 w-5" />}
          label="Discussions"
        >
          <ProductExternalLink
            href={GITHUB_ORG_DISCUSSIONS_URL}
            kind="github"
            variant="inline"
            presentation="text"
          >
            Organization discussions on GitHub
          </ProductExternalLink>
        </ContactRow>
        <ContactRow icon={<IconGithub className="h-5 w-5" />} label="GitHub">
          <ProductExternalLink
            href={GITHUB_ORG_PROFILE_URL}
            kind="github"
            variant="inline"
            presentation="text"
          >
            github.com/{GITHUB_ORG_SLUG}
          </ProductExternalLink>
        </ContactRow>
        <ContactRow icon={<IconMastodon className="h-5 w-5" />} label="Mastodon">
          <a
            href={MASTODON_PROFILE_URL}
            target="_blank"
            rel="me noopener noreferrer"
            className="font-medium text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-50"
          >
            {MASTODON_PROFILE_URL.replace(/^https:\/\//, "")}
          </a>
        </ContactRow>
        <ContactRow icon={<IconEmail className="h-5 w-5" />} label="Email">
          <a
            href={`mailto:${EMAIL}`}
            className="font-medium text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-50"
          >
            {EMAIL}
          </a>
        </ContactRow>
        <ContactRow icon={<IconLinkedIn className="h-5 w-5" />} label="LinkedIn">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-50"
          >
            Connect on LinkedIn
          </a>
        </ContactRow>
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
