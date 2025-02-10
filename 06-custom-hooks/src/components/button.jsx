import React from "react";

export default function Button(props) {
  return (
    <>
      <div className=" ] relative flex justify-center">
        <div className="absolute top-[-2.4rem] bg-white px-1  py-3 overflow-x-hidden ">
          <button className="   bg-blue-600 text-2xl text-white py-3 px-5 rounded-xl hover:bg-blue-900 transition duration-300">
            swap
          </button>
        </div>
      </div>
    </>
  );
}
