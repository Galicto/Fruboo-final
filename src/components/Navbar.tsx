"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const InstagramIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const navItems = [
  { name: "Overview", href: "/" },
  { name: "Freshness", href: "/freshness" },
  { name: "Ingredients", href: "/ingredients" },
  { name: "Process", href: "/process" },
  { name: "Founders", href: "/founders" },
  { name: "Bulk Orders", href: "/#bulk" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a hash link on the same page, intercept for smooth scroll
    if (href.startsWith("/#")) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const hash = href.substring(1);
      const element = document.querySelector(hash);
      
      // If we are not on the homepage, route to / first
      if (window.location.pathname !== "/") {
        window.location.href = href;
      } else if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = href; // fallback
      }
    } else {
      // Normal Next.js routing will handle it, just close menu
      setMobileMenuOpen(false);
    }
  };

  const whatsappUrl = "https://wa.me/918789359477?text=Hi%20FRUBOO!%20I'm%20interested%20in%20placing%20a%20bulk%20order.";

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
        className={`fixed top-0 inset-x-0 z-[90] transition-all duration-500 ${
          isScrolled || mobileMenuOpen
            ? "glass py-4 border-b border-white/5"
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#overview" onClick={(e) => handleScrollTo(e, "#overview")} className="text-2xl font-black tracking-[0.2em] text-white cursor-pointer select-none z-[100] hover:text-white/80 transition-colors focus:outline-none">
            FRUBOO
          </a>
          
          <div className="hidden lg:flex flex-1 justify-center items-center space-x-10 text-[11px] font-bold text-white/60 tracking-[0.2em] uppercase">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="transition-all hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] focus:outline-none"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-6 z-[100]">
            <a 
              href="https://instagram.com/Fruboo_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#FF006E] transition-colors focus:outline-none"
            >
              <InstagramIcon size={22} />
            </a>
            
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-whatsapp)] text-white px-8 py-3 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase hover:scale-105 transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] focus:outline-none"
            >
              WhatsApp Order
            </a>
          </div>

          <button 
            className="lg:hidden text-white z-[100] focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[80] bg-[#050505] flex flex-col pt-32 px-8"
          >
            <div className="absolute inset-0 z-[-1] opacity-30 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[var(--color-accent-purple)] via-transparent to-transparent" />

            <div className="flex flex-col space-y-8 flex-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className="text-4xl font-black tracking-tight text-white focus:outline-none block w-full border-b border-white/10 pb-4"
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navItems.length * 0.1, duration: 0.5 }}
                className="mt-auto pb-12 w-full pt-8 flex gap-4 flex-col"
              >
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--color-whatsapp)] text-white w-full py-4 rounded-xl text-sm font-bold tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(37,211,102,0.3)] block text-center focus:outline-none"
                >
                  WhatsApp Order
                </a>
                <a 
                  href="https://instagram.com/Fruboo_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 text-white w-full py-4 rounded-xl text-sm font-bold tracking-[0.2em] uppercase block text-center flex items-center justify-center gap-2 focus:outline-none"
                >
                  <InstagramIcon size={18} /> Follow Us
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
