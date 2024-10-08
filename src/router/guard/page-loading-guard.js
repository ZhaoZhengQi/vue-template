import NProgress from 'nprogress'
// Progress 进度条
NProgress.configure({ minimum: 0.01 })
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })
// 处理全局loading-bar
export function createPageLoadingGuard(router) {
  // 页面路由刚开始切换的时候
  router.beforeEach(() => {
    // window.$loadingBar?.start();
    // 开启进度条
    NProgress.start()
  })
  // 页面路由切换完毕的时候
  router.afterEach(() => {
    setTimeout(() => {
      // 关闭进度条
      // window.$loadingBar?.finish();
      NProgress.done()
    }, 200)
  })

  router.onError(() => {
    // window.$loadingBar?.error();
  })
}
