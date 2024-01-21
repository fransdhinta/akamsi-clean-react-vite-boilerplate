import type { IInventoryData } from "@/src/data/model/inventory-model"

export type THomeStore = {
  count: number
  increase: () => void
  decrease: () => void
  setCount: (count: number) => void
  reset: () => void
}
