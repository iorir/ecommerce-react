import React from "react";
import ChangePass from "../components/ChangePass";
import PrevOrders from "../components/PrevOrders";

function Profile() {
  return (
    <div className="grid grid-cols-2 mt-20">
      <ChangePass />
      <PrevOrders />
    </div>
  );
}

export default Profile;
