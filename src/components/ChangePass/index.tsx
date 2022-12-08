import axios from "axios";
import { useState } from "react";
import useUserInfo from "../../hooks/useUserInfo";
function ChangePass() {
  const { userInfo } = useUserInfo();
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const changePass = (data: any) => {
    if (oldPass === atob(data.userPass)) {
      console.log(data);
      axios
        .get("https://www.jsonbulut.com/json/userSettings.php", {
          params: {
            ref: process.env.REACT_APP_API_KEY,
            userName: data.userName,
            userSurname: data.userSurname,
            userMail: data.userEmail,
            userPhone: data.userPhone,
            userPass: newPass,
            userId: data.userId,
          },
        })
        .then((res) => {
          if (res.data.user[0].durum) {
            alert("Password changed successfully");
            if (localStorage.getItem("userInfo")) {
              let a = JSON.parse(localStorage.getItem("userInfo")!);
              a = {
                ...a,
                userPass: btoa(newPass),
              };
              localStorage.setItem("userInfo", JSON.stringify(a));
            } else if (sessionStorage.getItem("userInfo")) {
              let a = JSON.parse(sessionStorage.getItem("userInfo")!);
              a = {
                ...a,
                userPass: btoa(newPass),
              };
              sessionStorage.setItem("userInfo", JSON.stringify(a));
            }
            setNewPass("");
            setOldPass("");
          }
        });
    } else alert("Passwords did not matched");
  };
  return (
    <div className="flex w-full mb-10 lg:mb-0 h-fit">
      <div className="flex flex-col items-center pt-5 [&>div>label]:font-medium [&>div>label]:text-black bg-slate-500 md:px-5 md:py-2 lg:mx-14 rounded-3xl [&>div]:w-full w-full [&>div>input]:w-full [&>div>input]:rounded [&>div>input]:px-3 [&>div>input]:py-1 [&>*]:px-2 [&>*]:py-1 [&>*]:rounded [&>*]:mt-2 [&>div>input]:text-black">
        <h1 className="text-black text-xl font-semibold">Change Password</h1>
        <div className="">
          <label className=""> Name:</label>
          <input
            id=""
            className="hover:cursor-default "
            type="text"
            placeholder={userInfo?.userName}
            readOnly
          />
        </div>
        <div>
          <label> Surname:</label>
          <input
            className="hover:cursor-default"
            type="text"
            placeholder={userInfo?.userSurname}
            readOnly
          />
        </div>
        <div>
          <label> Mail:</label>
          <input type="text" defaultValue={userInfo?.userEmail} />
        </div>
        <div>
          <label> Old Password:</label>
          <input
            type="text"
            placeholder="enter old password"
            value={oldPass}
            onChange={(e) => setOldPass(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label> New Password:</label>
          <input
            type="text"
            placeholder="enter new password"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
          />
        </div>
        <button
          onClick={() => changePass(userInfo)}
          className="bg-slate-700 m-5 hover:bg-orange-600 text-white "
        >
          Change Password
        </button>
      </div>
    </div>
  );
}

export default ChangePass;
