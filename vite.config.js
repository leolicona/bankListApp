import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
    /*  proxy: {
      // Proxy all requests to `/api/banks` to the ObtenMás API.
      '/api/banks': {
        target: 'https://dev.obtenmas.com/catom/api/challenge/banks'
      }
    } */
  }

})
