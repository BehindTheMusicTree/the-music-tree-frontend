import { resolveOrgSiteHref } from "@behindthemusictree/assets";

/**
 * Canonical site origin (no trailing slash), derived from the published
 * organization-assets package site URL.
 */
export function getSiteOrigin(): string {
  const href = resolveOrgSiteHref();
  return new URL(href).origin;
}

/** Hostname derived from the canonical site origin. */
export function getSiteHostname(): string {
  return new URL(getSiteOrigin()).hostname;
}
