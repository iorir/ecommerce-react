import React from "react";
import Profile from "../Profile";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex justify-between flex-col md:flex-row">
      <div className="flex items-center ">
        <Link to={"/"}>
          <span className="material-symbols-outlined mr-4 p-2 rounded-sm">
            shopping_cart
          </span>
        </Link>
        <Link to={"/"}>
          <span className="hover:bg-orange-600 p-2 rounded-sm">Home</span>
        </Link>
        <Link to={"/News"}>
          <span className="hover:bg-orange-600 p-2 rounded-sm">News</span>
        </Link>
        <Link to={"/Products"}>
          <span className="hover:bg-orange-600 p-2 rounded-sm">Products</span>
        </Link>
        <Link to={"/Contact"}>
          <span className="hover:bg-orange-600 p-2 rounded-sm">Contact</span>
        </Link>
      </div>
      <Profile />
    </div>
  );
}

export default Navbar;
