import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";
import { Dashboard, Signin, Signup, ErrorPage } from "./pages";
import { ProtectedRoute, Header } from "./components";

const AppContainer = styled("div")({
  padding: "0px 20px",
  height: "100vh",

  "@media (min-width: 768px)": {
    padding: "0px 40px",
  },
});

function App() {
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
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
