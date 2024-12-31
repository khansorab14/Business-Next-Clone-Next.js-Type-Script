import { StaticImageData } from "next/image";
import React from "react";

interface ButtonProps {
  label: string;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  type?: "button" | "submit" | "reset";
  varient?: "primary" | "secondary" | "tertiary" | "filled";
  disabled?: boolean;
  href?: string;
  className?: string;
  size?: "small" | "medium" | "large";
  borderWidth?: string;
  textSize?: number;
  target?: string;
  bgColor?: string;
  style?: React.CSSProperties;
  textColor?: string;
  icon?: string | StaticImageData;
}

export const CustomButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  varient = "primary",
  disabled = false,
  href,
  className = "",
  size = "small",
  target,
  bgColor = "pink",
  textColor = "black",
  style,
}) => {
  const sizeClasses: Record<string, string> = {
    small: "px-3 py-1",
    medium: "px-4 py-2",
    large: "px-6 py-3",
  };

  const varientStyles: Record<string, string> = {
    primary: `bg-${bgColor} text-${textColor} hover:bg-${bgColor}-600 `,
    secondary:
      "border-2 border-gray-500 text-gray-500 hover:border-gray-600 hover:text-gray-600 ",
    tertiary: "text-blue-500 underline hover:text-blue-600",
  };

  const dynamicStyles =
    varient === "filled"
      ? {
          backgroundColor: bgColor,
          color: textColor,
        }
      : undefined;
  const combinedStyles = { ...dynamicStyles, ...style };
  if (varient && href) {
    return (
      <div className="flex text-center">
        <a
          style={style}
          href={href}
          onClick={onClick}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={`${varientStyles[varient]} ${sizeClasses[size]} ${className}`}
        >
          {label}
        </a>
      </div>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      style={combinedStyles}
      className={`${varientStyles[varient]} ${sizeClasses[size]} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {label}
    </button>
  );
};
