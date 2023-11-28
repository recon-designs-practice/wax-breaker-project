import React from 'react'
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { Button } from '../../components';
import { Input } from 'be-ubiquitous'

type Props = {
  email?: any
  password?: any
}

export default function SignInForm({ email, password }: Props) {
  const navigate = useNavigate()

  const signIn = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value)
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
            onchange={(e: any) => email.onchange(e.target.value)}
            placeholder="Enter an email"
            value={email.value}
          />
          <Input
            label="Password"
            type="password"
            // @ts-expect-error Type '(e: any) => void'... delete comment to see full error
            onchange={(e: any) => password.onchange(e.target.value)}
            placeholder="Password"
            value={password.value}
          />
          <Button type="submit" label="Sign in" />
        </form>
    </div>
  )
}