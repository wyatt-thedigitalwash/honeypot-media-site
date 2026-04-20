"use client";

import { useEffect } from "react";

export default function HeroSnap() {
  useEffect(() => {
    if (window.location.hash) return;

    const services = document.getElementById("services");
    const nav = document.getElementById("navbar");
    if (!services || !nav) return;

    const DEAD_ZONE = 5;
    const COOLDOWN_MS = 150;
    const ACCUM_RESET_MS = 200;
    let locked = false;
    let coolingDown = false;
    let pos2 = calcPos2();
    let touchStartY = 0;

    // Issue 1: Accumulator for small trackpad deltas at Position 1
    let wheelAccum = 0;
    let accumTimer: ReturnType<typeof setTimeout> | null = null;

    function calcPos2(): number {
      return services!.offsetTop - nav!.offsetHeight;
    }

    function isPastPos2(): boolean {
      return window.scrollY > pos2 + DEAD_ZONE;
    }

    function isNearPos2(): boolean {
      return Math.abs(window.scrollY - pos2) <= DEAD_ZONE;
    }

    function isAtTop(): boolean {
      return window.scrollY < DEAD_ZONE;
    }

    function snapTo(target: number) {
      if (locked) return;
      locked = true;
      wheelAccum = 0;
      window.scrollTo({ top: target, behavior: "smooth" });

      let settledFrames = 0;
      let lastY = window.scrollY;
      let rafId: number;
      const safetyTimeout = setTimeout(() => {
        cancelAnimationFrame(rafId);
        finishUnlock();
      }, 1500);

      function poll() {
        const y = window.scrollY;
        if (Math.abs(y - lastY) < 1 && Math.abs(y - target) < 2) {
          settledFrames++;
          if (settledFrames >= 3) {
            clearTimeout(safetyTimeout);
            finishUnlock();
            return;
          }
        } else {
          settledFrames = 0;
        }
        lastY = y;
        rafId = requestAnimationFrame(poll);
      }
      rafId = requestAnimationFrame(poll);
    }

    function finishUnlock() {
      locked = false;
      coolingDown = true;
      setTimeout(() => {
        coolingDown = false;
      }, COOLDOWN_MS);
    }

    function resetAccum() {
      if (accumTimer) clearTimeout(accumTimer);
      accumTimer = setTimeout(() => {
        wheelAccum = 0;
      }, ACCUM_RESET_MS);
    }

    function handleWheel(e: WheelEvent) {
      if (locked) { e.preventDefault(); return; }
      if (coolingDown) { e.preventDefault(); return; }

      const y = window.scrollY;

      // Near pos2 scrolling down — allow free scroll past
      if (isNearPos2() && e.deltaY > 0) {
        return;
      }

      // Near pos2 scrolling up — hold at pos2, don't fall to hero
      if (isNearPos2() && e.deltaY < 0) {
        e.preventDefault();
        if (Math.abs(e.deltaY) >= DEAD_ZONE) {
          snapTo(0);
        }
        return;
      }

      // Past snap zone — free scroll, but catch re-entry
      if (isPastPos2()) {
        if (e.deltaY < 0 && y <= pos2 + DEAD_ZONE) {
          e.preventDefault();
          snapTo(pos2);
        }
        return;
      }

      // Issue 1: At Position 1 — block ALL events, accumulate small deltas
      if (isAtTop()) {
        e.preventDefault();
        if (e.deltaY > 0) {
          wheelAccum += e.deltaY;
          resetAccum();
          if (wheelAccum >= DEAD_ZONE) {
            wheelAccum = 0;
            snapTo(pos2);
          }
        } else if (e.deltaY < 0) {
          // Scrolling up at top — nothing to do, just block
          wheelAccum = 0;
        }
        return;
      }

      // Between pos1 and pos2 (intermediate) — snap based on direction
      const absD = Math.abs(e.deltaY);
      if (absD < DEAD_ZONE) return;

      e.preventDefault();
      if (e.deltaY > 0) {
        snapTo(pos2);
      } else {
        snapTo(0);
      }
    }

    function handleTouchStart(e: TouchEvent) {
      touchStartY = e.touches[0].clientY;
    }

    function handleTouchMove(e: TouchEvent) {
      if (locked || coolingDown) { e.preventDefault(); return; }

      const delta = touchStartY - e.touches[0].clientY;
      const y = window.scrollY;

      // Near pos2 scrolling down — allow free scroll past
      if (isNearPos2() && delta > 0) {
        return;
      }

      // Near pos2 scrolling up — hold then snap
      if (isNearPos2() && delta < 0) {
        e.preventDefault();
        if (Math.abs(delta) >= DEAD_ZONE) {
          snapTo(0);
        }
        return;
      }

      // Past snap zone — free scroll, catch re-entry
      if (isPastPos2()) {
        if (delta < 0 && y <= pos2 + DEAD_ZONE) {
          e.preventDefault();
          snapTo(pos2);
        }
        return;
      }

      // At Position 1 — block all, require threshold
      if (isAtTop()) {
        e.preventDefault();
        if (delta > DEAD_ZONE) {
          snapTo(pos2);
        }
        return;
      }

      // Between pos1 and pos2
      if (Math.abs(delta) < DEAD_ZONE) return;
      e.preventDefault();
      if (delta > 0) {
        snapTo(pos2);
      } else {
        snapTo(0);
      }
    }

    function handleResize() {
      pos2 = calcPos2();
    }

    // Issue 5: Recalculate after fonts load
    document.fonts.ready.then(() => {
      pos2 = calcPos2();
    });

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
      if (accumTimer) clearTimeout(accumTimer);
    };
  }, []);

  return null;
}
