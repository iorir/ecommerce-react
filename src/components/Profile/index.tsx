import React from "react";
import { Link } from "react-router-dom";
function Profile() {
  //check login status

  return (
    <div className="flex justify-center mt-3 md:mt-0">
      <div className="hidden">
        <button className="bg-slate-500 rounded-sm p-1 ml-2">Login</button>
        <button className="bg-slate-500 rounded-sm p-1 ml-2">Sign Up</button>
      </div>
      <div className="flex-col items-center group">
        <button className="flex items-center ">
        <img className="rounded-full mr-3" src="https://picsum.photos/50" alt="" />
         recaizademahmutekrem
        </button>
        
        <div className="bg-orange-600 absolute invisible group-focus-within:visible rounded-sm  mt-2 ">
            <ul>
            <Link to={"/Profile"}><li className="p-1 hover:cursor-pointer hover:bg-orange-700 rounded-sm flex w-40"> Profile</li></Link>
            <Link to={"/Cart"}><li className="p-1 hover:cursor-pointer hover:bg-orange-700 rounded-sm flex w-40">Cart </li></Link>
            <Link to={"/"}><li className="p-1 hover:cursor-pointer hover:bg-orange-700 rounded-sm flex w-40"> Logout</li></Link>

            </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
