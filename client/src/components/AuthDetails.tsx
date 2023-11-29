import React from "react";
import useBreaksStore from "../stores/store";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function AuthDetails() {
  const authUser = useBreaksStore((state) => state.currentUser);
  const setAuthUser = useBreaksStore((state) => state.setCurrentUser)

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successful.")
        setAuthUser(null)
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <div>
          <p>Signed in as {authUser.email}</p>
          <button onClick={userSignOut}>Sign out</button>
        </div>
      ) : (
        <p>Signed out</p>
      )}
    </div>
  );
}
