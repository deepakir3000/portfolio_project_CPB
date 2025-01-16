import React, { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";

const HeroCarousel = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-black py-8 px-8 md:py-24 md:px-12">
      <div className="flex flex-col gap-5 mb-5 md:mb-0">
        <h1 className="text-white font-bold text-xl sm:text-2xl md:text-5xl ">
          Know More
        </h1>
        <p className="text-white text-sm md:text-base mb-8 md:w-3/4">
          We are really fond of sharing our knowledge and experiences with the
          world, get your hands on the pool of knowledge.
        </p>
        <div className="flex justify-start items-start gap-8">
          <button className="btn-yellow flex items-center">Read more</button>
        </div>
      </div>
      <div className="w-full md:w-3/4">
        <Marquee direction="right" speed={100} className="space-y-2">
          <div className="mr-3">
            <img
              src="/src/assets/images/k-s-1/ks_1_1.jpg"
              alt=""
              className="w-52 h-36 object-cover rounded-xl "
            />
          </div>
          <div className="mr-3">
            <img
              src="/src/assets/images/k-s-1/ks_1_2.jpg"
              alt=""
              className="w-52 h-36 object-cover rounded-xl"
            />
          </div>
          <div className="mr-3">
            <img
              src="/src/assets/images/k-s-1/ks_1_3.jpg"
              alt=""
              className="w-52 h-36 object-cover rounded-xl"
            />
          </div>
          <div className="mr-3">
            <img
              src="/src/assets/images/k-s-1/ks_1_4.jpg"
              alt=""
              className="w-52 h-36 object-cover rounded-xl"
            />
          </div>
        </Marquee>
        <Marquee direction="left" className="space-y-2">
          <div className="mr-3">
            <img
              src="/src/assets/images/k-s-2/ks_2_1.jpg"
              alt=""
              className="w-52 h-36 object-cover rounded-xl"
            />
          </div>
          <div className="mr-3">
            <img
              src="/src/assets/images/k-s-2/ks_2_2.jpg"
              alt=""
              className="w-52 h-36 object-cover rounded-xl"
            />
          </div>
          <div className="mr-3">
            <img
              src="/src/assets/images/k-s-2/ks_2_3.jpg"
              alt=""
              className="w-52 h-36 object-cover rounded-xl"
            />
          </div>
          <div className="mr-3">
            <img
              src="/src/assets/images/k-s-2/ks_2_4.jpg"
              alt=""
              className="w-52 h-36 object-cover rounded-xl"
            />
          </div>
        </Marquee>
        <Marquee direction="right" speed={100} className="space-y-2">
          <div className="mr-3">
            <img
              src="/src/assets/images/k-s-3/ks_3_1.jpg"
              alt=""
              className="w-52 h-36 object-cover rounded-xl"
            />
          </div>
          <div className="mr-3">
            <img
              src="/src/assets/images/k-s-3/ks_3_2.jpg"
              alt=""
              className="w-52 h-36 object-cover rounded-xl"
            />
          </div>
          <div className="mr-3">
            <img
              src="/src/assets/images/k-s-3/ks_3_3.jpg"
              alt=""
              className="w-52 h-36 object-cover rounded-xl"
            />
          </div>
          <div className="mr-3">
            <img
              src="/src/assets/images/k-s-3/ks_3_4.png"
              alt=""
              className="w-52 h-36 object-cover rounded-xl"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default HeroCarousel;
