import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";

function Cart() {
  const [cart, setCart] = useState<any[]>([]);
  useEffect(() => {
    localStorage.getItem("cart") &&
      setCart(JSON.parse(localStorage.getItem("cart") || ""));
  }, []);
  return (
    <div>
      {cart &&
        cart.map((item, index) => (
          <CartItem
            key={index}
            itemId={item.itemId}
            desc={item.desc}
            title={item.title}
            img={item.img}
            price={item.price}
          />
        ))}
    </div>
  );
}

export default Cart;
