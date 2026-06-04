import { expect, test } from "@playwright/test";

test("locale switcher navigates from en to fr", async ({ page }) => {
  await page.goto("/");
  const switcher = page.getByRole("navigation", { name: "Website language" });
  await switcher.locator("summary").click();
  await switcher.getByRole("link", { name: "FR" }).click();
  await expect(page).toHaveURL(/\/fr(\/|$)/);
  expect((await page.goto("/fr/"))?.status()).toBe(200);
});

test("locale switcher navigates from fr to en", async ({ page }) => {
  await page.goto("/fr/");
  const switcher = page.getByRole("navigation", { name: "Langue du site" });
  await switcher.locator("summary").click();
  await switcher.getByRole("link", { name: "EN" }).click();
  await expect(page).not.toHaveURL(/\/fr\//);
});
