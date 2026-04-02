"use client";

import Script from "next/script";
import { useSyncExternalStore } from "react";

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

export function WebsiteCarbonBadge() {
  const dark = useSyncExternalStore(
    subscribeDark,
    getDarkSnapshot,
    getServerDarkSnapshot,
  );

  return (
    <>
      <div
        id="wcb"
        className={dark ? "carbonbadge wcb-d" : "carbonbadge"}
      />
      <Script
        src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js"
        strategy="lazyOnload"
      />
    </>
  );
}
