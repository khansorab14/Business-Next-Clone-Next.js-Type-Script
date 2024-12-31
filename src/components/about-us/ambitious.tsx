import Image from "next/image";
import React from "react";
import blackArrow from "../../assets/b-arrow.png";

export const Ambitious = () => {
  return (
    <div className="bg-white w-full h-[60vh]">
      <div className="grid grid-flow-row justify-center global-margin py-14 gap-5 items-center">
        <div className="flex justify-center items-center py-5">
          <Image src={blackArrow} alt="dytdytd" width={45} height={45} />
        </div>
        <h1 className="text-4xl text-center ">
          To help the ambitious build{" "}
          <span className="text-[#EA1D75]">
            extraordinary, buoyant,
            <br /> resilient
          </span>
          businesses that customers love.
        </h1>

        <p className="text-gray-500 text-lg text-center">
          In truth, we’re a tech company with a bunch of people that are super
          passionate about what we <br />
          do and the institutions we serve, because the communities they are
          serving deserve.
        </p>
      </div>
    </div>
  );
};
