"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import Script from "next/script";

const packs = [
  { price: 99, title: "Regular Size", desc: "1 Custom FRUBOO • 250 ML" },
  { price: 149, title: "Large Size 🔥", desc: "1 Custom FRUBOO • 350 ML", highlight: true },
  { price: 199, title: "Jumbo Size", desc: "1 Custom FRUBOO • 500 ML" },
];

export default function BuyPage() {
  const [loading, setLoading] = useState<number | null>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

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
        description: "Fresh fruit experience",
        order_id: data.orderId,
        handler: async function (response: any) {
          try {
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            });
            const verifyData = await verifyRes.json();
            if (verifyData.success) {
              setStatus("success");
            } else {
              setStatus("error");
            }
          } catch (err) {
            setStatus("error");
          }
        },
        theme: {
          color: "#FF7A00",
        },
      };

      const razorpay = new (window as any).Razorpay(options);
      razorpay.on('payment.failed', function () {
        setStatus("error");
      });
      razorpay.open();
    } catch (e) {
      console.error(e);
      setStatus("error");
    } finally {
      setLoading(null);
    }
  };

  return (
    <main className="bg-[#050505] min-h-screen text-white flex flex-col selection:bg-white/20">
      <Navbar />
      <Script id="razorpay-checkout-js" src="https://checkout.razorpay.com/v1/checkout.js" />

      <section className="relative flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
        {/* Ambient background bloom */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF7A00]/5 rounded-full blur-[150px] -z-10" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center w-full max-w-5xl mx-auto z-10"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            Secure your freshness.
          </h1>
          <p className="text-xl md:text-2xl text-white/50 font-light mb-16 tracking-wide">
            One-click checkout. Zero friction.
          </p>

          {/* Preset ONE-CLICK Buy Buttons */}
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 w-full max-w-5xl mx-auto">
            {packs.map((pack) => (
              <motion.button
                key={pack.price}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handlePayment(pack.price)}
                disabled={loading !== null}
                className={`relative group flex-1 flex flex-col items-center justify-between p-8 md:p-10 rounded-3xl transition-all duration-300 text-left w-full disabled:opacity-50 disabled:cursor-not-allowed ${
                  pack.highlight 
                    ? "bg-white text-black border-[3px] border-[#FF7A00] shadow-[0_0_40px_rgba(255,122,0,0.3)] hover:shadow-[0_0_60px_rgba(255,122,0,0.5)]" 
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex flex-col items-center w-full mb-8">
                  <h3 className={`text-2xl font-black tracking-tight mb-2 ${pack.highlight ? "text-[#FF7A00]" : "text-white"}`}>
                    {pack.title}
                  </h3>
                  <p className={`text-sm tracking-wide font-medium text-center ${pack.highlight ? "text-black/60" : "text-white/50"}`}>
                    {pack.desc}
                  </p>
                </div>
                
                <div className="flex items-center justify-center gap-2">
                  <span className="text-4xl font-black tracking-tighter">₹{pack.price}</span>
                </div>

                {loading === pack.price && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-3xl">
                    <div className="w-8 h-8 rounded-full border-4 border-white/20 border-t-white animate-spin" />
                  </div>
                )}
              </motion.button>
            ))}
          </div>

          {/* Trust Boosters */}
          <div className="mt-16 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-white/40 text-sm font-medium tracking-widest uppercase">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Secure payments via Razorpay
            </div>
            <p className="text-white/30 text-xs tracking-widest uppercase mb-4">100% safe & encrypted</p>
            <p className="text-white/20 text-[10px] tracking-widest uppercase border border-white/5 rounded-full px-4 py-2 bg-white/5">Prices may vary for bulk orders</p>
          </div>
        </motion.div>
      </section>

      {/* Success / Error Overlays */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg px-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-[#0a0a0a] border border-white/10 p-12 text-center rounded-[3rem] max-w-lg shadow-[0_0_100px_rgba(255,122,0,0.2)]"
            >
              <div className="w-20 h-20 bg-[var(--color-accent-green)]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🎉</span>
              </div>
              <h2 className="text-4xl font-black tracking-tighter text-white mb-4">Order placed successfully</h2>
              <p className="text-lg text-white/60 font-light mb-8">Your fresh FRUBOO is being prepared.</p>
              <button 
                onClick={() => setStatus("idle")}
                className="px-10 py-4 bg-white text-black font-bold tracking-widest uppercase rounded-full hover:scale-105 transition-transform"
              >
                Continue
              </button>
            </motion.div>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg px-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-[#0a0a0a] border border-red-500/20 p-12 text-center rounded-[3rem] max-w-lg shadow-[0_0_100px_rgba(239,68,68,0.1)]"
            >
              <h2 className="text-4xl font-black tracking-tighter text-red-500 mb-4">Payment failed</h2>
              <p className="text-lg text-white/60 font-light mb-8">Please try again.</p>
              <button 
                onClick={() => setStatus("idle")}
                className="px-10 py-4 bg-white/10 text-white font-bold tracking-widest uppercase rounded-full hover:bg-white/20 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
