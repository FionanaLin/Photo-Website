import React from "react";
import { Link } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          {/* <Link
            to={{ pathname: "https://fionalinlin.netlify.app/" }}
            target="_blank"
          >
            About
          </Link> */}
          <a href="https://fionalinlin.netlify.app/" target="_blank">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
