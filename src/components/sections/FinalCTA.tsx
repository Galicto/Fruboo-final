"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section id="contact" className="relative py-40 px-6 w-full flex flex-col items-center bg-[#000] overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[50vh] bg-gradient-to-r from-[var(--color-accent-orange)] via-[var(--color-accent-pink)] to-[var(--color-accent-purple)] opacity-20 blur-[120px] animate-pulse" />
        
        {/* Particles placeholder */}
        <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "30px 30px" }} />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-bold text-white/70 mb-6"
        >
          Ready to make your event unforgettable?
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-16 leading-[0.9]"
        >
          LET'S CREATE<br />
          <span className="text-gradient">SOMETHING FRESH</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mb-16"
        >
          <a
            href="https://wa.me/918789359477?text=Hi%20FRUBOO!%20I'm%20interested%20in%20placing%20a%20bulk%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-6 bg-[var(--color-whatsapp)] text-white font-black tracking-widest text-lg uppercase rounded-full shadow-[0_0_50px_rgba(37,211,102,0.4)] hover:shadow-[0_0_80px_rgba(37,211,102,0.6)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 w-full sm:w-auto"
          >
            <MessageCircle size={24} /> WhatsApp Us
          </a>
          <a
            href="tel:+918789359477"
            className="px-12 py-6 glass border border-white/20 text-white font-black tracking-widest text-lg uppercase rounded-full hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 w-full sm:w-auto"
          >
            <Phone size={24} /> Call Now
          </a>
        </motion.div>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          href="mailto:fruboo.work@gmail.com"
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-lg tracking-wider font-medium"
        >
          <Mail size={20} /> fruboo.work@gmail.com
        </motion.a>
      </div>
    </section>
  );
};
