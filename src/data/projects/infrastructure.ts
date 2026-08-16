import type { ProjectDefinition } from "./types";
import behindTheMusicTreeMarkSvg from "@behindthemusictree/brand/marks/behind-the-music-tree/behind-the-music-tree-mark.svg";
import ansibleMarkSvg from "@/components/icons/logos/ansible.svg";
import cloudflareMarkSvg from "@/components/icons/logos/cloudflare.svg";
import coolifyMarkSvg from "@/components/icons/logos/coolify.svg";
import githubActionsMarkSvg from "@/components/icons/logos/githubactions.svg";
import grafanaMarkSvg from "@/components/icons/logos/grafana.svg";
import prometheusMarkSvg from "@/components/icons/logos/prometheus.svg";
import traefikMarkSvg from "@/components/icons/logos/traefikproxy.svg";

function markSrc(svg: string | { src: string }): string {
  return typeof svg === "string" ? svg : svg.src;
}

const behindTheMusicTreeMarkSrc = markSrc(behindTheMusicTreeMarkSvg);

const stackLogos = [
  { name: "Ansible", href: "https://www.ansible.com/", iconSrc: ansibleMarkSvg },
  {
    name: "GitHub Actions",
    href: "https://github.com/features/actions",
    iconSrc: githubActionsMarkSvg,
  },
  { name: "Cloudflare", href: "https://www.cloudflare.com/", iconSrc: cloudflareMarkSvg },
  { name: "Coolify", href: "https://coolify.io/", iconSrc: coolifyMarkSvg },
  { name: "Traefik", href: "https://traefik.io/", iconSrc: traefikMarkSvg },
  { name: "Prometheus", href: "https://prometheus.io/", iconSrc: prometheusMarkSvg },
  { name: "Grafana", href: "https://grafana.com/", iconSrc: grafanaMarkSvg },
].map((tool) => ({
  name: tool.name,
  href: tool.href,
  iconSrc: markSrc(tool.iconSrc),
  invertIconInDark: true,
}));

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
  stackLogos,
} satisfies ProjectDefinition;
