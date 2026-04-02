import type { ProjectDefinition } from "./types";
import { GH_GTMT, shield } from "./constants";

export const growTheMusicTreeProject = {
  slug: "grow-the-music-tree",
  name: "GrowTheMusicTree",
  summary:
    "Interactive map of global music genres. Community-driven genre tree, personalized music journeys, and intelligent genre detection. API access via TheMusicTreeAPI.",
  status: "wip",
  iconSrc: "/project-icons/grow-the-music-tree.svg",
  iconAlt: "GrowTheMusicTree app icon",
  overview: [
    {
      type: "text",
      text: "A groundbreaking platform focused on building the definitive, interactive map of global music genres. This community-driven project aims to become the ultimate reference for understanding music genres through an ever-evolving, tree-shaped framework.",
    },
  ],
  overviewExtended: [
    {
      type: "text",
      text: "Genres are not just labels—they are history, geography, and community. GrowTheMusicTree makes that visible: you can explore how styles branch and merge, how your own listening sits in the bigger picture, and how collective curation improves the map over time. Companion apps such as ",
    },
    { type: "link", slug: "hear-the-music-tree", text: "HearTheMusicTree" },
    {
      type: "text",
      text: " lean on the same shared intelligence so discovery and library tools stay aligned.",
    },
  ],
  features: [
    "Dynamic, evolving genre tree built collaboratively",
    "Personalized music journeys mapping listening habits",
    "Intelligent genre detection for accurate categorization",
    "API access through TheMusicTreeAPI",
  ],
  related: [
    { type: "link", slug: "the-music-tree-api", text: "TheMusicTreeAPI" },
    {
      type: "text",
      text: " provides the REST API for genre hierarchy and metadata used by GrowTheMusicTree.",
    },
  ],
  outboundLinks: [
    { source: "static", kind: "github", href: GH_GTMT },
    {
      source: "env",
      env: "gtmtWeb",
      kind: "website",
      children: "Web app",
    },
  ],
  audience:
    "Explorers, educators, and contributors who want a shared, evolving map of how genres connect worldwide.",
  documentationLinks: [
    {
      label: "README on GitHub (frontend setup, contributing)",
      href: GH_GTMT,
    },
    { label: "Organization documentation hub", href: "/docs" },
  ],
  demos: [
    {
      title: "Genre tree preview",
      description:
        "Open the public web app to explore the map, journeys, and detection UX (still evolving).",
      ctaLabel: "Open web preview",
      hrefSource: "env",
      env: "gtmtWeb",
    },
  ],
  badges: [
    {
      src: shield("github/stars/BehindTheMusicTree/grow-the-music-tree-frontend"),
      alt: "GitHub stars for BehindTheMusicTree/grow-the-music-tree-frontend",
      href: GH_GTMT,
    },
  ],
} satisfies ProjectDefinition;
