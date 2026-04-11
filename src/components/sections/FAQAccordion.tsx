"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "What's the minimum order quantity?", a: "To maintain our bulk-pricing model and ensure the highest quality of fresh ingredients, our absolute minimum is 10 bottles per order." },
  { q: "How much advance notice is needed?", a: "We require exactly 24 hours of advance notice. This allows us to source the freshest fruits from our vendors on the day of your event." },
  { q: "Can I customize flavors?", a: "Yes! While we have Signature Combos, you can mix and match fruits and bases for large events. Just message us on WhatsApp with your request." },
  { q: "Do you deliver across all of Hyderabad?", a: "Absolutely. We cover Banjara Hills, Jubilee Hills, Gachibowli, Hitech City, Secunderabad, and more. Delivery fees may apply based on exact distance." },
  { q: "What about payment options?", a: "We accept all major UPI apps (GPay, PhonePe, Paytm) and direct bank transfers. A 50% advance is required to confirm bulk orders." },
];

export const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-32 px-6 w-full flex flex-col items-center bg-[#050505] overflow-hidden">
      <div className="max-w-3xl mx-auto w-full relative z-10 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
           <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-gradient">FAQ</h2>
           <p className="text-xl text-white/60">Frequently Asked Questions</p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-full glass rounded-2xl overflow-hidden border border-white/5 transition-colors hover:border-white/20"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-accent-orange)]"
                >
                  <span className="text-lg md:text-xl font-bold pr-8">{faq.q}</span>
                  <div className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-90 text-[var(--color-accent-orange)]" : ""}`}>
                    {isOpen ? <Minus /> : <Plus />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 md:px-8 pb-8 text-white/70 leading-relaxed font-medium">
                        <div className="w-12 h-[1px] bg-gradient-to-r from-[var(--color-accent-orange)] to-transparent mb-6" />
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
