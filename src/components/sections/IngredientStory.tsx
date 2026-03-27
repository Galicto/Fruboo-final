"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function IngredientStory({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const opacity = useTransform(scrollYProgress, [0.38, 0.45, 0.6, 0.68], [0, 1, 1, 0]);
  const x = useTransform(scrollYProgress, [0.38, 0.5], [100, 0]);

  return (
    <motion.section
      style={{ opacity }}
      className="fixed inset-0 flex items-center justify-end z-20 pointer-events-none px-6 md:px-24"
    >
      {/* Right side soft gradient mask for text readability */}
      <div className="absolute inset-y-0 right-0 w-full md:w-3/5 bg-gradient-to-l from-black/80 via-black/40 to-transparent -z-10" />

      <motion.div style={{ x }} className="max-w-xl text-right bg-black/20 backdrop-blur-sm p-8 rounded-3xl border border-white/5 shadow-2xl">
        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
          Every layer<br />tells a story.
        </h2>
        <ul className="mt-10 space-y-8 text-xl md:text-3xl text-white font-light list-none">
          <li className="flex items-center justify-end gap-5 drop-shadow-md">
            Handpicked fruits
            <div className="w-3 h-3 rounded-full bg-[var(--color-accent-orange)] shadow-[0_0_15px_var(--color-accent-orange)]" />
          </li>
          <li className="flex items-center justify-end gap-5 drop-shadow-md">
            Your choice of refreshing base
            <div className="w-3 h-3 rounded-full bg-[var(--color-accent-aqua)] shadow-[0_0_15px_var(--color-accent-aqua)]" />
          </li>
          <li className="flex items-center justify-end gap-5 drop-shadow-md">
            Prepared fresh, served clean
            <div className="w-3 h-3 rounded-full bg-[var(--color-accent-green)] shadow-[0_0_15px_var(--color-accent-green)]" />
          </li>
        </ul>
      </motion.div>
    </motion.section>
  );
}
