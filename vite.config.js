import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        caseConecte: resolve(__dirname, 'case-conecte.html'),
        caseLuPerfumes: resolve(__dirname, 'case-lu-perfumes.html'),
        marketing: resolve(__dirname, 'marketing.html'),
      },
    },
  },
});
