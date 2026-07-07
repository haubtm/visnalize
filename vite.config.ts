import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const root = fileURLToPath(new URL('.', import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        // Resolve @use "src/styles/tokens" from the project root in every module.
        loadPaths: [root],
        additionalData: `@use "src/styles/tokens" as *;\n`,
      },
    },
  },
});
