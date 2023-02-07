import React from 'react'
import Frame from "../assets/logo/Frame.svg";
import Frame1 from "../assets/logo/Frame (1).svg";
import Frame2 from "../assets/logo/Frame (2).svg";
import Frame3 from "../assets/logo/Frame (3).svg";
import Frame4 from "../assets/logo/Frame (4).svg";
import Frame5 from "../assets/logo/Frame (5).svg";

function LogoCloud() {
  return (
    <div className="bg-gradient-to-r from-[#131147] to-[#2A1955]">
         <div className="mx-auto px-4 w-full max-w-7xl text-gray-800">
        <div className="flex flex-col items-center space-y-12">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-3 sm:col-span-2 lg:col-span-1 px-5 flex justify-center items-center">
              <img src={Frame} alt="" className="max-h-6 opacity-80" />
            </div>

            <div className="col-span-3 sm:col-span-2 lg:col-span-1 px-5 flex justify-center items-center">
              <img src={Frame1} alt="" className="max-h-6 opacity-80" />
            </div>

            <div className="col-span-3 sm:col-span-2 lg:col-span-1 px-5 flex justify-center items-center">
              <img src={Frame2} alt="" className="max-h-6 opacity-80" />
            </div>

            <div className="col-span-3 sm:col-span-2 lg:col-span-1 px-5 flex justify-center items-center">
              <img src={Frame3} alt="" className="max-h-6 opacity-80" />
            </div>

            <div className="col-span-3 sm:col-span-2 lg:col-span-1 px-5 flex justify-center items-center">
              <img src={Frame4} alt="" className="max-h-6 opacity-80" />
            </div>

            <div className="col-span-3 sm:col-span-2 lg:col-span-1 px-5 flex justify-center items-center">
              <img src={Frame5} alt="" className="max-h-6 opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogoCloud