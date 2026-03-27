"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function FreshnessReveal({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const opacity = useTransform(scrollYProgress, [0.12, 0.18, 0.35, 0.42], [0, 1, 1, 0]);
  const x = useTransform(scrollYProgress, [0.12, 0.25], [-100, 0]);

  return (
    <motion.section
      style={{ opacity }}
      className="fixed inset-0 flex items-center justify-start z-20 pointer-events-none px-6 md:px-24"
    >
      {/* Left side soft gradient mask for text readability */}
      <div className="absolute inset-y-0 left-0 w-full md:w-3/5 bg-gradient-to-r from-black/80 via-black/40 to-transparent -z-10" />

      <motion.div style={{ x }} className="max-w-2xl text-left bg-black/20 backdrop-blur-sm p-8 rounded-3xl border border-white/5 shadow-2xl">
        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
          Real fruit.<br />
          <span className="text-[var(--color-accent-green)] drop-shadow-[0_0_20px_rgba(107,191,89,0.4)]">Nothing hidden.</span>
        </h2>
        <div className="mt-8 space-y-6">
          <p className="text-xl md:text-3xl text-white font-light drop-shadow-md">
            Every bottle is packed with freshly cut fruits and your choice of base.
          </p>
          <p className="text-lg md:text-xl text-white/70 font-medium">
            No artificial shortcuts.<br/>Just real freshness.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
