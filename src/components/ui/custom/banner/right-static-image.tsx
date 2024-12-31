"use client";

import Image, { StaticImageData } from "next/image";

type RightStaticImagesProps = {
  staticImages?: { src: StaticImageData | string; alt: string };
  imageStyle?: React.CSSProperties;
  layout?: string;
};

export const RightStaticImages: React.FC<RightStaticImagesProps> = ({
  staticImages,
  imageStyle,
  layout,
}) => {
  if (!staticImages) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        No image provided
      </div>
    );
  }

  return (
    <div className="pt-8 sm:pt-12 lg:pt-16 h-auto w-full flex justify-center lg:justify-end">
      <Image
        src={staticImages.src}
        alt={staticImages.alt}
        layout={layout}
        width={800} // Keeps default width for larger screens
        height={600} // Keeps default height for larger screens
        style={imageStyle}
        className="w-full max-w-[90%] sm:max-w-[80%] lg:max-w-[800px] transition-transform duration-1000 ease-in"
      />
    </div>
  );
};
