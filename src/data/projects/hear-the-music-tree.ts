import type { ProjectDefinition } from "./types";
import { GH_HTMT } from "./constants";
import hearTheMusicTreeMarkSvg from "@behindthemusictree/assets/brand/hear-the-music-tree/hear-the-music-tree-mark.svg";
import audioFingerprinterMarkSvg from "@behindthemusictree/assets/brand/audio-fingerprinter/audio-fingerprinter-mark.svg";
import growTheMusicTreeMarkSvg from "@behindthemusictree/assets/brand/grow-the-music-tree/grow-the-music-tree-mark.svg";
import audiometaMarkSvg from "@behindthemusictree/assets/brand/audiometa/audiometa-mark.svg";

const hearTheMusicTreeMarkSrc =
  typeof hearTheMusicTreeMarkSvg === "string"
    ? hearTheMusicTreeMarkSvg
    : hearTheMusicTreeMarkSvg.src;
const audioFingerprinterMarkSrc =
  typeof audioFingerprinterMarkSvg === "string"
    ? audioFingerprinterMarkSvg
    : audioFingerprinterMarkSvg.src;
const growTheMusicTreeMarkSrc =
  typeof growTheMusicTreeMarkSvg === "string"
    ? growTheMusicTreeMarkSvg
    : growTheMusicTreeMarkSvg.src;
const audiometaMarkSrc =
  typeof audiometaMarkSvg === "string"
    ? audiometaMarkSvg
    : audiometaMarkSvg.src;

export const hearTheMusicTreeProject = {
  slug: "hear-the-music-tree",
  name: "HearTheMusicTree",
  summary:
    "Cloud-based audio file manager for collectors, DJs, and music lovers. Smart playlists, universal format and tag support, secure cloud storage, cross-platform sync and export. Powered by GrowTheMusicTree.",
  status: "wip",
  iconSrc: hearTheMusicTreeMarkSrc,
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
      text: ", so exploration and file management tell one story instead of two. Audio fingerprinting runs through the ",
    },
    { type: "link", slug: "audio-fingerprinter", text: "AudioFingerprinter" },
    {
      type: "text",
      text: " microservice, which queries the MusicBrainz API to identify tracks from their acoustic signature.",
    },
  ],
  features: [
    "Smart, adaptive playlists",
    "Universal format and tag support",
    "Secure cloud storage",
    "Cross-platform sync and export",
    "Genre intelligence from GrowTheMusicTree",
    "Audio fingerprinting via AudioFingerprinter + MusicBrainz",
  ],
  related: [
    { type: "text", text: "Built around " },
    { type: "link", slug: "grow-the-music-tree", text: "GrowTheMusicTree" },
    {
      type: "text",
      text: " for genre intelligence and the ",
    },
    { type: "link", slug: "audio-fingerprinter", text: "AudioFingerprinter" },
    {
      type: "text",
      text: " microservice for track identification. For browser-based tag editing, see the ",
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
  architectureSchema: {
    nodes: [
      {
        id: "mb",
        label: ["MusicBrainz"],
        sublabel: "EXTERNAL API",
        variant: "external",
        col: 1,
        row: 0,
        href: "https://musicbrainz.org",
      },
      {
        id: "af",
        label: ["Audio", "Fingerprinter"],
        col: 0,
        row: 1,
        href: "/projects/audio-fingerprinter",
        iconSrc: audioFingerprinterMarkSrc,
        invertIconInDark: true,
      },
      {
        id: "htmt",
        label: ["Hear", "TheMusicTree"],
        variant: "main",
        col: 1,
        row: 1,
        iconSrc: hearTheMusicTreeMarkSrc,
      },
      {
        id: "gtmt",
        label: ["Grow", "TheMusicTree"],
        col: 2,
        row: 1,
        href: "/projects/grow-the-music-tree",
        iconSrc: growTheMusicTreeMarkSrc,
      },
      {
        id: "amp",
        label: ["Audiometa", "Python"],
        col: 1,
        row: 2,
        href: "/projects/audiometa-python",
        iconSrc: audiometaMarkSrc,
      },
    ],
    edges: [
      { from: "mb", to: "htmt", label: "identify track" },
      { from: "af", to: "htmt", label: "get fingerprint" },
      { from: "gtmt", to: "htmt", label: "genre intelligence" },
      { from: "htmt", to: "amp", label: "tag library" },
    ],
  },
} satisfies ProjectDefinition;
