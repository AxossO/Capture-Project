import React from "react";
import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
        </li>
        <li>
          <Link to="/ourwork">2. Our Work</Link>
        </li>
        <li>
          <Link to="/contactus">3. Contact Us</Link>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </nav>
  );
};

export default Nav;
