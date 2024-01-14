import React from "react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <>
      <Link to={"/admin-login"}> Login as Admin</Link>
    </>
  );
};

export default BlogPage;
