import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

import type { TInventoryStore } from "./types"

export const useInentoryStore = create<TInventoryStore>()((set) => ({
    inventoryList: [],
    setInventoryList: (inventoryData) => set((state) => ({ inventoryList: inventoryData })),
}))

export const usePersistInentoryStore = create(
  persist<TInventoryStore>(
    (set, get) => ({
      inventoryList: [],
      setInventoryList: (inventoryData) => set((state) => ({ inventoryList: inventoryData })),
    }),
    {
      name: "inventory-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
)