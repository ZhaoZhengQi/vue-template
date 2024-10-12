import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import NProgress from "nprogress"
import "nprogress/nprogress.css"

// 默认为懒加载模式 加入配置项 eager 取消懒加载
const modules: Record<string, any> = import.meta.glob(["./modules/*.ts"], {
	eager: true
})
const homeChildrenList: Array<RouteRecordRaw> = []
// 将路由全部导入数组
Object.keys(modules).forEach((key) => {
	homeChildrenList.push(modules[key].default)
})
const routes: Array<RouteRecordRaw> = [
	{
		path: "/home",
		name: "HomePage",
		component: () => import("@/views/home/index.vue"),
		meta: {
			role: ["common", "admin"]
		},
		children: homeChildrenList
	},
	{
		path: "/login",
		name: "LoginPage",
		component: () => import("@/views/login/index.vue"),
		meta: {
			role: ["common", "admin"]
		}
	},
	{
		path: "/",
		redirect: "/home"
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

router.beforeEach(async (_to, _from, next) => {
	NProgress.start()
	next()
})

router.afterEach((_to) => {
	NProgress.done()
})

export default router
