import type { ReactNode } from "react";
import Image from "next/image";
import { IconGithub, IconPypi, IconWebsite } from "@/components/icons/SocialIcons";
import {
  socialBrandIconClass,
  socialIconOnlyButtonClass,
} from "@/components/social-icon-link-styles";

const variants = {
  inline:
    "inline-flex items-center gap-2 align-middle font-medium text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-50",
  footer:
    "inline-flex items-center gap-1.5 align-middle text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50",
  prose:
    "inline-flex items-center gap-1.5 align-middle font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-2 transition-colors hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400",
} as const;

const variantsTextOnly: Record<keyof typeof variants, string> = {
  inline:
    "font-medium text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-50",
  footer:
    "text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50",
  prose:
    "font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-2 transition-colors hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400",
};

export type ProductExternalLinkKind = "github" | "pypi" | "website";

export type ProductExternalLinkPresentation = "inline" | "text" | "icon";

type ProductExternalLinkProps = {
  href: string;
  kind: ProductExternalLinkKind;
  variant: keyof typeof variants;
  children?: ReactNode;
  /**
   * With `presentation="icon"`, optional image (e.g. project greyscale mark) instead of the default glyph.
   */
  iconSrc?: string;
  /**
   * `inline` (default): icon + visible label.
   * `text`: underlined text only (e.g. contact row that already has a row icon).
   * `icon`: icon-only control; `aria-label` / `title` from string `children` or from `kind`.
   */
  presentation?: ProductExternalLinkPresentation;
};

function accessibleLabelForIcon(
  kind: ProductExternalLinkKind,
  children?: ReactNode,
): string {
  if (typeof children === "string" && children.trim()) return children.trim();
  if (kind === "github") return "GitHub";
  if (kind === "pypi") return "PyPI";
  return "Website";
}

export function ProductExternalLink({
  href,
  kind,
  variant,
  children,
  iconSrc,
  presentation = "inline",
}: ProductExternalLinkProps) {
  const Icon =
    kind === "github" ? IconGithub : kind === "pypi" ? IconPypi : IconWebsite;

  if (presentation === "icon") {
    const label = accessibleLabelForIcon(kind, children);
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className={socialIconOnlyButtonClass}
      >
        {iconSrc ? (
          <Image
            src={iconSrc}
            alt=""
            width={24}
            height={24}
            className={`${socialBrandIconClass} object-contain`}
          />
        ) : (
          <Icon className={socialBrandIconClass} aria-hidden />
        )}
      </a>
    );
  }

  if (presentation === "text") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={variantsTextOnly[variant]}
      >
        {children}
      </a>
    );
  }

  const iconClassName =
    variant === "prose"
      ? "h-[1.1em] w-[1.1em] shrink-0"
      : socialBrandIconClass;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={variants[variant]}
    >
      <Icon className={iconClassName} aria-hidden />
      {children}
    </a>
  );
}
