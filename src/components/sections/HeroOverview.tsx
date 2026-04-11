"use client";

import { motion } from "framer-motion";

export const HeroOverview = () => {
  return (
    <section id="overview" className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-[var(--color-accent-orange)] opacity-20 blur-[120px] animate-blob" />
        <div className="absolute bottom-[20%] right-[20%] w-[30vw] h-[30vw] rounded-full bg-[var(--color-accent-pink)] opacity-20 blur-[100px] animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto mt-10 md:mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-black heading-clamp tracking-tighter mb-4"
        >
          FRUBOO
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex space-x-2 md:space-x-4 text-lg md:text-2xl font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-8 md:mb-12 text-gradient"
        >
          <span>sip</span>
          <span className="text-white/20">|</span>
          <span>eat</span>
          <span className="text-white/20">|</span>
          <span>feel</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-2 text-2xl md:text-4xl font-semibold tracking-tight text-white/90"
        >
          <p>Freshness you can see.</p>
          <p>Taste you can feel.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <a
            href="https://wa.me/918789359477?text=Hi%20FRUBOO!%20I'm%20interested%20in%20placing%20a%20bulk%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 md:px-10 py-4 bg-[var(--color-whatsapp)] text-white text-sm md:text-base font-bold tracking-widest uppercase rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_50px_rgba(37,211,102,0.6)] transition-all hover:scale-105 active:scale-95 z-50 text-center"
          >
            WhatsApp Us
          </a>
          <a
            href="#menu"
            className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold tracking-widest uppercase rounded-full hover:bg-white flex items-center justify-center hover:text-black transition-all hover:scale-105 active:scale-95 z-50 text-center"
          >
            View Menu
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-white/40">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};
