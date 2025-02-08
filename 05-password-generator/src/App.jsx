import { useCallback, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useEffect } from "react";

function App() {
  const [length, setlength] = useState(10);
  const [numberallowed, setnumberallowed] = useState(false);
  const [charallowed, setcharallowed] = useState(false);
  const [password, setpassword] = useState("");
  const refrence = useRef(null);

  // main function to generate password

  let passwordGenerator = useCallback(() => {
    let genPassword = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberallowed) str += "0123456789";
    if (charallowed) str += "@#$%^&*(){}:>?<";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      genPassword += str.charAt(char);
    }

    setpassword(genPassword);
  }, [length, numberallowed, charallowed, setpassword]);

  // copy to clip board function

  const copytoclipboard = useCallback(() => {
    refrence.current?.select();
    refrence.current?.setSelectionRange(0,length);

    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberallowed, charallowed, passwordGenerator]);

  return (
    <>
      <div className="bg-slate-900  h-screen">
        <div className="flex justify-center text-white pt-5 capitalize ">
          <div className="">
            <h1 className="text-5xl text-center text-green-600">
              password generator
            </h1>
            <div className="bg-slate-700  p-[1rem] mt-20">
              <div className="flex   rounded-2xl overflow-hidden">
                <input
                  value={password}
                  readOnly
                  placeholder="CBNH84mx9ry"
                  className="bg-white h-[3rem] text-2xl font-semibold text-black  pl-4 outline-0 w-full"
                  type="text"
                  ref={refrence}
                />
                <button
                  onClick={copytoclipboard}
                  className=" transition duration-150 active:scale-110 active:text-black active:bg-white w-[5rem] bg-slate-950"
                >
                  copy
                </button>
              </div>
              <div className=" mt-5 capitalize text-orange-500 text-xl flex space-x-4">
                <div className="space-x-1.5">
                  <input
                    className="mt-2"
                    value={length}
                    onChange={(e) => setlength(e.target.value)}
                    type="range"
                    min={10}
                    max={20}
                  />
                  <label htmlFor="">length({length})</label>
                </div>
                <div className="space-x-2">
                  <input
                    onChange={() => {
                      setnumberallowed((prev) => !prev);
                    }}
                    defaultChecked={numberallowed}
                    className="mt-2 scale-150"
                    type="checkbox"
                  />
                  <label htmlFor="">number</label>
                </div>
                <div className="space-x-2">
                  <input
                    onChange={() => {
                      setcharallowed((prev) => !prev);
                    }}
                    defaultChecked={charallowed}
                    className="mt-2 scale-150"
                    type="checkbox"
                  />
                  <label htmlFor="">characters</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
