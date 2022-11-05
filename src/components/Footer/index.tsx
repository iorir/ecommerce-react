import React from "react";
import { Link } from "react-router-dom";
function index() {
  return (
    <div className="grid grid-cols-3 mt-5 p-5 px-20 rounded justify-between bg-slate-500">
      <div className="flex">
        <ul>
          <Link to={"/"}>
            <li className="hover:bg-orange-600 p-1 rounded ">Homepage</li>
          </Link>
          <Link to={"/Products"}>
            <li className="hover:bg-orange-600 p-1 rounded ">Products</li>
          </Link>
          <Link to={"/News"}>
            <li className="hover:bg-orange-600 p-1 rounded ">News</li>
          </Link>
          <Link to={"/Contact"}>
            <li className="hover:bg-orange-600 p-1 rounded ">Contact</li>
          </Link>
        </ul>
      </div>
      <div className="flex">
        <ul>
          <Link to={"/"}>
            <li className="hover:bg-orange-600 p-1 rounded ">Lorem</li>
          </Link>
          <Link to={"/Products"}>
            <li className="hover:bg-orange-600 p-1 rounded ">Lorem</li>
          </Link>
          <Link to={"/News"}>
            <li className="hover:bg-orange-600 p-1 rounded ">Lorem</li>
          </Link>
          <Link to={"/Contact"}>
            <li className="hover:bg-orange-600 p-1 rounded ">Lorem</li>
          </Link>
        </ul>
      </div>
      <div className=" ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        aliquam optio porro natus dicta expedita autem alias ipsam id eaque.
      </div>
    </div>
  );
}

export default index;
