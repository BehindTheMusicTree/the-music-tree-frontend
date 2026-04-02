import type { ProjectDefinition } from "./types";
import { GH_HTMT, shield } from "./constants";

export const hearTheMusicTreeProject = {
  slug: "hear-the-music-tree",
  name: "HearTheMusicTree",
  summary:
    "Cloud-based audio file manager for collectors, DJs, and music lovers. Smart playlists, universal format and tag support, secure cloud storage, cross-platform sync and export. Powered by GrowTheMusicTree.",
  status: "wip",
  iconSrc: "/project-icons/hear-the-music-tree.svg",
  iconAlt: "HearTheMusicTree app icon",
  overview: [
    {
      type: "text",
      text: "A cloud-based audio file manager built for collectors, DJs, and music lovers. Powered by genre intelligence from GrowTheMusicTree.",
    },
  ],
  overviewExtended: [
    {
      type: "text",
      text: "Think of it as a home for serious libraries: formats and tags stay coherent, playlists react to how you actually listen, and sync means your crates are where you need them. Genre context comes from the same open map as ",
    },
    { type: "link", slug: "grow-the-music-tree", text: "GrowTheMusicTree" },
    {
      type: "text",
      text: ", so exploration and file management tell one story instead of two.",
    },
  ],
  features: [
    "Smart, adaptive playlists",
    "Universal format and tag support",
    "Secure cloud storage",
    "Cross-platform sync and export",
    "Genre intelligence from GrowTheMusicTree",
  ],
  related: [
    { type: "text", text: "Built around " },
    { type: "link", slug: "grow-the-music-tree", text: "GrowTheMusicTree" },
    {
      type: "text",
      text: " for genre intelligence. For browser-based tag editing, see the ",
    },
    { type: "link", slug: "audiometa-webapp", text: "AudioMeta web app" },
    { type: "text", text: "." },
  ],
  outboundLinks: [
    { source: "static", kind: "github", href: GH_HTMT },
    {
      source: "env",
      env: "htmtApi",
      kind: "website",
      children: "API",
    },
  ],
  audience:
    "Collectors and performers who manage large libraries and want playlists, sync, and genre-aware organization in the cloud.",
  documentationLinks: [
    {
      label: "README on GitHub (architecture, API, contributing)",
      href: GH_HTMT,
    },
    { label: "Organization documentation hub", href: "/docs" },
  ],
  demos: [
    {
      title: "Public API base",
      description:
        "Hit the deployed API root to see what is exposed; full endpoint details stay in the README.",
      ctaLabel: "Open API URL",
      hrefSource: "env",
      env: "htmtApi",
    },
  ],
  badges: [
    {
      src: shield("github/stars/BehindTheMusicTree/hear-the-music-tree-api"),
      alt: "GitHub stars for BehindTheMusicTree/hear-the-music-tree-api",
      href: GH_HTMT,
    },
  ],
} satisfies ProjectDefinition;
