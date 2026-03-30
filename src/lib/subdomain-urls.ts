/**
 * Resolves product URLs from env:
 * - Full URL if value starts with `http://` or `https://`
 * - `https://{value}` if value already looks like a host (`has a dot`, e.g. `api.example.com`)
 * - `https://{value}.{DOMAIN_NAME}` for a single DNS label (e.g. `api` + `example.com`)
 */
function resolveSubdomainUrl(
  raw: string | undefined,
  varName: string,
): string {
  const trimmed = raw?.trim();
  if (!trimmed) {
    throw new Error(
      `${varName} must be set. It is required for builds (see next.config.ts).`,
    );
  }
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }
  if (trimmed.includes(".")) {
    return `https://${trimmed}`;
  }
  const domain = process.env.DOMAIN_NAME?.trim().replace(/^\.+/, "");
  if (!domain) {
    throw new Error(
      `DOMAIN_NAME must be set when ${varName} is a single-label subdomain.`,
    );
  }
  return `https://${trimmed}.${domain}`;
}

/** HearTheMusicTree API (`HTMT_API_SUBDOMAIN` + `DOMAIN_NAME` when label-only). */
export function getHearTheMusicTreeApiUrl(): string {
  return resolveSubdomainUrl(process.env.HTMT_API_SUBDOMAIN, "HTMT_API_SUBDOMAIN");
}

/** GrowTheMusicTree web app (`GTMT_FRONT_SUBDOMAIN` + `DOMAIN_NAME` when label-only). */
export function getGrowTheMusicTreeUrl(): string {
  return resolveSubdomainUrl(
    process.env.GTMT_FRONT_SUBDOMAIN,
    "GTMT_FRONT_SUBDOMAIN",
  );
}

/** AudioMeta web app (`AUDIOMETA_SUBDOMAIN` + `DOMAIN_NAME` when label-only). */
export function getAudiometaWebUrl(): string {
  return resolveSubdomainUrl(
    process.env.AUDIOMETA_SUBDOMAIN,
    "AUDIOMETA_SUBDOMAIN",
  );
}
