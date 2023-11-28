import React from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

type Props = {};

export default function AuthDetails({}: Props) {
  const [currentUser, setCurrentUser] = React.useState(null);

  React.useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        // @ts-expect-error
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return listen;
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => console.log('Sign out successful.'))
      .catch(error => console.log(error))
  }

  return (
    <div>
      {currentUser ? (
        <div>
          {/** @ts-expect-error */}
          <p>Signed in as {currentUser.email}</p>
          <button onClick={userSignOut}>Sign out</button>
        </div>
      ) : (
        <p>Signed out</p>
      )}
    </div>
  );
}
