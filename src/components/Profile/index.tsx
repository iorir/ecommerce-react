import { Link } from "react-router-dom";
interface IProps {
  handleLogout: any;
  log: any[];
}
function Profile({ handleLogout, log }: IProps) {
  return (
    <div className="flex justify-center mt-3 md:mt-0">
      {(log.length < 1 || !log) && (
        <div className=" justify-center flex">
          <Link
            className="bg-slate-500 hover:bg-orange-600 rounded p-1 px-4 ml-2 flex justify-center"
            to={"/LogReg"}
          >
            <button className="">Login / Register</button>
          </Link>
        </div>
      )}
      {log.length !== 0 && log && (
        <div className="flex-col items-center group">
          <button className="flex items-center ">
            <img
              className="rounded-full mr-3"
              src="https://picsum.photos/50"
              alt=""
            />
            recaizademahmutekrem
          </button>

          <div className="bg-orange-600 absolute invisible group-focus-within:visible rounded  mt-2 ">
            <ul>
              <Link to={"/Profile"}>
                <li className="p-1 hover:cursor-pointer hover:bg-orange-700 rounded-sm flex w-40">
                  {" "}
                  Profile
                </li>
              </Link>
              <Link to={"/Cart"}>
                <li className="p-1 hover:cursor-pointer hover:bg-orange-700 rounded-sm flex w-40">
                  Cart{" "}
                </li>
              </Link>
              <Link onClick={() => handleLogout()} to={"/"}>
                <li className="p-1 hover:cursor-pointer hover:bg-orange-700 rounded-sm flex w-40">
                  {" "}
                  Logout
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
