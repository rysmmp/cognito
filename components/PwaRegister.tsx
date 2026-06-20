"use client";

import { useEffect } from "react";

/**
 * Registers the service worker. Production-only — in development a service
 * worker would cache stale chunks and fight Fast Refresh, so it's skipped.
 */
export function PwaRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register("/sw.js").catch(() => {
      /* registration failures are non-fatal */
    });
  }, []);

  return null;
}
