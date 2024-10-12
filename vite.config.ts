import path from "path"
import { fileURLToPath } from "url"
import vue from "@vitejs/plugin-vue"
import Icons from "unplugin-icons/vite"
import vueJsx from "@vitejs/plugin-vue-jsx"
import { defineConfig, loadEnv } from "vite"
import type { UserConfig, ConfigEnv } from "vite"
import { viteMockServe } from "vite-plugin-mock"
import AutoImport from "unplugin-auto-import/vite"
import IconsResolver from "unplugin-icons/resolver"
import ElementPlus from "unplugin-element-plus/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

const pathSrc = path.resolve(__dirname, "src")
const typesSrc = path.resolve(__dirname, "types")
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
	// 获取当前工作目录
	const root = process.cwd()
	// 获取环境变量
	// const env = loadEnv(mode, root);
	return {
		// 项目根目录
		root,
		// 项目部署的基础路径
		base: "/",
		publicDir: fileURLToPath(new URL("./public", import.meta.url)), // 无需处理的静态资源位置
		assetsInclude: fileURLToPath(new URL("./src/assets", import.meta.url)), // 需要处理的静态资源位置
		plugins: [
			// Vue模板文件编译插件
			vue(),
			// jsx文件编译插件
			vueJsx(),
			viteMockServe({
				mockPath: "./src/mock" //设置模拟.ts 文件的存储文件夹
			}),
			ElementPlus({}),
			// 自动导入插件
			AutoImport({
				// 自动导入 Vue 相关函数、vueRouter、pinia
				imports: ["vue", "vue-router", "pinia"],
				// AutoImport 增加 eslintrc ，自动生成 .eslintrc-auto-import.json 文件
				eslintrc: {
					enabled: true
				},
				resolvers: [
					ElementPlusResolver(),
					// 自动导入图标组件
					IconsResolver({
						prefix: "Icon"
					})
				],
				dts: path.resolve(pathSrc, "auto-imports.d.ts")
			}),
			// 组件自动注册
			Components({
				resolvers: [
					// 自动导入 Element Plus 组件
					ElementPlusResolver(),
					// 自动注册图标组件
					IconsResolver({
						enabledCollections: ["ep"]
					})
				],
				dts: path.resolve(pathSrc, "components.d.ts")
			}),
			Icons({
				autoInstall: true
			})
		],
		// 运行后本地预览的服务器
		server: {
			// 是否开启https
			// https: false,
			// 指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址。
			host: true,
			// 开发环境预览服务器端口
			port: 3000,
			// 启动后是否自动打开浏览器
			open: false,
			// 是否开启CORS跨域
			cors: true,
			// 代理服务器
			// 帮助我们开发时解决跨域问题
			proxy: {
				// 这里的意思是 以/api开头发送的请求都会被转发到 http://xxx:3000
				"/api": {
					target: "http://xxx:9000",
					// 改变 Host Header
					changeOrigin: true,
					// 发起请求时将 '/api' 替换为 ''
					rewrite: (path) => path.replace(/^\/api/, "")
				}
			}
		},
		// 打包配置
		build: {
			// 关闭 sorcemap 报错不会映射到源码
			sourcemap: false,
			// 打包大小超出 400kb 提示警告
			chunkSizeWarningLimit: 400,
			rollupOptions: {
				// 打包入口文件 根目录下的 index.html
				// 也就是项目从哪个文件开始打包
				input: {
					index: fileURLToPath(new URL("./index.html", import.meta.url))
				},
				// 静态资源分类打包
				output: {
					format: "esm",
					chunkFileNames: "static/js/[name]-[hash].js",
					entryFileNames: "static/js/[name]-[hash].js",
					assetFileNames: "static/[ext]/[name]-[hash].[ext]"
				}
			}
		},
		// 配置别名
		resolve: {
			alias: {
				"@": pathSrc,
				"#": typesSrc
			}
		}
	}
})
