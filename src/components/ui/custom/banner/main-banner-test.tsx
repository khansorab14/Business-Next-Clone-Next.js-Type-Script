"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { BannerButtons } from "./banner-button";
import Image, { StaticImageData } from "next/image";
import { RightStaticImages } from "./right-static-image";
import { RightSliderImage } from "./right-slider-image";
import { VideoComponent } from "./video-source";
// import { RightVideoComponent } from "./right-video";

interface BannerProps {
  sliderImages?: { src: StaticImageData | string; alt: string }[];
  staticImages?: { src: StaticImageData | string; alt: string };
  buttonData?: string[];
  topheading?: ReactNode;
  heading: ReactNode;
  description: ReactNode;
  buttonStyle?: React.CSSProperties;
  activeButtonStyle?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
  autoSlide?: boolean;
  slideInterval?: number;
  buttonLabel?: string;
  src: StaticImageData;
  alt: string;
  className?: string;

  // video
  videoSource: string;
  mediaType: "image" | "video" | "slider";
}

export const MainBanner: React.FC<BannerProps> = ({
  // for video
  videoSource,
  mediaType,
  sliderImages = [],
  staticImages,
  src,
  alt,
  className,
  buttonData,
  heading,
  description,
  buttonStyle,
  buttonLabel,
  topheading,
  activeButtonStyle,
  imageStyle,
  autoSlide = false, // Default to static image
  slideInterval = 3000,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    if (!autoSlide || !sliderImages.length) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [sliderImages.length, autoSlide, slideInterval]);

  const renderMedia = () => {
    switch (mediaType) {
      case "video":
        return (
          <VideoComponent
            videoSource={videoSource!}
            videoStyle={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: -1, // Ensure the video stays behind the content
            }}
          />
        );
      case "slider":
        return (
          <RightSliderImage
            sliderimages={sliderImages}
            activeIndex={activeIndex}
            imageStyle={imageStyle}
          />
        );
      case "image":
      default:
        return (
          <RightStaticImages
            staticImages={staticImages}
            imageStyle={imageStyle}
          />
        );
    }
  };

  return (
    <div className="relative h-auto bg-gradient-to-t from-[#FFDBE9] to-[#D5EEFF]">
      {renderMedia()}

      {/* Content Over the Video */}
      <div className="grid grid-cols-1 lg:grid-cols-2 absolute top-0 left-0 w-full h-full z-10">
        <div className="flex justify-center items-center w-full">
          <div className="flex flex-col justify-center w-full max-w-lg">
            <div className="flex flex-col gap-4">
              <div>{topheading}</div>
              <div>{heading}</div>
              <div>{description}</div>
              <button className="bg-customPink-500 flex gap-2 items-center justify-center text-customWhite text-[14px] w-fit font-bold py-4 px-6">
                {buttonLabel}
                <Image src={src} alt={alt} className={className} />
              </button>
            </div>

            {/* Buttons */}
            {!autoSlide ? null : (
              <BannerButtons
                buttonData={buttonData}
                activeIndex={activeIndex}
                onClick={setActiveIndex}
                buttonStyle={buttonStyle}
                activeButtonStyle={activeButtonStyle}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
