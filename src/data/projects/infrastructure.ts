import type { ProjectDefinition } from "./types";
import behindTheMusicTreeMarkSvg from "@behindthemusictree/assets/brand/behind-the-music-tree/behind-the-music-tree-mark.svg";

const stackBadges = [
  {
    name: "Ansible",
    href: "https://www.ansible.com/",
    color: "EE0000",
    logo: "ansible",
  },
  {
    name: "GitHub_Actions",
    label: "GitHub Actions",
    href: "https://github.com/features/actions",
    color: "2088FF",
    logo: "github-actions",
  },
  {
    name: "Cloudflare",
    href: "https://www.cloudflare.com/",
    color: "F38020",
    logo: "cloudflare",
  },
  {
    name: "Coolify",
    href: "https://coolify.io/",
    color: "000000",
    logo: "coolify",
  },
  {
    name: "Traefik",
    href: "https://traefik.io/",
    color: "24A1C1",
    logo: "traefikproxy",
  },
  {
    name: "Prometheus",
    href: "https://prometheus.io/",
    color: "E6522C",
    logo: "prometheus",
  },
  {
    name: "Grafana",
    href: "https://grafana.com/",
    color: "F46800",
    logo: "grafana",
  },
  {
    name: "Grafana_Loki",
    label: "Grafana Loki",
    href: "https://grafana.com/oss/loki/",
    color: "F46800",
    logo: "grafana",
  },
].map((tool) => ({
  src: `https://img.shields.io/badge/${tool.name}-${tool.color}?style=flat-square&logo=${tool.logo}&logoColor=white`,
  alt: tool.label ?? tool.name,
  href: tool.href,
}));

const behindTheMusicTreeMarkSrc =
  typeof behindTheMusicTreeMarkSvg === "string"
    ? behindTheMusicTreeMarkSvg
    : behindTheMusicTreeMarkSvg.src;

export const infrastructureProject = {
  slug: "infrastructure",
  name: "Infrastructure",
  summary:
    "Provisioning and deployment pipeline for the whole TheMusicTree ecosystem: Ansible and GitHub Actions, container orchestration, and full observability.",
  status: "active",
  iconSrc: behindTheMusicTreeMarkSrc,
  iconAlt: "Infrastructure icon",
  overview: [
    {
      type: "text",
      text: "A tag-triggered provisioning pipeline built with Ansible and GitHub Actions, applying changes root, then staging, then production in sequence — a failed staging apply blocks production.",
    },
  ],
  overviewExtended: [
    {
      type: "text",
      text: "Every app in the ecosystem — APIs, front-ends, admin, game, and a MusicBrainz mirror — is orchestrated with Coolify, with Traefik routing traffic by hostname. A full observability stack gives metrics, logs, and dashboards across the deployment.",
    },
  ],
  features: [
    "Ansible + GitHub Actions pipeline: root → staging → prod",
    "Container orchestration via Coolify with Traefik hostname routing",
    "Full observability: metrics, logs, and dashboards (Prometheus, Grafana, Loki)",
    "Automated offsite backups to Cloudflare R2 with monthly restore drill",
    "Zero Trust access control, brute-force protection, and least-privilege SSH accounts",
    "Automated SSL certificate renewal via systemd timer",
  ],
  related: [
    { type: "text", text: "Deploys " },
    { type: "link", slug: "the-music-tree-api", text: "TheMusicTreeAPI" },
    { type: "text", text: ", " },
    { type: "link", slug: "grow-the-music-tree", text: "GrowTheMusicTree" },
    { type: "text", text: ", " },
    { type: "link", slug: "hear-the-music-tree", text: "HearTheMusicTree" },
    { type: "text", text: ", and " },
    { type: "link", slug: "the-music-deck", text: "The Music Deck" },
    { type: "text", text: " across staging and production." },
  ],
  outboundLinks: [],
  audience:
    "Operators and maintainers of the TheMusicTree ecosystem who need reliable, automated, and observable deployments.",
  documentationLinks: [
    { label: "Organization documentation hub", href: "/docs" },
  ],
  badges: stackBadges,
} satisfies ProjectDefinition;
