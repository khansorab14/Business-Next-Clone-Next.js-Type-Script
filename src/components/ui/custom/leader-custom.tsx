import React from "react";
import Image from "next/image";
import CustomSwiper from "./swiper";

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
  backgroundColor = "#FFDBE9", // Default background color
  leaderData,
  slidesPerView = 1, // Default number of slides per view
  spaceBetween = 10, // Default space between slides
  breakpoints = {
    320: { slidesPerView: 1, spaceBetween: 10 }, // For very small screens
    640: { slidesPerView: 1, spaceBetween: 15 }, // Mobile screens
    768: { slidesPerView: 2, spaceBetween: 20 }, // Tablets
    1024: { slidesPerView: 4, spaceBetween: 20 }, // Desktops
  },
}) => {
  return (
    <div className="w-full h-[72vh] sm:h-[60vh]" style={{ backgroundColor }}>
      <div className="flex flex-col items-center text-center global-margin">
        {/* Title Section */}
        <div className="w-full max-w-screen-md py-4">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold uppercase leading-tight">
            {title}
          </h1>
        </div>

        {/* Swiper Section */}
        <div className="w-screen max-w-full">
          <CustomSwiper
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            breakpoints={breakpoints}
          >
            {leaderData.map((leader, index) => (
              <div
                key={index}
                className="bg-white h-64 w-full sm:w-full text-center flex flex-col justify-evenly items-center"
              >
                <Image
                  src={leader.image}
                  width={150}
                  height={150}
                  alt={`Leader Image ${index + 1}`}
                  className="mb-4"
                />
                <p className="text-sm sm:text-base">{leader.description}</p>
              </div>
            ))}
          </CustomSwiper>
        </div>
      </div>
    </div>
  );
};
