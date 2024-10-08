import { resolve } from 'path'
import DefineOptions from 'unplugin-vue-define-options/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers' // 按需引入 element ui
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'

/**
 * * unplugin-icons插件，自动引入iconify图标
 * usage: https://github.com/antfu/unplugin-icons
 * 图标库: https://icones.js.org/
 */
import Icons from 'unplugin-icons/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

import { getSrcPath } from '../utils'

const customIconPath = resolve(getSrcPath(), 'assets/svg')

export default [
  DefineOptions(),
  AutoImport({
    imports: ['vue', 'vue-router'],
    dts: false,
    // AutoImport 增加 eslintrc ，自动生成 .eslintrc-auto-import.json 文件
    eslintrc: {
      enabled: true,
    },
    resolvers: [
      ElementPlusResolver({
        importStyle: 'sass',
        useSource: true,
      }),
      // Auto import icon components
      // 自动导入图标组件
      IconsResolver({
        prefix: 'Icon',
      }),
    ], // 按需引入elemnet-plus 组件
  }),
  Icons({
    compiler: 'vue3',
    customCollections: {
      custom: FileSystemIconLoader(customIconPath),
    },
    scale: 1,
    defaultClass: 'inline-block',
    autoInstall: true,
  }),
  Components({
    resolvers: [
      ElementPlusResolver({
        // 自动引入修改主题色添加这一行，使用预处理样式
        importStyle: 'sass',
      }), // 按需引入elemnet-plus 组件
      // 自动注册图标组件
      IconsResolver({
        customCollections: ['custom'],
        componentPrefix: 'icon',
        // enabledCollections: ['ep'],
      }),
    ],
    dts: false,
  }),
  createSvgIconsPlugin({
    iconDirs: [customIconPath],
    symbolId: 'icon-custom-[dir]-[name]',
    inject: 'body-last',
    customDomId: '__CUSTOM_SVG_ICON__',
  }),
]
