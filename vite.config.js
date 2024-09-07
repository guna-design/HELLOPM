import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import obfuscator from 'vite-plugin-obfuscator';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    obfuscator({ /* options here */})
  ], build: {
    sourcemap: false  // Disable source maps for production
  }
})
