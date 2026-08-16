export const PROJECT_SLUGS = [
  "audiometa-python",
  "audiometa-webapp",
  "audio-fingerprinter",
  "grow-the-music-tree",
  "the-music-tree-api",
  "hear-the-music-tree",
  "the-music-deck",
  "infrastructure",
] as const;

export type ProjectSlug = (typeof PROJECT_SLUGS)[number];

export type ProjectStatus = "active" | "wip";

/** Env keys that resolve to public app URLs (see `subdomain-urls.ts`). */
export type RichEnvLinkTarget = "audiometaWeb" | "gtmtWeb" | "htmtApi" | "tmdShowcase";

/** Inline text, internal project link, or external link from env-resolved URL. */
export type RichSegment =
  | { type: "text"; text: string }
  | { type: "link"; slug: ProjectSlug; text: string }
  | { type: "env_link"; env: RichEnvLinkTarget; text: string };

export type OutboundLinkDef =
  | {
      source: "static";
      kind: "github" | "pypi" | "website";
      href: string;
      children?: string;
      iconSrc?: string;
    }
  | {
      source: "env";
      env: RichEnvLinkTarget;
      kind: "website";
      children: string;
      iconSrc?: string;
    };

export type DocumentationLink = {
  label: string;
  href: string;
};

export type ProjectBadge = {
  src: string;
  alt: string;
  href: string;
};

export type ProjectStackLogo = {
  name: string;
  iconSrc: string;
  href: string;
  /** Monochrome mark: invert in `dark` so it stays visible on dark backgrounds. */
  invertIconInDark?: boolean;
};

export type ProjectHeroEmbed = {
  title: string;
  src: string;
  caption?: string;
};

export type ProjectDemoDef = {
  title: string;
  description: string;
  ctaLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
} & (
  | { hrefSource: "static"; href: string }
  | { hrefSource: "env"; env: RichEnvLinkTarget }
);

export type ProjectCodeSnippet = {
  label: string;
  language: "python" | "bash";
  /** Verbatim code; keep in sync with upstream README when applicable. */
  code: string;
  /** Illustrative stdout / CLI output for this snippet (not executed on this site). */
  result?: string;
};

export type ProjectSchemaNode = {
  id: string;
  label: string[];
  sublabel?: string;
  variant?: "default" | "main" | "external";
  col: number;
  row: number;
  href?: string;
  iconSrc?: string;
  invertIconInDark?: boolean;
};

export type ProjectSchemaEdge = {
  from: string;
  to: string;
  label?: string;
};

export type ProjectSchema = {
  nodes: ProjectSchemaNode[];
  edges: ProjectSchemaEdge[];
};

export type ProjectDefinition = {
  slug: ProjectSlug;
  name: string;
  summary: string;
  status: ProjectStatus;
  iconSrc: string;
  /** When set, shown in `dark` mode instead of `iconSrc` (e.g. light artwork for dark UI). */
  iconSrcDark?: string;
  /** Black / dark-filled mark assets: invert in `dark` so they stay visible on dark cards (see header mark). */
  invertIconInDark?: boolean;
  iconAlt: string;
  overview: RichSegment[];
  overviewExtended?: RichSegment[];
  features: string[];
  related: RichSegment[];
  outboundLinks: OutboundLinkDef[];
  audience: string;
  documentationLinks?: DocumentationLink[];
  badges?: ProjectBadge[];
  /** Larger tool/stack logos, distinct from the small `badges` strip. */
  stackLogos?: ProjectStackLogo[];
  heroEmbed?: ProjectHeroEmbed;
  demos?: ProjectDemoDef[];
  codeSnippets?: ProjectCodeSnippet[];
  /** Shown under snippets (e.g. link to full README examples). */
  codeSnippetsSourceUrl?: string;
  architectureSchema?: ProjectSchema;
};

export type ProjectTeaser = {
  slug: ProjectSlug;
  name: string;
  description: string;
  href: string;
  status: ProjectStatus;
  iconSrc?: string;
  iconSrcDark?: string;
  invertIconInDark?: boolean;
  iconAlt?: string;
};
