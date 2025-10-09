import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      // request will automatically will go to this,
      // from this port 
      '/api':{
        target:"http://localhost:3000"
      },
      '/images':{
           target:'http://localhost:3000'
      }
    }
  }
})
