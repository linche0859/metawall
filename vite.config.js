import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? '/metawall/' : '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, '.', 'src')
    }
  }
})
