import React from "react";

export default function Input(props) {
  return (
    <>
      <div className="flex w-[30rem]  bg-amber-400 ">
        <input className=" w-full text-2xl font-bold bg-white " type="text" />
        <button className="bg-sky-700 h-10">submit</button>
      </div>
    </>
  );
}
