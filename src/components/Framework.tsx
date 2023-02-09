import React from "react";

function Framework() {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 framework-bg">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg lg:max-w-2xl mb-6 text-3xl font-bold text-center leading-2 tracking-tight text-[#99EFD0] sm:text-4xl md:mx-auto hero-heading">
            Create your <span className="text-[#F2994A]">next project</span>{" "}
            with startup framework
          </h2>
        </div>
        <div className="flex justify-center">
          <a
            href="/"
            title=""
            className="inline-flex justify-center px-4 w-40 mr-4 py-4 mt-4 text-sm font-medium text-white transition-all duration-200 bg-[#F2994A]  border border-transparent rounded sm:mt-4 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 butfont"
            role="button"
          >
           GET STARTED
          </a>
        </div>
      </div>
    </div>
  );
}

export default Framework;
