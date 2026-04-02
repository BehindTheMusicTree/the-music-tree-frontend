import type { ProjectDefinition } from "./types";
import { GH_AUDIOMETA_FRONT, shield } from "./constants";

export const audiometaWebappProject = {
  slug: "audiometa-webapp",
  name: "AudioMeta Webapp",
  summary:
    "Next.js web UI to read and edit audio metadata (ID3, Vorbis, RIFF) in the browser. Companion to AudioMeta Python.",
  status: "active",
  iconSrc: "/project-icons/audiometa.svg",
  iconAlt: "AudioMeta Webapp icon",
  overview: [
    {
      type: "text",
      text: "Browser-based interface for exploring and editing audio file metadata. Pairs with ",
    },
    { type: "link", slug: "audiometa-python", text: "AudioMeta Python" },
    {
      type: "text",
      text: " for the same formats and use cases, without leaving the web.",
    },
  ],
  overviewExtended: [
    {
      type: "text",
      text: "Use it when you are cleaning up a collection, checking what a file really contains, or demoing metadata workflows to someone who will never open a terminal. The goal is clarity: see fields, edit them safely, and trust that the same rules apply as on the server.",
    },
  ],
  features: [
    "Read and edit audio metadata (ID3, Vorbis, RIFF) in the browser",
    "Next.js web UI complementing the AudioMeta Python library",
    "Documentation experience via published docs bundle",
  ],
  related: [
    { type: "text", text: "Metadata engine and PyPI package: " },
    { type: "link", slug: "audiometa-python", text: "AudioMeta Python" },
    { type: "text", text: "." },
  ],
  outboundLinks: [
    { source: "static", kind: "github", href: GH_AUDIOMETA_FRONT },
    {
      source: "env",
      env: "audiometaWeb",
      kind: "website",
      children: "Live app",
      iconSrc: "/project-icons/audiometa-greyscale.svg",
    },
  ],
  audience:
    "Listeners, archivists, and light technical users who want to fix tags in the browser without a local Python setup.",
  documentationLinks: [
    {
      label: "README on GitHub (local dev, stack, contributing)",
      href: GH_AUDIOMETA_FRONT,
    },
    { label: "Organization documentation hub", href: "/docs" },
  ],
  demos: [
    {
      title: "Live app",
      description:
        "Open the deployed app, pick a track, and walk through read/edit flows without installing Python.",
      ctaLabel: "Try the app",
      hrefSource: "env",
      env: "audiometaWeb",
    },
  ],
  badges: [
    {
      src: shield("github/stars/BehindTheMusicTree/audiometa-frontend"),
      alt: "GitHub stars for BehindTheMusicTree/audiometa-frontend",
      href: GH_AUDIOMETA_FRONT,
    },
  ],
} satisfies ProjectDefinition;
