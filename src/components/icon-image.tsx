import React from "react";

interface ImageProps {
  src: string; // The source URL of the image
  alt: string; // Alt text for accessibility
  className?: string; // Optional class for styling
  style?: React.CSSProperties; // Optional inline styles
  width?: number; // Optional width for the image
  height?: number; // Optional height for the image
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"; // Optional object-fit property for the image
}

export const IconImage: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  style,
  width,
  height,
  objectFit = "cover",
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{
        ...style,
        objectFit,
        width: width ? `${width}px` : "auto", // Apply width if provided
        height: height ? `${height}px` : "auto", // Apply height if provided
      }}
    />
  );
};
