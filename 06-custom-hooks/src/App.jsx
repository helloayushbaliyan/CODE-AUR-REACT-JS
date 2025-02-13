import { useState } from "react";
import Input from "./components/input";
import Usecurrencyinfo from "./hooks/currencyinfo";

function App() {
  const [amount, setamount] = useState();
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");

  let currencyinfo = Usecurrencyinfo(from);

  let options = Object.keys(currencyinfo);
  const [convertedamount, setconvertedamount] = useState(0);

  const swap = () => {
    setfrom(to);
    setto(from);
  };

  
  const convert = () => {
    setconvertedamount(amount * currencyinfo[to]);
  };

  return (
    <>
      <div className=" bg-[url(https://images.pexels.com/photos/6770775/pexels-photo-6770775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-center bg-cover h-screen maxw-[100%] w-full ">
        <div className=" relative flex justify-center">
          <div className="  absolute r pt-[7rem]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              action=""
            >
              <div className="bg-white/20 backdrop-blur-md rounded-2xl py-10 px-6 w-[40rem]">
                <div className="mt-5 relative space-y-3">
                  {/* from input here */}

                  <Input
                    label="from"
                    amount={amount}
                    currencyOption={options}
                    onCurrencyChange={(currency) => setfrom(currency)}
                    selectcurrency={from}
                    onAmountChange={(amount) => setamount(amount)}
                  />

                  <div className=" ] relative flex justify-center">
                    <div className="absolute top-[-2.4rem] bg-white px-1  py-3 overflow-x-hidden ">
                      <button
                        onClick={swap}
                        className="   bg-blue-600 text-2xl text-white py-3 px-5 rounded-xl hover:bg-blue-900 transition duration-300"
                      >
                        swap
                      </button>
                    </div>
                  </div>

                  {/* to input here */}
                  <Input
                    label="to"
                    amount={convertedamount}
                    currencyOption={options}
                    onCurrencyChange={(currency) => setto(currency)}
                    selectcurrency={to}
                  />
                </div>
                <button
                  onClick={convert}
                  className="w-full mt-5    bg-blue-600 text-2xl text-white py-3 px-5 rounded-xl hover:bg-blue-900 transition duration-300"
                >
                  convert
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
