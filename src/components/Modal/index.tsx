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
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className=" text-black rounded-lg shadow-lg relative flex flex-col w-full bg-slate-600 border-orange-600 border outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-orange-600 rounded-t">
              <h3 className="text-3xl text-white font-semibold">{title}</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-white opacity-50  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal?.(false)}
              >
                <span className="z-50 opacity">x</span>
              </button>
            </div>

            <div className="relative p-6 flex-auto">
              <div className="flex justify-center">
                <img className="w-1/2 " src={img} alt="" />
              </div>
              <p
                dangerouslySetInnerHTML={{ __html: ldesc! }}
                className="my-4 text-white text-lg leading-relaxed"
              />
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-orange-600 rounded-b">
              <button
                className="text-orange-600 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
  );
}

export default Modal;
