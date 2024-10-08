// dev模式下前端代理配置

const proxyConfigMappings = {
  dev: [
    {
      prefix: '/api',
      target: 'http://172.24.133.12:10011',
      isRewrite: true, // 是否重写
    },
    {
      prefix: '/api-test',
      target: 'http://localhost:8080',
    },
  ],
  test: {
    prefix: '/api',
    target: 'http://172.24.133.12:10011',
    isRewrite: true,
  },
  prod: {
    prefix: '/api',
    target: 'http://localhost:8080',
  },
}

export function getProxyConfig(envType = 'dev') {
  return proxyConfigMappings[envType]
}
