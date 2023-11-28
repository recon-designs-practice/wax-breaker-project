import React from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

type Props = {
  message: string
}

const Signin = (props: Props) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const signIn = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {props.message}
      <form onSubmit={signIn}>
        <h1>Log in</h1>
        <input type='email' placeholder='Enter an email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='Enter a password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button>Log in</button>
      </form>
    </div>
  )
}

export default Signin