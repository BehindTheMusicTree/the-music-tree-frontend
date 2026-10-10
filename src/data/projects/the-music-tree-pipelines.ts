import type { ProjectDefinition } from "./types";
import { GH_PIPELINES, githubStarsShieldFromRepoUrl } from "./constants";
import behindTheMusicTreeMarkSvg from "@behindthemusictree/brand/marks/behind-the-music-tree/behind-the-music-tree-mark.svg";

const behindTheMusicTreeMarkSrc =
  typeof behindTheMusicTreeMarkSvg === "string"
    ? behindTheMusicTreeMarkSvg
    : behindTheMusicTreeMarkSvg.src;

export const theMusicTreePipelinesProject = {
  slug: "the-music-tree-pipelines",
  name: "TheMusicTreePipelines",
  summary:
    "Python/Polars data pipelines that build the genre trees and song catalog behind GrowTheMusicTree from MusicBrainz and Wikidata.",
  status: "wip",
  iconSrc: behindTheMusicTreeMarkSrc,
  iconAlt: "TheMusicTreePipelines icon",
  overview: [
    {
      type: "text",
      text: "A uv workspace monorepo of Python/Polars pipelines that reconstruct a genre hierarchy from MusicBrainz's flat genre list, using Wikidata's music genre taxonomy as a reference, and export the genre trees and every deduplicated MusicBrainz song for ",
    },
    { type: "link", slug: "grow-the-music-tree", text: "GrowTheMusicTree" },
    { type: "text", text: "." },
  ],
  overviewExtended: [
    {
      type: "text",
      text: "The goal is a reference that classifies all music, so the pipelines keep every song: a song without a genre or without a playable video still ships, so users can link it to one later.",
    },
  ],
  features: [
    "MusicBrainz pipeline: genre hierarchy from root genre to subgenre to recording",
    "Wikidata pipeline: genre taxonomy (P279 subclass-of tree) from the public SPARQL endpoint",
    "Curation pipeline: pulls hand-curated rule lists from the GrowTheMusicTree API",
    "Gold pipeline: exports genre trees and deduplicated songs, with genre and video when known",
    "90% combined test coverage enforced in CI, with Ruff, pytest and pre-commit",
  ],
  related: [
    { type: "text", text: "Feeds " },
    { type: "link", slug: "grow-the-music-tree", text: "GrowTheMusicTree" },
    { type: "text", text: " with its genre trees and song catalog." },
  ],
  outboundLinks: [{ source: "static", kind: "github", href: GH_PIPELINES }],
  audience:
    "Data engineers and contributors who want to understand or extend how TheMusicTree's genre and song data is built.",
  documentationLinks: [
    {
      label: "README on GitHub (pipelines, setup, contributing)",
      href: GH_PIPELINES,
    },
    { label: "Organization documentation hub", href: "/docs" },
  ],
  badges: [
    {
      src: githubStarsShieldFromRepoUrl(GH_PIPELINES)!,
      alt: "GitHub stars for BehindTheMusicTree/the-music-tree-pipelines",
      href: GH_PIPELINES,
    },
  ],
} satisfies ProjectDefinition;
