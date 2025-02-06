import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <>
      <div className="bg-slate-900 transition duration-500 h-screen"
        style={{ backgroundColor: color }}>
        <div className="relative flex justify-center">
          <div className="bg-slate-400 rounded-3xl fixed bottom-5 flex px-5 py-4 text-2xl  space-x-4 text-white">
            <button onClick={() => setcolor("red")} className='bg-red-800 w-[8rem] transition duration-150 hover:scale-110 rounded-3xl h-10'>red</button>
            <button onClick={() => setcolor("yellow")} className='bg-yellow-900 w-[8rem] transition duration-150 hover:scale-110 rounded-3xl h-10'>yellow</button>
            <button onClick={() => setcolor("green")} className='bg-green-900 w-[8rem] transition duration-150 hover:scale-110 rounded-3xl h-10'>green</button>
            <button onClick={() => setcolor("pink")} className='bg-pink-900 w-[8rem] transition duration-150 hover:scale-110 rounded-3xl h-10'>pink</button>
            <button onClick={() => setcolor("blue")} className='bg-blue-900 w-[8rem] transition duration-150 hover:scale-110 rounded-3xl h-10'>blue</button>
            <button onClick={() => setcolor("brown")} className='bg-amber-900 w-[8rem] transition duration-150 hover:scale-110 rounded-3xl h-10'>brown</button>
            <button onClick={() => setcolor("black")} className=' bg-black w-[8rem] transition duration-150 hover:scale-110 rounded-3xl h-10'>black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
