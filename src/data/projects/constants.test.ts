import { describe, expect, it } from "vitest";
import { githubStarsShieldFromRepoUrl, shield } from "./constants";

describe("shield", () => {
  it("appends flat-square style param", () => {
    expect(shield("github/stars/owner/repo")).toBe(
      "https://img.shields.io/github/stars/owner/repo?style=flat-square"
    );
  });
});

describe("githubStarsShieldFromRepoUrl", () => {
  it("returns correct shields.io URL for a standard GitHub repo URL", () => {
    expect(
      githubStarsShieldFromRepoUrl(
        "https://github.com/BehindTheMusicTree/audiometa"
      )
    ).toBe(
      "https://img.shields.io/github/stars/BehindTheMusicTree/audiometa?style=flat-square"
    );
  });

  it("strips www. prefix", () => {
    expect(
      githubStarsShieldFromRepoUrl(
        "https://www.github.com/BehindTheMusicTree/audiometa"
      )
    ).toBe(
      "https://img.shields.io/github/stars/BehindTheMusicTree/audiometa?style=flat-square"
    );
  });

  it("strips .git suffix from repo name", () => {
    expect(
      githubStarsShieldFromRepoUrl(
        "https://github.com/BehindTheMusicTree/audiometa.git"
      )
    ).toBe(
      "https://img.shields.io/github/stars/BehindTheMusicTree/audiometa?style=flat-square"
    );
  });

  it("trims leading/trailing whitespace in the URL", () => {
    expect(
      githubStarsShieldFromRepoUrl(
        "  https://github.com/BehindTheMusicTree/audiometa  "
      )
    ).toBe(
      "https://img.shields.io/github/stars/BehindTheMusicTree/audiometa?style=flat-square"
    );
  });

  it("returns null for a non-GitHub URL", () => {
    expect(
      githubStarsShieldFromRepoUrl("https://gitlab.com/owner/repo")
    ).toBeNull();
  });

  it("returns null when path has fewer than two segments", () => {
    expect(
      githubStarsShieldFromRepoUrl("https://github.com/BehindTheMusicTree")
    ).toBeNull();
  });

  it("returns null for an invalid URL string", () => {
    expect(githubStarsShieldFromRepoUrl("not-a-url")).toBeNull();
  });
});
