import React from "react";
import Image from "next/image";
import CustomSwiper from "./ui/custom/swiper";

interface LeaderData {
  image: string;
  description: string;
}

interface LeaderProps {
  title: string;
  backgroundColor?: string;
  leaderData: LeaderData[];
  slidesPerView?: number;
  spaceBetween?: number;
  breakpoints?: Record<number, { slidesPerView: number; spaceBetween: number }>;
}

export const LeaderCustom: React.FC<LeaderProps> = ({
  title,
  backgroundColor = "#FFDBE9",
  leaderData,
  slidesPerView = 5,
  spaceBetween = 10,
  breakpoints,
}) => {
  return (
    <div
      className="w-full min-h-[50vh] sm:min-h-[60vh] py-6"
      style={{ backgroundColor }}
    >
      <div className="flex flex-col items-center text-center px-4 sm:px-6">
        {/* Title Section */}
        <div className="w-full max-w-screen-md py-4">
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold uppercase leading-tight">
            {title}
          </h1>
        </div>

        {/* Swiper Section */}
        <div className="w-full">
          <CustomSwiper
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            breakpoints={breakpoints}
          >
            {leaderData.map((leader, index) => (
              <div
                key={index}
                className=" h-64  bg-white text-center flex flex-col justify-evenly items-center p-4"
              >
                <Image
                  src={leader.image}
                  width={120}
                  height={120}
                  alt={`Leader Image ${index + 1}`}
                  className="rounded-full max-w-[80%] sm:max-w-[60%] lg:max-w-[150px] mb-4"
                />
                <p className="text-sm sm:text-base text-gray-700">
                  {leader.description}
                </p>
              </div>
            ))}
          </CustomSwiper>
        </div>
      </div>
    </div>
  );
};
