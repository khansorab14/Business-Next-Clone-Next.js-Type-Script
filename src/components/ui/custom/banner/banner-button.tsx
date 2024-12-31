import React from "react";

interface BannerButtonProps {
  buttonData?: string[];
  activeIndex?: number;
  onClick?: (index: number) => void;
  buttonStyle?: React.CSSProperties;
  activeButtonStyle?: React.CSSProperties;
}

export const BannerButtons: React.FC<BannerButtonProps> = ({
  buttonData = [], // Default to an empty array if undefined
  activeIndex = 0, // Default to the first button as active
  onClick = () => {}, // Default to a no-op function
  buttonStyle = {},
  activeButtonStyle = {},
}) => {
  if (!buttonData.length) return null; // Render nothing if buttonData is empty

  return (
    <div className="flex space-x-4 py-10">
      {buttonData.map((label, index) => {
        const isActive = activeIndex === index;

        return (
          <button
            key={index}
            onClick={() => onClick(index)}
            style={isActive ? activeButtonStyle : buttonStyle}
            className={`w-[190px] h-[40px] rounded-full font-bold text-black text-[10px] sm:text-[11px] lg:text-[13px] ${
              isActive ? "border-black border-2" : "border-none"
            }`}
            aria-pressed={isActive} // Accessibility: indicates active state
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};
