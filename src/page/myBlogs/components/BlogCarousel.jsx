import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import blogData from "../../../utils/data/blogData";
import { AiFillHeart } from "react-icons/ai";

const BlogCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1250 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1250, min: 900 },
      items: 3,
    },
    miniTablet: {
      breakpoint: { max: 900, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="p-4">
      <Carousel
        responsive={responsive}
        ssr={true}
        infinite={false}
        arrows={true}
        removeArrowOnDeviceType={["miniTablet", "mobile"]}
        autoPlay={false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="w-[85%] mx-2 py-4 px-2 border-2 border-white rounded-2xl bg-black text-white"
          >
            <div className="h-[20vh] w-full">
              <img
                src={blog.image}
                alt="thumbnail"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-4">
                <h5 className="text-sm font-semibold">{blog.title}</h5>
                <AiFillHeart className="w-20 text-red-500" />
              </div>
              <div className="flex gap-4 justify-start">
                <span className="text-xs font-light px-1 py-1 border-2 border-white rounded-lg">
                  Aquaponics
                </span>
                <span className="text-xs font-light px-1 py-1 border-2 border-white rounded-lg">
                  Sustainability
                </span>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BlogCarousel;
