/** 重置样式 */
import '@/styles/reset.css'

import { createApp } from 'vue'
import { globalRegister } from './global'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'

import 'nprogress/nprogress.css' // Progress 进度条样式

import App from './App.vue'

const setupApp = async () => {
  const app = createApp(App)

  setupStore(app)

  await setupRouter(app)
  app.use(globalRegister)
  app.mount('#app')
}

setupApp()
