"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";

export default function FreshnessPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-[var(--color-accent-green)] selection:text-white pb-32">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center px-6 overflow-hidden pt-20">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent-green)]/10 rounded-full blur-[150px] -z-10 opacity-70" />

        <div className="relative z-20 flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 space-y-8">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[1] drop-shadow-2xl"
          >
            Freshness,<br/>your <span className="text-[var(--color-accent-green)]">way.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-white/70 font-light max-w-xl md:pr-10 tracking-wide leading-relaxed"
          >
            Every FRUBOO bottle is prepared fresh with real fruits and your choice of base &mdash; from natural coconut water to refreshing fruit blends.
          </motion.p>
        </div>

        {/* Cinematic Floating Product */}
        <div className="relative z-10 w-full md:w-1/2 h-[50vh] md:h-[80vh] mt-12 md:mt-0 flex flex-col items-center justify-end md:justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[80%] flex flex-col items-center justify-center"
          >
            {/* Elegant Hand & Bottle Image (Organic Animation & Masking) */}
            <motion.div 
              animate={{ y: [-10, 10], rotate: [-1, 1] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="relative w-full h-full flex justify-center items-center z-10"
              style={{ filter: 'contrast(1.1) saturate(1.1) brightness(1.02)' }}
            >
              <img 
                src="/images/hand_hd.png" 
                alt="Hand holding fresh Fruboo bottle"
                className="w-auto h-full max-h-[70vh] object-contain mix-blend-lighten opacity-100 transform-gpu [mask-image:linear-gradient(to_bottom,black_75%,transparent_95%)]"
              />
            </motion.div>

            {/* Subtle soft shadow grounding it in space */}
            <div className="absolute bottom-[5%] w-[40%] h-[20px] bg-[var(--color-accent-green)]/10 blur-2xl rounded-full mix-blend-screen" />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative px-6 py-24 md:py-48 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-12">
            Prepared daily.<br/>Served <span className="text-[var(--color-accent-orange)]">fresh.</span>
          </h2>

          <div className="space-y-10">
            {[
              { title: "Fresh Fruit Cutting", desc: "Hand-selected produce sliced precisely at the source." },
              { title: "No Artificial Flavors", desc: "What you taste is exactly what nature intended." },
              { title: "Hygienic Preparation", desc: "Sealed in clinical grade environments to preserve hydration." }
            ].map((point, i) => (
              <motion.div 
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="flex items-start gap-6 border-l-2 border-white/10 pl-6 hover:border-[var(--color-accent-green)] transition-colors duration-500"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{point.title}</h3>
                  <p className="text-white/50 text-base md:text-lg font-light leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Animated Nutritional & Fruit Typography Block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] bg-black rounded-[3rem] border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl"
        >
          {/* Animated Background Marquees */}
          <div className="absolute inset-0 z-0 flex flex-col justify-evenly opacity-20 -rotate-12 scale-150 pointer-events-none select-none">
            {/* Fruit Marquee */}
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="whitespace-nowrap flex gap-8 text-5xl md:text-7xl font-black tracking-tighter text-transparent drop-shadow-md"
              style={{ WebkitTextStroke: "2px rgba(255,255,255,0.7)" }}
            >
               FRESH CITRUS • WATERMELON • KIWI • DRAGON FRUIT • COCONUT WATER • FRESH CITRUS • WATERMELON • KIWI • DRAGON FRUIT • COCONUT WATER •
            </motion.div>
            
            {/* Health/Nutrition Marquee */}
            <motion.div
              animate={{ x: [-1000, 0] }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="whitespace-nowrap flex gap-8 text-5xl md:text-7xl font-black tracking-tighter text-[var(--color-accent-green)] drop-shadow-xl"
            >
               VITAMIN C • ANTIOXIDANTS • ELECTROLYTES • ZERO ADDED SUGAR • VITAMIN C • ANTIOXIDANTS • ELECTROLYTES • ZERO ADDED SUGAR •
            </motion.div>

            {/* Health/Nutrition Marquee 2 */}
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="whitespace-nowrap flex gap-8 text-5xl md:text-7xl font-black tracking-tighter text-white/50"
            >
               100% NATURAL • COLD PRESSED • RAW HYDRATION • FIBER • 100% NATURAL • COLD PRESSED • RAW HYDRATION • FIBER •
            </motion.div>
          </div>

          {/* Vignette mask to fade the edges of the marquees beautifully */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,black_80%)] z-10 pointer-events-none" />

          {/* Center Badge */}
          <div className="relative z-20 text-center p-12 backdrop-blur-xl bg-black/60 rounded-[2.5rem] md:rounded-full border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.9)]">
            <h4 className="text-4xl md:text-5xl font-black tracking-[0.2em] text-[var(--color-accent-green)] uppercase drop-shadow-[0_0_15px_rgba(107,191,89,0.5)]">
              100%
            </h4>
            <p className="text-xs md:text-sm font-bold tracking-[0.3em] text-white/90 uppercase mt-4">
              Real Ingredients
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
