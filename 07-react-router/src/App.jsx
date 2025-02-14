import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" text-white text-5xl text-center bg-slate-900 h-screen ">
        <h1 className="">react router dom</h1>
      </div>
    </>
  );
}

export default App;
