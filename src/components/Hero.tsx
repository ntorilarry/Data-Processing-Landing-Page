import React from "react";
import HumanRun from "../assets/images/humanrun.png";
import Play from "../assets/icons/play.png";
import "../styles/HomePage.css";

function Hero() {
  return (
    <div>
      <section className="relative py-12">
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
            <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
              <h1 className="text-4xl font-bold leading-tight text-[#99EFD0] sm:text-5xl sm:leading-tight lg:text-5xl lg:leading-tight hero-heading">
                Many reasons to get up and start to get back in the business
              </h1>
              <p className="mt-2 text-lg text-[#8476AA] sm:mt-6 font-semibold hero-subtext ">
                The harder you work for something, the greater you’ll feel when
                you achieve it.
              </p>

              <a
                href="/"
                title=""
                className="inline-flex justify-center px-4 w-40 mr-4 py-4 mt-8 text-sm font-medium text-white transition-all duration-200 bg-[#F2994A]  border border-transparent rounded sm:mt-10 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 butfont"
                role="button"
              >
                LEARN MORE
              </a>
              <a
                href="/"
                title=""
                className="inline-flex justify-center px-4 py-4 w-40  mt-2 mr-4 text-sm font-medium text-[#F2994A] transition-all duration-200 bg-transparent border-2 border-[#F2994A] rounded sm:mt-10 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 butfont"
                role="button"
              >
                DEMO
              </a>

              <div className="relative p-px overflow-hidden">
                <div className="relative flex flex-col h-full  rounded-sm lg:items-center lg:flex-row">
                  <div className=" lg:mr-6 lg:mb-0">
                    <div className="flex items-center justify-center my-8 lg:w-32 lg:h-32">
                      <img src={Play} alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center lg:items-start justify-between flex-grow playfont">
                    <div>
                      <h6 className="mb-2 font-semibold leading-5 text-[#8476AA]">
                        The harder you work for something, the greater you’ll
                        feel when you achieve it.
                      </h6>
                    </div>
                    <a
                      href="/"
                      aria-label=""
                      className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-[#6D6D78] hover:text-deep-purple-800"
                    >
                      Watch Preview
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:col-span-1">
              <img className="w-full mx-auto" src={HumanRun} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
