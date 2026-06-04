import { expect, test } from "@playwright/test";

test("locale switcher navigates from en to fr", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: /français|fr/i }).click();
  await expect(page).toHaveURL(/\/fr\//);
  expect((await page.goto("/fr/"))?.status()).toBe(200);
});

test("locale switcher navigates from fr to en", async ({ page }) => {
  await page.goto("/fr/");
  await page.getByRole("link", { name: /english|en/i }).click();
  await expect(page).not.toHaveURL(/\/fr\//);
});
