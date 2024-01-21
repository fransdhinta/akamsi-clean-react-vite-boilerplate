import type { AxiosResponse } from "axios"
import type * as E from "fp-ts/Either"

import type {
  IInventory,
  IInventoryList,
} from "@/src/data/model/inventory-model"

// WITH AXIOS RESPONSE (REMOTE)
// export type FnGetInventoryById = (id: string,token: string) => Promise<E.Either<string, AxiosResponse<IInventory>>>
// export type FnGetInventoryList = (id: string,token: string) => Promise<E.Either<string, AxiosResponse<IInventoryList>>>

// LOCAL DATA
export type FnGetInventoryById = (id: string,token: string) => Promise<E.Either<string, IInventory>>
export type FnGetInventoryList = (id: string,token: string) => Promise<E.Either<string, IInventoryList>>
