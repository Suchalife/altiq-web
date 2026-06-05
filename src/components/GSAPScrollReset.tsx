"use client";

/**
 * GSAPScrollReset
 * ───────────────
 * Next.js App Router does client-side navigation — the page never
 * fully reloads, so GSAP ScrollTrigger keeps stale scroll positions
 * from the previous route and thinks every animation has already fired.
 *
 * This component sits in the root layout and, on every pathname change:
 *  1. Kills every existing ScrollTrigger instance
 *  2. Scrolls the window back to the top
 *  3. Waits one animation frame (lets React finish painting the new page)
 *  4. Calls ScrollTrigger.refresh() so all new triggers recalculate
 *     from a clean zero-scroll state
 */

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Kill every ScrollTrigger so stale instances can't fire
    ScrollTrigger.getAll().forEach(t => t.kill());

    // 2. Reset scroll to top immediately
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });

    // 3. After React has painted the new page, refresh ScrollTrigger
    //    so every trigger recalculates its position from scratch
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
    });

    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return null;
}
