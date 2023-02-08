import React from "react";
import TrafficImg from "../assets/images/trafficImage.png";
import "../styles/HomePage.css";

function Traffic() {
  return (
    <div className="bg-gradient-to-r from-[#131147] to-[#2A1955]">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-md mb-6 text-4xl text-center md:text-left font-bold tracking-tight text-[#99EFD0] sm:text-6xl sm:leading-none hero-heading">
                Increase your business{" "}
                <span className="text-[#F2994A]">traffic</span>
              </h2>
              <p className="text-base text-[#8476AA] text-center md:text-left font-semibold md:text-lg hero-subtext">
                We are committed to processing the information in order to
                contact you and talk about your project.
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <a
                href="/"
                title=""
                className="inline-flex justify-center px-4 w-40 mr-4 py-4 mt-4 text-sm font-medium text-white transition-all duration-200 bg-[#F2994A]  border border-transparent rounded sm:mt-4 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 butfont"
                role="button"
              >
                LEARN MORE
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-center px-3">
              <img className="object-cover" src={TrafficImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Traffic;
