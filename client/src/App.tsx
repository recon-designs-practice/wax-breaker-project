import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import styled from "@emotion/styled";
import useAuthStore from "./stores/authStore";
import { Dashboard, Signin, Signup, ErrorPage, BreakPage } from "./pages";
import { ProtectedRoute, Header } from "./components";

const AppContainer = styled("div")({
  padding: "0px 20px",
  height: "100vh",

  "@media (min-width: 768px)": {
    padding: "0px 40px",
  },
});

function App() {
  const setAuthUser = useAuthStore((state) => state.setCurrentUser);

  React.useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return listen;
  }, [setAuthUser]);

  return (
    <AppContainer>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
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
            path="/box-break/:breakId"
            element={
              <ProtectedRoute>
                <BreakPage />
              </ProtectedRoute>
            }
            errorElement={<ErrorPage />}
          />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
