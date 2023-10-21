import Header from './components/header/Header'

const links = [
  { 
    linkText: 'Link 1', 
    path: 'sign-in' 
  },
  { 
    linkText: 'Link 2', 
    path: 'dashboard' 
  }
]

function App() {
  return (
    <div>
      <Header title='Hello world' links={links} />
    </div>
  )
}

export default App
