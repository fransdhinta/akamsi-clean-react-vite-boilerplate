import "reflect-metadata"
import { useForm } from "react-hook-form"
import { SearchSchema, searchSchema } from "../../utils/formSchema/searchbar"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCallback, useEffect, useState } from "react"
import debounce from "lodash/debounce"
import InventoryUsecase from "../../../domain/usecase/inventory/get-inventory-usecase"
import { RemoteDataImpl } from "../../../data/repositories/remote-data-impl"
import { useInentoryStore } from "./store"

const handleSearch = (query: string) => {
  console.log("JKW", query)
}
export const useInventory = () => {
  const InventoryUsecaseInstance = new InventoryUsecase(new RemoteDataImpl())
  const { control, watch } = useForm<SearchSchema>({
    resolver: zodResolver(searchSchema),
  })

  const { inventoryList, setInventoryList } = useInentoryStore()

  const debouncedHandleSearch = useCallback(debounce(handleSearch, 700), [])

  useEffect(() => {
    return debouncedHandleSearch(watch("searchValue"))
  }, [watch("searchValue")])

  const getInventoryListData = async () => {
    const result = await InventoryUsecaseInstance.getInventoryList()
    if (result._tag === "Right") {
      setInventoryList(result.right.data)
    }

    console.log("JOKOWI:", result)
  }

  useEffect(() => {
    getInventoryListData()
  }, [])

  const filters = [
    { val: "ALL", text: "All Item" },
    { val: "CAT_1", text: "Cat 1" },
    { val: "CAT_2", text: "Cat 2" },
    { val: "CAT_3", text: "Cat 3" },
  ]

  const [filterValue, setFilterValue] = useState("ALL")

  return { control, watch, filterValue, setFilterValue, inventoryList, filters }
}
