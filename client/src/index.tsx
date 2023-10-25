import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import ErrorPage from "./error-page"
import Signin from "./pages/Signin"
import Dashboard from "./pages/Dashboard"
import { BreaksProvider } from "./contexts/BreaksContext"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sign-in",
    element: <Signin message="This is the sign in page." />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <BreaksProvider>
      <RouterProvider router={router} />
    </BreaksProvider>
  </React.StrictMode>
)
