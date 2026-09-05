import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  // GitHub Pages serves this repo at /test_resume/
  base: command === 'build' ? '/test_resume/' : '/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
}))
