// import { getToken } from "@/utils";
import NProgress from 'nprogress'
import { resolveResError } from './helpers'
// 引入nprogress 进度条插件
// 导出请求拦截器
export function reqResolve(config) {
  // 处理不需要token的请求
  if (config.noNeedToken) {
    return config
  }

  // 防止缓存，给get请求加上时间戳
  if (config.method === 'get') {
    config.params = { ...config.params, t: new Date().getTime() }
  }

  // 验证token
  // const token = getToken();
  // if (!token) {
  //   return Promise.reject({ code: 401, message: "登录已过期，请重新登录！" });
  // }

  /**
   * * 加上 token
   * ! 认证方案: JWT Bearer
   */
  // config.headers.Authorization =
  //   config.headers.Authorization || "Bearer " + token;
  NProgress.start()
  return config
}

// 导出请求拦截器错误处理
export function reqReject(error) {
  return Promise.reject(error)
}

// 导出响应拦截器
export function resResolve(response) {
  // TODO: 处理不同的 response.headers
  const { data, status, config, statusText } = response
  if (data?.code !== 200) {
    // console.log("data?.code", data?.code !== 0);
    const code = data?.code ?? status

    /** 根据code处理对应的操作，并返回处理后的message */
    const message = resolveResError(code, data?.message ?? statusText)

    /** 需要错误提醒 */
    console.log('config.noNeedTip', config)
    // !config.noNeedTip && $message(message);
    ElMessage('this is a message.')
    return Promise.reject({ code, message, error: data || response })
  }
  NProgress.done()
  return Promise.resolve(data)
}

// 导出响应拦截器错误处理
export function resReject(error) {
  if (!error || !error.response) {
    const code = error?.code
    /** 根据code处理对应的操作，并返回处理后的message */
    const message = resolveResError(code, error.message)
    // $message?.error(message);
    return Promise.reject({ code, message, error })
  }
  const { data, status, config } = error.response
  const code = data?.code ?? status
  const message = resolveResError(code, data?.message ?? error.message)
  /** 需要错误提醒 */
  console.log(config)
  // !config?.noNeedTip && $message.error(message);
  NProgress.done()
  return Promise.reject({
    code,
    message,
    error: error.response?.data || error.response,
  })
}
