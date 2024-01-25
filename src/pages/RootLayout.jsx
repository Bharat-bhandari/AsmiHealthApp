import React from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default RootLayout;
