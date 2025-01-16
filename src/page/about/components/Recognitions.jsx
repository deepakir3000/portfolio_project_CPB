import React from "react";

const Recognitions = () => {
  const blogs = [
    { id: 1, image: "/src/assets/images/c-1.png" },
    { id: 2, image: "/src/assets/images/c-2.png" },
  ];
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto lg:py-12 md:px-8 md:py-8 sm:px-4 py-4">
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-white font-semibold mb-4">Recognitions</h2>
      </div>

      {/* all blogs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-between mt-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
            <img
              src={blog.image}
              alt=""
              className="hover:scale-95 transition-all duration-500 h-48"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recognitions;
