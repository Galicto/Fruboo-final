import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const InstagramIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] pt-24 pb-12 px-6 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 flex flex-col pr-0 md:pr-12">
            <h2 className="text-3xl font-black tracking-[0.3em] mb-4">FRUBOO</h2>
            <p className="text-white/60 font-medium tracking-[0.2em] uppercase text-sm mb-8">sip | eat | feel</p>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-8">
              Freshness redefined for your bulk events and parties. Handpicked layers of fruit and pure flavor.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 inline-block w-max">
              <p className="text-[var(--color-accent-orange)] font-bold text-sm tracking-widest uppercase mb-1">Bulk Orders Only</p>
              <p className="text-white/80 text-xs tracking-wider">Min 10 bottles | 24hr Notice</p>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold tracking-widest uppercase mb-6 text-white/80">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="#overview" className="text-white/50 hover:text-white transition-colors text-sm font-medium tracking-wide">Overview</Link></li>
              <li><Link href="#menu" className="text-white/50 hover:text-white transition-colors text-sm font-medium tracking-wide">Menu & Pricing</Link></li>
              <li><Link href="#how-it-works" className="text-white/50 hover:text-white transition-colors text-sm font-medium tracking-wide">How It Works</Link></li>
              <li><Link href="#reviews" className="text-white/50 hover:text-white transition-colors text-sm font-medium tracking-wide">Reviews</Link></li>
              <li><Link href="#faq" className="text-white/50 hover:text-white transition-colors text-sm font-medium tracking-wide">FAQ</Link></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold tracking-widest uppercase mb-6 text-white/80">Contact</h3>
            <ul className="space-y-4 mb-8">
              <li>
                <a href="tel:+918789359477" className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm font-medium tracking-wide">
                  <Phone size={16} /> 8789359477
                </a>
              </li>
              <li>
                <a href="mailto:fruboo.work@gmail.com" className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm font-medium tracking-wide line-clamp-1">
                  <Mail size={16} /> fruboo.work@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/50 text-sm font-medium tracking-wide">
                  <MapPin size={16} className="shrink-0 mt-1" />
                  <span>Serving Hyderabad Area Only</span>
                </div>
              </li>
            </ul>

            <h3 className="font-bold tracking-widest uppercase mb-4 text-white/80">Social</h3>
            <a href="https://instagram.com/Fruboo_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 hover:text-[#FF006E] transition-colors w-max">
              <InstagramIcon size={20} /> 
              <span className="text-sm font-bold tracking-wider">@Fruboo_</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium tracking-widest text-white/40 uppercase">
          <p>© {new Date().getFullYear()} FRUBOO. ALL RIGHTS RESERVED.</p>
          <p>MADE WITH 🍓 IN HYDERABAD</p>
        </div>
      </div>
    </footer>
  );
};
