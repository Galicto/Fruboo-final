module.exports = {
  apps: [
    {
      name: "fruboo-production",
      script: "npm",
      args: "start",
      instances: "max",       // Automatically scale to all CPU cores
      exec_mode: "cluster",   // Enable zero-downtime reloads
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        NEXT_PUBLIC_RAZORPAY_KEY_ID: "rzp_live_SWOGIdvQViQ7qA",
        RAZORPAY_KEY_SECRET: "9tbgpq7jTME9nmbtEgBb5HKY",
      },
    },
  ],
};
