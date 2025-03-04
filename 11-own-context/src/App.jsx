import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/card";
import Input from "./components/input";
import { Dataprovider } from "./context/data context";
import { useEffect } from "react";

function App() {
  const [apidata, setapidata] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => setapidata(data));
  }, []);

  console.log(apidata.id);

  return (
    <Dataprovider value={{}}>
      <div className=" w-full h-full  flex justify-center flex-col">
        <h1 className="text-white text-4xl text-center">own context</h1>
        <div className="flex justify-center rounded-2xl">
          <Input />
        </div>
        ~
        <div className=" flex  flex-fit  pt-6">
          {apidata.slice(0, 3).map((data) => (
            <div key={data.id} className="">
              <Card number={data.id} body={data.body} />
              {/* <h1 className="text-white">{data.id}</h1> */}
            </div>
          ))}
        </div>
        <button className="bg-blue-700 text-white text-3xl">load more</button>
      </div>
    </Dataprovider>
  );
}

export default App;
