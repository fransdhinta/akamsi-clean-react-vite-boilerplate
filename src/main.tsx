import "reflect-metadata"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "@mantine/core/styles.css"
import "./presentation/utils/styles/tailwind.css"

const rootElement = document.querySelector("#root") as Element
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
