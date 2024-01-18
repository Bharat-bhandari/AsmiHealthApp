import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { setUserName } from "../store/slices/userInfo";
import Blog from "../components/Blog";

const BlogPage = () => {
  const dispatch = useDispatch();

  const [posts, setPosts] = useState([]);

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

  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        console.log(posts);
        setPosts(posts);
      });
    });
  }, []);

  const logout = () => {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    dispatch(setUserName(null));
  };

  return (
    <div className="container px-4 mx-auto my-8">
      {/* Your blog content goes here */}

      {posts.length > 0 && posts.map((post) => <Blog {...post} />)}
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
