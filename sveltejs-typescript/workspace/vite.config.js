import { defineConfig } from 'vite'
import svelte from '@vitejs/plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    hmr: {
      clientPort: 443,
    },
  },
})
