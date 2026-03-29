import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddTodo from './component/AddTodo'
import Todos from './component/Todo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Learn About redux toolkit</h1>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App
