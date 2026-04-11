"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const InstagramIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

// Static posts — these use your uploaded product images.
// When NEXT_PUBLIC_INSTAGRAM_TOKEN is set in .env.local, live posts will override these.
const STATIC_POSTS = [
  {
    id: "1",
    src: "/images/ig-post-1.jpg",
    alt: "Fruboo flavour lineup — 4 cans top-down, fresh fruit visible through lids",
    caption: "The Ultimate Fruboo Lineup 🍹 Your favorite fresh flavors, ready when you are. #FrubooLife",
    href: "https://instagram.com/Fruboo_",
    objectPosition: "center center",
  },
  {
    id: "2",
    src: "/images/ig-post-2.jpg",
    alt: "Fruboo Berry Blast — chilled red berry can on steel kitchen counter next to ice",
    caption: "Chilled to Perfection 🍓 Sip on the freshness of true berries. #SipEatFeel",
    href: "https://instagram.com/Fruboo_",
    objectPosition: "center center",
  },
  {
    id: "3",
    src: "/images/ig-post-3.jpg",
    alt: "Fruboo Kiwi Passion — yellow-green can held outdoors in warm light",
    caption: "Sunshine & Kiwi Passion 🥝 Summer vibes packed in every can. #FreshnessYouCanSee",
    href: "https://instagram.com/Fruboo_",
    objectPosition: "center 30%",
  },
];

interface LivePost {
  id: string;
  caption: string;
  media_url: string;
  media_type: string;
  permalink: string;
}

export const InstagramFeed = () => {
  const [livePosts, setLivePosts] = useState<LivePost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  // Use only static posts as requested
  const displayPosts = STATIC_POSTS;

  return (
    <section className="relative py-16 md:py-32 px-6 w-full flex items-center justify-center bg-white text-black overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-4">Follow Us on Instagram</h2>
          <a
            href="https://instagram.com/Fruboo_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bold bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-transparent bg-clip-text hover:opacity-80 transition-opacity"
          >
            @Fruboo_
          </a>
        </motion.div>

        {/* Grid / Mobile Carousel */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-3 gap-5 w-full mb-16 pb-4 md:pb-0">
          {isLoading ? (
            [1, 2, 3].map((_, i) => (
              <div key={i} className="w-[85vw] md:w-full shrink-0 snap-center aspect-square bg-gray-100 rounded-2xl animate-pulse" />
            ))
          ) : (
            // Static product images
            displayPosts.map((post, i) => (
              <motion.a
                key={post.id}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="w-[85vw] md:w-auto shrink-0 snap-center aspect-square rounded-2xl overflow-hidden relative group block shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Next.js Image for auto-optimization */}
                <div className="relative w-full h-full">
                  <Image
                    src={post.src}
                    alt={post.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: post.objectPosition }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={i === 0}
                  />
                </div>
                {/* Hover caption overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10 flex items-end p-5">
                  <div className="flex justify-between items-end w-full gap-3">
                    <p className="text-white text-xs font-semibold leading-snug line-clamp-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                      {post.caption}
                    </p>
                    <InstagramIcon size={22} className="text-white shrink-0 drop-shadow-md" />
                  </div>
                </div>
              </motion.a>
            ))
          )}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-bold mb-3 text-xl">📸 Tag us in your FRUBOO moments!</p>
          <p className="text-gray-500 font-medium mb-8">#FRUBOOExperience #FreshLayers</p>
          <a
            href="https://instagram.com/Fruboo_"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-black text-white text-sm font-black tracking-[0.2em] uppercase rounded-full hover:bg-gray-800 transition-all flex items-center gap-2 mx-auto w-max"
          >
            <InstagramIcon size={18} /> Follow on Instagram
          </a>
        </motion.div>

      </div>
    </section>
  );
};
