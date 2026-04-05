import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false as any,
  // Bake NEXT_PUBLIC_ vars into the client bundle at build time.
  // Critical for self-hosted deployments where .env.local is not present on the server.
  env: {
    NEXT_PUBLIC_RAZORPAY_KEY_ID: "rzp_live_SWOGIdvQViQ7qA",
  },
};

export default nextConfig;
