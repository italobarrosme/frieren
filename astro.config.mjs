import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from '@astrojs/react';

import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server', // Configurar para SSR
  adapter: vercel(), // Adaptador Node.js para SSR
  integrations: [react()], // Integración de Preact
});