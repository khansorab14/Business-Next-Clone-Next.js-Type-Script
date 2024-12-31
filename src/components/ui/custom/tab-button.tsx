import Image, { StaticImageData } from "next/image";

interface ButtonProps {
  label: string;
  icon: string | StaticImageData;

  className?: string;
}

export const TabButton: React.FC<ButtonProps> = ({
  label,
  icon,

  className,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-3 transition-all duration-300 ease-in-out group ${className}`}
    >
      <div className="transition-transform transform group-hover:-rotate-[50deg] duration-300 ease-in-out">
        <Image src={icon} alt={`${label} icon`} width={20} height={20} />
      </div>
      <span
        className={`uppercase font-bold transition-colors duration-300 text-white ease-in-out group-hover:text-[#D2DE2F]`}
      >
        {label}
      </span>
    </button>
  );
};
