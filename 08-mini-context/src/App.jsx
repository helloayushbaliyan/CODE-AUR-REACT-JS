import { useState } from "react";

// import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/login";
import Profile from "./components/profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {

  return (
    <UserContextProvider>
      <div className="bg-slate-900 text-white h-screen text-center">
        <h1 className=" text-5xl text-center p-20 capitalize">
          context api
        </h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
