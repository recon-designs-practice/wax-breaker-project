import React from "react";
import ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider
// } from "react-router-dom";
// @ts-expect-error Module '"@emotion/react"' has no exported member 'ThemeProvider'.
import { ThemeProvider } from "@emotion/react";
import App from "./App";
// import Dashboard from "./pages/Dashboard";
// import ErrorPage from "./error-page";
// import Signin from "./pages/Signin";
// import Signup from "./pages/Signup";
// import HiddenPage from "./pages/HiddenPage";
import defaultTheme from "./components/theme/defaultTheme";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/dashboard",
//     element: <Dashboard />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/sign-in",
//     element: <Signin message="This is the sign in page." />,
//   },
//   {
//     path: "/sign-up",
//     element: <Signup message="This is the sign up page." />,
//   },
//   {
//     path: "/hidden-page",
//     element: <HiddenPage />,
//   }
// ])

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <ThemeProvider theme={defaultTheme}>
      <App />
      {/* <RouterProvider router={router} /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} errorElement={<ErrorPage />} />
          <Route
            path="/dashboard"
            element={<Dashboard />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/sign-in"
            element={<Signin message="This is the sign in page." />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/sign-up"
            element={<Signup message="This is the sign in page." />}
            errorElement={<ErrorPage />}
          />
          <Route path="/hidden-page" element={<HiddenPage />} />
        </Routes>
      </BrowserRouter> */}
    </ThemeProvider>
  </>
);
