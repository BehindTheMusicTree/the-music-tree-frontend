import type { ReactNode } from "react";

const iconWrapClass =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-100 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300";

function IconOpenSource() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  );
}

function IconCulture() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M9 18V5l12-2v13" />
      <path d="M9 9l12-2" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function IconEnvironment() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

const sectionIcons = {
  "open-source": <IconOpenSource />,
  culture: <IconCulture />,
  environment: <IconEnvironment />,
} as const;

export type EngagementSectionId = keyof typeof sectionIcons;

type EngagementSectionHeadingProps = {
  sectionId: EngagementSectionId;
  headingId: string;
  children: ReactNode;
};

export function EngagementSectionHeading({
  sectionId,
  headingId,
  children,
}: EngagementSectionHeadingProps) {
  return (
    <h2
      id={headingId}
      className="mb-4 flex items-center gap-3 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
    >
      <span className={iconWrapClass}>{sectionIcons[sectionId]}</span>
      {children}
    </h2>
  );
}
