import { defAxios as request } from '@/utils/http'

export function getAllSource(params = {}) {
  return request({
    url: '/api/realtimeMonitor/getAllSource',
    method: 'put',
    params,
  })
}
