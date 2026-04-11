"use client";

import { motion } from "framer-motion";

export const ValueProposition = () => {
  return (
    <section className="relative py-16 md:py-32 px-4 md:px-6 w-full flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] opacity-10 bg-[var(--color-accent-green)] rounded-full blur-[150px]" />
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 md:space-y-8"
        >
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-[1.1]">
            Real fruit.<br />
            Nothing hidden.
          </h2>
          
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-[var(--color-accent-orange)] to-transparent rounded-full" />
          
          <p className="text-lg md:text-3xl font-medium text-white/80 leading-relaxed max-w-lg">
            Every bottle is packed with freshly cut fruits and your choice of base.
          </p>
          
          <div className="flex flex-col gap-1 md:gap-2 pt-2 md:pt-4">
            <h3 className="text-2xl md:text-3xl font-bold text-gradient-cool">No artificial shortcuts.</h3>
            <h3 className="text-2xl md:text-3xl font-bold">Just real freshness.</h3>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden glass border border-white/10 hidden md:flex items-center justify-center p-8 text-center"
        >
          {/* Aesthetic placeholder for the Image Grid/Carousel */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-0" />
          <p className="font-bold text-white/40 tracking-[0.2em] relative z-10">
            [ Premium Fruit Shots ]
          </p>
        </motion.div>
      </div>
    </section>
  );
};
