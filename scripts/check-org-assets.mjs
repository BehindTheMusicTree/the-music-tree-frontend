import { createRequire } from "node:module";
import { existsSync } from "node:fs";
import path from "node:path";

const require = createRequire(import.meta.url);
const packageJsonPath = path.join(
  process.cwd(),
  "node_modules",
  "@behindthemusictree",
  "assets",
  "package.json",
);

try {
  if (!existsSync(packageJsonPath)) {
    throw new Error("missing package");
  }

  const packageJson = require(packageJsonPath);
  console.log(
    `organization assets found: ${packageJson.name}@${packageJson.version}`,
  );
} catch {
  console.error(
    "Missing dependency: @behindthemusictree/assets. Install dependencies before building.",
  );
  process.exit(1);
}
