"use client";

import Image, { StaticImageData } from "next/image";

type RightSliderImageProps = {
  sliderimages: { src: StaticImageData | string; alt: string }[];
  activeIndex: number;
  layout?: string;
  imageStyle?: React.CSSProperties; // Adjusted type to CSSProperties for style compatibility
};

export const RightSliderImage: React.FC<RightSliderImageProps> = ({
  sliderimages,
  activeIndex,
  layout,
  imageStyle,
}) => {
  return (
    <div className="pt-16 h-screen w-full flex justify-end">
      <Image
        src={sliderimages[activeIndex].src}
        alt={sliderimages[activeIndex].alt}
        layout={layout} // This can remain dynamic if required
        width={800}
        height={600}
        className="transition-transform duration-1000 ease-in"
        style={{
          ...imageStyle, // Spread the custom styles here
          opacity: 1,
        }}
      />
    </div>
  );
};
