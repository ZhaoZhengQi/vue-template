import { defineStore } from 'pinia'
import { asyncRoutes, basicRoutes } from '@/router/routes'

function hasPermission(route, role) {
  // * 不需要权限直接返回true
  if (!route.meta?.requireAuth) return true

  // * 路由没有设置角色判定为没有权限
  const routeRole = route.meta?.role ? route.meta.role : []

  // * 登录用户没有角色或者路由没有设置角色判定为没有权限
  if (!role.length || !routeRole.length) {
    return false
  }
  // * 路由指定的角色包含任一登录用户角色则判定有权限
  return role.some((item) => routeRole.includes(item))
}

// * 递归过滤异步路由表，返回符合用户角色权限的路由表
function filterAsyncRoutes(role, routes = []) {
  const ret = []
  routes.forEach((route) => {
    if (hasPermission(route, role)) {
      const curRoute = {
        ...route,
        children: [],
      }
      if (route.children && route.children.length) {
        curRoute.children = filterAsyncRoutes(role, route.children)
      } else {
        Reflect.deleteProperty(curRoute, 'children')
      }
      ret.push(curRoute)
    }
  })
  return ret
}

export const usePermissionStore = defineStore('permission', {
  state() {
    return {
      accessRoutes: [],
    }
  },
  getters: {
    routes() {
      return basicRoutes.concat(this.accessRoutes)
    },
    menus() {
      const isNeedLogin = import.meta.env.VITE_NEED_LOGIN === 'true'
      // 如果是非登录页面，直接返回所有路由
      if (!isNeedLogin) {
        return asyncRoutes.filter((route) => route.name && !route.isHidden)
      }
      return this.routes.filter((route) => route.name && !route.isHidden)
    },
  },
  actions: {
    generateRoutes(role = []) {
      const accessRoutes = filterAsyncRoutes(role, asyncRoutes)
      this.accessRoutes = accessRoutes
      return accessRoutes
    },
  },
})
