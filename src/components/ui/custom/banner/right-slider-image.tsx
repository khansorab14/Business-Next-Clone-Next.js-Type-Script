"use client";

import Image, { StaticImageData } from "next/image";

type RightSliderImageProps = {
  sliderimages: { src: StaticImageData | string; alt: string }[];
  activeIndex: number;
  layout?: string;
};

export const RightSliderImage: React.FC<RightSliderImageProps> = ({
  sliderimages,
  activeIndex,
  layout,
}) => {
  return (
    <div className="pt-16 h-screen w-full flex justify-end  ">
      <Image
        src={sliderimages[activeIndex].src}
        alt="ibibb"
        // layout="responsive"
        layout={layout}
        width={800}
        height={600}
        className="transition-transform duration-1000 ease-in "
        style={{ opacity: activeIndex === activeIndex ? 1 : 0 }}
      />
    </div>
  );
};
