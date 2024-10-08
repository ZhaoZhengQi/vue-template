import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export function setupStore(app) {
  const store = createPinia()
  store.use(piniaPluginPersistedstate) // 使用持久化插件

  app.use(store)
}

export * from './modules'
