"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Star } from "lucide-react";

export const TrustBadges = () => {
  const badges = [
    { icon: <CheckCircle2 size={48} />, label: "100% Fresh", value: "Real Fruit" },
    { icon: <ShieldCheck size={48} />, label: "No Preservatives", value: "All Natural" },
    { icon: <Star size={48} />, label: "Handcrafted", value: "Premium" },
  ];

  return (
    <section className="relative py-24 px-6 w-full flex items-center justify-center bg-gradient-to-r from-[var(--color-accent-orange)]/10 via-[var(--color-accent-pink)]/10 to-[var(--color-accent-purple)]/10 border-y border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 w-full">
        {badges.map((badge, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center group cursor-default"
          >
            <div className="mb-4 text-white/50 group-hover:text-white group-hover:scale-110 transition-all duration-300">
              {badge.icon}
            </div>
            <h4 className="text-2xl font-black">{badge.label}</h4>
            <p className="text-sm font-bold tracking-widest text-[var(--color-accent-orange)] uppercase mt-1">{badge.value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
