import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { StatusBadge } from "./StatusBadge";

type ProjectCardProps = {
  name: string;
  description: string;
  href: string;
  status: "active" | "wip";
  iconSrc?: string;
  iconSrcDark?: string;
  invertIconInDark?: boolean;
  iconAlt?: string;
  learnMore: string;
};

export function ProjectCard({
  name,
  description,
  href,
  status,
  iconSrc,
  iconSrcDark,
  invertIconInDark,
  iconAlt,
  learnMore,
}: ProjectCardProps) {
  return (
    <article className="flex flex-col rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mb-3 flex items-center justify-between gap-3">
        {iconSrc ? (
          <div className="relative h-7 w-7 shrink-0">
            {iconSrcDark ? (
              <>
                <Image
                  src={iconSrc}
                  alt={iconAlt ?? `${name} icon`}
                  width={28}
                  height={28}
                  className="h-full w-full rounded-sm dark:hidden"
                />
                <Image
                  src={iconSrcDark}
                  alt=""
                  width={28}
                  height={28}
                  className="hidden h-full w-full rounded-sm dark:block"
                  aria-hidden
                />
              </>
            ) : (
              <Image
                src={iconSrc}
                alt={iconAlt ?? `${name} icon`}
                width={28}
                height={28}
                className={
                  invertIconInDark
                    ? "h-full w-full rounded-sm dark:invert"
                    : "h-full w-full rounded-sm"
                }
              />
            )}
          </div>
        ) : (
          <div
            className="h-7 w-7 rounded-sm bg-zinc-200 dark:bg-zinc-700"
            aria-hidden
          />
        )}
        <StatusBadge status={status} />
      </div>
      <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        {name}
      </h2>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
      <Link
        href={href}
        className="text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 transition-colors hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
      >
        {learnMore}
      </Link>
    </article>
  );
}
