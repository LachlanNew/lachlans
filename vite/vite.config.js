// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    extensions: ['.ts', '.js', '.json'], // Add file extensions here
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});