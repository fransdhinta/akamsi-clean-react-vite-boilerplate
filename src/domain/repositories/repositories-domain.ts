import { FnGetInventoryById, FnGetInventoryList } from "../entities/inventory-entity";

export abstract class RepositoriesDomain {
  // INVENTORY
  public abstract getInventoryList(): ReturnType<FnGetInventoryList>
  public abstract getInventoryById(id: Parameters<FnGetInventoryById>[0]): ReturnType<FnGetInventoryById>
}
