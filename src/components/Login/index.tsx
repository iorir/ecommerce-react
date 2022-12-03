import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
interface IChange {
  changePage: () => void;
}
interface IUserinfo {
  userEmail: string;
  userPass: string;
  userName: string;
  userSurname: string;
  userId: string;
}
function Login({ changePage }: IChange) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  let userInfo: IUserinfo = {
    userEmail: "",
    userPass: "",
    userName: "",
    userSurname: "",
    userId: "",
  };
  const navigate = useNavigate();

  const getLogin = () => {
    axios
      .get(
        `https://www.jsonbulut.com/json/userLogin.php?ref=${process.env.REACT_APP_API_KEY}&userEmail=${email}.com&userPass=${password}&face=no`
      )
      .then((res) => {
        if (res.data.user[0].durum) {
          alert(res.data.user[0].mesaj);
          userInfo = {
            userEmail: res.data.user[0].bilgiler.userEmail,
            userPass: btoa(res.data.user[0].bilgiler.userPass),
            userName: res.data.user[0].bilgiler.userName,
            userSurname: res.data.user[0].bilgiler.userSurname,
            userId: res.data.user[0].bilgiler.userId,
          };
          if (remember) {
            sessionStorage.removeItem("userInfo");
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
          } else {
            localStorage.removeItem("userInfo");
            sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
          }
          navigate("/");
        } else {
          alert("Mail or password is incorrect");
        }
      });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    getLogin();
  };
  return (
    <div className="md:ml-0 -ml-12">
      <div className="flex mt-40 flex-col">
        <div className=" justify-center mr-56 flex">
          <button className=" bg-orange-600 text-lg px-3 py-1 rounded-t-2xl mr-2 ml-32 md:ml-7">
            Login
          </button>
          <button
            onClick={() => changePage()}
            className="bg-slate-500 px-3 py-1 rounded-t-2xl"
          >
            Register
          </button>
        </div>
        <form
          className="flex flex-col mx-auto border-2 border-orange-600 p-20 text-black"
          action=""
          onSubmit={(e) => handleSubmit(e)}
        >
          <h1 className="text-2xl font-bold text-orange-600 mb-4">Login</h1>
          <input
            className="p-2 mb-4 rounded"
            placeholder="enter your email address"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="p-2 mb-4 rounded"
            placeholder="enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <label className="text-lg" htmlFor="check">
              Remember Me:{" "}
            </label>
            <input
              className="mb-5"
              id="check"
              type="checkbox"
              onChange={(e) => setRemember(e.target.checked)}
            />
          </div>
          <div className="flex justify-center ">
            <button className="hover:bg-orange-600 text-lg bg-slate-500 px-3 py-1 rounded">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
