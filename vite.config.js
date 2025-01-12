import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/reactporfolio/' : '/', // Correct base for prod and dev
  plugins: [react()],
  server: {
    historyApiFallback: true, // Ensure Vite supports SPA routing
  },
});
