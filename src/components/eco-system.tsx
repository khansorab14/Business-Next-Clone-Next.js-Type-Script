import Image from "next/image";
import React from "react";
import GreenArrow from "../assets/customer/g-arrow.png";
import eco from "../assets/customer/eco-system.webp";
import WhiteArrow from "../assets/customer/w-arrow.png";
import ArrowWhoite from "../assets/customer/arrow-white.png";
import { JoinUs } from "./ui/custom/join-us-buton";

export const EcoSystem = () => {
  return (
    <div className="w-screen h-auto">
      {/* Title Section */}
      <div className="py-10 flex justify-center">
        <h1 className="text-5xl font-bold uppercase py-4 mt-5 text-center">
          Ecosystem Connector
        </h1>
      </div>

      {/* Main Content Section */}
      <div>
        {/* Arrow and Image Row */}
        <div className="flex justify-between items-center">
          {/* Left Arrow */}
          <div className="w-fit h-screen  flex justify-center items-start ">
            <Image
              src={GreenArrow}
              width={200}
              height={200}
              alt="Green Arrow"
            />
          </div>

          {/* Center Image */}
          <div className="w-full h-auto flex justify-center items-centre ">
            <Image src={eco} alt="Ecosystem" layout="responsive" />
          </div>

          {/* Right Arrow */}
          <div className="w-fit h-screen  flex justify-start mb-0 items-end ">
            <Image
              src={GreenArrow}
              width={200}
              height={200}
              alt="Green Arrow"
            />
          </div>
        </div>

        {/* Pink Section */}
        <div className="bg-[#EA1D75] w-auto global-margin py-10 px-6 my-20">
          <div className="flex justify-center items-center">
            {/* Left Arrow */}
            <div className="flex justify-start items-start w-fit h-full mb-20 p-4 ">
              <Image
                src={WhiteArrow}
                width={50}
                height={50}
                alt="White Arrow"
                className="sm:w-16 sm:h-16"
              />
            </div>

            {/* Center Content */}
            <div className="mx-10 flex-1 justify-center items-center text-white p-6 w-[700px] rounded-md">
              <h1 className="uppercase text-2xl md:text-4xl font-extrabold text-center mb-4">
                Unlimit Your True Potential. #UpForTomorrow.
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-center">
                You’re curious and caring, someone excited about solving the
                hard problems with technology. Fear of the unknown doesn’t hold
                you back from acquiring new skills to become truly ready for the
                future and #UpForTomorrow.
              </p>
              <div className="flex justify-center py-5">
                <JoinUs />
              </div>
            </div>

            {/* Right Arrow */}
            <div className="flex justify-center w-fit items-center h-auto p-4">
              <Image
                src={ArrowWhoite}
                width={50}
                height={150}
                alt="White Arrow"
                className="sm:w-24 sm:h-24 md:w-32 md:h-32"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
