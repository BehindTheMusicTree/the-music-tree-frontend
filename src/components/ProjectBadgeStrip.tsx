import Image from "next/image";
import type { ProjectBadge } from "@/data/projects";

export function ProjectBadgeStrip({ badges }: { badges: ProjectBadge[] }) {
  if (!badges.length) return null;

  return (
    <ul
      className="flex flex-wrap items-center justify-center gap-2"
      aria-label="Package and repository badges"
    >
      {badges.map((badge) => (
        <li key={badge.src} className="leading-none">
          <a
            href={badge.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-sm ring-1 ring-zinc-200/80 transition-opacity hover:opacity-90 dark:ring-zinc-700/80"
          >
            <Image
              src={badge.src}
              alt={badge.alt}
              width={1}
              height={1}
              unoptimized
              className="h-5 w-auto max-h-5"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
