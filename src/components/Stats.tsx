import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Stats() {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 stat-bg">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg lg:max-w-2xl mb-6 text-3xl font-bold text-center leading-2 tracking-tight text-[#99EFD0] sm:text-4xl md:mx-auto hero-heading">
            3 Simple Ways To <span className="text-[#F2994A]">Save</span> A
            Bunch Of <span className="text-[#F2994A]">Money</span> When Buying A
            New Computer
          </h2>
          <p className="text-base font-semibold text-[#8476AA] text-center md:text-lg hero-subtext">
            Fully customizable and neatly organized components will help you
            work faster without limiting creative freedom.
          </p>
        </div>

        <div className="grid row-gap-8 sm:grid-cols-3">
          <div className="text-center my-4">
            <h6 className="text-5xl font-bold text-[#99EFD0] hero-heading">
              <>
                <CountUp end={100} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </>
              +
            </h6>
            <p className=" font-semibold text-[#8476AA] hero-subtext">
              5 Reasons To Purchase Desktop Computers
            </p>
          </div>
          <div className="text-center my-4">
            <h6 className="text-5xl font-bold text-[#99EFD0] hero-heading">
              <>
                <CountUp end={43000} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </>
              +
            </h6>
            <p className="font-semibold text-[#8476AA] hero-subtext">
              3 Simple Ways To Save A Bunch Of Money When Buying A New Computer
            </p>
          </div>
          <div className="text-center my-4">
            <h6 className="text-5xl font-bold text-[#99EFD0] hero-heading">
              <>
                <CountUp end={30} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </>
              +
            </h6>
            <p className="font-semibold text-[#8476AA] hero-subtext">
              A Discount Toner Cartridge Is Better Than Ever And You Will Save
              50 Or More
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
