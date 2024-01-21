import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { RouterProvider } from "@tanstack/router"
import type { FunctionComponent } from "./common/types"
import { router } from "./common/routes"
import { TanStackRouterDevelopmentTools } from "./presentation/components/utils/development-tools/TanStackRouterDevelopmentTools"

import { MantineProvider, createTheme } from "@mantine/core"
import { Toaster } from "react-hot-toast"
const queryClient = new QueryClient()

const theme = createTheme({
  colors: {
    brand: [
      "#F0BBDD",
      "#ED9BCF",
      "#EC7CC3",
      "#ED5DB8",
      "#F13EAF",
      "#F71FA7",
      "#FF00A1",
      "#E00890",
      "#C50E82",
      "#AD1374",
    ],
    brandYellow: [
      "#FFF8E5",
      "#FFF1CC",
      "#FFE9B2",
      "#FFE199",
      "#FFD97F",
      "#FFD066",
      "#FFC84C",
      "#FFC033",
      "#FFB819",
      "#FFB000",
    ],
  },
})

const App = (): FunctionComponent => {
  return (
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <TanStackRouterDevelopmentTools
          router={router}
          initialIsOpen={false}
          position="bottom-right"
        />
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster />
      </QueryClientProvider>
    </MantineProvider>
  )
}

export default App
