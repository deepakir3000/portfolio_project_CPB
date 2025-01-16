import React from "react";

const Partners = () => {
  const partners = [
    { id: 1, image: "/src/assets/images/p-1.png" },
    { id: 2, image: "/src/assets/images/p-2.png" },
    { id: 3, image: "/src/assets/images/p-3.png" },
    { id: 4, image: "/src/assets/images/p-4.png" },
  ];
  return (
    <div className="px-4 py-4 md:py-24 lg:px-14 max-w-screen-2xl mx-auto bg-black">
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-white font-semibold mb-4">Our Partners</h2>
      </div>

      {/* all Partners */}
      <div className="grid lg:grid-cols-4 sm:grid-cols-4 grid-cols-2 gap-4 mt-10 items-center justify-between">
        {partners.map((blog) => (
          <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
            <img
              src={blog.image}
              alt=""
              className="rounded-xl hover:scale-95 transition-all duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
