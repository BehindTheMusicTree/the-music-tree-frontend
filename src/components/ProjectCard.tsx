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
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-lg border border-zinc-200 bg-white p-6 shadow-sm outline-offset-2 transition-[box-shadow,border-color] hover:border-zinc-300 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600 dark:focus-visible:outline-zinc-500"
    >
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
      <h2 className="mb-2 text-lg font-semibold text-zinc-900 transition-colors group-hover:text-zinc-950 dark:text-zinc-50 dark:group-hover:text-white">
        {name}
      </h2>
      <p className="flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </Link>
  );
}
