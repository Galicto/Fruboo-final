"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion, useTransform } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { CanvasRenderer } from "@/components/CanvasRenderer";

import { HeroSection } from "@/components/sections/HeroSection";
import { FreshnessReveal } from "@/components/sections/FreshnessReveal";
import { IngredientStory } from "@/components/sections/IngredientStory";
import { Experience } from "@/components/sections/Experience";
import { Reassembly } from "@/components/sections/Reassembly";

// Premium Sections
import { BulkOrderFocus } from "@/components/sections/BulkOrderFocus";
import { MenuPricing } from "@/components/sections/MenuPricing";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CustomerReviews } from "@/components/sections/CustomerReviews";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showCanvas, setShowCanvas] = useState(true);
  
  // Track scroll progress along the 400vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Hide the Canvas Renderer when we safely scroll past the 400vh mark so it doesn't overlap the new sections
    if (latest >= 0.99 && showCanvas) {
      setShowCanvas(false);
    } else if (latest < 0.99 && !showCanvas) {
      setShowCanvas(true);
    }
  });

  // Force scroll to top on reload to reset experience
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-[var(--color-accent-orange)] selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Background Canvas fixed to viewport - disappears past 400vh to avoid overlapping bulk options */}
      <CanvasRenderer isVisible={showCanvas} />
      
      {/* The scrollable container that dictates the length of the scrollytelling. */}
      <div ref={containerRef} className="relative h-[400vh]">
        {/* Original specific sections overlaid, connected to scrollYProgress */}
        <HeroSection scrollYProgress={scrollYProgress} />
        <FreshnessReveal scrollYProgress={scrollYProgress} />
        <IngredientStory scrollYProgress={scrollYProgress} />
        <Experience scrollYProgress={scrollYProgress} />
        <Reassembly scrollYProgress={scrollYProgress} />
      </div>

      {/* The Premium Specific New Sections Added Below the Canvas Experience */}
      <div id="bulk" className="relative z-30 bg-[#050505]">
        <BulkOrderFocus />
        <MenuPricing />
        <HowItWorks />
        <CustomerReviews />
        <ServiceArea />
        <FAQAccordion />
        <TrustBadges />
        <InstagramFeed />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
