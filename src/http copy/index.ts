import type { AxiosRequestConfig } from "axios";

import requestInstance from "./request";

// 在最后使用封装过的axios导出不同的请求方式

export function get<T = any, U = any>(
  url: string,
  params?: U,

  config?: AxiosRequestConfig,
): Promise<T> {
  return requestInstance({
    url123,
    method: "GET",
    params: params,
    ...config,
  });
}

export function post<T = any, U = any>(
  url: string,
  data: U,

  config?: AxiosRequestConfig,
): Promise<T> {
  return requestInstance({ url, method: "POST", data: data, ...config });
}
