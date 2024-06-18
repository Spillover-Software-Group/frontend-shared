import path from 'node:path'
import { URL, fileURLToPath } from 'node:url'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

function fullPath (relPath) {
  return fileURLToPath(new URL(relPath, import.meta.url))
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
      external: ['react', 'react-dom', 'react/jsx-runtime']
    }
  }
})
