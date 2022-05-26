import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default ({ mode }) => {
  const envConfig = loadEnv(mode, './')
  return defineConfig({
    plugins: [vue()],
    server: {
      port: 3001
    },
    base: envConfig.VITE_PUBLISH_PATH,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  })
}
