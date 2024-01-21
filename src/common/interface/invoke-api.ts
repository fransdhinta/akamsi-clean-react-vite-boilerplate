export interface IInvokeApi {
  type: "get" | "post"
  data?: object | null
  api: string
  headers?: object | null
}
