"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";

const steps = [
  { step: "01", title: "Select", desc: "Only fresh fruits chosen daily by experts." },
  { step: "02", title: "Cut", desc: "Prepared in a clinically clean environment." },
  { step: "03", title: "Fill", desc: "Filled with your chosen base. Each bottle is customized based on your flavor preference." },
  { step: "04", title: "Seal", desc: "Locked instantly for maximum freshness." },
];

export default function ProcessPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white pb-32 selection:bg-white/20">
      <Navbar />

      <section className="relative px-5 pt-28 md:pt-48 pb-6 md:pb-10 max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter"
        >
          The <span className="text-[var(--color-accent-orange)]">Process</span>
        </motion.h1>
      </section>

      <section className="relative px-5 max-w-4xl mx-auto mt-12 md:mt-24">
        {/* Vertical line connector */}
        <div className="absolute left-[29px] md:left-[59px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/20 via-white/5 to-transparent z-0" />

        <div className="space-y-16 md:space-y-32">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-start gap-6 md:gap-24 z-10"
            >
              {/* Step Circle indicator */}
              <div className="relative shrink-0 w-10 h-10 md:w-20 md:h-20 bg-[#050505] border border-white/20 rounded-full flex items-center justify-center text-sm md:text-2xl font-mono text-white/50 backdrop-blur-md">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute inset-0 bg-white/5 rounded-full" 
                />
                {item.step}
              </div>

              <div className="pt-1 md:pt-4">
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-black tracking-tight mb-2 md:mb-4 uppercase text-white/90">
                  {item.title}
                </h2>
                <p className="text-base sm:text-xl md:text-3xl text-white/50 font-light leading-relaxed max-w-lg">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
