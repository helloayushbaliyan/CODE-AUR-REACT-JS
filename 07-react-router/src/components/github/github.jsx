import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(props) {
  let githubdata = useLoaderData();
  // const [githubdata, setgithubdata] = useState({});
  // useEffect(() => {
  //   fetch("https://api.github.com/users/helloayushbaliyan")
  //     .then((response) => response.json())
  //     .then((githubdata) => {
  //       setgithubdata(githubdata);
  //     });
  // }, []);

  // console.log(githubdata.followers);

  return (
    <>
      <div className="text-center text-4xl font-semibold p-4 m-5 text-white bg-slate-800">
        Git Hub Followers : {githubdata.followers}
        <img className="w-72" src={githubdata.avatar_url} alt="" />
      </div>
    </>
  );
}

export const githubloader = async () => {
  let response = await fetch("https://api.github.com/users/helloayushbaliyan");
  return response.json();
};
