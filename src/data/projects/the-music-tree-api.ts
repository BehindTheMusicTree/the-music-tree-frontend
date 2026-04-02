import type { ProjectDefinition } from "./types";
import { GH_API, shield } from "./constants";

export const theMusicTreeApiProject = {
  slug: "the-music-tree-api",
  name: "TheMusicTreeAPI",
  summary:
    "RESTful API for genre hierarchy and metadata, intelligent genre detection and classification, personalized user profiling, and data-driven recommendations. Built with Django REST Framework and PostgreSQL.",
  status: "wip",
  iconSrc: "/project-icons/behind-the-music-tree.svg",
  iconAlt: "TheMusicTreeAPI app icon",
  overview: [
    {
      type: "text",
      text: "The RESTful API companion to GrowTheMusicTree, providing developers and researchers access to genre hierarchy, metadata, and intelligent genre detection. Built with Django REST Framework and PostgreSQL.",
    },
  ],
  overviewExtended: [
    {
      type: "text",
      text: "Treat it as the contract between our data model and every client: consistent genre trees, detection you can build on, and room to grow personalization and recommendations without forking the truth. If you ship a player, a research tool, or an internal dashboard, this API is where structure and smarts stay in sync with ",
    },
    { type: "link", slug: "grow-the-music-tree", text: "what users see in the tree" },
    { type: "text", text: "." },
  ],
  features: [
    "RESTful API for genre hierarchy and metadata",
    "Intelligent genre detection and classification",
    "Personalized user profiling",
    "Data-driven music recommendations",
    "Built with Django REST Framework and PostgreSQL",
  ],
  related: [
    { type: "text", text: "Used by " },
    { type: "link", slug: "grow-the-music-tree", text: "GrowTheMusicTree" },
    {
      type: "text",
      text: " for API access to the genre hierarchy and metadata.",
    },
  ],
  outboundLinks: [{ source: "static", kind: "github", href: GH_API }],
  audience:
    "Developers and researchers integrating genre structure, detection, or recommendations into their own apps and studies.",
  documentationLinks: [
    {
      label: "README on GitHub (endpoints, setup, contributing)",
      href: GH_API,
    },
    { label: "Organization documentation hub", href: "/docs" },
  ],
  demos: [
    {
      title: "API in context",
      description:
        "GrowTheMusicTree calls this API—open the web preview to explore genre data inside a real client (no API key flow on this marketing page).",
      ctaLabel: "Open GrowTheMusicTree preview",
      hrefSource: "env",
      env: "gtmtWeb",
    },
  ],
  badges: [
    {
      src: shield("github/stars/BehindTheMusicTree/the-music-tree-api"),
      alt: "GitHub stars for BehindTheMusicTree/the-music-tree-api",
      href: GH_API,
    },
  ],
} satisfies ProjectDefinition;
