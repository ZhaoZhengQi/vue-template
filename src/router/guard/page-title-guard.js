// 动态修改页面title
const baseTitle = import.meta.env.VITE_APP_TITLE
// 路由标题title
export function createPageTitleGuard(router) {
  router.afterEach((to) => {
    const pageTitle = to.meta?.title
    if (pageTitle) {
      document.title = `${pageTitle} | ${baseTitle}`
    } else {
      document.title = baseTitle
    }
  })
}
