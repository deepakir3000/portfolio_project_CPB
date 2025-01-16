import React from "react";
import Partners from "../home/components/Partners";
import JoinCommunity from "../../components/pageComponents/JoinCommunity";
import Recognitions from "./components/Recognitions";
import MissionVision from "./components/MissionVision";

const AboutUs = () => {
  return (
    <div className="bg-black">
      <div className="w-full px-6 md:px-12 mx-auto h-screen justify-center items-center flex flex-col md:flex-row">
        <div
          data-aos="fade-right"
          className="w-full md:w-2/5 flex flex-col items-start justify-center mb-5 md:mb-0"
        >
          <h1 className="text-white font-bold text-4xl md:text-5xl text-start mb-4">
            Know More About Us
          </h1>

          <h3 className="text-white text-start text-base md:text-xl">
            A place where innovation meets agriculture. In a mission to take
            farming profitable, with our products and services.
          </h3>
        </div>
        <div className="w-full md:w-3/5">
          <img
            src="/src/assets/images/about-top.png"
            alt="image"
            className="w-full"
            data-aos="fade-left"
          />
        </div>
      </div>

      <div className="m-4">
        <div className="w-auto md:w-[70%] mx-auto mb-24 bg-green-300 rounded-2xl relative flex items-center justify-center h-auto p-5 md:px-24 md:py-16">
          <div className="text-center">
            <h1 className="text-black font-bold text-4xl md:text-5xl mb-8">
              Our Story
            </h1>

            <h3 className="text-black text-sm md:text-lg mb-4">
              The idea for a one-stop solution of all agricultural needs started
              at a farm when we noticed that farmers are switching from farming
              to other jobs as it’s getting difficult for the farmers to cope up
              with this fast-paced world where the demand is increasing day by
              day but the production is not high. Gone are those days where
              farmers are dependent on faith, due to which there are many losses
              than gains. There is a need for change and incorporating different
              and innovative methods. It’s not a replacement for traditional
              methods but an enhancement or improvement of traditional methods.
              While designing our services and products, our main motive is to
              make farming efficient, effective, profitable, and most
              importantly sustainable while making their business profitable.
            </h3>

            <h3 className="text-black text-sm md:text-lg">
              While designing our services and products, our main motive is to
              make farming efficient, effective, profitable, and most
              importantly, sustainable while making their business profitable.
            </h3>
          </div>

          <div
            data-aos="fade-up"
            className="absolute bottom-[-70px] right-[-128px] hidden lg:block"
          >
            <img
              src="/src/assets/images/about-2.png"
              alt="image"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>
      </div>

      <MissionVision />

      <Partners />

      <div className="px-12 py-4 rounded-xl border-2 border-purple-700 w-[90%] m-auto bg-white">
        <JoinCommunity />
      </div>

      <Recognitions />
    </div>
  );
};

export default AboutUs;
