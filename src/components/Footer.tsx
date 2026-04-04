import Link from "next/link";
import { ProductExternalLink } from "@/components/ProductExternalLink";
import { WebsiteCarbonBadge } from "@/components/WebsiteCarbonBadge";
import { GITHUB_ORG_PROFILE_URL } from "@/constants/github-org";
import { websiteCarbonReportPageHref } from "@/lib/website-carbon-results-url";

const productLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/docs", label: "Docs" },
] as const;

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/engagement", label: "Engagement" },
  { href: "/contact", label: "Contact" },
] as const;

const supportLinks = [{ href: "/faq", label: "FAQ" }] as const;

export function Footer() {
  const websiteCarbonReportHref = websiteCarbonReportPageHref();
  const linkClassName =
    "text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50";

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="grid gap-6">
          <div className="grid grid-cols-2 gap-6 text-sm font-medium sm:grid-cols-4">
            <section aria-labelledby="footer-product-heading">
              <h2
                id="footer-product-heading"
                className="mb-2 text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-500"
              >
                Product
              </h2>
              <ul className="space-y-1.5">
                {productLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className={linkClassName}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="footer-company-heading">
              <h2
                id="footer-company-heading"
                className="mb-2 text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-500"
              >
                Company
              </h2>
              <ul className="space-y-1.5">
                {companyLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className={linkClassName}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="footer-support-heading">
              <h2
                id="footer-support-heading"
                className="mb-2 text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-500"
              >
                Support
              </h2>
              <ul className="space-y-1.5">
                {supportLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className={linkClassName}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="footer-community-heading">
              <h2
                id="footer-community-heading"
                className="mb-2 text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-500"
              >
                Community
              </h2>
              <ul className="space-y-1.5">
                <li>
                  <Link
                    href="/newsletter"
                    data-track-event="cta_click"
                    data-track-label="footer_newsletter"
                    className={linkClassName}
                  >
                    Newsletter
                  </Link>
                </li>
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
            </section>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/contribute"
            data-track-event="cta_click"
            data-track-label="footer_contribute"
            className="inline-flex w-fit items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Contribute
          </Link>
          <div className="flex justify-start sm:justify-end">
            <WebsiteCarbonBadge reportPageHref={websiteCarbonReportHref} />
          </div>
        </div>
      </div>
    </footer>
  );
}
