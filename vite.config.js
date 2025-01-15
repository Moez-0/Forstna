import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Ensure the JSON import option is enabled if needed
  optimizeDeps: {
    include: ['i18next', 'react-i18next']
  },
  base: './',
});
