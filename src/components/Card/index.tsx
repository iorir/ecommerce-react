import React from "react";
interface ICard {
  desc?: string;
  title?: string;
  price?: string;
  className?: string;
  img?: string;
  ldesc?:string;
}

function Card({ ldesc,desc, title, price, className, img, ...props }: ICard) {
  return (
    <div className="h-full border-2  flex flex-col border-orange-600  bg-slate-600 rounded p-5 max-w-xs">
      <div className="mb-3">
        <h2>{title}</h2>
      </div>
      <div >
        <img className="mx-auto rounded" src={img} alt="" />
      </div>
      <div className="truncate mt-3 mb-3">{desc}</div>
      {price  &&<div>{price}$</div>}
      <div className="mt-auto">
        <button className="bg-orange-600 px-5 py-1 rounded mt-5">{price?"Buy" :"More"}</button>
      </div>
    </div>
  );
}

export default Card;
