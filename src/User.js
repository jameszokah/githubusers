import React from "react";
import PropType from "prop-types";

const User = ({ avatar_url, login, html_url }) => {
  console.log(login);
  return (
    <li className="item">
      <h4>{login || "James Zokah"}</h4>
      <a href={html_url} target="__blank">
        <img src={avatar_url} alt="" />
      </a>

      <a href={html_url || "https://github.com/jameszokah"} target="__blank">
        Learn more
      </a>
    </li>
  );
};

User.propType = {
  login: PropType.string.isRequired,
  avatar_url: PropType.string.isRequired
};

export default User;
