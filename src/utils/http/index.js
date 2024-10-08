import axios from 'axios'
import { resReject, resResolve, reqReject, reqResolve } from './interceptors'

// 创建axios实例
export function createAxios(options = {}) {
  // 默认配置
  const defaultOptions = {
    timeout: 12000,
  }
  // 合并配置
  const service = axios.create({
    ...defaultOptions,
    ...options,
  })
  // 请求拦截器
  service.interceptors.request.use(reqResolve, reqReject)
  // 响应拦截器
  service.interceptors.response.use(resResolve, resReject)
  // 返回axios实例
  return service
}

// export const request = createAxios({
//   baseURL: import.meta.env.VITE_BASE_API,
// })

// 默认的axios
export const defAxios = createAxios()

// 测试的axios
export const testAxios = createAxios({
  baseURL: import.meta.env.VITE_APP_BASE_API_TEST,
})
