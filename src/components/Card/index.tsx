import { useState } from "react";
import Modal from "../Modal";
interface ICard {
  desc?: string;
  title?: string;
  price?: string;
  className?: string;
  img?: string;
  ldesc?: string;
}

function Card({ ldesc, desc, title, price, className, img, ...props }: ICard) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="h-full border-2  flex flex-col border-orange-600  bg-slate-600 rounded p-5 max-w-xs">
      <div className="mb-3 h-10">
        <h2>{title}</h2>
      </div>
      <div className="mx-auto">
        <img className="rounded h-48" src={img} alt=""/>
      </div>
      <div className="truncate mt-3 mb-3">{desc}</div>
      {price && <div>{price}$</div>}
      <div className="mt-auto">
        {price ? (
          <button className="bg-orange-600 px-5 py-1 rounded mt-5">Buy</button>
        ) : (
          <button
            onClick={() => setShowModal(true)}
            className="bg-orange-600 px-5 py-1 rounded mt-5"
          >
            More
          </button>
        )}
      </div>
      {showModal ? (
        <>
          <Modal ldesc={ldesc} title={title} img={img} desc={desc} showModal={showModal} setShowModal={setShowModal} />
        </>
      ) : null}
    </div>
  );
}

export default Card;
