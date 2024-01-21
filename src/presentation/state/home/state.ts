import { useCounterStore, usePersistCounterStore } from "./store"

export const useHome = () => {
  const { count, decrease, increase, reset, setCount } = useCounterStore()
  const {
    count: persistCount,
    decrease: persistDecrease,
    increase: persistIncrease,
    reset: persistReset,
    setCount: persistSetCount,
  } = usePersistCounterStore()

  return {
    // base
    count,
    decrease,
    increase,
    reset,
    setCount,
    // persist
    persistCount,
    persistDecrease,
    persistIncrease,
    persistReset,
    persistSetCount,
  }
}
