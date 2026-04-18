import { getSiteHostname } from "@/lib/site-origin";

const DEFAULT_HTMT_API_SUBDOMAIN = "hear-api";
const DEFAULT_GTMT_FRONT_SUBDOMAIN = "grow";
const DEFAULT_AUDIOMETA_SUBDOMAIN = "audiometa";

/**
 * Resolves product URLs from env:
 * - Full URL if value starts with `http://` or `https://`
 * - `https://{value}` if value already looks like a host (`has a dot`, e.g. `api.example.com`)
 * - `https://{value}.{site-host}` for a single DNS label (e.g. `api` + `example.com`)
 */
function resolveSubdomainLabel(label: string): string {
  return `https://${label}.${getSiteHostname()}`;
}

/** HearTheMusicTree API URL. */
export function getHearTheMusicTreeApiUrl(): string {
  return resolveSubdomainLabel(DEFAULT_HTMT_API_SUBDOMAIN);
}

/** GrowTheMusicTree web app URL. */
export function getGrowTheMusicTreeUrl(): string {
  return resolveSubdomainLabel(DEFAULT_GTMT_FRONT_SUBDOMAIN);
}

/** AudioMeta web app URL. */
export function getAudiometaWebUrl(): string {
  return resolveSubdomainLabel(DEFAULT_AUDIOMETA_SUBDOMAIN);
}
