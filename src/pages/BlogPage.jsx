import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { setUserName } from "../store/slices/userInfo";

const BlogPage = () => {
  const dispatch = useDispatch();

  const username = useSelector((state) => state.userInfo.username);

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        dispatch(setUserName(userInfo.username));
      });
    });
  }, [dispatch]);

  const logout = () => {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    dispatch(setUserName(null));
  };

  return (
    <div className="container px-4 mx-auto my-8">
      <h2 className="mb-4 text-3xl font-semibold">Latest Blogs</h2>
      {/* Your blog content goes here */}

      {username && (
        <>
          <Link
            className="inline-block px-4 py-2 text-white rounded-md bg-primary03 hover:bg-primary02 focus:outline-none"
            to={"/create-blog"}
          >
            Create new Blog
          </Link>

          <a
            className="inline-block px-4 py-2 ml-4 text-white rounded-md bg-primary03 hover:bg-primary02 focus:outline-none"
            onClick={logout}
          >
            Logout
          </a>
        </>
      )}

      {!username && (
        <>
          <Link
            to={"/admin-login"}
            className="inline-block px-4 py-2 text-white rounded-md bg-primary03 hover:bg-primary02 focus:outline-none"
          >
            Login as Admin
          </Link>
        </>
      )}
    </div>
  );
};

export default BlogPage;
