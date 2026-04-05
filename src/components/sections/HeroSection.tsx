"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function HeroSection({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const yLogo = useTransform(scrollYProgress, [0, 0.15], [0, 250]); 
  const scaleLogo = useTransform(scrollYProgress, [0, 0.15], [1, 1.1]); 
  const yText = useTransform(scrollYProgress, [0, 0.15], [0, 80]);

  return (
    <>
      {/* Background Parallax Logo behind the bottle (z-0). Color must be darker than the fruit! */}
      <motion.div 
        style={{ opacity, y: yLogo, scale: scaleLogo }} 
        className="fixed inset-x-0 top-[15vh] flex flex-col items-center justify-start z-0 pointer-events-none px-4"
      >
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[17vw] md:text-[24vw] leading-[0.8] font-black tracking-tighter select-none text-[#3a3a3a] drop-shadow-2xl"
        >
          FRUBOO
        </motion.h1>
      </motion.div>

      {/* Elegant Subtitles at the bottom, placed OVER the canvas (z-20) */}
      <motion.div 
        style={{ opacity, y: yText }} 
        className="fixed inset-x-0 bottom-[8vh] text-center w-full px-6 flex flex-col items-center z-20 pointer-events-none"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm md:text-3xl text-white tracking-[0.4em] uppercase font-bold drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]"
        >
          sip <span className="mx-2 md:mx-6 text-[var(--color-accent-orange)] mix-blend-screen drop-shadow-md">|</span> 
          eat <span className="mx-2 md:mx-6 text-[var(--color-accent-green)] mix-blend-screen drop-shadow-md">|</span> 
          feel
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="mt-4 md:mt-8 text-[10px] md:text-sm text-white/90 tracking-[0.2em] uppercase font-bold max-w-sm md:max-w-md drop-shadow-md"
        >
          Freshness you can see.<br/>Taste you can feel.
        </motion.p>
      </motion.div>
    </>
  );
}
