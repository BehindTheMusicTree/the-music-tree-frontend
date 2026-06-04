import { describe, expect, it } from "vitest";
import {
  GH_API,
  GH_AUDIO_FINGERPRINTER,
  GH_AUDIOMETA,
  GH_AUDIOMETA_FRONT,
} from "./constants";
import { audioFingerprinterProject } from "./audio-fingerprinter";
import { audiometaWebappProject } from "./audiometa-webapp";
import { audiometaProject } from "./audiometa";
import { theMusicTreeApiProject } from "./the-music-tree-api";
import type { ProjectDefinition } from "./types";

const CASES: { project: ProjectDefinition; ghUrl: string }[] = [
  { project: audiometaProject, ghUrl: GH_AUDIOMETA },
  { project: audiometaWebappProject, ghUrl: GH_AUDIOMETA_FRONT },
  { project: audioFingerprinterProject, ghUrl: GH_AUDIO_FINGERPRINTER },
  { project: theMusicTreeApiProject, ghUrl: GH_API },
];

describe.each(CASES)("$project.name star badge", ({ project, ghUrl }) => {
  const badge = project.badges?.find((b) => b.href === ghUrl);

  it("GitHub repo URL resolves (200)", { timeout: 10000 }, async () => {
    const res = await fetch(ghUrl, { method: "HEAD" });
    expect(res.status).toBe(200);
  });

  it("shields.io badge URL resolves (200)", { timeout: 10000 }, async () => {
    const res = await fetch(badge!.src, { method: "HEAD" });
    expect(res.status).toBe(200);
  });

  it("badge links back to the repo", () => {
    expect(badge?.href).toBe(ghUrl);
  });

  it("badge alt mentions GitHub stars", () => {
    expect(badge?.alt).toMatch(/github stars/i);
  });
});
