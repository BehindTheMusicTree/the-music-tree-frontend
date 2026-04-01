import type { ComponentProps } from "react";
import type { ProjectCard } from "@/components/ProjectCard";

export type ProjectTeaser = Pick<
  ComponentProps<typeof ProjectCard>,
  "name" | "description" | "href" | "status" | "iconSrc" | "iconAlt"
>;

export const projectTeasers: ProjectTeaser[] = [
  {
    name: "AudioMeta Python",
    description:
      "Unified Python library for reading and writing audio metadata (ID3v1, ID3v2, Vorbis, RIFF). Used on the server by the AudioMeta web app.",
    href: "/projects/audiometa",
    status: "active",
    iconSrc: "/project-icons/audiometa.svg",
    iconAlt: "AudioMeta app icon",
  },
  {
    name: "AudioMeta Webapp",
    description:
      "Next.js web UI to read and edit audio metadata (ID3, Vorbis, RIFF) in the browser. Companion to AudioMeta Python.",
    href: "/projects/audiometa-webapp",
    status: "active",
    iconSrc: "/project-icons/audiometa.svg",
    iconAlt: "AudioMeta Webapp icon",
  },
  {
    name: "GrowTheMusicTree",
    description:
      "Interactive map of global music genres. Community-driven genre tree, personalized music journeys, and intelligent genre detection. API access via TheMusicTreeAPI.",
    href: "/projects/grow-the-music-tree",
    status: "wip",
    iconSrc: "/project-icons/grow-the-music-tree.svg",
    iconAlt: "GrowTheMusicTree app icon",
  },
  {
    name: "TheMusicTreeAPI",
    description:
      "RESTful API for genre hierarchy and metadata, intelligent genre detection and classification, personalized user profiling, and data-driven recommendations. Built with Django REST Framework and PostgreSQL.",
    href: "/projects/the-music-tree-api",
    status: "wip",
    iconSrc: "/project-icons/behind-the-music-tree.svg",
    iconAlt: "TheMusicTreeAPI app icon",
  },
  {
    name: "HearTheMusicTree",
    description:
      "Cloud-based audio file manager for collectors, DJs, and music lovers. Smart playlists, universal format and tag support, secure cloud storage, cross-platform sync and export. Powered by GrowTheMusicTree.",
    href: "/projects/hear-the-music-tree",
    status: "wip",
    iconSrc: "/project-icons/hear-the-music-tree.svg",
    iconAlt: "HearTheMusicTree app icon",
  },
];
