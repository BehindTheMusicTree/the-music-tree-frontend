"use client";

import { useCallback, useEffect, useSyncExternalStore, useState } from "react";

const API = "https://api.websitecarbon.com/b?url=";
const CACHE_MS = 86400000;

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

/** URL sent to Website Carbon (localhost is not measurable; use public origin in dev). */
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
  if (originOverride && isLocalDev) {
    return `${originOverride}${pathname}${search}`;
  }
  return href;
}

function cacheKey(url: string) {
  return `wcb_${encodeURIComponent(url)}`;
}

type LoadState =
  | { status: "loading" }
  | { status: "ok"; grams: number; percent: number }
  | { status: "error" };

const badgeCss = `#wcb.carbonbadge{--b1:#0e11a8;--b2:#00ffbc;font-size:15px;text-align:center;color:var(--b1);line-height:1.15}#wcb.carbonbadge sub{vertical-align:middle;position:relative;top:.3em;font-size:.7em}#wcb #wcb_2,#wcb #wcb_a,#wcb #wcb_g{display:inline-flex;justify-content:center;align-items:center;text-align:center;font-size:1em;line-height:1.15;font-family:-apple-system,BlinkMacSystemFont,sans-serif;text-decoration:none;margin:.2em 0}#wcb #wcb_a,#wcb #wcb_g{padding:.3em .5em;border:.13em solid var(--b2)}#wcb #wcb_g{border-radius:.3em 0 0 .3em;background:#fff;border-right:0;min-width:8.2em}#wcb #wcb_a{border-radius:0 .3em .3em 0;border-left:0;background:var(--b1);color:#fff;font-weight:700;border-color:var(--b1)}#wcb.wcb-d #wcb_a{color:var(--b1);background:var(--b2);border-color:var(--b2)}#wcb.wcb-d #wcb_2{color:#fff}`;

export function WebsiteCarbonBadge() {
  const dark = useSyncExternalStore(
    subscribeDark,
    getDarkSnapshot,
    getServerDarkSnapshot,
  );
  const [state, setState] = useState<LoadState>({ status: "loading" });

  const runFetch = useCallback(async (url: string, render: boolean) => {
    try {
      const res = await fetch(API + encodeURIComponent(url));
      if (!res.ok) {
        if (render) setState({ status: "error" });
        return;
      }
      let data: unknown;
      try {
        data = await res.json();
      } catch {
        if (render) setState({ status: "error" });
        return;
      }
      if (
        typeof data === "object" &&
        data !== null &&
        "error" in data &&
        typeof (data as { error: unknown }).error === "string"
      ) {
        if (render) setState({ status: "error" });
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
        if (render) setState({ status: "ok", grams: c, percent: p });
      } else if (render) {
        setState({ status: "error" });
      }
    } catch {
      localStorage.removeItem(cacheKey(url));
      if (render) setState({ status: "error" });
    }
  }, []);

  useEffect(() => {
    const url = measureUrlForPage();
    const key = cacheKey(url);
    const raw = localStorage.getItem(key);
    const now = Date.now();

    if (raw) {
      try {
        const parsed = JSON.parse(raw) as { c?: number; p?: number; t?: number };
        if (
          typeof parsed.c === "number" &&
          typeof parsed.p === "number" &&
          typeof parsed.t === "number"
        ) {
          setState({ status: "ok", grams: parsed.c, percent: parsed.p });
          if (now - parsed.t > CACHE_MS) {
            void runFetch(url, true);
          }
          return;
        }
      } catch {
        localStorage.removeItem(key);
      }
    }

    setState({ status: "loading" });
    void runFetch(url, true);
  }, [runFetch]);

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
            <>No Result</>
          ) : (
            <>
              {state.grams}g of CO<sub>2</sub>/view
            </>
          )}
        </span>
        <a
          id="wcb_a"
          href="https://www.websitecarbon.com/"
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
