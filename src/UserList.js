import React from "react";
import User from "./User";
import useFetch from "./useFetch";

const UserList = () => {
  const url = "https://api.github.com/users";
  const [data] = useFetch(url);

  return (
    <>
      <h1> Github Users </h1>
      <ul className="users">
        {data.map((user) => {
          return <User key={user.id} {...user} />;
        })}
      </ul>
    </>
  );
};

export default UserList;
