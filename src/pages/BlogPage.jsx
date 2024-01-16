import React from "react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <div className="container px-4 mx-auto my-8">
      <h2 className="mb-4 text-3xl font-semibold">Latest Blogs</h2>
      {/* Your blog content goes here */}
      <Link
        to={"/admin-login"}
        className="inline-block px-4 py-2 text-white rounded-md bg-primary03 hover:bg-primary02 focus:outline-none"
      >
        Login as Admin
      </Link>
    </div>
  );
};

export default BlogPage;
