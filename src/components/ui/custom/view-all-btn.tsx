import React from "react";
import white from "../../../assets/white-arrow.png";
import Image from "next/image";

export const ViewAll = () => {
  return (
    <button className="bg-customPink-500 flex text-customWhite text-[12px] justify-center items-center w-fit text-center font-bold py-[13px] px-[17px] lg:text-sm uppercase  hover:transform  transition duration-300 ease-in-out">
      View All
      <span className="ml-2 inline-block">
        {/* Wrapper div with hover effect and transition */}
        <div className="inline-block transition-transform duration-300 ease-in-out hover:transform hover:rotate-[-50deg]">
          <Image src={white} alt="arrow" height={10} width={17} />
        </div>
      </span>
    </button>
  );
};
