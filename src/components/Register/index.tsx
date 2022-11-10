import React from "react";
interface IChange {
  changePage: () => void;
}
function Register({ changePage }: IChange) {
  return (
    <div>
      <div className="flex mt-40 flex-col">
        <div className=" justify-center mr-56 flex">
          <button
            onClick={() => changePage()}
            className="bg-slate-500 px-3 py-1 rounded-t-2xl ml-3 mr-2"
          >
            Login
          </button>
          <button
            onClick={() => changePage()}
            className="text-lg bg-orange-600 px-3 py-1 rounded-t-2xl"
          >
            Register
          </button>
        </div>
        <form
          className="flex flex-col mx-auto border-2 border-orange-600 p-20"
          action=""
        >
          <h1 className="text-2xl font-bold text-orange-600 mb-4">Register</h1>
          <input className="p-2 mb-4 rounded" placeholder="Name" type="text" />
          <input
            className="p-2 mb-4 rounded"
            placeholder="Surname"
            type="text"
          />
          <input className="p-2 mb-4 rounded" placeholder="Phone" type="text" />
          <input className="p-2 mb-4 rounded" placeholder="Mail" type="text" />
          <input
            className="p-2 mb-4 rounded"
            placeholder="Password"
            type="text"
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
