"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function Reassembly({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const opacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const y = useTransform(scrollYProgress, [0.85, 1], [100, 0]);

  return (
    <motion.section
      style={{ opacity }}
      className="fixed inset-0 flex items-end justify-center z-20 pointer-events-none pb-24 px-6 relative"
    >
      {/* Heavy bottom gradient to ensure CTA is super legible */}
      <div className="absolute inset-x-0 bottom-0 h-[60vh] bg-gradient-to-t from-black via-black/80 to-transparent -z-10 pointer-events-none" />

      <motion.div style={{ y }} className="text-center pointer-events-auto z-10">
        <h2 className="text-6xl md:text-9xl font-bold text-white tracking-tighter mb-4 drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
          Freshness, redefined.
        </h2>
        <p className="text-xl md:text-3xl text-white/90 font-light mb-12 tracking-[0.2em] uppercase drop-shadow-md">
          FRUBOO &mdash; sip | eat | feel
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="bg-white text-black px-12 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            Order Now
          </button>
          <button className="bg-black/40 backdrop-blur-md text-white border border-white/30 px-12 py-5 rounded-full text-xl font-medium hover:bg-white/10 hover:border-white/60 transition-all shadow-xl">
            Find us near you
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
}
