import Link from "next/link";
import { HeaderTheMusicTreeLockup } from "@/components/HeaderTheMusicTreeLockup";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/docs", label: "Docs" },
  { href: "/about", label: "About Us" },
  { href: "/engagement", label: "Engagement" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-5"
        aria-label="Main navigation"
      >
        <HeaderTheMusicTreeLockup />
        <ul className="flex flex-wrap items-center gap-6 text-base font-medium">
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
            <Link
              href="/contribute"
              data-track-event="cta_click"
              data-track-label="header_contribute"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Contribute
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
