import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { createRequire } from 'module'
import inject from '@rollup/plugin-inject'
import stdLibBrowser from 'node-stdlib-browser'
const require = createRequire(import.meta.url)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      ...inject({
        global: [
          require.resolve(
            './node_modules/node-stdlib-browser/helpers/esbuild/shim'
          ),
          'global',
        ],
        process: [
          require.resolve(
            './node_modules/node-stdlib-browser/helpers/esbuild/shim'
          ),
          'process',
        ],
        Buffer: [
          require.resolve(
            './node_modules/node-stdlib-browser/helpers/esbuild/shim'
          ),
          'Buffer',
        ],
      }),
      enforce: 'post',
    },
  ],
  resolve: {
    alias: stdLibBrowser,
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
    },
    include: ['buffer', 'process'],
  },
  build: {
    target: 'esnext',
  },
  server: {
    host: true,
  },
})
