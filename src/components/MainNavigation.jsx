import React from "react";

import "./MainNavigation.css";

import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <>
      <nav>
        <a href="/">
          <img src="" alt="Asmi life Logo" />
        </a>

        <div>
          <ul className="list">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/how-it-works"}>How It Works</Link>
            </li>
            <li>
              <Link to={"/about-us"}>Team</Link>
            </li>
            <li>
              <Link to={"/counselors"}>Counselors</Link>
            </li>
            <li>
              <Link to={"/blogs"}>Blogs</Link>
            </li>
            <li>
              <Link to={"/contact-us"}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MainNavigation;
