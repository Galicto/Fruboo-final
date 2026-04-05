"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import Script from "next/script";

const packs = [
  {
    id: "regular",
    size: "regular" as const,
    price: 79,
    title: "Regular",
    ml: "350 ML",
    desc: "Perfect daily refreshment",
    highlight: false,
  },
  {
    id: "large",
    size: "large" as const,
    price: 149,
    title: "Large",
    ml: "500 ML",
    desc: "Maximum freshness",
    highlight: true,
  },
];

export default function BuyPage() {
  const [loading, setLoading] = useState<number | null>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [selected, setSelected] = useState<typeof packs[0]>(packs[1]); // default large

  const handlePayment = async (amount: number) => {
    setLoading(amount);
    setStatus("idle");
    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });
      const data = await res.json();

      if (!data.orderId) throw new Error("Order creation failed");

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: amount * 100,
        currency: "INR",
        name: "FRUBOO",
        description: `Fresh fruit experience • ${selected.ml}`,
        order_id: data.orderId,
        handler: async function (response: any) {
          try {
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            });
            const verifyData = await verifyRes.json();
            setStatus(verifyData.success ? "success" : "error");
          } catch {
            setStatus("error");
          }
        },
        theme: { color: "#FF7A00" },
      };

      const razorpay = new (window as any).Razorpay(options);
      razorpay.on("payment.failed", () => setStatus("error"));
      razorpay.open();
    } catch (e) {
      console.error(e);
      setStatus("error");
    } finally {
      setLoading(null);
    }
  };

  return (
    <main className="bg-[#050505] min-h-screen text-white flex flex-col selection:bg-white/20 overflow-hidden">
      <Navbar />
      <Script id="razorpay-checkout-js" src="https://checkout.razorpay.com/v1/checkout.js" />

      {/* Ambient glow */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF7A00]/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <section className="relative flex-1 flex flex-col lg:flex-row items-center justify-center px-6 pt-28 pb-20 gap-12 max-w-7xl mx-auto w-full">

        {/* ── LEFT: Product Image ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex flex-col items-center justify-center"
        >
          {/* Product display ── Dark Backdrop with Backlight */}
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-[2rem] bg-[#0c0c0c] flex items-end justify-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_0_100px_rgba(255,122,0,0.05)] overflow-hidden">
            
            {/* Ambient backlight glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div 
                animate={{ scale: 1.2, opacity: 0.2 }}
                className="w-[280px] h-[280px] rounded-full bg-[#ff7a00] blur-[100px]" 
              />
            </div>

            {/* Actual product photo (Cropped using a can-shaped clip-path) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 3 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-[92%] flex items-end justify-center z-10"
              >
                <motion.img
                  src={selected.size === "regular" ? "/images/can_350.png" : "/images/can_500.png"}
                  alt={`Fruboo ${selected.title} Can`}
                  className="w-full h-full object-contain translate-y-1"
                  style={{
                    filter: "contrast(1.08) saturate(1.15) brightness(1.02)",
                    // Custom can-shaped crop to hide the white studio background perfectly
                    // Adjusted per size – percentages are based on the raw uploads
                    clipPath: selected.size === "regular" 
                      ? "inset(14% 16% 0.5% 16% round 15% / 4%)"   /* 350ml is shorter/wider */
                      : "inset(2% 16% 0.1% 16% round 12% / 3%)",   /* 500ml is tall/sleek */
                  }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Size label pinned at bottom */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2.5 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 z-20 shadow-2xl">
              <span className="text-[11px] font-black tracking-[0.35em] text-white uppercase drop-shadow-md">
                {selected.title} · {selected.ml}
              </span>
            </div>
          </div>

          {/* Size toggle */}
          <div className="mt-8 flex items-center gap-3 bg-white/5 p-1.5 rounded-full border border-white/10">
            {packs.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelected(p)}
                className={`px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                  selected.id === p.id
                    ? "bg-[#FF7A00] text-black shadow-[0_0_20px_rgba(255,122,0,0.4)]"
                    : "text-white/40 hover:text-white"
                }`}
              >
                {p.title}
              </button>
            ))}
          </div>
        </motion.div>


        {/* ── RIGHT: Order Section ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex flex-col justify-center max-w-lg w-full"
        >
          <p className="text-[11px] tracking-[0.5em] text-[#FF7A00] uppercase font-bold mb-5">Order Now</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
            Secure your<br />freshness.
          </h1>
          <p className="text-lg text-white/40 font-light mb-12 leading-relaxed">
            One-click checkout. Zero friction. Real fruits, delivered fresh.
          </p>

          {/* Two option cards */}
          <div className="flex flex-col gap-4">
            {packs.map((pack) => {
              const isSelected = selected.id === pack.id;
              return (
                <motion.button
                  key={pack.id}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => {
                    setSelected(pack);
                    handlePayment(pack.price);
                  }}
                  disabled={loading !== null}
                  className={`relative flex flex-row items-center justify-between p-6 rounded-2xl border transition-all duration-300 text-left w-full disabled:opacity-50 disabled:cursor-not-allowed ${
                    isSelected && pack.highlight
                      ? "bg-[#FF7A00]/10 border-[#FF7A00]/60 shadow-[0_0_30px_rgba(255,122,0,0.15)]"
                      : isSelected
                      ? "bg-white/8 border-white/20"
                      : "bg-white/3 border-white/6 hover:bg-white/6 hover:border-white/15"
                  }`}
                >
                  {/* Left: info */}
                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-3 mb-1">
                      <span className={`text-xl font-black tracking-tight ${pack.highlight ? "text-[#FF7A00]" : "text-white"}`}>
                        {pack.title}
                      </span>
                      {pack.highlight && (
                        <span className="text-[10px] font-black tracking-[0.2em] px-2.5 py-1 bg-[#FF7A00] text-black rounded-full uppercase">
                          Popular
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-white/40 font-medium tracking-wide">
                      {pack.ml} · {pack.desc}
                    </span>
                  </div>

                  {/* Right: price + arrow */}
                  <div className="flex items-center gap-4 shrink-0">
                    <span className={`text-3xl font-black tracking-tighter ${pack.highlight ? "text-[#FF7A00]" : "text-white"}`}>
                      ₹{pack.price}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                      pack.highlight ? "bg-[#FF7A00] border-[#FF7A00]" : "bg-white/5 border-white/15"
                    }`}>
                      {loading === pack.price ? (
                        <div className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                      ) : (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={pack.highlight ? "#000" : "white"} strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      )}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-white/30 text-xs font-medium tracking-widest uppercase">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              Secure payments via Razorpay · 100% safe & encrypted
            </div>
            <p className="text-white/15 text-[10px] tracking-widest uppercase">Prices may vary for bulk orders</p>
          </div>
        </motion.div>
      </section>

      {/* Success Overlay */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg px-6">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
              className="bg-[#0a0a0a] border border-white/10 p-12 text-center rounded-[3rem] max-w-lg shadow-[0_0_100px_rgba(255,122,0,0.2)]">
              <div className="w-20 h-20 bg-[var(--color-accent-green)]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🎉</span>
              </div>
              <h2 className="text-4xl font-black tracking-tighter text-white mb-4">Order placed!</h2>
              <p className="text-lg text-white/60 font-light mb-8">Your fresh FRUBOO is being prepared.</p>
              <button onClick={() => setStatus("idle")}
                className="px-10 py-4 bg-white text-black font-bold tracking-widest uppercase rounded-full hover:scale-105 transition-transform">
                Continue
              </button>
            </motion.div>
          </motion.div>
        )}
        {status === "error" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg px-6">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
              className="bg-[#0a0a0a] border border-red-500/20 p-12 text-center rounded-[3rem] max-w-lg">
              <h2 className="text-4xl font-black tracking-tighter text-red-500 mb-4">Payment failed</h2>
              <p className="text-lg text-white/60 font-light mb-8">Please try again.</p>
              <button onClick={() => setStatus("idle")}
                className="px-10 py-4 bg-white/10 text-white font-bold tracking-widest uppercase rounded-full hover:bg-white/20 transition-colors">
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
