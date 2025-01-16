import React, { useState, useEffect } from "react";
import MissVis from "../../../assets/images/miss-vis.png";
import AOS from "aos";
import "aos/dist/aos.css";

const MissionVision = () => {
  const [selected, setSelected] = useState("");
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleClick = (option) => {
    setSelected(option);
    setShowImage(false);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center mt-24 px-5 md:px-10 mx-auto w-4/5 overflow-hidden">
        {/* Button Section */}
        <div className="flex flex-row md:flex-col gap-4 w-full md:w-1/2 mb-8 md:mb-0">
          <button
            className={`w-1/2 md:w-[20vw] p-5 text-3xl rounded transition-all ${
              selected === "mission"
                ? "bg-green-700 text-white"
                : "bg-gray-300 text-white hover:bg-white hover:text-black"
            }`}
            onClick={() => handleClick("mission")}
          >
            Mission
          </button>
          <button
            className={`w-1/2 md:w-[20vw] p-5 text-3xl rounded transition-all ${
              selected === "vision"
                ? "bg-green-700 text-white"
                : "bg-gray-300 text-white hover:bg-white hover:text-black"
            }`}
            onClick={() => handleClick("vision")}
          >
            Vision
          </button>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 pl-5 flex items-center">
          {showImage ? (
            <img
              src={MissVis}
              alt="Placeholder"
              className="max-w-full rounded overflow-hidden"
              data-aos="fade-right"
            />
          ) : (
            <p
              className={`text-white text-lg md:text-2xl ${
                showImage ? "" : "fade-in"
              }`}
            >
              {selected === "mission"
                ? "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus unde ex aliquam inventore. Voluptate nulla, beatae obcaecati maxime nemo pariatur hic exercitationem voluptatum excepturi assumenda."
                : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus unde ex aliquam inventore. Voluptate nulla, beatae obcaecati maxime nemo pariatur hic exercitationem voluptatum excepturi assumenda.Necessitatibus unde ex aliquam inventore. Voluptate nulla, beatae obcaecati maxime nemo pariatur hic exercitationem voluptatum excepturi assumenda."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
