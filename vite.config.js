import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      protocol: 'ws',
      host: 'localhost'
    }
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
      strictRequires: true
    },
    assetsInlineLimit: 4096, // 4kb - files smaller than this will be inlined as base64
    rollupOptions: {
      output: {
        manualChunks: undefined,
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  },
  base: '/' // Ensures assets are referenced from the root path
})
