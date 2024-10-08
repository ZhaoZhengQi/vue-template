import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router'
import {
  basicRoutes,
  EMPTY_ROUTE,
  NOT_FOUND_ROUTE,
  asyncRoutes,
} from './routes'
import { setupRouterGuard } from './guard'
import { getToken, isNullOrWhitespace } from '@/utils'
import { useUserStore, usePermissionStore } from '@/store'

const isHash = import.meta.env.VITE_USE_HASH === 'true'
// 创建路由
export const router = createRouter({
  history: isHash ? createWebHashHistory('/') : createWebHistory('/'),
  routes: basicRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

// 设置路由
export async function setupRouter(app) {
  await addDynamicRoutes()
  setupRouterGuard(router)
  app.use(router)
}

// 重置路由
export async function resetRouter() {
  const basicRouteNames = getRouteNames(basicRoutes)
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (!basicRouteNames.includes(name)) {
      router.removeRoute(name)
    }
  })
}
// 动态添加路由
export async function addDynamicRoutes() {
  const token = getToken()
  // 没有token情况
  if (isNullOrWhitespace(token)) {
    const isNeedLogin = import.meta.env.VITE_NEED_LOGIN === 'true'
    if (!isNeedLogin) {
      asyncRoutes.forEach((route) => {
        // 如果不存在该路由，则添加
        !router.hasRoute(route.name) && router.addRoute(route)
      })
      // 如果存在空路由，则删除
      router.hasRoute(EMPTY_ROUTE.name) && router.removeRoute(EMPTY_ROUTE.name)
      // 添加404页面
      router.addRoute(NOT_FOUND_ROUTE)
      return
    }
    router.addRoute(EMPTY_ROUTE)
    return
  }

  // 有token的情况
  try {
    console.log('执行了吗')
    const userStore = useUserStore()
    const permissionStore = usePermissionStore()
    // 当userId不存在时，才会执行获取用户信息的接口
    // 当&&左边的表达式为true时，才会执行右边的表达式
    !userStore.userId && (await userStore.getUserInfo())
    // 生成路由
    const accessRoutes = permissionStore.generateRoutes(userStore.role)
    accessRoutes.forEach((route) => {
      // 如果不存在该路由，则添加
      !router.hasRoute(route.name) && router.addRoute(route)
    })
    // 如果存在空路由，则删除
    // q:为什么要删除空路由？
    // a:在登录成功后，会跳转到空路由，然后在空路由中会根据用户角色生成路由，然后再跳转到首页
    router.hasRoute(EMPTY_ROUTE.name) && router.removeRoute(EMPTY_ROUTE.name)
    // 添加404页面
    router.addRoute(NOT_FOUND_ROUTE)
  } catch (error) {
    console.error(error)
  }
}

//  获取路由名称
export function getRouteNames(routes) {
  return routes.map((route) => getRouteName(route)).flat(1)
}
// 获取路由名称
function getRouteName(route) {
  const names = [route.name]
  if (route.children && route.children.length) {
    names.push(...route.children.map((item) => getRouteName(item)).flat(1))
  }
  return names
}
