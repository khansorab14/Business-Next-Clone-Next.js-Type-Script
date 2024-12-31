import React from "react";

type VideoComponentProps = {
  videoSource?: string;
  videoStyle?: React.CSSProperties;
};

export const VideoComponent: React.FC<VideoComponentProps> = ({
  videoSource,
  videoStyle,
}) => {
  return (
    <>
      <video className="w-full h-full object-cover" autoPlay loop muted>
        <source src={videoSource} style={videoStyle} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};
