import { getToken, refreshAccessToken, isNullOrWhitespace } from '@/utils'

const WHITE_LIST = ['/login', '/404']
export function createPermissionGuard(router) {
  router.beforeEach(async (to) => {
    const isNeedLogin = import.meta.env.VITE_NEED_LOGIN === 'true'
    if (isNeedLogin) {
      // 写判断是否需要login
      const token = getToken()
      /** 没有token的情况 */
      if (isNullOrWhitespace(token)) {
        if (WHITE_LIST.includes(to.path)) return true
        return { path: 'login', query: { ...to.query, redirect: to.path } }
      }

      /** 有token的情况 */
      if (to.path === '/login') return { path: '/' }

      refreshAccessToken()
      return true
    }
    if (to.path === '/login') return { path: '/' }
    return true
  })
}
