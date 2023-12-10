import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    input: [
      'src/main.jsx',
      'src/index.css',
      'src/App.jsx',
      'src/App.css'
    ],
    refresh: true,
  }),
],
  build: { chunkSizeWarningLimit: 1600, }
})
