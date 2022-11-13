import Profile from "../Profile";
import { useState, useEffect } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  // const [logCheck, setLogCheck] = useState(false);
  const locLogInf = localStorage.getItem("userInfo");
  const sesLogInf = sessionStorage.getItem("userInfo");
  let log: any[] = [];
  if (locLogInf !== null) {
    log = JSON.parse(locLogInf);
  } else if (sesLogInf !== null) {
    log = JSON.parse(sesLogInf);
  }
  function handleLogout() {
    localStorage.removeItem("userInfo");
    sessionStorage.removeItem("userInfo");
    log = [];
    navigate("/");
  }
  // useEffect(() => {
  //   handleLogout();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [logCheck]);
  return (
    <div className="flex justify-between flex-col md:flex-row z-50">
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
        <Link to={"/Basket"}>
          <span className="hover:bg-orange-600 p-2 rounded-sm">Basket</span>
        </Link>
        <Link to={"/Contact"}>
          <span className="hover:bg-orange-600 p-2 rounded-sm">Contact</span>
        </Link>
      </div>
      <Profile log={log} handleLogout={handleLogout} />
    </div>
  );
}

export default Navbar;
