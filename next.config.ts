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

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/u/**",
      },
    ],
  },
};

export default nextConfig;
