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
  // Avoid React Compiler SSR/client mismatches around external stores / subtree hydration.
  "use no memo";

  const onDark = useSyncExternalStore(
    subscribePrefersDark,
    prefersDarkSnapshot,
    () => false,
  );
  const orgHref = useMemo(() => resolveOrgSiteHref(), []);
  const markSrc = typeof markSvg === "string" ? markSvg : markSvg.src;
  const markWidth = 551;
  const markHeight = 567;
  const markDisplayHeight = 48;
  const markDisplayWidth = Math.round(
    (markWidth * markDisplayHeight) / markHeight,
  );

  return (
    <div className="relative z-10 flex shrink-0 items-center">
      <a
        href={orgHref}
        className="inline-flex shrink-0 items-center xl:hidden"
        aria-label="TheMusicTree — open ecosystem site"
        style={{ outline: "none" }}
      >
        <Image
          src={markSrc}
          alt=""
          width={markDisplayWidth}
          height={markDisplayHeight}
          className="h-12 w-auto dark:invert"
          style={{ height: markDisplayHeight, width: "auto" }}
          sizes={`${markDisplayWidth}px`}
          aria-hidden
          unoptimized
        />
      </a>
      <div className="hidden shrink-0 xl:block">
        <TheMusicTreeByline
          variant={onDark ? "onDark" : "default"}
          className="shrink-0"
          imageStyle={{ height: 48, width: "auto" }}
        />
      </div>
    </div>
  );
}
