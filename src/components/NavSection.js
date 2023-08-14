import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  const { pathname } = useLocation();
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
          <motion.div
            transition={{ duration: 0.75 }}
            initial={{ width: 0 }}
            animate={{ width: pathname === "/" ? "50%" : "" }}
            className="nav-line"
          ></motion.div>
        </li>
        <li>
          <Link to="/ourwork">2. Our Work</Link>
                  <motion.div
            transition={{ duration: 0.75 }}
            initial={{ width: 0 }}
            animate={{ width: pathname === "/ourwork" ? "50%" : "" }}
            className="nav-line"
          ></motion.div>
        </li>
        <li>
          <Link to="/contactus">3. Contact Us</Link>
                  <motion.div
            transition={{ duration: 0.75 }}
            initial={{ width: 0 }}
            animate={{ width: pathname === "/contactus" ? "50%" : "" }}
            className="nav-line"
          ></motion.div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
