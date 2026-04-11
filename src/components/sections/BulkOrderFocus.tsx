"use client";

import { motion } from "framer-motion";
import { PartyPopper, Briefcase, Cake, CheckCircle2 } from "lucide-react";

export const BulkOrderFocus = () => {
  const events = [
    { icon: <PartyPopper size={32} />, title: "Parties", desc: "Weddings" },
    { icon: <Briefcase size={32} />, title: "Corporate", desc: "Events" },
    { icon: <Cake size={32} />, title: "Birthday", desc: "Bashes" },
  ];

  const rules = [
    "Minimum 10 bottles",
    "24 hours advance notice",
    "Hyderabad delivery",
    "Custom flavor combinations"
  ];

  return (
    <section className="relative py-16 md:py-32 px-4 md:px-6 w-full flex flex-col items-center bg-[#050505] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-gradient-radial from-[var(--color-accent-purple)]/20 to-transparent opacity-50 blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4"
        >
          <h2 className="text-[10px] tracking-[0.4em] font-bold text-[var(--color-accent-orange)] uppercase">Perfect for your events</h2>
          <h3 className="text-3xl md:text-6xl font-black tracking-tighter leading-tight">
            Planning a party? Corporate event?<br />
            We've got you covered.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full mb-10 md:mb-16">
          {events.map((ev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, rotateX: 30 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="glass p-8 rounded-3xl flex flex-col items-center gap-4 group perspective-1000 cursor-default"
            >
              <div className="text-[var(--color-accent-orange)] group-hover:scale-110 transition-transform duration-300">
                {ev.icon}
              </div>
              <p className="text-2xl font-bold tracking-tight">{ev.title}</p>
              <p className="text-white/50 text-sm tracking-widest uppercase">{ev.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 w-full max-w-2xl flex flex-col items-start text-left mx-auto mb-10 md:mb-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 w-full">
            {rules.map((rule, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + (i * 0.1) }}
                className="flex items-center gap-3 text-lg font-medium"
              >
                <CheckCircle2 className="text-[var(--color-accent-green)] w-6 h-6 shrink-0" />
                <span>{rule}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.a
          href="https://wa.me/918789359477?text=Hi%20FRUBOO!%20I'm%20interested%20in%20a%20bulk%20order%20for%20an%20event."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="px-12 py-5 bg-[var(--color-whatsapp)] text-white text-sm font-black tracking-[0.2em] uppercase rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_50px_rgba(37,211,102,0.6)] transition-all z-10"
        >
          Request Bulk Order Quote
        </motion.a>
      </div>
    </section>
  );
};
