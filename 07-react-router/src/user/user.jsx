import React from "react";
import { useParams } from "react-router-dom";

export default function User(props) {
  const {id} = useParams();
  return (
    <>
      <h1 className="text-center text-4xl  p-4 bg-slate-800 m-4 text-white">User Id:{id}</h1>
    </>
  );
}
