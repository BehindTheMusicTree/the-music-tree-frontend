import { describe, expect, it } from "vitest";
import en from "./en.json";
import fr from "./fr.json";

/**
 * `project.perProject` is a partial override map (only translated fields differ
 * per locale/project) and is already checked for completeness in perProject.test.ts.
 */
const EXCLUDED_PATHS = new Set(["project.perProject"]);

function collectKeyPaths(value: unknown, prefix: string, paths: Set<string>) {
  if (EXCLUDED_PATHS.has(prefix)) return;

  if (Array.isArray(value) || value === null || typeof value !== "object") {
    paths.add(prefix);
    return;
  }

  for (const [key, child] of Object.entries(value)) {
    collectKeyPaths(child, prefix ? `${prefix}.${key}` : key, paths);
  }
}

describe("messages key parity between locales", () => {
  it("en.json and fr.json expose the same translation keys outside per-project overrides", () => {
    const enPaths = new Set<string>();
    const frPaths = new Set<string>();
    collectKeyPaths(en, "", enPaths);
    collectKeyPaths(fr, "", frPaths);

    const missingInFr = [...enPaths].filter((path) => !frPaths.has(path));
    const missingInEn = [...frPaths].filter((path) => !enPaths.has(path));

    expect(
      missingInFr,
      `keys present in en.json but missing in fr.json: ${missingInFr.join(", ")}`,
    ).toEqual([]);
    expect(
      missingInEn,
      `keys present in fr.json but missing in en.json: ${missingInEn.join(", ")}`,
    ).toEqual([]);
  });
});
