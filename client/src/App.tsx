import Header from './components/header/Header'

const links = [
  { 
    linkText: 'Sign in', 
    path: 'sign-in' 
  },
  { 
    linkText: 'Dashboard', 
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
