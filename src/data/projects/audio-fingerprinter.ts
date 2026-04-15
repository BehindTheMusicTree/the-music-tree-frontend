import type { ProjectDefinition } from "./types";
import { GH_AUDIO_FINGERPRINTER, shield } from "./constants";
import audioFingerprinterMarkSvg from "@behindthemusictree/assets/brand/audio-fingerprinter/audio-fingerprinter-mark.svg";

const audioFingerprinterMarkSrc =
  typeof audioFingerprinterMarkSvg === "string"
    ? audioFingerprinterMarkSvg
    : audioFingerprinterMarkSvg.src;

export const audioFingerprinterProject = {
  slug: "audio-fingerprinter",
  name: "Audio Fingerprinter",
  summary:
    "Flask-based REST API for generating Chromaprint audio fingerprints. Accepts audio files from a pool directory and returns fingerprints and duration for audio identification and matching.",
  status: "active",
  iconSrc: audioFingerprinterMarkSrc,
  invertIconInDark: true,
  iconAlt: "Audio Fingerprinter icon",
  overview: [
    {
      type: "text",
      text: "A Flask-based REST API service for generating audio fingerprints using Chromaprint. It processes audio files from a pool directory and returns acoustic fingerprints plus duration for identification and matching workflows.",
    },
  ],
  overviewExtended: [
    {
      type: "text",
      text: "Built as part of TheMusicTree backend stack, Audio Fingerprinter helps other services identify tracks and align metadata workflows. Containerized deployment and explicit runtime checks make it easy to run consistently across environments.",
    },
  ],
  features: [
    "Dedicated /fingerprint-audio endpoint",
    "Chromaprint/fpcalc fingerprint and duration extraction",
    "Structured validation and error handling",
    "Docker + Gunicorn production deployment",
  ],
  related: [
    { type: "text", text: "Used in backend workflows for " },
    { type: "link", slug: "hear-the-music-tree", text: "HearTheMusicTree" },
    { type: "text", text: " and related metadata tooling." },
  ],
  outboundLinks: [
    { source: "static", kind: "github", href: GH_AUDIO_FINGERPRINTER },
  ],
  audience:
    "Backend and platform developers who need reliable audio fingerprint extraction as a standalone service.",
  documentationLinks: [
    {
      label: "README on GitHub (API, deployment, contributing)",
      href: GH_AUDIO_FINGERPRINTER,
    },
    { label: "Organization documentation hub", href: "/docs" },
  ],
  badges: [
    {
      src: shield("github/stars/BehindTheMusicTree/audio-fingerprinter"),
      alt: "GitHub stars for BehindTheMusicTree/audio-fingerprinter",
      href: GH_AUDIO_FINGERPRINTER,
    },
  ],
} satisfies ProjectDefinition;
