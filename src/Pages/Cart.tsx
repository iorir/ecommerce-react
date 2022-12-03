import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import useUserInfo from "../hooks/useUserInfo";

function Cart() {
  const [cart, setCart] = useState<any>([]);
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
  return (
    <div className="w-full grid justify-center ">
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
