import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

import type { THomeStore } from "./types"

export const useCounterStore = create<THomeStore>()((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  setCount: (count) => set((state) => ({ count: count })),
  reset: () => set((state) => ({ count: 0 })),
}))

export const usePersistCounterStore = create(
  persist<THomeStore>(
    (set, get) => ({
      count: 0,
      increase: () => set((state) => ({ count: state.count + 1 })),
      decrease: () => set((state) => ({ count: state.count - 1 })),
      setCount: (count) => set((state) => ({ count: count })),
      reset: () => set((state) => ({ count: 0 })),
    }),
    {
      name: "counter-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
)
