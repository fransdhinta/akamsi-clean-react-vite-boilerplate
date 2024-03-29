// Generated by https://quicktype.io

// import type { AxiosResponse } from "axios"

export interface IInventoryData {
  id: string
  created_at: string
  updated_at: string
  name: string
  description: string
  image: string | null
  price: number
}

export interface IInventory {
  data: IInventoryData
  ok: boolean
}

export interface IInventoryList {
  data: Array<IInventoryData>
  ok: boolean
}

// EXAMPLE WITH AXIOS RESPONSE
// export type FnGetInventoryById = (id: string, token: string) => Promise<AxiosResponse<IInventory>>
// export type FnGetInventoryList = (id: string, token: string) => Promise<AxiosResponse<IInventoryList>>

// LOCAL DATA
export type FnGetInventoryById = (id: string) => Promise<IInventory>
export type FnGetInventoryList = () => Promise<IInventoryList>
