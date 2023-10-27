import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const URL = 'https://dev.obtenmas.com'

export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: URL,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, URL)
      }
    }

  }
})
