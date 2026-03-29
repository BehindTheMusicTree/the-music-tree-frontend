import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** Directory containing this config (avoids picking a stray `package-lock.json` in a parent folder, e.g. `$HOME`). */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

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
