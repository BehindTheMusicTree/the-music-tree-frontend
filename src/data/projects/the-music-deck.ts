import type { ProjectDefinition } from "./types";
import theMusicDeckMarkFullPng from "@behindthemusictree/brand/marks/the-music-deck/the-music-deck-mark-full.png";

const theMusicDeckMarkFullSrc =
  typeof theMusicDeckMarkFullPng === "string"
    ? theMusicDeckMarkFullPng
    : theMusicDeckMarkFullPng.src;

export const theMusicDeckProject = {
  slug: "the-music-deck",
  name: "The Music Deck",
  summary:
    "Collectible music card game combining music discovery with card-game mechanics. Open boosters, build lineups, and battle through genre-based strategy — cross-platform on iOS, Android, and web.",
  status: "wip",
  iconSrc: theMusicDeckMarkFullSrc,
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
    { source: "env", env: "tmdShowcase", kind: "website", children: "Showcase" },
  ],
  audience:
    "Music fans and card-game players who want to build collections, discover genres, and compete through strategy rooted in real musical culture.",
  badges: [],
} satisfies ProjectDefinition;
