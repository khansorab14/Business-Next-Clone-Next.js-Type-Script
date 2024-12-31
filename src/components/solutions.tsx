"use client";
import React, { useState } from "react";
import Image from "next/image";
import GrayArrow from "../assets/greay-arrow2.png";
import GreenArrow from "../assets/green-arro.png";
import Sol1 from "../assets/sol3.png";
import Sol2 from "../assets/sol3.png";
import Sol3 from "../assets/solution1.png";
import white from "../assets/white-arrow.png";

import CustomSwiper from "./ui/custom/swiper";
import { TabButton } from "./ui/custom/tab-button";

export const Solutions = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Global scale",
      icon: GrayArrow,
      icon2: GreenArrow,
      image: Sol1,
      title: "Global Scale for Financial Institutions",
      description:
        "Experience unmatched scalability tailored for global financial institutions to achieve seamless operations.Experience unmatched scalability tailored for global financial institutions to achieve seamless operations",
    },
    {
      label: "Verticalised approach",
      icon: GrayArrow,
      icon2: GreenArrow,
      image: Sol2,
      title: "Verticalized CRM for Specific Needs",
      description:
        "CRM solutions designed for banks and credit unions with a focus on vertical market dynamics.",
    },
    {
      label: "Packaged solutions",
      icon: GrayArrow,
      icon2: GreenArrow,
      image: Sol3,
      title: "Comprehensive Packaged Financial Solutions",
      description:
        "Leverage best-in-class solutions packaged to deliver industry-specific customer experiences.",
    },
  ];

  return (
    <div className="w-screen h-[190vh] bg-black flex-wrap sm:h-[180vh] md:bg-black lg:h-[120vh] lg:bg-black ">
      <div>
        <div className="global-margin h-screen">
          <div className="lg:w-[764px] sm:w-fit md:w-full h-fit">
            <div className="py-10">
              <h1 className="text-white text-sm sm:text-3xl md:text-2xl lg:text-4xl font-extrabold uppercase text-start">
                Packaged financial solutions for Banks and Credit Unions
              </h1>
              <p className="text-gray-200 text-sm text-start mt-4 lg:text-lg">
                Deploy best-in-class and industry-specific customer experiences
                to help your financial institution achieve its mission.
              </p>
            </div>
          </div>
          <div className="w-full ">
            <CustomSwiper
              slidesPerView={3}
              spaceBetween={20}
              breakpoints={{
                400: { slidesPerView: 1, spaceBetween: 10 },
                640: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 10 },
                1024: { slidesPerView: 3, spaceBetween: 10 },
              }}
              style={{ textAlign: "center" }}
            >
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`flex justify-center ${
                    activeTab === index
                      ? "border-b-4 border-[#D2DE2F]"
                      : "border-transparent"
                  } transition-all duration-300 ease-in-out`}
                  onClick={() => setActiveTab(index)}
                >
                  <TabButton
                    label={tab.label}
                    icon={activeTab === index ? tab.icon2 : tab.icon}
                    className="w-full h-[42px]"
                  />
                </div>
              ))}
            </CustomSwiper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-8 sm:mt-1 md:mt-2 lg:mt-8">
            <div className="flex justify-center">
              <div className="w-full h-[65vh] bg-yellow-300 flex justify-center items-center">
                <Image
                  src={tabs[activeTab].image}
                  alt="Solution Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="items-center absolute h-[450px] w-full md:w-[520px] flex justify-center md:items-center lg:w-[520px]">
                <div className="p-4 relative">
                  <h1 className="uppercase text-3xl font-bold text-white">
                    {tabs[activeTab].title}
                  </h1>
                  <p className="text-gray-300 py-6">
                    {tabs[activeTab].description}
                  </p>

                  <button className="bg-customPink-500 flex text-customWhite text-[12px] justify-center items-center w-fit font-bold py-[13px] px-[17px] lg:text-sm uppercase transition-colors duration-300 ease-in-out">
                    LEARN MORE
                    <span className="ml-2 inline-block transition-transform duration-300 ease-in-out hover:rotate-[-50deg]">
                      <Image src={white} alt="arrow" height={10} width={17} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
