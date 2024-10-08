import { defineConfig, loadEnv } from 'vite'

import { convertEnv, getSrcPath, getRootPath } from './build/utils'
import { createViteProxy, viteDefine } from './build/config'
import { createVitePlugins } from './build/plugin'
import { OUTPUT_DIR } from './build/constant'

export default defineConfig(({ command, mode }) => {
  const srcPath = getSrcPath()
  const rootPath = getRootPath()
  const isBuild = command === 'build'

  const env = loadEnv(mode, process.cwd())
  const viteEnv = convertEnv(env)
  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_USE_PROXY, VITE_PROXY_TYPE } =
    viteEnv
  console.log(viteEnv)
  return {
    base: VITE_PUBLIC_PATH || '/',
    resolve: {
      alias: {
        '~': rootPath,
        '@': srcPath,
      },
    },
    define: viteDefine,
    plugins: createVitePlugins(viteEnv, isBuild),
    server: {
      host: '0.0.0.0',
      port: VITE_PORT,
      open: false,
      proxy: createViteProxy(VITE_PROXY_TYPE, VITE_USE_PROXY),
    },
    css: {
      preprocessorOptions: {
        //define global scss variable
        scss: {
          additionalData: `@use "@/styles/element/index.scss" as *;@use '@/styles/variables.scss' as *;`,
        },
      },
    },
    build: {
      target: 'es2015',
      outDir: OUTPUT_DIR,
      reportCompressedSize: false, // 启用/禁用 gzip 压缩大小报告
      chunkSizeWarningLimit: 1024, // chunk 大小警告的限制（单位kb）
      rollupOptions: {
        output: {
          //通过() => import()形式加载的组件会自动分包，第三方插件需手动分包
          manualChunks: {
            vue: ['vue', 'pinia', 'vue-router'],
            elementIcons: ['@element-plus/icons-vue'],
          },
          //js和css文件夹分离
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
      },
    },
  }
})
