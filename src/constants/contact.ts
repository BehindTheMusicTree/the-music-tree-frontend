/**
 * Mastodon profile URL for /contact (`rel="me"` for verification).
 * Set `MASTODON_URL` (full URL with scheme, e.g. https://fosstodon.org/@handle).
 */
export function getMastodonProfileUrl(): string {
  const v = process.env.MASTODON_URL?.trim();
  if (!v) {
    throw new Error(
      "MASTODON_URL must be set. It is required for builds (see next.config.ts).",
    );
  }
  return v;
}
