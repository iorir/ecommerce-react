import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import useUserInfo from "../hooks/useUserInfo";

function Cart() {
  const [cart, setCart] = useState<any[]>([]);
  const { userInfo } = useUserInfo();
  useEffect(() => {
    localStorage.getItem("cart") &&
      setCart(JSON.parse(localStorage.getItem("cart") || ""));
  }, []);

  return (
    <div>
      {cart &&
        cart
          .filter((i) => i.userId === userInfo?.userId)
          ?.map((item, index) => (
            <CartItem
              key={index}
              itemId={item?.itemId}
              desc={item?.desc}
              title={item?.title}
              img={item?.img}
              price={item?.price}
            />
          ))}
    </div>
  );
}

export default Cart;
