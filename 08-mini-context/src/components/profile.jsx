import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";

export default function Profile(props) {
  const { User } = useContext(UserContext);

  if (!User) return <div>please login</div>;
  return (
    <>
      <div className="">welcome{User.username}</div>
    </>
  );
}
