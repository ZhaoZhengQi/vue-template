import { createStorage } from './storage'

// 设置前缀 prefixKey
const prefixKey = 'Vue_Vite_'

// 创建 localStorage 和 sessionStorage 实例

export const createLocalStorage = function (option = {}) {
  return createStorage({
    prefixKey: option.prefixKey || '',
    storage: localStorage,
  })
}

export const createSessionStorage = function (option = {}) {
  return createStorage({
    prefixKey: option.prefixKey || '',
    storage: sessionStorage,
  })
}
// 导出 localStorage 和 sessionStorage 实例

export const lStorage = createLocalStorage({ prefixKey })

export const sStorage = createSessionStorage({ prefixKey })
