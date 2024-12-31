import React from "react";

import cover1 from "../../assets/cover1.png";
import cover2 from "../../assets/cover2.png";
import cover3 from "../../assets/cover3.png";
import playIcon from "../../assets/play.png";
import { MainBanner } from "../ui/custom/banner/main-banner";
import cover from "../../assets/about/about_banner.png";

const images = [
  { src: cover1, alt: "Acquire Relationships" },
  { src: cover2, alt: "Deepen Relationships" },
  { src: cover3, alt: "Retention Service" },
  { src: cover, alt: "Retention Service" },
];

const buttonData = [
  "Acquire Relationships",
  "Deepen Relationships",
  "Retention Service",
];

export const AboutUsBanner: React.FC = () => {
  const selectedImage = images[3];
  return (
    <MainBanner
      staticImages={selectedImage}
      src={playIcon}
      // layout="responsive"
      alt="Play Icon"
      className="w-4 h-4"
      buttonData={buttonData}
      topheading={
        <h1 className="uppercase font-thin text-2xl text-customPink-500">
          about-us
          <span className="uppercase font-extrabold text-black">next</span>
        </h1>
      }
      heading="     WHY WE BUILT BusinessNEXT"
      buttonLabel="KNOW YOUR BRAND"
      description="  To help the ambitious build extraordinary, buoyant, resilient
          businesses that customers love."
      buttonStyle={{
        border: "1px solid transparent",
        color: "black",
        backgroundColor: "transparent",
      }}
      activeButtonStyle={{
        border: "1px solid black",
        color: "black",
        backgroundColor: "transparent",
      }}
      imageStyle={{ borderRadius: "8px" }}
      autoSlide={false}
      slideInterval={5000}
    />
  );
};
