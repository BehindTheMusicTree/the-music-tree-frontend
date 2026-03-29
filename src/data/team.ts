export type TeamMemberLink = {
  label: string;
  href: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  /** Local asset under `public/` or remote URL (e.g. GitHub avatar). */
  imageSrc?: string;
  links?: TeamMemberLink[];
  /** Set when loaded from GitHub; stable key for lists. */
  githubLogin?: string;
};

/** Optional fields per GitHub login; merged on top of API data. */
export type TeamMemberOverride = {
  role?: string;
  bio?: string;
  links?: TeamMemberLink[];
};

export const teamMemberOverrides: Record<string, TeamMemberOverride> = {
  "Andreas-Garcia": {
    role: "Founder & maintainer",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/andreas-garcia/",
      },
    ],
  },
};
