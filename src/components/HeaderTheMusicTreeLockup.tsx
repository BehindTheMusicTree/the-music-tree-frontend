"use client";

import { TheMusicTreeByline } from "@behindthemusictree/assets/components";
import { useSyncExternalStore } from "react";

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

  return (
    <TheMusicTreeByline
      variant={onDark ? "onDark" : "default"}
      className="shrink-0"
      imageStyle={{ height: 48, width: "auto" }}
    />
  );
}
