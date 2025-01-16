import React from "react";
import JoinCommunity from "../../components/pageComponents/JoinCommunity";

const ContactUs = () => {
  return (
    <div className="bg-black pb-8">
      <div className="min-h-screen w-full flex flex-col md:flex-row justify-center items-center md:min-h-[70vh] px-8 md:px-24">
        <h1 className="md:text-3xl lg:text-5xl text-2xl font-semibold mb-4 text-white md:w-3/4">
          Contact us
        </h1>
        <form class="max-w-sm mx-auto space-y-2">
          <div className="grid grid-cols-1 gap-2">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
              <input
                type="text"
                id="firstName"
                aria-describedby="helper-text-explanation"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-800 dark:focus:border-green-800"
                placeholder="First Name"
              />
              <input
                type="text"
                id="lastName"
                aria-describedby="helper-text-explanation"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-800 dark:focus:border-green-800"
                placeholder="Last Name"
              />
              <input
                type="email"
                id="email"
                aria-describedby="helper-text-explanation"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-800 dark:focus:border-green-800"
                placeholder="Email Address"
              />
              <input
                type="tel"
                id="contact"
                aria-describedby="helper-text-explanation"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-800 dark:focus:border-green-800"
                placeholder="Contact No."
              />
            </div>
            <div className="grid grid-cols-1">
              <textarea
                id="message"
                rows="5"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-800 dark:focus:border-green-800"
                placeholder="How can we help you"
              ></textarea>
            </div>
            <p className="text-white text-sm">
              write your queries and we will reach you
            </p>

            <button className="btn-yellow">Get in touch</button>
          </div>
        </form>
      </div>

      <div className="px-12 py-4 rounded-xl border-2 border-purple-700 w-[90%] m-auto bg-white">
        <JoinCommunity />
      </div>
    </div>
  );
};

export default ContactUs;
