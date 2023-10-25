import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
// @ts-expect-error
import { ThemeProvider } from "@emotion/react"
import { BreaksProvider } from "./contexts/BreaksContext"
import Dashboard from "./pages/Dashboard"
import ErrorPage from "./error-page"
import Signin from "./pages/Signin"

const theme = {
  color: {
    primary: 'purple'
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sign-in",
    element: <Signin message="This is the sign in page." />,
  }
])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <BreaksProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </BreaksProvider>
  </React.StrictMode>
)
