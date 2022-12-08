import axios from "axios";
import { useEffect, useState } from "react";
import useUserInfo from "../../hooks/useUserInfo";
import LastOrders, { IData } from "../LastOrders";
function PrevOrders() {
  const [data, setData] = useState<IData[]>([]);
  const { userInfo } = useUserInfo();
  const getOrderList = () => {
    userInfo?.userId &&
      axios
        .get("https://www.jsonbulut.com/json/orderList.php", {
          params: {
            ref: process.env.REACT_APP_API_KEY,
            musterilerID: Number(userInfo?.userId),
          },
        })
        .then((res) => setData(res.data.orderList));
  };
  useEffect(() => {
    userInfo?.userId && getOrderList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo?.userId]);
  console.log(data);
  return (
    <div className="flex w-full col-span-2">
      <div className="flex flex-col items-center pt-5 w-full  bg-slate-500  rounded-3xl ">
        <h1 className="text-black text-xl font-semibold mb-5">Last Orders</h1>
        <div>
          {data.map((item) => (
            <LastOrders data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default PrevOrders;
