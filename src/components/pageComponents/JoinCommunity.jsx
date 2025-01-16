import React from "react";

const JoinCommunity = () => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-center gap-12 md:gap-2 bg-white px-3 rounded-2xl py-3">
      <div className="w-full md:w-1/2 flex flex-col gap-6 items-start">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl md:text-4xl font-semibold">
            Join Our Community
          </h1>
          <p className="text-sm font-normal">
            Lorem ipsum dolor sit amet consectetur. Risus suspendisse facilisis
            arcu in. Sit risus integer pharetra arcu augue eget. Porttitor
            tristique ut in libero odio adipiscing bibendum. Auctor cursus vel
            auctor massa nisi. Pellentesque ornare donec mattis commodo
            ullamcorper venenatis in sem adipiscing. Dignissim.
          </p>
        </div>
        <div>
          <form action="#" className="flex flex-col md:flex-row w-full gap-4">
            <input
              type="email"
              id="helper-text"
              aria-describedby="helper-text-explanation"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
              placeholder="enter your email"
            />

            <button className="btn-yellow">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <img
          src="/src/assets/images/join-community.png"
          alt=""
          className="w-full h-[200px] md:h-full object-fill"
        />
      </div>
    </div>
  );
};

export default JoinCommunity;
