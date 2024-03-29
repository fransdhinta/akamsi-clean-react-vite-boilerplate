import { Outlet, RootRoute } from "@tanstack/router"
import type { FunctionComponent } from "../types"

export const rootRoute = new RootRoute({
  component: (): FunctionComponent => <Outlet />,
})
