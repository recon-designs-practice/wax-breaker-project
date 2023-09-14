import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from '@emotion/react'
import App from "./App"
import { defaultTheme } from "./components/themes"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
