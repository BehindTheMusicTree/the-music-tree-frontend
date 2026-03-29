import type { ReactNode } from "react";
import { IconGithub, IconPypi } from "@/components/icons/SocialIcons";

const variants = {
  inline:
    "inline-flex items-center gap-2 font-medium text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-50",
  footer:
    "inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50",
  prose:
    "inline-flex items-center gap-1.5 font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-2 transition-colors hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400",
} as const;

export type ProductExternalLinkKind = "github" | "pypi";

type ProductExternalLinkProps = {
  href: string;
  kind: ProductExternalLinkKind;
  variant: keyof typeof variants;
  children: ReactNode;
};

export function ProductExternalLink({
  href,
  kind,
  variant,
  children,
}: ProductExternalLinkProps) {
  const Icon = kind === "github" ? IconGithub : IconPypi;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={variants[variant]}
    >
      <Icon className="h-5 w-5 shrink-0" aria-hidden />
      {children}
    </a>
  );
}
