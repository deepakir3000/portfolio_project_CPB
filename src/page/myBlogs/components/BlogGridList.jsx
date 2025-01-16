import React from "react";
import blogs from "../../../utils/data/blogData";
import { AiFillHeart } from "react-icons/ai";

const BlogGridList = () => {
  return (
    <div className="px-4 pb-4 md:pb-24 lg:px-14 max-w-screen-2xl mx-auto bg-black">
      {/* all blogs */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-10 items-center justify-between">
        {blogs.map((blog) => (
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
      </div>
    </div>
  );
};

export default BlogGridList;
