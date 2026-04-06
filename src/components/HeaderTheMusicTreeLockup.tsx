"use client";

import {
  TheMusicTreeByline,
  resolveOrgSiteHref,
} from "@behindthemusictree/assets/components";
import markSvg from "@behindthemusictree/assets/brand/the-music-tree/the-music-tree-mark.svg";
import { useMemo, useSyncExternalStore } from "react";

function subscribePrefersDark(callback: () => void) {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function prefersDarkSnapshot() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function HeaderTheMusicTreeLockup() {
  const onDark = useSyncExternalStore(
    subscribePrefersDark,
    prefersDarkSnapshot,
    () => false,
  );
  const orgHref = useMemo(() => resolveOrgSiteHref(), []);
  const markSrc = typeof markSvg === "string" ? markSvg : markSvg.src;

  return (
    <>
      <a
        href={orgHref}
        className="shrink-0 sm:hidden"
        aria-label="TheMusicTree — open ecosystem site"
        style={{ outline: "none" }}
      >
        <img
          src={markSrc}
          alt=""
          className="h-12 w-auto dark:invert"
          aria-hidden
        />
      </a>
      <div className="hidden shrink-0 sm:block">
        <TheMusicTreeByline
          variant={onDark ? "onDark" : "default"}
          className="shrink-0"
          imageStyle={{ height: 48, width: "auto" }}
        />
      </div>
    </>
  );
}
