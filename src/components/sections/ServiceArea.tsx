"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Sprout, Check } from "lucide-react";

export const ServiceArea = () => {
  const areas = ["Banjara Hills", "Gachibowli", "Jubilee Hills", "Kondapur", "Hitech City", "Madhapur", "Secunderabad", "+ more"];

  return (
    <section className="relative py-32 px-6 w-full flex items-center justify-center bg-[#0a0a0c] overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[50%] h-[50%] bg-[var(--color-accent-purple)] opacity-10 blur-[150px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full relative z-10">
        
        {/* Left: Interactive/Animated Map Idea */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-square w-full max-w-md mx-auto glass rounded-full overflow-hidden border border-white/10 flex items-center justify-center p-8 shadow-[0_0_50px_rgba(118,75,162,0.15)]"
        >
          <div className="absolute inset-0 border-2 border-white/5 rounded-full m-4 border-dashed animate-[spin_60s_linear_infinite]" />
          <div className="absolute inset-0 border border-white/5 rounded-full m-12 animate-[spin_40s_linear_infinite_reverse]" />
          
          <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <MapPin className="w-20 h-20 text-[var(--color-accent-orange)] drop-shadow-[0_0_15px_rgba(255,107,53,0.5)] mb-4" />
            </motion.div>
            <span className="font-bold text-2xl tracking-[0.2em] uppercase">Hyderabad</span>
            <span className="text-[10px] tracking-[0.4em] text-[var(--color-accent-green)] mt-2">100% COVERAGE</span>
          </div>
        </motion.div>

        {/* Right: Info */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-gradient-cool">We Deliver Across Hyderabad</h2>
          
          <div className="grid grid-cols-2 gap-4 my-8">
            {areas.map((area, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 text-white/80 font-medium"
              >
                <Check className="w-5 h-5 text-[var(--color-accent-green)] shrink-0" />
                <span>{area}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col gap-6 pt-8 border-t border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0">
                <MapPin className="text-white w-5 h-5" />
              </div>
              <div>
                <p className="font-bold">Operating strictly in Hyderabad</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0">
                <Clock className="text-[var(--color-accent-orange)] w-5 h-5" />
              </div>
              <div>
                <p className="font-bold">24-hour advance notice required</p>
                <p className="text-sm text-white/50">For 10+ bottle bulk preparation</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0">
                <Sprout className="text-[var(--color-accent-green)] w-5 h-5" />
              </div>
              <div>
                <p className="font-bold">Freshly made per order</p>
                <p className="text-sm text-white/50">No warehousing, no preservatives</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
