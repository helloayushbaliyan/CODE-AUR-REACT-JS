import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

export default function Login(props) {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const { setUser } = useContext(UserContext);

  
  const handlesubmit = (e) => {
    e.preventDefault();
    if (username) {
      setUser({password, username});
    }
  };
  return (
    <>
      <div className="space-x-4">
        <h1>Login</h1>
        <input
          type="text"
          className="border-2 border-white"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          placeholder="username"
        />
        <input
          type="text"
          value={password}
          className="border-2 border-white"

          onChange={(e) => setpassword(e.target.value)}
          placeholder="password"
        />
        <button
        className="bg-white text-black font-bold text-xl"
         onClick={handlesubmit}>submit</button>
      </div>
    </>
  );
}
