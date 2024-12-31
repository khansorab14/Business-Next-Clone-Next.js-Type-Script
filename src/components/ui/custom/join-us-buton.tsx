import React from "react";
import black from "../../../assets/b-arrow.png";
import Image from "next/image";

export const JoinUs = () => {
  return (
    <button className="bg-customWhite flex text-black  text-[12px] justify-center items-center w-fit font-bold py-[13px] px-[17px] lg:text-sm uppercase  hover:transform  transition duration-300 ease-in-out">
      JOIN US NOW
      <span className="ml-2 inline-block">
        {/* Wrapper div with hover effect and transition */}
        <div className="inline-block transition-transform duration-300 ease-in-out hover:transform hover:rotate-[-50deg]">
          <Image src={black} alt="arrow" height={10} width={17} />
        </div>
      </span>
    </button>
  );
};
