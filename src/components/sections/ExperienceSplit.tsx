"use client";

import { motion } from "framer-motion";

export const ExperienceSplit = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col md:flex-row overflow-hidden border-y border-white/5 bg-[#0a0a0c]">
        {/* Left Side: Typography */}
        <div className="flex-1 flex flex-col justify-center p-6 sm:p-8 md:p-20 relative z-10 w-full md:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.1] text-gradient-cool"
          >
            Not just a drink.
          </motion.h2>

          <div className="space-y-4 mb-16 overflow-hidden">
            <motion.h3 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter"
            >
              Drink it.
            </motion.h3>
            <motion.h3 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter"
            >
              Bite it.
            </motion.h3>
            <motion.h3 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-gradient"
            >
              Feel it.
            </motion.h3>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl text-white/70 max-w-sm mb-12"
          >
            A completely new way to enjoy freshness.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.2 }}
            className="inline-block"
          >
             <h4 className="text-3xl font-bold tracking-tighter">
                Freshness, redefined.<br/>
                FRUBOO — sip | eat | feel
             </h4>
          </motion.div>
        </div>

        {/* Right Side: Visual */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="flex-1 min-h-[50vh] relative bg-[#111] overflow-hidden"
        >
          {/* Aesthetic Lifestyle placeholder */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a0a0c] z-10" />
          <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-30">
             <p className="font-bold tracking-[0.3em]">[ Lifestyle Video / Image ]</p>
          </div>
          <div className="absolute inset-0 bg-black/20 z-[5]" />
        </motion.div>
    </section>
  );
};
