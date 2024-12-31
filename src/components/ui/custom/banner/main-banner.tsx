"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { BannerButtons } from "./banner-button";
import Image, { StaticImageData } from "next/image";
import { RightStaticImages } from "./right-static-image";
import { RightSliderImage } from "./right-slider-image";
import { VideoComponent } from "./video-source";

interface BannerProps {
  sliderImages?: { src: StaticImageData | string; alt: string }[];
  staticImages?: { src: StaticImageData | string; alt: string };
  buttonData?: string[];
  topheading?: ReactNode;
  heading: string;
  description: string;
  buttonStyle?: React.CSSProperties;
  activeButtonStyle?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
  autoSlide?: boolean;
  slideInterval?: number;
  buttonLabel?: string;
  src: StaticImageData;
  alt: string;
  className?: string;
  layout?: string;

  // video
  videoSource: string;
  mediaType: "image" | "video" | "slider";
}

export const MainBanner: React.FC<BannerProps> = ({
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
  autoSlide = false,
  slideInterval = 3000,
  layout,
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
        return <VideoComponent videoSource={videoSource!} />;
      case "slider":
        return (
          <RightSliderImage
            sliderimages={sliderImages}
            activeIndex={activeIndex}
            imageStyle={imageStyle}
            layout={layout}
          />
        );
      case "image":
      default:
        return (
          <RightStaticImages
            staticImages={staticImages}
            imageStyle={imageStyle}
            layout={layout}
          />
        );
    }
  };

  return (
    <div className="relative h-auto bg-gradient-to-t from-[#FFDBE9] to-[#D5EEFF]">
      {renderMedia()}

      <div className="grid grid-cols-1 lg:grid-cols-2 absolute top-0 left-0 w-full h-full z-10">
        <div className="flex justify-center items-center w-full px-4 sm:px-8">
          <div className="flex flex-col justify-center w-full max-w-lg">
            <div className="flex flex-col gap-4">
              {/* Top Heading */}
              {topheading && (
                <h1 className="text-black text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold uppercase text-start">
                  {topheading}
                </h1>
              )}

              {/* Main Heading */}
              <h1 className="text-black text-base sm:text-2xl md:text-4xl lg:text-5xl font-extrabold uppercase text-start">
                {heading}
              </h1>

              {/* Description */}
              <p className="text-gray-400 text-sm sm:text-md lg:text-lg">
                {description}
              </p>

              {/* Button */}
              <button className="bg-customPink-500 flex gap-2 items-center justify-center text-customWhite text-[14px] w-fit font-bold py-3 px-5 sm:py-4 sm:px-6">
                {buttonLabel}
                <Image src={src} alt={alt} className={`${className}`} />
              </button>
            </div>

            {/* Navigation Buttons */}
            {autoSlide && buttonData && (
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
