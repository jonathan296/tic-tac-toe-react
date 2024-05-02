import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Square from './components/Square'
import Board from './components/Board'
import NewGameMenu from './components/NewGameMenu'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/' element={<NewGameMenu/>}></Route>
        <Route path='/game' element={<Board></Board>}></Route>
      </Routes>
      
     
    </div>
  )
}

export default App
