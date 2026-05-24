import type { ProjectDefinition } from "./types";
import { GH_TMD, GH_TMD_ADMIN, shield } from "./constants";

export const theMusicDeckProject = {
  slug: "the-music-deck",
  name: "The Music Deck",
  summary:
    "Collectible music card game combining music discovery with card-game mechanics. Open boosters, build lineups, and battle through genre-based strategy — cross-platform on iOS, Android, and web.",
  status: "wip",
  iconSrc: "/project-icons/the-music-deck.svg",
  invertIconInDark: false,
  iconAlt: "The Music Deck app icon",
  overview: [
    {
      type: "text",
      text: "A collectible music card game where players build lineups, open boosters, and battle through genre-based strategy. Music discovery and card mechanics in one cross-platform experience.",
    },
  ],
  overviewExtended: [
    {
      type: "text",
      text: "Cards are organized around the genre taxonomy from ",
    },
    { type: "link", slug: "grow-the-music-tree", text: "GrowTheMusicTree" },
    {
      type: "text",
      text: " — subgenre stacking rules, battle synergies, and collection depth all flow from the same open genre map. The companion admin monorepo hosts the visual charter and the backend API powering card data and progression.",
    },
  ],
  features: [
    "Song and special card catalog, designed to expand over time",
    "Pack / booster model: one active pack at a time",
    "Genre-based battle format: 10 active slots per festival battle",
    "Subgenre stacking rule: same-subgenre cards stack, strongest base +15% per supplementary card",
    "Point-driven progression from battles, boosters, enigmas, and missions",
    "Cross-platform: iOS, Android, and web from a single TypeScript codebase (Expo / React Native)",
  ],
  related: [
    { type: "text", text: "Genre taxonomy powered by " },
    { type: "link", slug: "grow-the-music-tree", text: "GrowTheMusicTree" },
    {
      type: "text",
      text: ". For audio file management and metadata, see ",
    },
    { type: "link", slug: "hear-the-music-tree", text: "HearTheMusicTree" },
    { type: "text", text: "." },
  ],
  outboundLinks: [
    { source: "static", kind: "github", href: GH_TMD },
    {
      source: "static",
      kind: "github",
      href: GH_TMD_ADMIN,
      children: "Admin & charter",
    },
  ],
  audience:
    "Music fans and card-game players who want to build collections, discover genres, and compete through strategy rooted in real musical culture.",
  documentationLinks: [
    {
      label: "Game client README on GitHub (Expo, scripts, contributing)",
      href: GH_TMD,
    },
    {
      label: "Admin & charter README on GitHub (Next.js, NestJS API, deployment)",
      href: GH_TMD_ADMIN,
    },
  ],
  badges: [
    {
      src: shield("github/stars/BehindTheMusicTree/the-music-deck"),
      alt: "GitHub stars for BehindTheMusicTree/the-music-deck",
      href: GH_TMD,
    },
  ],
} satisfies ProjectDefinition;
