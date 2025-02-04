import { useState } from 'react'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myobj = {
    username:"Ayush Baliyan",
    btntxt:"click me"
  }
  let otherobj = {
    username:"vikas jawla",
    

  }
  return (
    <>

      <div className=" grid h-screen w-full place-content-center ">

        <div className="flex gap-5">
          <Card name={myobj.username} btntext={myobj.btntxt}/>
          <Card name={otherobj.username} btntext={otherobj.btntxt} />

        </div>
      </div>
    </>
  )
}

export default App
