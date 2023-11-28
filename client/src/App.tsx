import React from "react";
import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import styled from "@emotion/styled";
import { Dashboard, Signin, Signup, ErrorPage } from "./pages";
import { Header } from "./components";

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

const AppContainer = styled("div")({
  padding: "0px 20px",
  height: "100vh",

  "@media (min-width: 768px)": {
    padding: "0px 40px"
  },
});

function App() {
  return (
    <AppContainer>
      <Header />
      <main>
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
          </Routes>
        </BrowserRouter>
      </main>
    </AppContainer>
  );
}

export default App;
