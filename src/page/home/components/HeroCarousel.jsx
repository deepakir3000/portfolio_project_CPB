import React from "react";
import { Carousel } from "flowbite-react";
import banner1 from "../../../assets/images/q-1.gif";
import banner2 from "../../../assets/images/q-2.gif";
import banner3 from "../../../assets/images/q-3.gif";

const HeroCarousel = () => {
  return (
    <div className="bg-black" id="home">
      <div className="px-4 py-24 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-around gap-8">
            <div>
              <img src={banner1} alt="" className="w-40 md:w-96" />
            </div>

            {/* hero text */}
            <div className="md:w-1/2">
              <p className="text-white md:text-base text-sm mb-8 md:w-2/4">
                Farmers are switching from farming to other jobs as its getting
                difficult for the farmers to cope up with this fast pace world.
                Gone are those days where farmers are dependent on faith, due to
                which there are many losses then gains, there is a need for
                change and incorporating different and innovative methods, its
                not replacement for traditional method but an enhancement or
                improvement of traditional methods
              </p>
            </div>
          </div>

          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-around gap-8">
            <div>
              <img src={banner2} alt="" className="w-40 md:w-96" />
            </div>

            {/* hero text */}
            <div className="md:w-1/2">
              <p className="text-white md:text-base text-sm mb-8 md:w-2/4">
                Farmers are switching from farming to other jobs as its getting
                difficult for the farmers to cope up with this fast pace world.
                Gone are those days where farmers are dependent on faith, due to
                which there are many losses then gains, there is a need for
                change and incorporating different and innovative methods, its
                not replacement for traditional method but an enhancement or
                improvement of traditional methods
              </p>
            </div>
          </div>

          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-around gap-8">
            <div>
              <img src={banner3} alt="" className="w-40 md:w-96" />
            </div>

            {/* hero text */}
            <div className="md:w-1/2">
              <p className="text-white md:text-base text-sm mb-8 md:w-2/4">
                Farmers are switching from farming to other jobs as its getting
                difficult for the farmers to cope up with this fast pace world.
                Gone are those days where farmers are dependent on faith, due to
                which there are many losses then gains, there is a need for
                change and incorporating different and innovative methods, its
                not replacement for traditional method but an enhancement or
                improvement of traditional methods
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HeroCarousel;
