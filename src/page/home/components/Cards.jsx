import React from "react";

const Cards = () => {
  const blogs = [
    { id: 1, image: "/src/assets/images/img-1.png" },
    { id: 2, image: "/src/assets/images/img-2.jpg" },
    { id: 3, image: "/src/assets/images/img-3.png" },
  ];
  return (
    <div
      className="px-4 md:py-24 lg:px-14 max-w-screen-2xl mx-auto bg-black"
      id="faq"
    >
      {/* all Cards */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-12 md:gap-16 lg:gap-28 items-center justify-between">
        {blogs.map((blog) => (
          <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
            <img
              src={blog.image}
              alt=""
              className="rounded-xl hover:scale-110 transition-all duration-500 h-[30vh] md:h-[50vh] lg:h-[80vh] w-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
