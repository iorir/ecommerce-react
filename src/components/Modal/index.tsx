import React from "react";
interface IModal {
  desc?: any;
  title?: string;
  className?: string;
  img?: string;
  ldesc?: string;
  showModal?: boolean;
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
}
function Modal({
  ldesc,
  desc,
  title,
  img,
  showModal,
  setShowModal,
  ...props
}: IModal) {
  return (
    <div>
      <div className="">
        <div className="z-50 fixed bg-slate-800 inset-0 items-center max-h-130 h-fit mx-36  mt-20 overflow-y-scroll  rounded-3xl opacity-95">
          <div className=" flex">
            <div className="">
              <div className="flex justify-between p-5 border-b border-orange-600 ">
                <h3 className="text-2xl">{title}</h3>
                <button
                  className="align-middle"
                  onClick={() => setShowModal?.(false)}
                >
                  <span className="z-50 text-xl px-3 py-1 hover:bg-orange-600 rounded-full">X</span>
                </button>
              </div>

              <div className=" items-center mt-5 justify-items-center flex flex-col mb-5">
                <div className="">
                  <img className="max-h-52" src={img} alt="" />
                </div>
                <p
                  dangerouslySetInnerHTML={{ __html: ldesc! }}
                  className="mt-5"
                />
              </div>
              <div className="border-t-orange-600 border-t pt-5 mb-5">
                <button
                  className="hover:bg-orange-600 py-2 px-5 rounded"
                  type="button"
                  onClick={() => setShowModal?.(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </div>
    </div>
  );
}

export default Modal;
