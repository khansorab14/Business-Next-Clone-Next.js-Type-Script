import React from "react";
import { MainBanner } from "../../banner/main-banner";
import cover1 from "../../../../../assets/cover1.png";
import cover2 from "../../../../../assets/cover2.png";
import cover3 from "../../../../../assets/cover3.png";
import playIcon from "../../../../../assets/play.png";

const images = [
  { src: cover1, alt: "Acquire Relationships" },
  { src: cover2, alt: "Deepen Relationships" },
  { src: cover3, alt: "Retention Service" },
];

const buttonData = [
  "Acquire Relationships",
  "Deepen Relationships",
  "Retention Service",
];

export const ProductBanner: React.FC = () => {
  return (
    <MainBanner
      staticImages={images[2]}
      src={playIcon}
      alt="Play Icon"
      className="w-4 h-4"
      buttonData={buttonData}
      topheading={
        <h1 className="uppercase font-thin text-2xl text-customPink-500">
          crm<span className="uppercase font-extrabold text-black">next</span>
        </h1>
      }
      heading="Retain, Deepen and Acquire Relationships"
      buttonLabel="LEARN MORE"
      description="A configurable solution for every role in your organization. With a
          comprehensive, and complete view of your customer, CRMNEXT will
          transform your front-line staff to be an essential component of your
          retention and growth strategy."
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
      videoSource="" // Provide a video URL if needed
      mediaType="image" // Specify "image" or "video"
    />
  );
};
