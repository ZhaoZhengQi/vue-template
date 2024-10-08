// import { useUserPiniaStore } from "@/store";

// 添加基础参数
export function addBaseParams(params) {
  if (!params.userId) {
    // params.userId = useUserPiniaStore().userId;
  }
}

// 处理请求错误
export function resolveResError(code, message) {
  switch (code) {
    case 400:
      message = message ?? '请求参数错误'
      break
    case 401:
      message = message ?? '登录已过期'
      // useUserPiniaStore().logout();
      break
    case 403:
      message = message ?? '没有权限'
      break
    case 404:
      message = message ?? '资源或接口不存在'
      break
    case 500:
      message = message ?? '服务器异常'
      break
    default:
      message = message ?? `【${code}】: 未知异常!`
      break
  }
  return message
}
