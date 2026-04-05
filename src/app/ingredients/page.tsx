"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";

const ingredients = [
  { name: "Dragon Fruit", benefit: "Antioxidant-rich", color: "from-pink-500/20 to-rose-600/5", accent: "text-pink-400" },
  { name: "Citrus", benefit: "Vitamin boost", color: "from-orange-500/20 to-yellow-500/5", accent: "text-orange-400" },
  { name: "Watermelon", benefit: "Hydration", color: "from-red-500/20 to-red-600/5", accent: "text-red-400" },
  { name: "Kiwi", benefit: "Natural tang", color: "from-green-500/20 to-emerald-600/5", accent: "text-green-400" },
];

const bases = [
  { name: "Coconut Water", desc: "Light, hydrating, natural", border: "border-cyan-500/30" },
  { name: "Citrus Juice", desc: "Tangy, energetic", border: "border-orange-500/30" },
  { name: "Watermelon Juice", desc: "Refreshing & sweet", border: "border-red-500/30" },
  { name: "Lemon-Mint", desc: "Cooling & crisp", border: "border-emerald-500/30" },
  { name: "Seasonal Blends", desc: "Limited, unique flavors", border: "border-purple-500/30" },
];

export default function IngredientsPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white pb-32 overflow-hidden selection:bg-white/20">
      <Navbar />

      <section className="relative px-5 pt-28 md:pt-48 pb-12 md:pb-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-4 md:mb-6 drop-shadow-2xl">
            What's inside <span className="text-white/40 italic">matters.</span>
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-white/60 font-light tracking-wide max-w-2xl mx-auto">
            No secrets, no hidden formulas. Just the purest elements nature provides.
          </p>
        </motion.div>
      </section>

      <section className="relative px-5 max-w-5xl mx-auto mt-6 md:mt-10 space-y-5 md:space-y-12">
        {ingredients.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`relative p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-r ${item.color} border border-white/5 backdrop-blur-3xl overflow-hidden group hover:border-white/10 transition-colors duration-500`}
          >
            <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4">
              <h2 className={`text-3xl md:text-6xl font-bold tracking-tight ${item.accent} drop-shadow-lg`}>
                {item.name}
              </h2>
              <p className="text-base md:text-3xl text-white/70 font-light tracking-wider uppercase">
                {item.benefit}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* NEW SECTION: CUSTOMIZATION BASES */}
      <section className="relative px-5 pt-20 md:pt-40 pb-12 md:pb-20 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-4 md:mb-6 drop-shadow-2xl text-center">
            Built around <span className="text-white/40 italic">your taste.</span>
          </h2>
          <p className="text-base md:text-xl lg:text-2xl text-white/60 font-light tracking-wide max-w-3xl mx-auto text-center mb-10 md:mb-16">
            Choose from a variety of natural bases to perfectly match your preference:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {bases.map((base, i) => (
              <motion.div
                key={base.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`p-6 md:p-8 rounded-2xl md:rounded-3xl bg-black/40 border ${base.border} backdrop-blur-lg hover:bg-white/5 transition-all duration-300`}
              >
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-1.5">{base.name}</h3>
                <p className="text-white/60 font-light text-base md:text-lg">{base.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
