import path from 'path'
import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

function fullPath (relPath) {
  return fileURLToPath(new URL(relPath, import.meta.url))
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 1234
  },
  resolve: {
    alias: {
      // So modules can be imported relative to src instead of ../../../...
      '@': fullPath('./src'),

      // Vite won't pick up files outside src by default.
      '@tailwindConfig': fullPath('./tailwind.config.js')
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      formats: ['es'],
      // Force extension to .es
      fileName: () => 'frontend-shared.es.js'
    },
    rollupOptions: {
      external: ['react', 'react-dom']
    }
  }
})
