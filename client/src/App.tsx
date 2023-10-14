import React, { useState } from 'react'
import Button from "./components/button/Button"
import { Input } from "be-ubiquitous"

function App() {
  const [inputValue, setInputValue] = useState('')

  return (
    <div>
      <h1>Hello world</h1>
      <p>{inputValue}</p>
      <Button label="Labelssss" type="button"  onClick={() => alert('fired')}  />
      {/** @ts-expect-error Type '(e: React.ChangeEvent<HTMLInputElement>) => void' is not (delete for full error */}
      <Input label='First name' caption='Just the first name only' value={inputValue} onchange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)} />
    </div>
  )
}

export default App
