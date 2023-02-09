import React from "react";
import Infopic from "../assets/images/infopic.png";
import "../styles/HomePage.css";
import Lte from "../assets/icons/LTE#1.png";
import SwissKnife from "../assets/icons/Swiss-knife.png";

function Info() {
  return (
    <div className="info-bg">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div>
            <img className="object-cover w-full" src={Infopic} alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight text-[#99EFD0] text-center lg:text-left sm:leading-none hero-heading">
                Help Finding Information Online
              </h2>
              <p className="text-base text-[#8476AA] text-center lg:text-left font-semibold md:text-lg hero-subtext">
                Fully customizable and neatly organized components will help you
                work faster without limiting creative freedom.
              </p>
            </div>
            <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
              <div>
                <div className="h-full">
                  <img className="w-10 py-2 mx-auto lg:mx-0" src={Lte} alt="" />
                  <h5 className="mb-2 text-[#99EFD0] text-xl text-center lg:text-left font-bold leading-5">
                    Feature One
                  </h5>
                  <p className="text-sm font-semibold text-center lg:text-left text-[#8476AA]">
                    Fully customizable and neatly organized components will help
                    you work faster
                  </p>
                </div>
              </div>
              <div>
                <div className="h-full">
                <img className="w-10 py-2 mx-auto lg:mx-0" src={SwissKnife} alt="" />
                  <h5 className="mb-2 font-bold text-xl text-center lg:text-left text-[#99EFD0] leading-5">
                    Feature Two
                  </h5>
                  <p className="text-sm font-semibold text-center lg:text-left text-[#8476AA]">
                    Fully customizable and neatly organized components will help
                    you work faster
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
