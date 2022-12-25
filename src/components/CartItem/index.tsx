import React from "react";
import { ICartItem } from "../../ts/interfaces";
function CartItem({
  desc,
  img,
  itemId,
  title,
  price,
  handleClick,
  orderId,
}: ICartItem) {
  return (
    <div className="mt-10 bg-slate-600 p-10 rounded-xl">
      <div className="flex justify-end ">
        <span
          onClick={() => handleClick(orderId)}
          className="hover:bg-orange-600 px-2 rounded-full text-lg hover:cursor-pointer"
        >
          X
        </span>
      </div>
      <div className=" lg:grid lg:grid-cols-12 text-center place-items-center">
        <div className="col-span-12 lg:col-span-2 justify-center flex ">
          <img src={img} className="rounded-lg" alt="" />
        </div>
        <div className="m-5 col-span-2 bg-orange-600 rounded-lg px-2 py-1">
          <span>{title}</span>
        </div>
        <div className="col-span-7 text-start">{desc}</div>
        <div className="col-span-1 lg:m-0 my-6 justify-end">
          <span className="bg-orange-600 px-2 py-1 rounded">{price}$</span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
