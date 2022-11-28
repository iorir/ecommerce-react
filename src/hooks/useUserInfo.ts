import { useState, useEffect } from "react";
interface IUserInfo {
  userEmail?: string;
  userId?: string;
  userName?: string;
  userPass?: string;
  userSurname?: string;
}
const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState<IUserInfo>();
  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      setUserInfo(JSON.parse(localStorage.getItem("userInfo")!));
    } else if (sessionStorage.getItem("userInfo")) {
      setUserInfo(JSON.parse(sessionStorage.getItem("userInfo")!));
    }
  }, []);
  return { userInfo };
};

export default useUserInfo;
