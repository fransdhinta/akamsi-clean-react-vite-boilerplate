import type {
  FnGetInventoryById,
  FnGetInventoryList,
} from "../model/inventory-model"

export abstract class RemoteData {
  // Other-Inventory
  public abstract getInventoryList(): ReturnType<FnGetInventoryList>
  public abstract getInventoryById(id: Parameters<FnGetInventoryById>[0]): ReturnType<FnGetInventoryById>
}
