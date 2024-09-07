import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import obfuscator from 'vite-plugin-obfuscator';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    obfuscator()
  ], build: {
    sourcemap: false  
  }
})
