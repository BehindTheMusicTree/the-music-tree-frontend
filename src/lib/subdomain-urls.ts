import {
  AUDIOMETA_FRONT_SUBDOMAIN,
  GTMT_FRONT_SUBDOMAIN,
  HTMT_API_SUBDOMAIN,
  TMD_SHOWCASE_SUBDOMAIN,
} from "@behindthemusictree/brand";
import { getSiteHostname } from "@/lib/site-origin";

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
  return resolveSubdomainLabel(HTMT_API_SUBDOMAIN!);
}

/** GrowTheMusicTree web app URL. */
export function getGrowTheMusicTreeUrl(): string {
  return resolveSubdomainLabel(GTMT_FRONT_SUBDOMAIN!);
}

/** AudioMeta web app URL. */
export function getAudiometaWebUrl(): string {
  return resolveSubdomainLabel(AUDIOMETA_FRONT_SUBDOMAIN!);
}

/** The Music Deck showcase URL. */
export function getTheMusicDeckShowcaseUrl(): string {
  return resolveSubdomainLabel(TMD_SHOWCASE_SUBDOMAIN!);
}
