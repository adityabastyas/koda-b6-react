import React from "react";
import { Outlet } from "react-router-dom";
import Heading from "./Heading";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <Heading />

      <Outlet />

      <Footer />
    </>
  );
}

export default AppLayout;
