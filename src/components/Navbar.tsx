"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (mobileMenuOpen) return; // Keep visible if mobile menu is open

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
    <>
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="text-xl md:text-2xl font-black tracking-[0.3em] text-white cursor-pointer select-none z-[60]">
            FRUBOO
          </Link>
          
          <div className="hidden md:flex flex-1 justify-center items-center space-x-10 text-xs font-semibold text-white/50 tracking-[0.2em] uppercase">
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

          <div className="hidden md:block">
            <Link 
              href="/buy" 
              className="bg-white text-black px-8 py-3 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.15)] z-[60]"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button 
            className="md:hidden text-white z-[60]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col items-center space-y-8 text-sm font-semibold tracking-[0.2em] uppercase">
              {navItems.map((item, i) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`transition-colors cursor-pointer text-xl ${
                        isActive ? "text-white font-black drop-shadow-md" : "text-white/60 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navItems.length * 0.05, duration: 0.4 }}
                className="pt-8"
              >
                <Link 
                  href="/buy" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-white text-black px-10 py-4 rounded-full text-sm font-bold tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(255,255,255,0.15)] block text-center"
                >
                  Order Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
