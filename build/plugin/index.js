import vue from '@vitejs/plugin-vue'

/**
 * * unocss插件，原子css
 * https://github.com/antfu/unocss
 */
// import Unocss from 'unocss/vite'

// rollup打包分析插件
import visualizer from 'rollup-plugin-visualizer'
// 压缩
import viteCompression from 'vite-plugin-compression'
// 开发模式工具
import VueDevTools from 'vite-plugin-vue-devtools'

import { configHtmlPlugin } from './html'
// import { configMockPlugin } from './mock'
import unplugin from './unplugin'

export function createVitePlugins(viteEnv, isBuild) {
  const plugins = [
    VueDevTools(),
    vue(),
    ...unplugin,
    configHtmlPlugin(viteEnv, isBuild),
  ]

  //  mock 暂不需要
  // if (viteEnv?.VITE_USE_MOCK) {
  //   plugins.push(configMockPlugin(isBuild))
  // }

  // 是否开启压缩

  if (viteEnv.VITE_USE_COMPRESS) {
    plugins.push(
      // 指定压缩类型
      viteCompression({ algorithm: viteEnv.VITE_COMPRESS_TYPE || 'gzip' }),
      // 默认情况下插件在开发 (serve) 和生产 (build) 模式中都会调用，使用 apply 属性指明它们仅在 'build' 或 'serve' 模式时调用
      // {
      //   ...viteCompression({ algorithm: viteEnv.VITE_COMPRESS_TYPE || 'gzip' }),
      //   apply: 'build',
      // },
    )
  }

  if (isBuild) {
    plugins.push(
      visualizer({
        // 将打包的依赖分析可视化页面，写到node_modules中，这样不占位置
        filename: './node_modules/.cache/visualizer/stats.html',
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
    )
  }

  return plugins
}
