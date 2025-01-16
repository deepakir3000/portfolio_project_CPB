import { useState } from "react";
import ModalComponent from "./ModalComponent";
import JoinCommunity from "./JoinCommunity";

const JoinCommunityModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div
        className="bg-[#005F1F] text-black fixed bottom-5 left-10 rounded-full p-3 cursor-pointer z-10 border-white border-[1px]"
        onClick={() => setShowModal(true)}
      >
        <img
          src="./src/assets/images/join.png"
          alt=""
          className="w-full h-10 bg-cover bg-center object-fill"
        />
      </div>

      <ModalComponent isVisible={showModal} onClose={() => setShowModal(false)}>
        <JoinCommunity />
      </ModalComponent>
    </div>
  );
};

export default JoinCommunityModal;
