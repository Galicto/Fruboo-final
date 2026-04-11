"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export const CustomerReviews = () => {
  const reviews = [
    { name: "Rekha M.", area: "Banjara Hills", text: "Ordered 50 bottles for my daughter's birthday. Guests loved the mango layers!" },
    { name: "Suresh P.", area: "Hitech City", text: "The team was so helpful. The aesthetic of the bottles matched our corporate event perfectly." },
    { name: "Anita K.", area: "Jubilee Hills", text: "Best fresh juice I've ever had. Not too sweet, just perfect fruit goodness." },
    { name: "Vikram R.", area: "Gachibowli", text: "Quick delivery and the packaging is extremely premium. Will order again!" },
  ];

  return (
    <section id="reviews" className="relative py-32 w-full flex flex-col items-center bg-[#050505] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
           <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-gradient">What They Say</h2>
           <div className="flex items-center justify-center gap-2 text-xl font-bold">
             <div className="flex text-[#FFD700]">
               {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
             </div>
             <span>4.9/5</span>
             <span className="text-white/40 font-normal">| 100+ Happy Customers</span>
           </div>
        </motion.div>

        {/* Carousel / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-6 text-white/10 w-12 h-12" />
              <div className="flex text-[#FFD700] mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="text-white/80 font-medium leading-relaxed mb-8 italic">"{review.text}"</p>
              
              <div className="border-t border-white/10 pt-4 mt-auto">
                <p className="font-bold tracking-tight">{review.name}</p>
                <p className="text-white/50 text-[10px] uppercase tracking-widest">{review.area}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
