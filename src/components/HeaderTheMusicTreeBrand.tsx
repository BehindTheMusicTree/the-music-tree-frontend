"use client";

import {
  TheMusicTreeByline,
  resolveOrgSiteHref,
} from "@behindthemusictree/assets/components";
import markSvg from "@behindthemusictree/assets/brand/the-music-tree/the-music-tree-mark.svg";
import Image from "next/image";
import { useMemo, useSyncExternalStore } from "react";

function subscribePrefersDark(callback: () => void) {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function prefersDarkSnapshot() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function HeaderTheMusicTreeBrand() {
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
        className="shrink-0 lg:hidden"
        aria-label="TheMusicTree — open ecosystem site"
        style={{ outline: "none" }}
      >
        <Image
          src={markSrc}
          alt=""
          width={120}
          height={48}
          className="h-12 w-auto dark:invert"
          style={{ width: "auto" }}
          aria-hidden
          unoptimized
        />
      </a>
      <div className="hidden shrink-0 lg:block">
        <TheMusicTreeByline
          variant={onDark ? "onDark" : "default"}
          className="shrink-0"
          imageStyle={{ height: 48, width: "auto" }}
        />
      </div>
    </>
  );
}
