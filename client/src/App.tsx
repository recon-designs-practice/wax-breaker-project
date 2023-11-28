import React from "react";
import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import ErrorPage from "./error-page";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import HiddenPage from "./pages/HiddenPage";

// @ts-expect-error
const PrivateRoutes = ({ children }) => {
  const [authUser, setAuthUser] = React.useState(true);

  React.useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(true);
      } else {
        setAuthUser(false);
      }
    });

    return listen;
  });

  return authUser ? children : <Navigate to="/sign-in" />;
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoutes>
                <Dashboard />
              </PrivateRoutes>
            }
            errorElement={<ErrorPage />}
          />
          <Route
            path="/sign-in"
            element={<Signin />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/sign-up"
            element={<Signup />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/hidden-page"
            element={
              <PrivateRoutes>
                <HiddenPage />
              </PrivateRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
