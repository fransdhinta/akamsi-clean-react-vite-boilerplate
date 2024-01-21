import { Router } from "@tanstack/router"
import {
  InventoryRoute,
  IndexRoute,
  OrderRoute,
  ReportsRoute,
  SettingsRoute,
  TransactionsRoute,
} from "./IndexRoute"
import { rootRoute } from "./RootRoute"

const routeTree = rootRoute.addChildren([
  IndexRoute,
  InventoryRoute,
  OrderRoute,
  ReportsRoute,
  SettingsRoute,
  TransactionsRoute,
])

const router = new Router({ routeTree })

declare module "@tanstack/router" {
  interface Register {
    // This infers the type of our router and registers it across your entire project
    router: typeof router
  }
}

export { router }
