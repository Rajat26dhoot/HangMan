import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // JSON server running on port 3001
        changeOrigin: true,
        secure: false
      }
    }
  }
});

