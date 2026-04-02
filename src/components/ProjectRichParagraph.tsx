import Link from "next/link";
import type { RichEnvLinkTarget, RichSegment } from "@/data/projects";
import {
  getAudiometaWebUrl,
  getGrowTheMusicTreeUrl,
  getHearTheMusicTreeApiUrl,
} from "@/lib/subdomain-urls";

const linkClass =
  "font-medium text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-50";

function resolveEnvLinkHref(env: RichEnvLinkTarget): string {
  if (env === "audiometaWeb") return getAudiometaWebUrl();
  if (env === "gtmtWeb") return getGrowTheMusicTreeUrl();
  return getHearTheMusicTreeApiUrl();
}

export function ProjectRichParagraph({
  segments,
  className = "mb-8 leading-relaxed text-zinc-600 dark:text-zinc-400",
}: {
  segments: RichSegment[];
  className?: string;
}) {
  return (
    <p className={className}>
      {segments.map((seg, i) => {
        if (seg.type === "text") {
          return <span key={i}>{seg.text}</span>;
        }
        if (seg.type === "env_link") {
          const href = resolveEnvLinkHref(seg.env);
          return (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              {seg.text}
            </a>
          );
        }
        return (
          <Link key={i} href={`/projects/${seg.slug}`} className={linkClass}>
            {seg.text}
          </Link>
        );
      })}
    </p>
  );
}
