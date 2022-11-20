import React from "react";
interface ICartItem {
  desc: "";
  img: "";
  itemId: "";
  title: "";
  price: "";
}
function CartItem({ desc, img, itemId, title, price }: ICartItem) {
  console.log(price);

  return (
    <div className="mt-10 bg-slate-600 p-10 rounded-xl">
      <div className="grid grid-cols-12 text-center place-items-center ">
        <div className="col-span-2 ">
          <img src={img} className="rounded-lg" alt="" />
        </div>
        <div className="mx-5 col-span-2">{title}</div>
        <div className="col-span-7 text-start">{desc}</div>
        <div className="col-span-1  justify-end  ">{price}$</div>
      </div>
    </div>
  );
}

export default CartItem;
