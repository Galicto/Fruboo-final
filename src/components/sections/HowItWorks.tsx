"use client";

import { motion } from "framer-motion";
import { MessageSquareText, Settings2, CheckCircle, Truck } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    { icon: <MessageSquareText size={24} />, title: "Contact", desc: "WhatsApp or call us with your event date and requirements." },
    { icon: <Settings2 size={24} />, title: "Customize", desc: "Choose from our menu or create your own custom layer combos." },
    { icon: <CheckCircle size={24} />, title: "Confirm", desc: "Place your bulk order minimum 24 hours in advance. Pay via UPI/Bank." },
    { icon: <Truck size={24} />, title: "Enjoy", desc: "Fresh drinks delivered right to your party or corporate event door." },
  ];

  return (
    <section id="how-it-works" className="relative py-32 px-6 w-full flex flex-col items-center bg-gradient-to-b from-[#0a0a0c] to-[#050505] overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
           <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-gradient-cool">How to Order</h2>
           <p className="text-xl text-white/60">Four simple steps to absolute freshness.</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line (Desktop) */}
          <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-white/10 z-0" />
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[var(--color-accent-green)] to-[var(--color-accent-purple)] z-0 origin-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10 w-full">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Number Badge */}
                <div className="w-20 h-20 rounded-full bg-[#050505] border border-white/20 flex items-center justify-center mb-8 relative group-hover:border-white/50 transition-colors shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[var(--color-accent-purple)] text-white text-sm font-bold flex items-center justify-center shadow-lg">
                    {i + 1}
                  </span>
                  <div className="text-white/80 group-hover:text-white transition-colors group-hover:scale-110 duration-300">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
