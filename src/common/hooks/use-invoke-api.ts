import type { AxiosRequestConfig } from "axios"
import axios from "axios"

import type { IInvokeApi } from "../interface/invoke-api"
import { BE_URL } from "../constant"

export const invokeApi = async ({ type, data, api, headers }: IInvokeApi) => {
  const config: AxiosRequestConfig = {
    method: type,
    url: BE_URL + api,
    headers: {
      "Content-Type": "application/json",
      ...(headers && { ...headers }),
    },
    ...(data && { data: JSON.stringify(data) }),
  }

  const results = await axios.request(config)

  return results
}
