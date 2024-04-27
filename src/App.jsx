import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Square from './components/Square'
import Board from './components/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className='bg-slate-600 p-4 w-fit rounded-lg m-auto'>Hello World!</p>
      <Board></Board>
      
    </>
  )
}

export default App
