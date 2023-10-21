import React from "react"
import ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
// import App from "./App"
import Root from "./routes/root"
import ErrorPage from "./error-page"
import Signin from "./pages/Signin"
import Dashboard from "./pages/Dashboard"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/sign-in',
        element: <Signin message='This is the sign in page.' />
      },
      {
        path: '/dashboard',
        element: <Dashboard message="This is the dashboard page." />
      }
    ]
  },
  // {
  //   path: '/dashboard',
  //   element: <Dashboard message="This is the dashboard page." />
  // }
])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
