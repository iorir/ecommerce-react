import React from "react";
interface IChange {
  changePage: () => void;
}
function Login({ changePage }: IChange) {
  return (
    <div>
      <div className="flex mt-40 flex-col">
        <div className=" justify-center mr-56 flex">
          <button className=" bg-orange-600 text-lg px-3 py-1 rounded-t-2xl mr-2 ml-4">
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
          className="flex flex-col mx-auto border-2 border-orange-600 p-20"
          action=""
        >
          <h1 className="text-2xl font-bold text-orange-600 mb-4">Login</h1>
          <input
            className="p-2 mb-4 rounded"
            placeholder="enter your mail address"
            type="text"
          />
          <input
            className="p-2 mb-4 rounded"
            placeholder="enter your password"
            type="text"
          />
          <div>
            <label className="text-lg" htmlFor="check">
              Remember Me:{" "}
            </label>
            <input className="mb-5" id="check" type="checkbox" />
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
