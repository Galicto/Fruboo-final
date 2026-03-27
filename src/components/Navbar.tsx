"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Overview", href: "/" },
  { name: "Freshness", href: "/freshness" },
  { name: "Ingredients", href: "/ingredients" },
  { name: "Process", href: "/process" },
  { name: "Founders", href: "/founders" },
  { name: "Buy", href: "/buy" },
  { name: "Contact Us", href: "mailto:frubo.work@gmail.com" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="text-xl md:text-2xl font-black tracking-[0.3em] text-white cursor-pointer select-none">
          FRUBOO
        </Link>
        
        <div className="hidden md:flex items-center space-x-10 text-xs font-semibold text-white/50 tracking-[0.2em] uppercase">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors cursor-pointer ${
                  isActive ? "text-white font-bold drop-shadow-md" : "hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <Link 
          href="/buy" 
          className="bg-white text-black px-8 py-3 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.15)]"
        >
          Order Now
        </Link>
      </div>
    </motion.nav>
  );
}
