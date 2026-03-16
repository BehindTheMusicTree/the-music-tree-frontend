import Link from "next/link";
import { StatusBadge } from "./StatusBadge";

type ProjectCardProps = {
  name: string;
  description: string;
  href: string;
  status: "active" | "wip";
};

export function ProjectCard({ name, description, href, status }: ProjectCardProps) {
  return (
    <article className="flex flex-col rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mb-2 flex items-center gap-2">
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
        Learn more
      </Link>
    </article>
  );
}
