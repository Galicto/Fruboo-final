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
      },
    },
  ],
};
