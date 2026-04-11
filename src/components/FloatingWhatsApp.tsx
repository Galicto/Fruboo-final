"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Delay appearance
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const message = "Hi FRUBOO! I'm interested in placing a bulk order.\n\nEvent Type: \nDate Needed: \nNumber of Bottles: \nArea: \n\nLooking forward to hearing from you!";
  const whatsappUrl = `https://wa.me/918789359477?text=${encodeURIComponent(message)}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          className="fixed bottom-6 right-6 z-[100] flex items-center justify-end group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute right-16 px-4 py-2 bg-white text-black font-medium text-sm rounded-xl mr-2 shadow-xl whitespace-nowrap pointer-events-none"
              >
                Chat with us
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl relative"
          >
            <motion.div
              animate={{ 
                boxShadow: ["0 0 0 0 rgba(37, 211, 102, 0.7)", "0 0 0 20px rgba(37, 211, 102, 0)"]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 rounded-full"
            />
            <MessageCircle size={28} className="relative z-10" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
