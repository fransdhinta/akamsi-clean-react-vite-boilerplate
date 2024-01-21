import { Route } from "@tanstack/router"

import Inventory from "@/src/presentation/pages/inventory"

import Home from "../../presentation/pages/Home.tsx"

import { rootRoute } from "./RootRoute.tsx"

export const IndexRoute = new Route({
  getParentRoute: (): typeof rootRoute => rootRoute,
  path: "/",
  component: Home,
})

export const InventoryRoute = new Route({
  getParentRoute: (): typeof rootRoute => rootRoute,
  path: "/inventory",
  component: Inventory,
})

export const OrderRoute = new Route({
  getParentRoute: (): typeof rootRoute => rootRoute,
  path: "/order",
  component: Inventory,
})

export const TransactionsRoute = new Route({
  getParentRoute: (): typeof rootRoute => rootRoute,
  path: "/transactions",
  component: Inventory,
})

export const ReportsRoute = new Route({
  getParentRoute: (): typeof rootRoute => rootRoute,
  path: "/reports",
  component: Inventory,
})

export const SettingsRoute = new Route({
  getParentRoute: (): typeof rootRoute => rootRoute,
  path: "/settings",
  component: Inventory,
})
