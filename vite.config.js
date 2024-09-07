import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import obfuscator from 'vite-plugin-obfuscator';

export default defineConfig({
  plugins: [
    react(),
    obfuscator({ /* options for obfuscation */ }) // Ensure this is correctly configured
  ],
  build: {
    sourcemap: false  // Disable source maps in production
  }
});
