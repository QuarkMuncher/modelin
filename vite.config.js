import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import imageMin from 'vite-plugin-imagemin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    imageMin({
      mozjpeg: {
        quality: 60
      }
    }),
    react()
  ]
})
