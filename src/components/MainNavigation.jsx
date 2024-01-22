import React from "react";

import logo from "../assets/image/logo.png";
import { Link, NavLink } from "react-router-dom";

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
                <NavLink
                  className={({ isActive }) => {
                    return (
                      " hover:bg-neutral-200 transition duration-300 py-1 px-2 rounded ease-in-out " +
                      (isActive ? "text-primary03" : "")
                    );
                  }}
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => {
                    return (
                      " hover:bg-neutral-200 transition duration-300 py-1 px-2 rounded ease-in-out " +
                      (isActive ? "text-primary03" : "")
                    );
                  }}
                  to={"/how-it-works"}
                >
                  How It Works
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => {
                    return (
                      " hover:bg-neutral-200 transition duration-300 py-1 px-2 rounded ease-in-out " +
                      (isActive ? "text-primary03" : "")
                    );
                  }}
                  to={"/about-us"}
                >
                  Team
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => {
                    return (
                      " hover:bg-neutral-200 transition duration-300 py-1 px-2 rounded ease-in-out " +
                      (isActive ? "text-primary03" : "")
                    );
                  }}
                  to={"/counselors"}
                >
                  Counselors
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => {
                    return (
                      " hover:bg-neutral-200 transition duration-300 py-1 px-2 rounded ease-in-out " +
                      (isActive ? "text-primary03" : "")
                    );
                  }}
                  to={"/blogs"}
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => {
                    return (
                      " hover:bg-neutral-200 transition duration-100 py-1 px-2 rounded ease-in-out " +
                      (isActive ? "text-primary03" : "")
                    );
                  }}
                  to={"/contact-us"}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNavigation;
