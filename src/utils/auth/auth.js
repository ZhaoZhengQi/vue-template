import { unref } from 'vue'
import { router } from '@/router'

// 去登录
export function toLogin() {
  const currentRoute = unref(router.currentRoute)
  const needRedirect =
    !currentRoute.meta.requireAuth &&
    !['/404', '/login'].includes(router.currentRoute.value.path)
  router.replace({
    path: '/login',
    query: needRedirect
      ? { ...currentRoute.query, redirect: currentRoute.path }
      : {},
  })
}

// 去404
export function toFourZeroFour() {
  router.replace({
    path: '/404',
  })
}
