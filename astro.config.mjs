import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from '@astrojs/react';

export default defineConfig({
  output: 'server', // Configurar para SSR
  adapter: node({ mode: 'standalone' }), // Adaptador Node.js para SSR
  integrations: [react()], // Integración de Preact
});
