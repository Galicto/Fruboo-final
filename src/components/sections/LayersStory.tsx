"use client";

import { motion } from "framer-motion";
import { Droplet, Leaf, Sparkles } from "lucide-react";

export const LayersStory = () => {
  const cards = [
    { icon: <Leaf className="w-8 h-8 text-[var(--color-accent-green)]" />, title: "Handpicked", desc: "Fresh fruits" },
    { icon: <Droplet className="w-8 h-8 text-[#00E5FF]" />, title: "Your choice", desc: "of refreshing base" },
    { icon: <Sparkles className="w-8 h-8 text-[#FFD700]" />, title: "Prepared fresh", desc: "Served clean" },
  ];

  return (
    <section className="relative py-16 md:py-32 px-4 md:px-6 w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-7xl font-black tracking-tighter text-center mb-12 md:mb-20"
        >
          Every layer <br/><span className="text-gradient">tells a story.</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full mb-16 md:mb-24">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-3xl p-8 flex flex-col items-center text-center group cursor-default transition-all duration-300 hover:bg-white/10"
            >
              <div className="mb-6 p-4 rounded-full bg-white/5 group-hover:scale-110 transition-transform duration-500">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
              <p className="text-white/60 font-medium tracking-wide uppercase text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Animated Bottle Visualization placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="w-full max-w-sm aspect-[1/1.5] relative rounded-[50px] border-4 border-white/10 overflow-hidden glass flex flex-col justify-end"
        >
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <span className="text-white/20 font-bold tracking-[0.3em] uppercase text-sm">[Animated Filling Vis]</span>
          </div>
          {/* Layers filling effect */}
          <motion.div 
            initial={{ height: "0%" }}
            whileInView={{ height: "25%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full bg-[var(--color-accent-pink)] opacity-80 backdrop-blur-md border-t border-white/20"
          />
          <motion.div 
            initial={{ height: "0%" }}
            whileInView={{ height: "35%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 1 }}
            className="w-full bg-[var(--color-accent-orange)] opacity-80 backdrop-blur-md border-t border-white/20"
          />
          <motion.div 
            initial={{ height: "0%" }}
            whileInView={{ height: "40%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 1.5 }}
            className="w-full bg-[#FFD700] opacity-80 backdrop-blur-md border-t border-white/20"
          />
        </motion.div>
      </div>
    </section>
  );
};
