import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectBadgeStrip } from "./ProjectBadgeStrip";

const STAR_BADGE = {
  src: "https://img.shields.io/github/stars/owner/repo?style=flat-square",
  alt: "GitHub stars",
  href: "https://github.com/owner/repo",
};

const PYPI_BADGE = {
  src: "https://img.shields.io/pypi/v/some-package?style=flat-square",
  alt: "PyPI version",
  href: "https://pypi.org/project/some-package/",
};

describe("ProjectBadgeStrip", () => {
  it("renders nothing for an empty badge list", () => {
    const { container } = render(<ProjectBadgeStrip badges={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders a linked image for each badge", () => {
    render(<ProjectBadgeStrip badges={[STAR_BADGE, PYPI_BADGE]} />);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(2);

    expect(links[0]).toHaveAttribute("href", STAR_BADGE.href);
    expect(links[1]).toHaveAttribute("href", PYPI_BADGE.href);
  });

  it("sets correct alt text on each badge image", () => {
    render(<ProjectBadgeStrip badges={[STAR_BADGE, PYPI_BADGE]} />);

    expect(screen.getByAltText(STAR_BADGE.alt)).toBeInTheDocument();
    expect(screen.getByAltText(PYPI_BADGE.alt)).toBeInTheDocument();
  });

  it("opens links in a new tab with noopener noreferrer", () => {
    render(<ProjectBadgeStrip badges={[STAR_BADGE]} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("has an accessible label on the badge list", () => {
    render(<ProjectBadgeStrip badges={[STAR_BADGE]} />);
    expect(
      screen.getByRole("list", { name: "Package and repository badges" })
    ).toBeInTheDocument();
  });
});
