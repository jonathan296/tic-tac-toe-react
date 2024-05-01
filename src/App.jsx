import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Square from './components/Square'
import Board from './components/Board'
import NewGameMenu from './components/NewGameMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <NewGameMenu></NewGameMenu>
      
    </div>
  )
}

export default App
