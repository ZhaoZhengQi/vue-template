import { RouteRecordRaw } from "vue-router"
export default {
	path: "demo",
	name: "demo",
	component: () => import("@/views/demo/index.vue"),
	meta: {
		title: "demo页面"
	}
} as RouteRecordRaw
