import Link from "next/link";
import { ProductExternalLink } from "@/components/ProductExternalLink";
import { GITHUB_ORG_PROFILE_URL } from "@/constants/github-org";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/team", label: "BehindTheMusicTree" },
  { href: "/projects", label: "Projects" },
  { href: "/contribute", label: "Contribute" },
  { href: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Part of BehindTheMusicTree. Building the ultimate music genre
            reference, one contribution at a time.
          </p>
          <ul className="flex flex-wrap gap-6 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <ProductExternalLink
                href={GITHUB_ORG_PROFILE_URL}
                kind="github"
                variant="footer"
              >
                GitHub
              </ProductExternalLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
