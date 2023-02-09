import React from "react";
import "../styles/HomePage.css";

function Banner() {
  return (
    <div>
      <section className="banner-bg">
        <div className="container px-6 py-16 mx-auto text-center bg-[#181a51]">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-semibold text-[#F2994A] lg:text-4xl playfont">
              There are many reasons to get down
            </h1>
            <p className="mt-6 text-[#8476AA] text-xl font-semibold hero-subtext">
              There are many reasons to get down and start to get depressed
              about your situation.
            </p>
            <div className="w-full max-w-sm mx-auto mt-6 rounded-md  focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 focus-within:ring-opacity-40">
              <form className="flex flex-col md:flex-row">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 h-10 px-4 py-2 m-1 bg-[#2E3061] text-gray-700 placeholder-gray-400 border-none appearance-none focus:outline-none focus:placeholder-transparent focus:ring-0"
                />
                <button
                  type="button"
                  className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-[#F2994A] rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
                >
                  Send
                </button>
              </form>
            </div>
            <p className="mt-6 text-[#8476AA] font-semibold hero-subtext">
              No spam. Only releases, updates and discounts
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
