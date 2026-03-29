import type { TeamMemberLink } from "@/data/team";
import {
  IconGithub,
  IconLinkedIn,
  IconMastodon,
  IconTwitter,
  IconWebsite,
  IconYouTube,
  IconEmail,
} from "@/components/icons/SocialIcons";

type SocialKind =
  | "github"
  | "linkedin"
  | "twitter"
  | "mastodon"
  | "youtube"
  | "email"
  | "website";

function classifyLink(href: string, label: string): SocialKind {
  const h = href.toLowerCase();
  const l = label.toLowerCase();
  if (h.startsWith("mailto:")) return "email";
  if (h.includes("github.com") || l.includes("github")) return "github";
  if (h.includes("linkedin.com") || l.includes("linkedin")) return "linkedin";
  if (
    h.includes("twitter.com") ||
    h.includes("x.com") ||
    l.includes("twitter") ||
    l === "x"
  ) {
    return "twitter";
  }
  if (h.includes("mastodon") || l.includes("mastodon")) return "mastodon";
  if (
    h.includes("youtube.com") ||
    h.includes("youtu.be") ||
    l.includes("youtube")
  ) {
    return "youtube";
  }
  return "website";
}

function SocialIcon({ kind, className }: { kind: SocialKind; className?: string }) {
  switch (kind) {
    case "github":
      return <IconGithub className={className} />;
    case "linkedin":
      return <IconLinkedIn className={className} />;
    case "twitter":
      return <IconTwitter className={className} />;
    case "mastodon":
      return <IconMastodon className={className} />;
    case "youtube":
      return <IconYouTube className={className} />;
    case "email":
      return <IconEmail className={className} />;
    default:
      return <IconWebsite className={className} />;
  }
}

type TeamMemberSocialLinksProps = {
  links: TeamMemberLink[];
};

export function TeamMemberSocialLinks({ links }: TeamMemberSocialLinksProps) {
  if (links.length === 0) return null;

  return (
    <ul className="mt-4 flex flex-wrap items-center gap-1">
      {links.map(({ label, href }, index) => {
        const kind = classifyLink(href, label);
        const isMail = href.startsWith("mailto:");
        return (
          <li key={`${href}-${index}`}>
            <a
              href={href}
              {...(isMail
                ? {}
                : { target: "_blank", rel: "noopener noreferrer" })}
              aria-label={label}
              title={label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
            >
              <SocialIcon kind={kind} className="h-5 w-5 shrink-0" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
