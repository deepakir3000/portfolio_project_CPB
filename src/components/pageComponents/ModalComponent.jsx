import React from "react";

const ModalComponent = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-[10000] overflow-auto"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[85%] h-[60%] md:w-3/4 md:h-2/3 flex flex-col z-30">
        <button
          className="text-white text-2xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-white p-4 rounded-xl border-2 border-[#0e0e0ea1]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
