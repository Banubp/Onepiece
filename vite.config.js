import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Onepiece/',
  server: {host: '0.0.0.0', allowedHosts: ['terminal.local']}
});
