"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function Experience({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const opacity = useTransform(scrollYProgress, [0.63, 0.7, 0.82, 0.88], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.63, 0.8], [0.90, 1.05]);

  return (
    <motion.section
      style={{ opacity, scale }}
      className="fixed inset-0 flex items-center justify-center z-20 pointer-events-none px-6"
    >
      <div className="text-center bg-black/60 backdrop-blur-2xl p-12 md:p-16 rounded-[2.5rem] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] max-w-3xl w-full">
        <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-8 drop-shadow-lg">
          Not just a drink.
        </h2>
        <p className="text-3xl md:text-5xl text-[var(--color-accent-aqua)] font-medium mb-6 drop-shadow-[0_0_15px_rgba(174,239,239,0.3)] tracking-tight">
          Drink it. Bite it. Feel it.
        </p>
        <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide">
          A completely new way to enjoy freshness.
        </p>
      </div>
    </motion.section>
  );
}
