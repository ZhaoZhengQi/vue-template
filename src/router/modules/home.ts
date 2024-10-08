import { RouteRecordRaw } from "vue-router";
export default {
  path: "/home",
  name: "HomePage",
  component: () => import("@/views/home/index.vue"),
  meta: {
    role: ["common", "admin"],
  },
  children: [],
} as RouteRecordRaw;
