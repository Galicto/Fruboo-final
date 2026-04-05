"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";

export function SmoothScrolling({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05, // Restored low lerp for "super smooth" butter-like feel 
      wheelMultiplier: 1,
      smoothWheel: true,
      syncTouch: true, // synchronize touch for mobile
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    // Use requestAnimationFrame for manual RAF loop
    const rafId = requestAnimationFrame(raf);
    
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
