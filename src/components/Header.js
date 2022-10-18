import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Awesome Auth
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/" className="ml-2">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="ml-2">
              About
            </Link>
          </li>
          <li>
            <Link to="/login" className="btn ml-2">
              Log In
            </Link>
          </li>
          <li>
            <Link to="/register" className="btn ml-2">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
