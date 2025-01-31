import { useState } from 'react'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <div className=" grid h-screen w-full place-content-center ">

        <div className="flex gap-5">
          <Card />
          <Card />
          

        </div>
      </div>
    </>
  )
}

export default App
