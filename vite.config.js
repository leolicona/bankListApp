import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const proxy = {
  '/api': {
    target: 'http://localhost:3000/dev.obtenmas.com/catom/api/challenge/banks',
    changeOrigin: true,
    rewrite: path => path.replace(/^\/api/, '')
  }
}

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
    // ...proxy
    /* proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    } */
  }
})
