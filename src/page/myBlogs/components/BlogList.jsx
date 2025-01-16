import { AiFillHeart } from "react-icons/ai";
import React, { useState } from "react";
import BlogCarousel from "./BlogCarousel";
import blogs from "../../../utils/data/blogData";
import BlogGridList from "./BlogGridList";

const BlogList = () => {
  const [mainBlog, setMainBlog] = useState(blogs[0]);
  const [sideBlogs, setSideBlogs] = useState(blogs.slice(1));

  const handleBlogClick = (blog) => {
    setSideBlogs([mainBlog, ...sideBlogs.filter((b) => b.id !== blog.id)]);
    setMainBlog(blog);
  };

  return (
    <>
      <div>
        <BlogGridList />
      </div>
      <div className="container mx-auto mt-5">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 px-2 md:px-8">
          <div className="col-span-2">
            <div
              className="relative h-[80vh] bg-cover bg-center rounded-lg flex justify-center items-start"
              style={{ backgroundImage: `url(${mainBlog.image})` }}
            >
              <div className="absolute bottom-0 left-0 w-full p-4 bg-black/50 rounded-b-lg">
                <h3 className="text-white text-xl mb-2">{mainBlog.title}</h3>
                <p className="text-white text-sm">{mainBlog.desc}</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex gap-2">
                    <span className="text-xs font-light px-1 py-1 bg-black/50 text-white rounded-lg border border-white">
                      Aquaponics
                    </span>
                    <span className="text-xs font-light px-1 py-1 bg-black/50 text-white rounded-lg border border-white">
                      Sustainability
                    </span>
                  </div>
                  <AiFillHeart className="h-12 w-20 text-red-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {sideBlogs.map((blog) => (
              <div
                key={blog.id}
                className="flex items-center gap-4 p-2 border border-gray-200 rounded-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() => handleBlogClick(blog)}
              >
                <div className="w-1/3 h-full">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-fill rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h5 className="text-sm text-white font-medium mb-2">
                    {blog.title}
                  </h5>
                  <div className="flex gap-2">
                    <span className="text-xs font-light px-1 py-1 text-sm text-white border border-gray-300 rounded-lg">
                      Aquaponics
                    </span>
                    <span className="text-xs font-light px-1 py-1 text-sm text-white border border-gray-300 rounded-lg">
                      Sustainability
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <BlogCarousel />
        </div>
      </div>
    </>
  );
};

export default BlogList;
