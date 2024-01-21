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
    <div className="container px-[5%] mx-auto">
      {/* Your blog content goes here */}

      <div className="w-full mx-auto max-w-7xl">
        <section className="container py-32">
          <div>
            <div className="w-full max-w-2xl">
              <div className="mb-10 text-5xl font-semibold text-neutral-900">
                Latest Blogs
              </div>
              <p className="pb-20 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                enim magnam ut. Veritatis officiis quaerat, odit molestias
                soluta sunt vero.
              </p>
            </div>
            <section className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-[2%]">
              {posts.length > 0 &&
                posts.map((post) => <Blog key={post._id} {...post} />)}
            </section>
          </div>
        </section>

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
    </div>
  );
};

export default BlogPage;
