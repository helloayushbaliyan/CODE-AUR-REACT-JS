import React from "react";

export default function Currencyinput(props) {
  return (
    <>
      <div className=" capitalize">
        <div className="bg-white w-full flex justify-between  rounded-xl">
          <div className="p-4  ">
            <h1 className="text-2xl mb-3  font-bold">from</h1>
            <input
              className="bg-white w-[5rem] outline-none text-xl font-semibold"
              placeholder="0"
              type="text"
            />
          </div>
          <div className="p-4  ">
            <h1 className="text-2xl mb-3  font-bold">currency type</h1>
            <div className="flex justify-end">
              <select
                className=" w-[5.5rem] outline-none text-xl font-semibold"
                name=""
                id=""
              >
                <option value="">usd</option>
                <option value="">inr</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
