import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Currencyinput from "./components/currencyinput";
import Button from "./components/button";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" bg-[url(https://images.pexels.com/photos/6770775/pexels-photo-6770775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-center bg-cover h-screen maxw-[100%] w-full ">
        <div className=" relative flex justify-center">
         
          <div className="  absolute r pt-[7rem]">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl py-10 px-6 w-[40rem]">
              <div className="mt-5 relative space-y-3">
                <Currencyinput />
                <Button />
                <Currencyinput />
              </div>
              <button className="w-full mt-5    bg-blue-600 text-2xl text-white py-3 px-5 rounded-xl hover:bg-blue-900 transition duration-300">
                convert
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
