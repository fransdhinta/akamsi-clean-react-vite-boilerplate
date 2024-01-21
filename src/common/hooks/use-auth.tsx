import { useLocalStorage } from "@mantine/hooks"

const useAuth = () => {
  return useLocalStorage({
    key: "auth",
    defaultValue: "",
  })
}

export default useAuth
