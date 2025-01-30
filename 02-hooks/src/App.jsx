import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setcounter] = useState(8)
const addValue=()=>{
  console.log("value added");
  setcounter(counter+1)
  
}
const removeValue=()=>{
  console.log("value removed");
  setcounter(counter-1)
}
if (counter==-1) {
  setcounter(0)
}else 
if (counter==21) {
  setcounter(20)

}

  return (
    <>
    <h1>code aur react</h1>
    <h1>{counter}</h1>
    <h2>counter value : {counter}</h2>
    <button onClick={addValue}>add value</button>
    <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
