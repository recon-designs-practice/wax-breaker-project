import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Input, Button } from "be-ubiquitous";
import AuthDetails from "../components/AuthDetails";

const Signin = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const signIn = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={signIn}>
        <h1>Sign in</h1>
        <Input
          label="Email"
          type="email"
          // @ts-expect-error Type '(e: any) => void'... delete comment to see full error
          onchange={(e: any) => setEmail(e.target.value)}
          placeholder="Enter an email"
          value={email}
        />
        <Input
          label="Password"
          type="password"
          // @ts-expect-error Type '(e: any) => void'... delete comment to see full error
          onchange={(e: any) => setPassword(e.target.value)}
          placeholder="Password"
          value={password}
        />
        <Button type="submit" label="Sign in" />
      </form>
      <AuthDetails />
    </div>
  );
};

export default Signin;
