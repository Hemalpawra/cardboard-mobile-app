import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


import fs from 'fs'

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        
        // 1. Direct assets folder
        const directPath = path.resolve(__dirname, 'assets', filename)
        if (fs.existsSync(directPath)) return directPath

        // 2. Search inside imports subdirectories
        const importsDir = path.resolve(__dirname, 'imports')
        if (fs.existsSync(importsDir)) {
          const subdirs = fs.readdirSync(importsDir, { withFileTypes: true })
          for (const dirent of subdirs) {
            if (dirent.isDirectory()) {
              const candidate = path.resolve(importsDir, dirent.name, filename)
              if (fs.existsSync(candidate)) return candidate
            }
          }
        }

        // 3. Fallback to assets
        return directPath
      }
    },
  }
}

import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'Cardboard Mobile App',
        short_name: 'Cardboard',
        description: 'AI-powered mobile video editor and team collaboration app.',
        theme_color: '#0d0d0f',
        background_color: '#0d0d0f',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        icons: [
          {
            src: 'icon.svg',
            sizes: '192x192 512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ],
  resolve: {
    alias: {
      // Alias @ to the root directory
      '@': path.resolve(__dirname, '.'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
  build: {
    chunkSizeWarningLimit: 2000,
  },
})
