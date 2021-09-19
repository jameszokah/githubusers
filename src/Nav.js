import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png"
        alt="logo"
      />

      <ul>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/user" className="link">
            Users
          </Link>
        </li>
        <li>
          <Link to="/gits" className="link">
            Gits
          </Link>
        </li>
        <li>
          <Link to="/login" className="link">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
