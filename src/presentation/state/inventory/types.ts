import type { IInventoryData } from "@/src/data/model/inventory-model"

export type TInventoryStore = {
  inventoryList: Array<IInventoryData>
  setInventoryList: (data: Array<IInventoryData>) => void
}