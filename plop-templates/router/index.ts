import { RouteRecordRaw } from "vue-router"
export default {
	path: "{{name}}",
	name: "{{name}}",
	component: () => import("@/views/{{name}}/index.vue"),
	meta: {
		title: "{{menu}}"
	}
} as RouteRecordRaw
