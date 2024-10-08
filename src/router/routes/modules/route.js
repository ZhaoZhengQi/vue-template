const Layout = () => import('@/layout/index.vue')

export default [
  {
    name: 'Home',
    path: '/',
    component: Layout,
    redirect: '/homePage',
    meta: {
      title: '示例页面',
      customIcon: 'logo',
      order: 0,
    },
    children: [
      {
        name: 'homePage',
        path: 'homePage',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          icon: '',
          order: 0,
        },
      },
      // {
      //   name: '',
      //   path: '',
      //   component: () => import('@/views/home/index.vue'),
      //   meta: {
      //     title: '首页',
      //     icon: '',
      //     order: 0,
      //   },
      // },
    ],
  },
  {
    name: 'Demo',
    path: '/demo',
    component: Layout,
    redirect: '/demo/echart',
    meta: {
      title: '示例页面',
      customIcon: 'logo',
      role: ['admin'],
      requireAuth: true,
      order: 3,
    },
    children: [
      {
        name: 'echart',
        path: 'echart',
        component: () => import('@/views/demo/echart/index.vue'),
        meta: {
          title: '图表',
          role: ['admin'],
          requireAuth: true,
          keepAlive: true,
        },
      },
      {
        name: 'element',
        path: 'element',
        component: () => import('@/views/demo/elementCps/index.vue'),
        meta: {
          title: 'element组件',
          role: ['admin'],
          requireAuth: true,
          keepAlive: true,
        },
      },
      {
        name: 'test',
        path: 'test',
        // component: () => import('@/views/demo/test/index.vue'),
        meta: {
          title: 'test',
          role: ['admin'],
          requireAuth: true,
          keepAlive: true,
        },
        children: [
          {
            name: 'test1',
            path: 'test1',
            component: () => import('@/views/demo/test/testDemo/index.vue'),
            meta: {
              title: 'test1',
              role: ['admin'],
              requireAuth: true,
              keepAlive: true,
            },
          },
          {
            name: 'test2',
            path: 'test2',
            component: () => import('@/views/demo/test/testDemo2/index.vue'),
            meta: {
              title: 'test2',
              role: ['admin'],
              requireAuth: true,
              keepAlive: true,
            },
          },
        ],
      },
    ],
  },
  {
    name: 'ErrorPage',
    path: '/error-page',
    component: Layout,
    redirect: '/error-page/404',
    meta: {
      title: '错误页',
      icon: '',
      order: 99,
    },
    children: [
      {
        name: 'ERROR-404',
        path: '404',
        component: () => import('@/views/error-page/404.vue'),
        meta: {
          title: '404',
          icon: '',
        },
      },
    ],
  },
  {
    name: 'Base',
    path: '/base',
    component: Layout,
    redirect: '/base/index',
    meta: {
      title: '基础功能',
      icon: '',
      order: 1,
    },
    children: [
      {
        name: 'BaseComponents',
        path: 'index',
        component: () => import('@/views/demo/base/index.vue'),
        meta: {
          title: '基础组件',
          icon: '',
        },
      },
      // {
      //   name: 'KeepAlive',
      //   path: 'keep-alive',
      //   component: () => import('./keep-alive/index.vue'),
      //   meta: {
      //     title: 'KeepAlive',
      //     icon: 'material-symbols:auto-awesome-outline-rounded',
      //     keepAlive: true,
      //   },
      // },
    ],
  },
]
