import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default ({ mode }) => {
  return defineConfig({
    plugins: [vue()],
    base: mode === 'production' ? '/metawall/' : '/'
  })
}
