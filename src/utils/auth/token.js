import { lStorage } from '@/utils'
// import api from '@/api/auth'

// token key
const TOKEN_CODE = 'access_token'
// token 有效期
const DURATION = 6 * 60 * 60

// 获取token
export function getToken() {
  return lStorage.get(TOKEN_CODE)
}

// 设置token
export function setToken(token) {
  lStorage.set(TOKEN_CODE, token, DURATION)
}

// 移除token
export function removeToken() {
  lStorage.remove(TOKEN_CODE)
}

// 刷新token
export async function refreshAccessToken() {
  const tokenItem = lStorage.getItem(TOKEN_CODE)
  if (!tokenItem) {
    return
  }
  const { time } = tokenItem
  // token生成或者刷新后30分钟内不执行刷新
  if (new Date().getTime() - time <= 1000 * 60 * 30) return
  try {
    // 更新token的接口
    // const res = await api.refreshToken()
    // setToken(res.data.token)
  } catch (error) {
    console.log(error)
  }
}
