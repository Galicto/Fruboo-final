"use client";

import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { CanvasRenderer } from "@/components/CanvasRenderer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FreshnessReveal } from "@/components/sections/FreshnessReveal";
import { IngredientStory } from "@/components/sections/IngredientStory";
import { Experience } from "@/components/sections/Experience";
import { Reassembly } from "@/components/sections/Reassembly";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress along the 400vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Force scroll to top on reload to reset experience
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-[var(--color-accent-orange)] selection:text-white">
      <Navbar />
      
      {/* Background Canvas fixed to viewport */}
      <CanvasRenderer />
      
      {/* The scrollable container that dictates the length of the scrollytelling. 400vh gives enough room to scroll comfortably through 240 frames */}
      <div ref={containerRef} className="relative h-[400vh]">
        {/* Sections overlaid, hooked up to scrollYProgress */}
        <HeroSection scrollYProgress={scrollYProgress} />
        <FreshnessReveal scrollYProgress={scrollYProgress} />
        <IngredientStory scrollYProgress={scrollYProgress} />
        <Experience scrollYProgress={scrollYProgress} />
        <Reassembly scrollYProgress={scrollYProgress} />
      </div>
    </main>
  );
}
