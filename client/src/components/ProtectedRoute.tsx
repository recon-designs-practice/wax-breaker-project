import React from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

// type ProtectedRouteProps = {
//   children?: React.ReactElement | React.ReactElement[]
// };

const ProtectedRoute = ({ children }: any) => {
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

export default ProtectedRoute