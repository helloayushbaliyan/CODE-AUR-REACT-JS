import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [lengh, setlengh] = useState(10)
  const [numberallowed, setnumberallowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [password, setpassword] = useState("")
  return (
    <>
      <div className="bg-slate-900  h-screen">
        <div className="flex justify-center text-white pt-5 capitalize ">

          <div className="">
            <h1 className='text-5xl text-center text-green-600'>password generator</h1>
            <div className="bg-slate-700  p-[1rem] mt-20">
              <div className="flex rounded-2xl overflow-hidden">
                <input className='bg-white h-[3rem] text-2xl text-black pl-4 outline-0 w-full' type="text" />
                <button className='w-[5rem] bg-slate-950'>copy</button>
              </div>
              <div className=" mt-5 capitalize text-xl flex space-x-4">
                <div className="space-x-1.5">
                  <input className='mt-2' type="range" />
                  <label htmlFor="">length({lengh})</label>
                </div>
                <div className="space-x-2">
                  <input className='mt-2 scale-150' type="checkbox" />
                  <label htmlFor="">number</label>
                </div>
                <div className="space-x-2">
                  <input className='mt-2 scale-150' type="checkbox" />
                  <label htmlFor="">characters</label>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
