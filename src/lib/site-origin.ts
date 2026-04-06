/**
 * Canonical site origin (no trailing slash). Matches **`NEXT_PUBLIC_SITE_ORIGIN`** validation in **`next.config.ts`**.
 */
export function getSiteOrigin(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_ORIGIN;
  if (typeof raw !== "string" || raw.trim() === "") {
    throw new Error(
      "NEXT_PUBLIC_SITE_ORIGIN is required (copy from .env.example).",
    );
  }
  return raw.trim().replace(/\/+$/, "");
}
