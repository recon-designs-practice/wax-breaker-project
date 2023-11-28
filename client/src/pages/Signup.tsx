import React from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import AuthDetails from '../components/AuthDetails'

const Signup = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const signUp = (e: any) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={signUp}>
        <h1>Sign up</h1>
        <input type='email' placeholder='Enter an email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='Enter a password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button>Sign up</button>
      </form>
      <AuthDetails />
    </div>
  )
}

export default Signup