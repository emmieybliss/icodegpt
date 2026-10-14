import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works from any folder on shared/static hosting.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-dom/client'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})
