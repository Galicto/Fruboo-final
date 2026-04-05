"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { FloatingFruits } from "@/components/3d/FloatingFruits";

export default function FreshnessPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-[var(--color-accent-green)] selection:text-white pb-32 relative z-0">
      <Navbar />
      
      {/* 3D Immersive Environment Background */}
      <FloatingFruits />
      
      {/* Hero Section: Minimal Text, Max Impact */}
      <section className="relative min-h-screen w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-6 overflow-hidden pt-32 pb-16 md:pt-20 md:pb-0 pointer-events-none">
        {/* Subtle radial light behind text for contrast */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-black/40 blur-[100px] -z-10 rounded-full" />
        
        <div className="relative z-20 flex flex-col items-center text-center space-y-6 md:space-y-10">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] drop-shadow-2xl"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/30">RAW.</span><br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20">ALIVE.</span><br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[var(--color-accent-green)] to-[#2d5a1e] drop-shadow-[0_0_30px_rgba(107,191,89,0.3)]">REAL.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-4xl text-white font-medium tracking-[0.2em] uppercase max-w-3xl drop-shadow-lg"
          >
            Zero shortcuts. Pure hydration.
          </motion.p>
        </div>
      </section>

      {/* Content Section: Punchy Callouts */}
      <section className="relative px-6 py-24 md:py-48 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-black/40 backdrop-blur-3xl p-10 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl pointer-events-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-10 text-white drop-shadow-md">
            Cut daily.<br/><span className="text-[var(--color-accent-orange)]">Never settled.</span>
          </h2>

          <div className="space-y-12">
            {[
              { title: "Sourced Direct", style: "border-[var(--color-accent-orange)]" },
              { title: "No Artificial Colors", style: "border-white/20" },
              { title: "Clinical Hygiene", style: "border-[var(--color-accent-aqua)]" }
            ].map((point, i) => (
              <motion.div 
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className={`flex items-start gap-6 border-l-4 ${point.style} pl-6`}
              >
                <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">{point.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Animated Nutritional Typography Block (Kept for visual density and contrast) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] bg-black/80 backdrop-blur-xl rounded-[3rem] border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl pointer-events-auto"
        >
          {/* Animated Background Marquees */}
          <div className="absolute inset-0 z-0 flex flex-col justify-evenly opacity-30 -rotate-12 scale-150 pointer-events-none select-none">
            {/* Fruit Marquee */}
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="whitespace-nowrap flex gap-8 text-5xl md:text-7xl font-black tracking-tighter text-transparent"
              style={{ WebkitTextStroke: "2px rgba(255,255,255,0.7)" }}
            >
               FRESH CITRUS • WATERMELON • KIWI • DRAGON FRUIT • COCONUT WATER • FRESH CITRUS • WATERMELON • KIWI • DRAGON FRUIT • COCONUT WATER •
            </motion.div>
            
            {/* Health/Nutrition Marquee */}
            <motion.div
              animate={{ x: [-1000, 0] }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="whitespace-nowrap flex gap-8 text-5xl md:text-7xl font-black tracking-tighter text-[var(--color-accent-green)]"
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

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,black_90%)] z-10 pointer-events-none" />

          {/* Center Badge */}
          <div className="relative z-20 text-center p-12 backdrop-blur-2xl bg-black/60 rounded-full border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.9)]">
            <h4 className="text-5xl md:text-6xl font-black tracking-[0.2em] text-[var(--color-accent-green)] uppercase drop-shadow-[0_0_30px_rgba(107,191,89,0.7)] hover:scale-110 transition-transform duration-500 cursor-default">
              100%
            </h4>
            <p className="text-xs md:text-sm font-bold tracking-[0.3em] text-white uppercase mt-4">
              Real Impact
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
