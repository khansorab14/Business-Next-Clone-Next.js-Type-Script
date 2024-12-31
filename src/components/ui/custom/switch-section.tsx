"use client";
import Image, { StaticImageData } from "next/image";
import { RightSliderImage } from "./banner/right-slider-image";
import { VideoComponent } from "./banner/video-source";
import { useEffect, useMemo, useState } from "react";
import { RightStaticImages } from "./banner/right-static-image";

interface SwitchSectionProps {
  sliderImages?: { src: StaticImageData | string; alt: string }[];
  staticImages?: { src: StaticImageData | string; alt: string };
  buttonData?: string[];
  topheading?: string;
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
  topdescription?: string;
  switch?: boolean;
  bgColor?: string;

  // Video
  videoSource?: string;
  mediaType: "image" | "video" | "slider";
}

export const SwitchSection: React.FC<SwitchSectionProps> = ({
  sliderImages = [],
  staticImages,
  videoSource,
  mediaType,
  src,
  alt,
  className,
  heading,
  description,
  buttonLabel = "Learn More",
  topheading = "",
  topdescription = "",
  imageStyle,
  autoSlide = false,
  slideInterval = 3000,
  layout,
  bgColor = "yellow",
  switch: switchOrder = false,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    if (!autoSlide || sliderImages.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [sliderImages, autoSlide, slideInterval]);

  const renderMedia = useMemo(() => {
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
      default:
        return (
          <RightStaticImages
            staticImages={staticImages}
            imageStyle={imageStyle}
            layout={layout}
          />
        );
    }
  }, [
    mediaType,
    sliderImages,
    videoSource,
    staticImages,
    activeIndex,
    imageStyle,
    layout,
  ]);

  return (
    <div style={{ backgroundColor: bgColor }}>
      <div className="relative bg-gradient-to-t global-margin">
        {/* Top Heading Section */}
        <div className="w-full lg:w-[60%] pt-10 lg:pt-20 ">
          {topheading && (
            <h1 className="text-black text-center text-xl sm:text-lg md:text-3xl lg:text-4xl font-extrabold uppercase sm:text-start">
              {topheading}
            </h1>
          )}
          {topdescription && (
            <p className="text-gray-400 text-xs sm:text-sm md:text-base">
              {topdescription}
            </p>
          )}
        </div>

        {/* Main Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full h-full gap-4 lg:gap-0">
          {/* Left Content */}
          <div
            className={`flex justify-start items-start w-full lg:w-fit h-full ${
              switchOrder ? "order-2" : "order-1"
            } py-8`}
          >
            <div className="flex flex-col gap-4 w-full lg:w-[400px]">
              <h2 className="text-black text-sm sm:text-lg md:text-xl lg:text-2xl font-bold uppercase text-start">
                {heading}
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm lg:text-md">
                {description}
              </p>
              <button
                className="bg-customPink-500 w-full sm:w-40 flex gap-2 items-center justify-center text-customWhite text-[14px] font-bold py-2 sm:py-4 uppercase"
                aria-label={`Learn more about ${heading}`}
              >
                {buttonLabel}
                <Image src={src} alt={alt} className={className} />
              </button>
            </div>
          </div>

          {/* Right Media Section */}
          <div
            className={`${
              switchOrder ? "order-1" : "order-2"
            } h-fit w-full py-6 lg:w-auto flex items-center justify-center px-4 lg:px-0`}
          >
            {renderMedia}
          </div>
        </div>
      </div>
    </div>
  );
};
