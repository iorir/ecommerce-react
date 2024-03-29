import axios from "axios";
import { useState } from "react";
import { IChange } from "../../ts/interfaces";
function Register({ changePage }: IChange) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    getRegister();
  };
  const getRegister = () => {
    axios
      .get("https://www.jsonbulut.com/json/userRegister.php", {
        params: {
          ref: process.env.REACT_APP_API_KEY,
          userName: name,
          userSurname: surname,
          userPhone: phone,
          userMail: email,
          userPass: password,
        },
      })
      .then((res) => alert(res.data.user[0].mesaj));
  };
  return (
    <div className="md:ml-0 -ml-12">
      <div className="flex mt-40 flex-col">
        <div className=" justify-center mr-56 flex">
          <button
            onClick={() => changePage()}
            className=" bg-slate-500 px-3 py-1 rounded-t-2xl mr-2 ml-32 md:ml-7"
          >
            Login
          </button>
          <button className="text-lg bg-orange-600 px-3 py-1 rounded-t-2xl">
            Register
          </button>
        </div>
        <form
          className="flex flex-col mx-auto border-2 border-orange-600 p-20 text-black"
          action=""
          onSubmit={(e) => handleSubmit(e)}
        >
          <h1 className="text-2xl font-bold text-orange-600 mb-4">Register</h1>
          <input
            required
            className="p-2 mb-4 rounded"
            value={name}
            pattern="[A-Za-z]{2,}"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            type="text"
            title="letters only and min. 2 characters"
          />
          <input
            required
            className="p-2 mb-4 rounded"
            placeholder="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            type="text"
            title="letters only and min. 2 characters"
            pattern="[A-Za-z]{2,}"
          />
          <input
            required
            className="p-2 mb-4 rounded"
            value={phone}
            type="tel"
            pattern="[1-9]{1}[0-9]{9}"
            title="number only, must be 10 characters and start without zero"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
          />
          <input
            className="p-2 mb-4 rounded"
            required
            type="email"
            value={email}
            pattern="/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/"
            onChange={(e) => setEmail(e.target.value)}
            title="enter valid email address"
            placeholder="Email"
          />
          <input
            required
            className="p-2 mb-4 rounded"
            value={password}
            pattern=".{6,}"
            title="password must be greater than 6 characters"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
          <div className="flex justify-center ">
            <button className="hover:bg-orange-600 text-lg bg-slate-500 px-3 py-1 rounded">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
