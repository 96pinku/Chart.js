import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Dashboard from './components/Dashboard/Dashboard'
import Dashboard from './components/Dashboard/Dashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
    <Dashboard/>
    </div>
    </>
  )
}

export default App