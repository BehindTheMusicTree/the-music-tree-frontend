import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import path from "node:path";
import { fileURLToPath } from "node:url";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** Directory containing this config (avoids picking a stray `package-lock.json` in a parent folder, e.g. `$HOME`). */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

function requireNonEmptyEnv(name: string): void {
  const value = process.env[name];
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(
      `Missing required environment variable: ${name}. Copy .env.example to .env.local and set a non-empty value (or configure it in your host, e.g. Vercel).`,
    );
  }
}

requireNonEmptyEnv("DOMAIN_NAME");
requireNonEmptyEnv("NEXT_PUBLIC_SITE_ORIGIN");
{
  const raw = process.env.NEXT_PUBLIC_SITE_ORIGIN!.trim().replace(/\/+$/, "");
  let originUrl: URL;
  try {
    originUrl = new URL(raw);
  } catch {
    throw new Error(
      "NEXT_PUBLIC_SITE_ORIGIN must be a valid URL (e.g. https://themusictree.org).",
    );
  }
  if (originUrl.protocol !== "https:") {
    throw new Error("NEXT_PUBLIC_SITE_ORIGIN must use https://.");
  }
  if (
    originUrl.pathname !== "/" ||
    originUrl.search !== "" ||
    originUrl.hash !== ""
  ) {
    throw new Error(
      "NEXT_PUBLIC_SITE_ORIGIN must be an origin only: https://hostname with no path, query, or fragment.",
    );
  }
}
requireNonEmptyEnv("HTMT_API_SUBDOMAIN");
requireNonEmptyEnv("GTMT_FRONT_SUBDOMAIN");
requireNonEmptyEnv("AUDIOMETA_SUBDOMAIN");
requireNonEmptyEnv("BREVO_API_KEY");
requireNonEmptyEnv("BREVO_NEWSLETTER_LIST_ID");
{
  const raw = process.env.BREVO_NEWSLETTER_LIST_ID!.trim();
  for (const part of raw.split(",")) {
    const p = part.trim();
    if (p === "" || !/^\d+$/.test(p)) {
      throw new Error(
        "BREVO_NEWSLETTER_LIST_ID must be comma-separated positive integers (e.g. 12 or 3,4).",
      );
    }
  }
}
requireNonEmptyEnv("BREVO_DOI_TEMPLATE_ID");
requireNonEmptyEnv("BREVO_DOI_REDIRECT_PATH");
{
  const doiT = process.env.BREVO_DOI_TEMPLATE_ID!.trim();
  if (!/^\d+$/.test(doiT)) {
    throw new Error(
      "BREVO_DOI_TEMPLATE_ID must be a numeric Brevo double opt-in template id.",
    );
  }
}
{
  const path = process.env.BREVO_DOI_REDIRECT_PATH!.trim();
  if (!path.startsWith("/") || path.length < 2 || /\s/.test(path)) {
    throw new Error(
      "BREVO_DOI_REDIRECT_PATH must be a site path starting with / (e.g. /newsletter/confirmed). Full URL is https:// + DOMAIN_NAME + path.",
    );
  }
}

/** Absolute entry for Tailwind v4 CSS (see `globals.css` @import "tailwindcss"). */
const tailwindCssEntry = path.join(projectRoot, "node_modules/tailwindcss/index.css");

const nextConfig: NextConfig = {
  transpilePackages: ["@behindthemusictree/assets"],
  async redirects() {
    return [
      {
        source: "/for-teachers",
        destination: "/docs",
        permanent: true,
      },
      {
        source: "/how-it-works",
        destination: "/docs",
        permanent: true,
      },
      {
        source: "/roadmap",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/projects/audiometa",
        destination: "/projects/audiometa-python",
        permanent: true,
      },
    ];
  },
  turbopack: {
    root: projectRoot,
    /**
     * Dev (Turbopack) can resolve CSS with an issuer under a parent workspace path
     * (e.g. `$HOME/package.json` + `./git`), breaking bare or relative `tailwindcss` paths.
     * Pin the package entry to this repo’s `node_modules`.
     */
    resolveAlias: {
      tailwindcss: tailwindCssEntry,
    },
  },
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/u/**",
      },
      {
        protocol: "https",
        hostname: "img.shields.io",
        pathname: "/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
