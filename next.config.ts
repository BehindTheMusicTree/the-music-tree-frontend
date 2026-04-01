import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

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
requireNonEmptyEnv("HTMT_API_SUBDOMAIN");
requireNonEmptyEnv("GTMT_FRONT_SUBDOMAIN");
requireNonEmptyEnv("AUDIOMETA_SUBDOMAIN");
requireNonEmptyEnv("MASTODON_URL");

/** Absolute entry for Tailwind v4 CSS (see `globals.css` @import "tailwindcss"). */
const tailwindCssEntry = path.join(projectRoot, "node_modules/tailwindcss/index.css");

const nextConfig: NextConfig = {
  async redirects() {
    return [
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

export default nextConfig;
