import React from "react";
import BlogList from "./components/BlogList";

const MyBlogs = () => {
  return (
    <div className="bg-black pt-[200px] pb-[150px]">
      <div className="flex w-[90%] mx-auto items-center">
        <div className="w-full md:w-1/2 mx-auto flex flex-col items-center justify-center p-[10px_35px]">
          <h1 className="text-white font-bold text-5xl text-center mb-[50px]">
            We don't just innovate we write also
          </h1>
          <form className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-8 gap-2">
              <div className="sm:col-span-5">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full bg-transparent border border-white text-white rounded-md placeholder-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent p-2"
                />
              </div>
              <div className="sm:col-span-3 flex items-center justify-center">
                <button
                  type="submit"
                  className="w-full text-black bg-yellow-500 hover:bg-yellow-500 hover:text-white font-bold rounded-full py-2 px-4"
                >
                  Sign up here
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="flex w-full pl-6 md:pl-0 md:w-[90%] mx-auto items-center my-[20px]">
        <form className="w-1/2">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
            <div>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-[10px] ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-[4px] py-[2px] dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </div>
            <div>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Catagory</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      <div className="mt-[50px]">
        <BlogList />
      </div>
    </div>
  );
};

export default MyBlogs;
