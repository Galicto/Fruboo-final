"use client";

import { motion, Variants } from "framer-motion";
import { Navbar } from "@/components/Navbar";

const teamMembers = [
  {
    name: "Raj Aryan",
    role: "Founder",
    image: "/images/team/raj.jpg",
    linkedin: "https://www.linkedin.com/in/raj-aryan-aa43742a1",
    isFounder: true,
    objectPos: "center 32%",  // Anchors on face — avoids too much sky at top or cutting legs
  },
  {
    name: "Harshit Divekar",
    role: "Co-Founder",
    image: "/images/team/harshit.jpg",
    linkedin: "https://www.linkedin.com/in/harshitdivekar",
    objectPos: "center 10%",
  },
  {
    name: "Anirudh Pratap Singh Yadav",
    role: "Co-Founder",
    image: "/images/team/anirudh.jpg",
    linkedin: "https://www.linkedin.com/in/anirudh-pratap-singh-yadav-79478b264",
    objectPos: "center top",
  },
  {
    name: "Aamina Azeem Baig",
    role: "Co-Founder",
    image: "/images/team/aamina.jpg",
    linkedin: "https://www.linkedin.com/in/aamina-baig-089b80243",
    objectPos: "center top",
  },
];

const founder = teamMembers[0];
const coFounders = teamMembers.slice(1);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

function MemberCard({ member, delay = 0 }: { member: typeof teamMembers[0]; delay?: number }) {
  return (
    <motion.div
      variants={cardVariants}
      className="flex flex-col group cursor-pointer"
    >
      {/* Image — consistent aspect-[4/5] for all */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-white/5 border border-white/8 transition-all duration-500 group-hover:scale-[1.02] group-hover:border-white/20 group-hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
          style={{ objectPosition: (member as any).objectPos ?? "center 20%" }}
        />

        {/* Founder badge only on Raj */}
        {member.isFounder && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-[var(--color-accent-green)] rounded-full">
            <span className="text-[10px] font-black tracking-[0.3em] text-black uppercase">Founder</span>
          </div>
        )}

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        <div className="absolute inset-0 rounded-[20px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] pointer-events-none" />
      </div>

      {/* Name + LinkedIn */}
      <div className="mt-5 flex flex-row items-center justify-between px-1">
        <div className="flex flex-col text-left">
          <h3 className="text-lg md:text-xl font-bold tracking-tight text-white/90 leading-snug">
            {member.name}
          </h3>
          <p className={`text-[11px] tracking-[0.25em] mt-1.5 uppercase font-bold ${member.isFounder ? "text-[var(--color-accent-green)]" : "text-white/35"}`}>
            {member.role}
          </p>
        </div>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${member.name} on LinkedIn`}
          className="shrink-0 p-2.5 ml-3 rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-110 hover:border-white/20 hover:shadow-[0_0_15px_rgba(10,102,194,0.4)] flex items-center justify-center text-white/60 hover:text-[#0a66c2]"
        >
          <LinkedInIcon />
        </a>
      </div>
    </motion.div>
  );
}

export default function FoundersPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white pb-32 selection:bg-white/20 overflow-hidden">
      <Navbar />

      {/* Ambient background glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[var(--color-accent-green)]/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* ─── HEADER ──────────────────────────────── */}
      <section className="relative px-6 pt-40 pb-20 max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11px] tracking-[0.5em] text-[var(--color-accent-green)] uppercase font-bold mb-5"
        >
          The Team
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-white leading-[0.95] drop-shadow-2xl"
        >
          The People<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white/70 to-white/30">
            Behind FRUBOO.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 text-lg md:text-xl text-white/40 font-light tracking-wide max-w-xl mx-auto leading-relaxed"
        >
          A bold vision. A relentless team. Built to redefine freshness.
        </motion.p>
      </section>

      {/* ─── ALL MEMBERS — single 3-col grid ────── */}
      {/* Row 1: spacer | Raj (centered, same size) | spacer */}
      {/* Row 2: Harshit | Anirudh | Aamina */}
      <section className="relative px-6 max-w-5xl mx-auto">

        {/* Subtle green glow only under founder card */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "320px",
            height: "480px",
            background: "radial-gradient(ellipse at center, rgba(107,191,89,0.10) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Row 1 — founder centred */}
          <div className="hidden sm:block" /> {/* left spacer */}
          <MemberCard member={founder} />
          <div className="hidden sm:block" /> {/* right spacer */}

          {/* Row 2 — co-founders */}
          {coFounders.map((member, i) => (
            <MemberCard key={i} member={member} />
          ))}
        </motion.div>
      </section>

      {/* ─── VISION SECTION ──────────────────────── */}
      <section className="relative w-full max-w-5xl mx-auto px-6 pt-40 pb-24 flex flex-col space-y-28 text-center">
        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[var(--color-accent-green)]/8 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] tracking-[0.5em] text-[var(--color-accent-green)] uppercase font-bold mb-6">Vision</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            To redefine how the world<br className="hidden md:block" />
            {" "}experiences{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">freshness.</span>
          </h2>
          <p className="mt-8 text-xl text-white/40 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            Where healthy choices are effortless, visually delightful, and deeply satisfying — every sip feels real, clean, and alive.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] tracking-[0.5em] text-white/30 uppercase font-bold mb-6">Our Mission</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Fresh. Customizable. Hygienic.<br/>
            <span className="text-white/40">Accessible to everyone.</span>
          </h2>
          <p className="mt-8 text-xl text-white/40 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            From college campuses to city streets — real ingredients, crafted with care, designed for modern lifestyles.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[400px] h-[200px] bg-[var(--color-accent-green)]/12 blur-[80px] rounded-full" />
          </div>
          <h3 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1.0] relative z-10">
            Not just a drink.<br/>
            <span className="text-[var(--color-accent-green)]">A fresh experience.</span>
          </h3>
          <div className="mt-12 relative z-10">
            <a
              href="mailto:frubo.work@gmail.com"
              className="inline-block px-10 py-5 bg-white text-black text-sm font-black tracking-[0.2em] rounded-full uppercase hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
