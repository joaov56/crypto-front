import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import pluginRewriteAll from 'vite-plugin-rewrite-all';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'localhost',
    port: 3001,
    open: true,
  },
  plugins: [react(), eslint(), pluginRewriteAll()],
});
