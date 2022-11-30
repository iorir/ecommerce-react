import { useLocation, useNavigate } from "react-router-dom";
import {useId } from "react";
import useUserInfo from "../../hooks/useUserInfo";
function ProductComp() {
  const idGen = useId();
  const { userInfo } = useUserInfo();
  const location: any = useLocation();
  const navigate = useNavigate();
  let array: any = [];
  const handleBuy = () => {
    if (localStorage.getItem("userInfo")) {
      return handleAddCart();
    } else if (sessionStorage.getItem("userInfo")) {
      return handleAddCart();
    } else {
      navigate("/LogReg");
    }
  };

  const handleAddCart = async () => {
    array = [];
    let getLocal = await localStorage.getItem("cart");
    let cartInf: any[] = [{}];
    if (getLocal) {
      cartInf = JSON.parse(getLocal);
    }
    cartInf &&
      cartInf.map((item: any) => {
        return Object.keys(item).length > 0 && array.push(item);
      });
    await array.push({
      userId: userInfo?.userId,
      itemId: location.state.itemId,
      desc: location.state.desc,
      title: location.state.title,
      img: location.state.img,
      price: location.state.price,
      orderId: idGen,
    });
    await localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(array));
    alert("Item added to cart successfully");
    return navigate("/Cart");
  };

  return (
    <div className="flex flex-col items-center mt-20 text-lg ">
      <div className="bg-slate-500 rounded py-1 px-6">
        <h1>{location.state.title}</h1>
      </div>
      <div className="mt-8 h-full  md:grid md:grid-cols-12 ">
        <img
          className="span md:col-span-4 col-span-12 text-center mb-5 mx-auto"
          src={location.state.img}
          alt=""
        />
        <div className="bottom-0 md:ml-10 col-span-6 flex flex-col">
          <div>{location.state.title}</div>
          <div className="mt-6">{location.state.desc}</div>
          <div className="mt-10 mb-5">
            <span className=" bg-slate-500 px-4 py-2 rounded ">
              {location.state.price} $
            </span>
          </div>
          <div className="flex flex-grow items-end justify-evenly">
            <button
              className="py-3 px-8 bg-orange-600 border-2 rounded-lg border-slate-500"
              onClick={() => handleBuy()}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductComp;
