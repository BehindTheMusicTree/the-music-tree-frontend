import Image from "next/image";
import type { ProjectStackLogo } from "@/data/projects";

export function ProjectStackLogos({ logos }: { logos: ProjectStackLogo[] }) {
  if (!logos.length) return null;

  return (
    <ul
      className="flex flex-wrap items-center gap-6"
      aria-label="Technology stack"
    >
      {logos.map((logo) => (
        <li key={logo.name} className="leading-none">
          <a
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            title={logo.name}
            className="block opacity-80 transition-opacity hover:opacity-100"
          >
            <Image
              src={logo.iconSrc}
              alt={logo.name}
              width={40}
              height={40}
              className={
                logo.invertIconInDark
                  ? "h-10 w-10 dark:invert"
                  : "h-10 w-10"
              }
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
