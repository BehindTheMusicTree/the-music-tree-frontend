import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/about",
  "/projects",
  "/projects/audio-fingerprinter",
  "/projects/audiometa-python",
  "/projects/audiometa-webapp",
  "/projects/grow-the-music-tree",
  "/projects/hear-the-music-tree",
  "/projects/the-music-deck",
  "/projects/the-music-tree-api",
  "/projects/infrastructure",
  "/team",
  "/contact",
  "/contribute",
  "/docs",
  "/faq",
];

for (const route of routes) {
  test(`en: ${route} returns 200`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
  });

  test(`fr: /fr${route} returns 200`, async ({ page }) => {
    const response = await page.goto(`/fr${route}`);
    expect(response?.status()).toBe(200);
  });
}
