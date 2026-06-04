import { describe, expect, it, vi } from "vitest";

vi.mock("@/components/ProjectDetailTemplate", () => ({
  ProjectDetailTemplate: () => null,
}));
vi.mock("@/lib/project-page-metadata", () => ({
  projectDetailMetadata: () => ({}),
}));
import { projectWithRepoUrlOverride } from "./page";
import { audioFingerprinterProject } from "@/data/projects/audio-fingerprinter";
import {
  GH_AUDIO_FINGERPRINTER,
  githubStarsShieldFromRepoUrl,
} from "@/data/projects/constants";

const CUSTOM_REPO_URL = "https://github.com/custom-org/audio-fingerprinter-fork";

describe("projectWithRepoUrlOverride", () => {
  describe("when called with the default repo URL", () => {
    const project = projectWithRepoUrlOverride(
      audioFingerprinterProject,
      GH_AUDIO_FINGERPRINTER,
    );

    it("keeps the original star badge src", () => {
      const badge = project.badges?.find((b) => b.href === GH_AUDIO_FINGERPRINTER);
      expect(badge?.src).toBe(githubStarsShieldFromRepoUrl(GH_AUDIO_FINGERPRINTER));
    });

    it("keeps the original star badge href", () => {
      const badge = project.badges?.find((b) => b.href === GH_AUDIO_FINGERPRINTER);
      expect(badge?.href).toBe(GH_AUDIO_FINGERPRINTER);
    });
  });

  describe("when called with an overridden repo URL", () => {
    const project = projectWithRepoUrlOverride(
      audioFingerprinterProject,
      CUSTOM_REPO_URL,
    );

    it("updates the star badge src to the overridden shields.io URL", () => {
      const badge = project.badges?.find((b) => b.href === CUSTOM_REPO_URL);
      expect(badge?.src).toBe(githubStarsShieldFromRepoUrl(CUSTOM_REPO_URL));
    });

    it("updates the star badge href to the overridden URL", () => {
      const badge = project.badges?.find((b) => b.href === CUSTOM_REPO_URL);
      expect(badge).toBeDefined();
    });

    it("updates the star badge alt to reference the overridden URL", () => {
      const badge = project.badges?.find((b) => b.href === CUSTOM_REPO_URL);
      expect(badge?.alt).toContain(CUSTOM_REPO_URL);
    });

    it("does not leave a badge pointing to the original URL", () => {
      const oldBadge = project.badges?.find(
        (b) => b.href === GH_AUDIO_FINGERPRINTER,
      );
      expect(oldBadge).toBeUndefined();
    });
  });
});
