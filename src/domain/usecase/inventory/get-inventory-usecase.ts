import type { AxiosResponse } from "axios"
import * as E from "fp-ts/Either"

import type { RemoteDataImpl } from "../../../data/repositories/remote-data-impl"
import { RepositoriesDomain } from "../../repositories/repositories-domain"
import { IInventoryList, IInventory } from "@/src/data/model/inventory-model"

export default class InventoryUsecase extends RepositoriesDomain {
  public override async getInventoryList(): Promise<E.Either<string, IInventoryList>> {
    try {
      return E.right(await this.repositoriesDomain.getInventoryList())
    } catch {
      return E.left("ERROR")
    }
  }
  public override async getInventoryById(id: string): Promise<E.Either<string, IInventory>> {
    try {
      return E.right(await this.repositoriesDomain.getInventoryById(id))
    } catch {
      return E.left("ERROR")
    }
  }

  private readonly repositoriesDomain: RemoteDataImpl
  public constructor(public remoteDataImpl: RemoteDataImpl) {
    super()
    this.repositoriesDomain = remoteDataImpl
  }
}
