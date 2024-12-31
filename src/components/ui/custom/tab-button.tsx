import Image, { StaticImageData } from "next/image";

interface ButtonProps {
  label: string;
  icon?: string | StaticImageData; // Optional icon, but we will handle undefined
  className?: string;
}

export const TabButton: React.FC<ButtonProps> = ({
  label,
  icon,
  className,
}) => {
  // Fallback default image if icon is undefined
  const fallbackIcon = "/path/to/default-icon.png"; // Replace with the actual path to a default icon

  return (
    <button
      className={`flex justify-center items-center gap-3 transition-all duration-300 ease-in-out group ${className}`}
    >
      <div className="transition-transform transform group-hover:-rotate-[50deg] duration-300 ease-in-out">
        <Image
          src={icon ?? fallbackIcon} // Use the fallback if icon is undefined
          alt={`${label} icon`}
          width={20}
          height={20}
        />
      </div>
      <span
        className={`uppercase font-bold transition-colors duration-300 text-white ease-in-out group-hover:text-[#D2DE2F]`}
      >
        {label}
      </span>
    </button>
  );
};
