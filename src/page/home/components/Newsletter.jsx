import { useState } from "react";
import ModalComponent from "../../../components/pageComponents/ModalComponent";
import JoinCommunity from "../../../components/pageComponents/JoinCommunity";

const Newsletter = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-black py-16">
        <div className="flex items-center justify-center lg:w-2/5 mx-auto">
          <div className="text-center">
            <h2 className="lg:text-5xl text-3xl text-white font-semibold mb-6 lg:leading-snug">
              Join our Community
            </h2>
            <div className="flex justify-center items-center gap-8">
              <button
                onClick={() => setShowModal(true)}
                className="btn-yellow flex items-center"
              >
                Join us{" "}
                <span>
                  <img
                    src="/src/assets/images/arrow_icon.png"
                    alt=""
                    className="w-5 ml-1"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <ModalComponent isVisible={showModal} onClose={() => setShowModal(false)}>
        <JoinCommunity />
      </ModalComponent>
    </>
  );
};

export default Newsletter;
