import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import * as fs from 'fs'

const BASE = '/bookmarklet-generator/'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      onwarn: (warning, handler) => {
        const { code, frame } = warning
        if (code === 'css-unused-selector') return

        handler(warning)
      },
    }),
  ],
  build: {
    target: 'esnext',
  },
  base: BASE,
  server: {
    open: false,
    https: {
      key: fs.readFileSync('localhost-key.pem'),
      cert: fs.readFileSync('localhost.pem'),
    },
  },
})
