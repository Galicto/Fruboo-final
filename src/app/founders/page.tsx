"use client";

import { motion, Variants } from "framer-motion";
import { Navbar } from "@/components/Navbar";

const teamMembers = [
  {
    name: "Raj Aryan",
    role: "Founder",
    image: "/images/team/raj.jpg",
    linkedin: "https://www.linkedin.com/in/raj-aryan-aa43742a1",
  },
  {
    name: "Harshit Divekar",
    role: "Co-Founder",
    image: "/images/team/harshit.jpg",
    linkedin: "https://www.linkedin.com/in/harshitdivekar",
  },
  {
    name: "Anirudh Pratap Singh Yadav",
    role: "Co-Founder",
    image: "/images/team/anirudh.jpg",
    linkedin: "https://www.linkedin.com/in/anirudh-pratap-singh-yadav-79478b264",
  },
  {
    name: "Aamina Azeem Baig",
    role: "Co-Founder",
    image: "/images/team/aamina.jpg",
    linkedin: "https://www.linkedin.com/in/aamina-baig-089b80243",
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function FoundersPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white pb-32 selection:bg-white/20">
      <Navbar />

      {/* Header Section */}
      <section className="relative px-6 pt-40 pb-16 max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white/90 drop-shadow-2xl"
        >
          The People Behind FRUBOO
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg md:text-2xl text-white/50 font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
        >
          Built with a vision to redefine freshness.
        </motion.p>
      </section>

      {/* Team Grid */}
      <section className="relative px-6 max-w-7xl mx-auto mt-6">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="flex flex-col group cursor-pointer"
            >
              {/* Image Container with Hover Effects */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[16px] bg-white/5 border border-white/5 transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] group-hover:border-white/10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:brightness-110 group-hover:scale-105"
                />
                
                {/* Subtle Inner Glow overlay */}
                <div className="absolute inset-0 rounded-[16px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] pointer-events-none" />
              </div>

              {/* Text & Icon Details */}
              <div className="mt-8 flex flex-row items-center justify-between px-2">
                <div className="flex flex-col text-left">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white/90 leading-none">
                    {member.name}
                  </h3>
                  <p className="text-[13px] tracking-widest text-white/60 mt-2 uppercase font-semibold">
                    {member.role}
                  </p>
                </div>

                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${member.name} LinkedIn profile`}
                  className="shrink-0 p-3 ml-4 rounded-full bg-white/5 border border-white/10 transition-all duration-300 ease-out hover:bg-white/10 hover:scale-110 hover:border-white/20 hover:shadow-[0_0_15px_rgba(10,102,194,0.4)] flex items-center justify-center text-white/70 hover:text-[#0a66c2]"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Philosophy & Vision Deep-Dive */}
      <section className="relative w-full max-w-6xl mx-auto px-6 pt-32 pb-48 flex flex-col space-y-32 md:space-y-48">
        
        {/* Subtle Ambient Glow behind the text blocks */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[var(--color-accent-green)]/10 rounded-[100%] blur-[120px] -z-10 mix-blend-screen pointer-events-none" />
        
        {/* Vision Section */}
        <div className="relative text-center mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] drop-shadow-xl"
          >
            To redefine how the world<br className="hidden md:block" /> experiences <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">freshness.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-xl md:text-2xl lg:text-3xl text-white/50 font-light tracking-wide max-w-3xl mx-auto leading-relaxed"
          >
            We envision a world where healthy choices are effortless, visually delightful, and deeply satisfying &mdash; where every sip feels real, clean, and alive.
          </motion.p>
        </div>

        {/* Aim Section */}
        <div className="relative text-center mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] drop-shadow-xl"
          >
            To make fresh, customizable, and hygienic fruit experiences accessible to everyone.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-xl md:text-2xl lg:text-3xl text-white/50 font-light tracking-wide max-w-3xl mx-auto leading-relaxed"
          >
            From college campuses to city streets, we aim to serve real ingredients, crafted with care, designed for modern lifestyles.
          </motion.p>
        </div>

        {/* Philosophy: Closing Statement */}
        <div className="relative text-center mx-auto max-w-5xl mt-24">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] bg-[var(--color-accent-green)]/15 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none" />
          <motion.h3
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.15)] leading-[1.05]"
          >
            Not just a drink.<br />
            <span className="text-[var(--color-accent-green)] drop-shadow-[0_0_20px_rgba(107,191,89,0.3)]">A fresh experience, built for you.</span>
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="mt-16"
          >
            <a 
              href="mailto:frubo.work@gmail.com"
              className="inline-block px-10 py-5 bg-white text-black text-sm md:text-base font-bold tracking-[0.2em] rounded-full uppercase hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
