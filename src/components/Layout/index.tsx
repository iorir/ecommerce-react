import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
function Layout() {
  return (
    <div className="container mx-auto min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
