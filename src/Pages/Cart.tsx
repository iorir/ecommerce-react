import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import useUserInfo from "../hooks/useUserInfo";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState<any>([]);
  const [response, setResponse] = useState<boolean>();
  const { userInfo } = useUserInfo();
  useEffect(() => {
    localStorage.getItem("cart") &&
      setCart(JSON.parse(localStorage.getItem("cart")!));
  }, []);
  const handleClick = (orderId: string) => {
    let a: any;
    orderId &&
      window.confirm("Are you sure you want to delete this item?") &&
      (a = cart.filter((item: any) => item.orderId !== orderId));
    setCart(a);
    localStorage.setItem("cart", JSON.stringify(a));
  };
  const handleBuy = async (e: any) => {
    e.preventDefault();
    window.confirm("Are you sure you want to complete the order?") &&
      cart
        .filter((i: any) => i.userId === userInfo?.userId)
        ?.map((item: any) =>
          axios
            .get(
              `https://www.jsonbulut.com/json/orderForm.php?ref=${process.env.REACT_APP_API_KEY}&customerId=${userInfo?.userId}&productId=${item.itemId}&html=12`
            )
            .then((res) => res.data.order[0].durum && setResponse(true))
        );
  };
  const clearCart = async () => {
    let a: any = [];
    await cart
      .filter((i: any) => i.userId !== userInfo?.userId)
      ?.map((item: any) => a.push(item));
    localStorage.setItem("cart", JSON.stringify(a));
    navigate("/");
  };
  useEffect(() => {
    if (response) {
      alert("Your order has been successfully completed ");
      setResponse(false);
      clearCart();
      setCart(JSON.parse(localStorage.getItem("cart")!));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);
  console.log();
  return (
    <div className="w-full grid justify-center ">
      {cart.filter((item: any) => item.userId === userInfo?.userId).length >
        0 && (
        <div className=" justify-center flex mt-10 ">
          <button
            className="bg-orange-600 px-3 rounded-lg py-2"
            onClick={(e) => handleBuy(e)}
          >
            Buy Everything by One Click
          </button>
        </div>
      )}
      {cart.length ? (
        cart
          .filter((i: any) => i.userId === userInfo?.userId)
          ?.map((item: any) => (
            <CartItem
              key={item.orderId}
              itemId={item?.itemId}
              desc={item?.desc}
              title={item?.title}
              img={item?.img}
              price={item?.price}
              handleClick={handleClick}
              orderId={item?.orderId}
            />
          ))
      ) : (
        <span className="mt-20 text-4xl bg-slate-500 py-2 rounded text-black px-5">
          There is no item in cart
        </span>
      )}
    </div>
  );
}

export default Cart;
