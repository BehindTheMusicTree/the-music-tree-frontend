"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useSyncExternalStore, useState } from "react";

const API = "https://api.websitecarbon.com/b?url=";
const CACHE_MS = 86400000;

function carbonDebugEnabled(): boolean {
  if (process.env.NODE_ENV === "development") return true;
  const v = process.env.NEXT_PUBLIC_DEBUG_WEBSITE_CARBON?.trim().toLowerCase();
  return v === "1" || v === "true" || v === "yes";
}

/** Logs to the console when `NODE_ENV === "development"` or `NEXT_PUBLIC_DEBUG_WEBSITE_CARBON` is set. */
function logCarbon(...args: unknown[]): void {
  if (!carbonDebugEnabled()) return;
  console.log("[WebsiteCarbon]", ...args);
}

/** Retries on 5xx and on thrown fetch (transient network); backs off between attempts. */
const CARBON_FETCH_ATTEMPTS = 3;

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

/**
 * Calls api.websitecarbon.com; retries when the service returns 5xx or the request fails (often 503).
 */
async function fetchCarbonWithRetries(requestUrl: string): Promise<
  | { ok: true; data: unknown }
  | { ok: false; serverUnavailable: boolean; lastStatus?: number }
> {
  let lastStatus: number | undefined;
  for (let attempt = 0; attempt < CARBON_FETCH_ATTEMPTS; attempt++) {
    if (attempt > 0) {
      const waitMs = 1000 * attempt;
      logCarbon("retry after delay ms", waitMs, "attempt", attempt + 1);
      await delay(waitMs);
    }
    try {
      const res = await fetch(requestUrl);
      lastStatus = res.status;
      if (res.ok) {
        const data: unknown = await res.json();
        return { ok: true, data };
      }
      const bodyPreview = await res.text();
      logCarbon("fetch HTTP error", {
        status: res.status,
        bodyPreview: bodyPreview.slice(0, 500),
      });
      const serverError = res.status >= 500 && res.status <= 599;
      if (serverError && attempt < CARBON_FETCH_ATTEMPTS - 1) {
        continue;
      }
      return {
        ok: false,
        serverUnavailable: serverError,
        lastStatus: res.status,
      };
    } catch (err) {
      logCarbon("fetch threw", err);
      if (attempt < CARBON_FETCH_ATTEMPTS - 1) {
        continue;
      }
      return { ok: false, serverUnavailable: false };
    }
  }
  return {
    ok: false,
    serverUnavailable: lastStatus !== undefined && lastStatus >= 500,
    lastStatus,
  };
}

function subscribeDark(onChange: () => void) {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getDarkSnapshot() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function getServerDarkSnapshot() {
  return false;
}

/**
 * URL sent to Website Carbon. On localhost / 127.0.0.1 / *.local, optional
 * `NEXT_PUBLIC_SITE_ORIGIN` replaces the origin so the API can measure the public URL (see README).
 */
function measureUrlForPage(): string {
  const { href, hostname, pathname, search } = window.location;
  const originOverride = process.env.NEXT_PUBLIC_SITE_ORIGIN?.trim().replace(
    /\/+$/,
    "",
  );
  const isLocalDev =
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname.endsWith(".local");
  const resolved =
    originOverride && isLocalDev
      ? `${originOverride}${pathname}${search}`
      : href;
  logCarbon("measure URL", {
    hostname,
    href,
    pathname,
    search,
    isLocalDev,
    hasNEXT_PUBLIC_SITE_ORIGIN: Boolean(originOverride),
    NEXT_PUBLIC_SITE_ORIGIN: originOverride || "(unset)",
    resolved,
  });
  return resolved;
}

function cacheKey(url: string) {
  return `wcb_${encodeURIComponent(url)}`;
}

type LoadState =
  | { status: "loading" }
  | { status: "ok"; grams: number; percent: number }
  | { status: "error"; serverUnavailable?: boolean };

const badgeCss = `#wcb.carbonbadge{--b1:#0e11a8;--b2:#00ffbc;font-size:15px;text-align:center;color:var(--b1);line-height:1.15}#wcb.carbonbadge sub{vertical-align:middle;position:relative;top:.3em;font-size:.7em}#wcb #wcb_2,#wcb #wcb_a,#wcb #wcb_g{display:inline-flex;justify-content:center;align-items:center;text-align:center;font-size:1em;line-height:1.15;font-family:-apple-system,BlinkMacSystemFont,sans-serif;text-decoration:none;margin:.2em 0}#wcb #wcb_a,#wcb #wcb_g{padding:.3em .5em;border:.13em solid var(--b2)}#wcb #wcb_g{border-radius:.3em 0 0 .3em;background:#fff;border-right:0;min-width:8.2em}#wcb #wcb_a{border-radius:0 .3em .3em 0;border-left:0;background:var(--b1);color:#fff;font-weight:700;border-color:var(--b1)}#wcb.wcb-d #wcb_a{color:var(--b1);background:var(--b2);border-color:var(--b2)}#wcb.wcb-d #wcb_2{color:#fff}`;

export type WebsiteCarbonBadgeProps = {
  /** Built on the server from `ORG_URL` (Website Carbon `/website/…/`). */
  reportPageHref: string;
};

export function WebsiteCarbonBadge({ reportPageHref }: WebsiteCarbonBadgeProps) {
  const pathname = usePathname();
  const dark = useSyncExternalStore(
    subscribeDark,
    getDarkSnapshot,
    getServerDarkSnapshot,
  );
  const [state, setState] = useState<LoadState>({ status: "loading" });

  const runFetch = useCallback(async (url: string, render: boolean) => {
    const requestUrl = API + encodeURIComponent(url);
    logCarbon("fetch start", { url, render, requestUrl });
    try {
      const result = await fetchCarbonWithRetries(requestUrl);
      if (!result.ok) {
        logCarbon("fetch failed after retries", {
          serverUnavailable: result.serverUnavailable,
          lastStatus: result.lastStatus,
        });
        if (render) {
          setState({
            status: "error",
            serverUnavailable: result.serverUnavailable,
          });
        }
        return;
      }
      const data = result.data;
      logCarbon("fetch response JSON", data);
      if (
        typeof data === "object" &&
        data !== null &&
        "error" in data &&
        typeof (data as { error: unknown }).error === "string"
      ) {
        const message = (data as { error: string }).error;
        logCarbon("API returned error field", message);
        const msg = message.toLowerCase();
        const looksUnavailable =
          msg.includes("unavailable") || msg.includes("temporarily");
        if (render) {
          setState({
            status: "error",
            serverUnavailable: looksUnavailable,
          });
        }
        return;
      }
      if (
        typeof data === "object" &&
        data !== null &&
        "c" in data &&
        "p" in data &&
        typeof (data as { c: unknown }).c === "number" &&
        typeof (data as { p: unknown }).p === "number"
      ) {
        const { c, p } = data as { c: number; p: number };
        const payload = { c, p, t: Date.now() };
        localStorage.setItem(cacheKey(url), JSON.stringify(payload));
        logCarbon("fetch OK", { c, p });
        if (render) setState({ status: "ok", grams: c, percent: p });
      } else {
        logCarbon("unexpected response shape (expected c, p numbers)", data);
        if (render) setState({ status: "error" });
      }
    } catch (err) {
      logCarbon("runFetch outer catch", err);
      localStorage.removeItem(cacheKey(url));
      if (render) setState({ status: "error" });
    }
  }, []);

  useEffect(() => {
    queueMicrotask(() => {
      const url = measureUrlForPage();
      const key = cacheKey(url);
      const raw = localStorage.getItem(key);
      const now = Date.now();

      if (raw) {
        try {
          const parsed = JSON.parse(raw) as {
            c?: number;
            p?: number;
            t?: number;
          };
          if (
            typeof parsed.c === "number" &&
            typeof parsed.p === "number" &&
            typeof parsed.t === "number"
          ) {
            logCarbon("using localStorage cache", {
              key,
              ageMs: now - parsed.t,
              stale: now - parsed.t > CACHE_MS,
            });
            setState({
              status: "ok",
              grams: parsed.c,
              percent: parsed.p,
            });
            if (now - parsed.t > CACHE_MS) {
              void runFetch(url, true);
            }
            return;
          }
        } catch {
          localStorage.removeItem(key);
        }
      }

      logCarbon("no valid cache, fetching");
      setState({ status: "loading" });
      void runFetch(url, true);
    });
  }, [pathname, runFetch]);

  return (
    <div
      id="wcb"
      className={dark ? "carbonbadge wcb-d" : "carbonbadge"}
      suppressHydrationWarning
    >
      <style>{badgeCss}</style>
      <div id="wcb_p">
        <span id="wcb_g">
          {state.status === "loading" ? (
            <>
              Measuring CO<sub>2</sub>…
            </>
          ) : state.status === "error" ? (
            <span
              title={
                state.serverUnavailable
                  ? "Website Carbon’s API returned a server error (e.g. 503). This is on their side; we retry automatically."
                  : undefined
              }
            >
              {state.serverUnavailable ? "Unavailable" : "No Result"}
            </span>
          ) : (
            <>
              {state.grams}g of CO<sub>2</sub>/view
            </>
          )}
        </span>
        <a
          id="wcb_a"
          href={reportPageHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          Website Carbon
        </a>
      </div>
      <span id="wcb_2">
        {state.status === "ok" ? (
          <>Cleaner than {state.percent}% of pages tested</>
        ) : (
          "\u00a0"
        )}
      </span>
    </div>
  );
}
