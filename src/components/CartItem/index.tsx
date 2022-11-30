import React from "react";
import Cart from "../../Pages/Cart";
interface ICartItem {
  desc: string;
  img: string;
  itemId: string;
  title: string;
  price: string;
  orderId: string;
  handleClick: (orderId:string) =>void; 
}
function CartItem({ desc, img, itemId, title, price,handleClick,orderId }: ICartItem) {
  
  return (
    <div className="mt-10 bg-slate-600 p-10 rounded-xl">
      <div className="flex justify-end ">
        <span
          onClick={() => handleClick(orderId)}
          className="hover:bg-orange-600 px-2  rounded-full text-lg hover:cursor-pointer"
        >
          X
        </span>
      </div>
      <div className="grid grid-cols-12 text-center place-items-center ">
        <div className="col-span-2 ">
          <img src={img} className="rounded-lg" alt="" />
        </div>
        <div className="mx-5 col-span-2 bg-orange-600 rounded-lg px-2 py-1">
          {title}
        </div>
        <div className="col-span-7 text-start">{desc}</div>
        <div className="col-span-1  justify-end  bg-orange-600 px-2 py-1 rounded">
          {price}$
        </div>
      </div>
    </div>
  );
}

export default CartItem;
