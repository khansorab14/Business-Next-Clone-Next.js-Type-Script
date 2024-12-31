import React from "react";
import { MainBanner } from "./ui/custom/banner/main-banner";
import cover1 from "../assets/cover1.png";
import cover2 from "../assets/cover2.png";
import cover3 from "../assets/cover3.png";
import playIcon from "../assets/play.png";

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

export const Banner: React.FC = () => {
  const selectedImage = images[2];
  return (
    <MainBanner
      mediaType="slider"
      // mediaType="video"
      // videoSource={"./video1.mp4"}
      // staticImages={selectedImage}
      sliderImages={images}
      src={playIcon}
      // layout="responsive"
      alt="Play Icon"
      className="w-4 h-4"
      buttonData={buttonData}
      heading="  Retain, Deepen and Acquire Relationships"
      buttonLabel="JOIN NOW"
      description="   A configurable solution for every role in your organization.
                  With a comprehensive, and complete view of your customer,
                  CRMNEXT will transform your front-line staff to be an
                  essential component of your retention and growth strategy."
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
      autoSlide={true}
      slideInterval={5000}
    />
  );
};
