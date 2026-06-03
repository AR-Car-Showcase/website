import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return undefined;
          }

          if (id.includes('/node_modules/three/')) {
            return 'three-core';
          }

          if (id.includes('@react-three/fiber')) {
            return 'react-three-fiber';
          }

          if (id.includes('@react-three/drei')) {
            return 'react-three-drei';
          }

          if (id.includes('framer-motion')) {
            return 'motion-vendor';
          }

          if (id.includes('swiper')) {
            return 'swiper-vendor';
          }

          if (id.includes('react-icons')) {
            return 'icons-vendor';
          }

          return undefined;
        },
      },
    },
  },
});
