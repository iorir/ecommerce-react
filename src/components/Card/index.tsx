import React from "react";
interface ICard {
  desc?: string;
  title?: string;
  price?: string;
  className?: string;
  img?: string;
}

function Card({ desc, title, price, className, img, ...props }: ICard) {
  return (
    <div className={className}>
      <div className="mb-3">
        <h2>{title}</h2>
      </div>
      <div >
        <img className="mx-auto rounded" src={img} alt="" />
      </div>
      <div className="truncate mt-3 mb-3">{desc}</div>
      <div>{price}$</div>
      <div className="mt-auto">
        <button className="bg-orange-600 px-5 py-1 rounded mt-5">Buy</button>
      </div>
    </div>
  );
}

export default Card;
