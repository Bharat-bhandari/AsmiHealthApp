import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CounselorPage from "./pages/CounselorPage";
import BlogPage from "./pages/BlogPage";
import Contact from "./pages/Contact";
import HowItWorks from "./pages/HowItWorks";
import AdminLoginPage from "./pages/AdminLoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about-us", element: <AboutPage /> },
      { path: "/counselors", element: <CounselorPage /> },
      { path: "/blogs", element: <BlogPage /> },
      { path: "/contact-us", element: <Contact /> },
      { path: "/how-it-works", element: <HowItWorks /> },
      { path: "/admin-login", element: <AdminLoginPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
