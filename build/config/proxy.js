import { getProxyConfig } from '../../settings'
import { isArray } from '../../src/utils/common/is'

const httpsReg = /^https:\/\//

export function createViteProxy(proxyType, isUseProxy = true) {
  if (!isUseProxy) return undefined
  let proxy = {}
  const proxyConfig = getProxyConfig(proxyType)
  // console.log(proxyConfig, proxyType);
  // 判断是否为数组 多个配置
  if (isArray(proxyConfig)) {
    for (const { prefix, target, isRewrite } of proxyConfig) {
      // 是否为https
      const isHttps = httpsReg.test(target)
      // https://github.com/http-party/node-http-proxy#options
      proxy[prefix] = {
        target,
        changeOrigin: true,
        ws: true,
        rewrite: (path) =>
          path.replace(new RegExp(`^${prefix}`), isRewrite ? `${prefix}` : ''),
        // https is require secure=false
        ...(isHttps ? { secure: false } : {}),
      }
    }
  } else {
    proxy = {
      [proxyConfig.prefix]: {
        target: proxyConfig.target,
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(
            new RegExp(`^${proxyConfig.prefix}`),
            proxyConfig.isRewrite ? `${proxyConfig.prefix}` : '',
          ),
      },
    }
  }
  return proxy
}
