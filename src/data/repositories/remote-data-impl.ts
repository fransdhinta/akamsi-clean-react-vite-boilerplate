import type { AxiosResponse } from "axios"

import { invokeApi } from "@/src/common/hooks/use-invoke-api"
import { RemoteData } from "../datasource/remote-data"
import {
  IInventoryList,
  IInventory,
  IInventoryData,
} from "../model/inventory-model"
import moment from "moment"
import { faker } from "@faker-js/faker"

export class RemoteDataImpl extends RemoteData {
  public override async getInventoryList(): Promise<IInventoryList> {
    const createFakeData = (): IInventoryData => {
      return {
        id: faker.string.uuid(),
        created_at: moment(faker.date.past()).format("DD MM YYYY"),
        updated_at: moment(faker.date.past()).format("DD MM YYYY"),
        description: faker.animal.type(),
        name: faker.animal.insect(),
        image: faker.image.url(),
        price: +faker.commerce.price({min: 1000, max: 999999})
      }
    }
    return (async () => ({
      data: faker.helpers.multiple(createFakeData, {
        count: 30,
      }),
      ok: true,
    }))()
  }
  public override getInventoryById(id: string): Promise<IInventory> {
    const createFakeData = (): IInventoryData => {
      return {
        id: id,
        created_at: moment(faker.date.past()).format("DD MM YYYY"),
        updated_at: moment(faker.date.past()).format("DD MM YYYY"),
        description: faker.animal.type(),
        name: faker.animal.insect(),
        image: faker.image.url(),
        price: +faker.commerce.price({min: 1000, max: 999999})
      }
    }
    return (async () => ({
      data: createFakeData(),
      ok: true,
    }))()
  }
  
  // public override async getRemoteData(
  //   id: string,
  //   token: string
  // ): Promise<AxiosResponse<IDataModel, any>> {
  //   return await invokeApi({
  //     type: "get",
  //     headers: {
  //       Authorization: "Bearer " + token,
  //     },
  //     api: "path/" + id,
  //   })
  // }
}
