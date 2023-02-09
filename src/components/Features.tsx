import React from "react";
import "../styles/HomePage.css";
import FlipH from "../assets/icons/Flip-horizontal.png";
import Airpods from "../assets/icons/Airpods.png";
import Lte from "../assets/icons/LTE#1.png";
import ThunderMove from "../assets/icons/Thunder-move.png";
import Attachement from "../assets/icons/Attachment#1.png";
import Bulb from "../assets/icons/Bulb#1.png";

function Features() {
  return (
    <div className="feat-font">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 feat-font bgr">
        <div className="max-w-3xl mb-10 sm:mx-auto">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#99EFD0] sm:text-5xl text-center">
            Your Choice
          </h2>
          <p className="mt-6 mb-8 font-bold text-lg sm:mb-12 text-[#8476AA] text-center">
            There are many reasons to get down and start to get depressed about
            your situation.
          </p>
        </div>
        <div className="grid gap-12 row-gap-8 lg:grid-cols-3">
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3">
                <img src={FlipH} alt="" />
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-bold text-[#99EFD0] leading-5">
                Ecstatic elegance
              </h6>
              <p className="text-sm font-semibold text-[#8476AA]">
                Article nor prepare chicken you him now. Shy merits say advice
                ten before lovers innate add.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3">
                <img src={Airpods} alt="" />
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-bold text-[#99EFD0] leading-5">
                Folly words widow
              </h6>
              <p className="text-sm font-semibold text-[#8476AA]">
                Effect if in up no depend seemed. Ecstatic elegance gay but
                disposed. We me rent been part what.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3">
                <img src={Lte} alt="" />
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-bold text-[#99EFD0] leading-5">
                Possible procured trifling
              </h6>
              <p className="text-sm font-semibold text-[#8476AA]">
                We me rent been part what. An concluded sportsman offending so
                provision mr education.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3">
                <img src={ThunderMove} alt="" />
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-bold text-[#99EFD0] leading-5">
                Open game
              </h6>
              <p className="text-sm font-semibold text-[#8476AA]">
                Shy merits say advice ten before lovers innate add. She
                cordially behaviour can attempted estimable.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3">
                <img src={Attachement} alt="" />
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-bold text-[#99EFD0] leading-5">
                Endeavor
              </h6>
              <p className="text-sm font-semibold text-[#8476AA]">
                Improve ashamed married expense bed her comfort pursuit mrs.
                Four time took ye your as fail lady.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3">
                <img src={Bulb} alt="" />
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-bold text-[#99EFD0] leading-5">
                Comfort pursuit
              </h6>
              <p className="text-sm font-semibold text-[#8476AA]">
                Had denoting properly jointure you occasion directly raillery.
                In said to of poor full be post face snug.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Features;
