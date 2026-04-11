"use client";

import { motion } from "framer-motion";

export const MenuPricing = () => {
  const combos = [
    { title: "Berry Bliss", desc: "Strawberry, Blueberry, Raspberry", icon: "🍓" },
    { title: "Tropical Paradise", desc: "Mango, Pineapple, Passion Fruit", icon: "🥭" },
    { title: "Green Detox", desc: "Kiwi, Green Apple, Mint", icon: "🥝" },
    { title: "Citrus Sunrise", desc: "Orange, Grapefruit, Lemon", icon: "🍊" },
    { title: "Melon Dream", desc: "Watermelon, Cantaloupe, Basil", icon: "🍉" },
    { title: "Pina Colada", desc: "Pineapple, Coconut, Banana", icon: "🍍" },
  ];

  return (
    <section id="menu" className="relative py-32 px-6 w-full flex flex-col items-center bg-[#0a0a0c] overflow-hidden border-t border-white/5">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Our Signature Combos</h2>
          <p className="text-xl text-white/60 font-medium">Prepared fresh. Delivered chilled. Minimum 10 bottles.</p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-20">
          {combos.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px -10px rgba(255,107,53,0.15)" }}
              className="glass p-8 rounded-3xl flex flex-col items-start text-left group relative overflow-hidden transition-all duration-300 border border-white/10 hover:border-white/20"
            >
              <div className="absolute -right-6 -top-6 text-[120px] opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none select-none">
                {item.icon}
              </div>
              
              <span className="text-4xl mb-6 block drop-shadow-lg group-hover:scale-110 transition-transform">{item.icon}</span>
              <h3 className="text-2xl font-bold tracking-tight mb-2 relative z-10">{item.title}</h3>
              <p className="text-white/60 mb-6 text-sm flex-1 relative z-10">{item.desc}</p>
              
              <div className="w-full flex items-center justify-between border-t border-white/10 pt-4 mt-auto relative z-10">
                <span className="text-sm font-semibold tracking-widest uppercase">Starting</span>
                <span className="text-xl font-bold text-[var(--color-accent-orange)]">₹150</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bulk Pricing Tier Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-3xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[var(--color-accent-pink)] opacity-10 blur-[100px] pointer-events-none" />
          
          <h3 className="text-2xl font-black mb-8 tracking-wide">BULK TIER PRICING</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <span className="text-white/50 text-sm font-bold tracking-widest uppercase mb-2">10 - 25 Bottles</span>
              <span className="text-3xl font-bold">₹150 <span className="text-sm text-white/40">/each</span></span>
            </div>
            <div className="flex flex-col">
              <span className="text-white/50 text-sm font-bold tracking-widest uppercase mb-2">26 - 50 Bottles</span>
              <span className="text-3xl font-bold">₹140 <span className="text-sm text-white/40">/each</span></span>
            </div>
            <div className="flex flex-col">
              <span className="text-[var(--color-accent-orange)] text-sm font-bold tracking-widest uppercase mb-2">50+ Bottles</span>
              <span className="text-3xl font-bold text-gradient">₹130 <span className="text-sm text-white/40">/each</span></span>
            </div>
          </div>
        </motion.div>

        <a
          href="https://wa.me/918789359477?text=Hi%20FRUBOO!%20I%20want%20to%20customize%20a%20bulk%20order."
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 glass border border-white/20 text-white text-sm font-black tracking-[0.2em] uppercase rounded-full hover:bg-white hover:text-black transition-all hover:scale-105"
        >
          Custom Order via WhatsApp
        </a>
      </div>
    </section>
  );
};
