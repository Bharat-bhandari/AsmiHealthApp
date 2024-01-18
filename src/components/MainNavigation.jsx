import React from "react";

import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <>
      <nav className=" w-full border-b-[1px] border-neutral-300 shadow">
        <div className=" px-[5%] flex w-full max-w-screen-xl mx-auto justify-between h-[72px] items-center">
          <Link to={"/"} className="flex items-center gap-1">
            <img className="h-16 " src={logo} alt="Asmi life Logo" />
            <p className=" font-semibold text-3xl text-[#333]">Asmi</p>
          </Link>

          <div>
            <ul className="flex gap-8 font-semibold text-neutral-900">
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
        </div>
      </nav>
    </>
  );
};

export default MainNavigation;
