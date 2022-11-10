import { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
function LogReg() {
  const [log, setLog] = useState(true);
  const changePage = () => {
    setLog(!log);
  };
  return <div>{log ? <Login changePage={changePage} /> : <Register changePage={changePage} />}</div>;
}

export default LogReg;
