import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

export default ({ mode }) => {
  return defineConfig({
    plugins: [vue()],
    base: mode === 'production' ? '/metawall/' : '/',
    resolve: {
      alias: {
        '@': resolve(__dirname, '.', 'src')
      }
    }
  })
}
