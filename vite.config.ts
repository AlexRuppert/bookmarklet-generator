import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

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
})
