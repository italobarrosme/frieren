import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from '@astrojs/react';

// import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server', // Configurar para SSR
  // adapter: vercel(), // Adaptador Node.js para SSR
  adapter: node({ mode: 'standalone' }),
  integrations: [react()], // Integración de Preact
  server: {
    host: true,                          // <- 0.0.0.0
    port: Number(process.env.PORT) || 4321,
  },
});