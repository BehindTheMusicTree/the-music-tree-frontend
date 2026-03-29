import Image from "next/image";
import type { TeamMember } from "@/data/team";
import { TeamMemberSocialLinks } from "@/components/TeamMemberSocialLinks";

function initialsFromName(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function TeamMemberCard({
  name,
  role,
  bio,
  imageSrc,
  links,
}: TeamMember) {
  const initials = initialsFromName(name);

  return (
    <article className="flex flex-col rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mb-4 flex items-center gap-4">
        {imageSrc ? (
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
            <Image
              src={imageSrc}
              alt={name}
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-zinc-200 text-lg font-semibold text-zinc-700 dark:bg-zinc-700 dark:text-zinc-200"
            aria-hidden
          >
            {initials}
          </div>
        )}
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {name}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{role}</p>
        </div>
      </div>
      <p className="flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {bio}
      </p>
      {links && links.length > 0 ? (
        <TeamMemberSocialLinks links={links} />
      ) : null}
    </article>
  );
}
