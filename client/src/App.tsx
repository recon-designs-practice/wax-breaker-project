import Button from "./components/button/Button"

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <Button label="Labelssss" type="button"  onClick={() => alert('fired')}  />
    </div>
  )
}

export default App
