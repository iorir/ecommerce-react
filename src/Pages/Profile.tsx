import React from "react";
import ChangePass from "../components/ChangePass";
import PrevOrders from "../components/PrevOrders";

function Profile() {
  return (
    <div className="grid w-full grid-cols-1 lg:grid-cols-3 mt-20">
      <ChangePass />
      <PrevOrders />
    </div>
  );
}

export default Profile;
