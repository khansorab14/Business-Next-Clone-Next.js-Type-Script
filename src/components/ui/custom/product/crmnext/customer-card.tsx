import Image, { StaticImageData } from "next/image";

interface CustomerCardProps {
  heading?: string;
  description?: string;
  icon?: { src: StaticImageData | string; alt: string };
}

export const CustomerCard: React.FC<CustomerCardProps> = ({
  heading,
  description,
  icon,
}) => {
  return (
    <div className="py-5 w-full">
      {/* Icon Section */}
      {icon && (
        <Image
          src={icon.src}
          alt={icon.alt}
          width={60}
          height={60}
          className="max-w-[60px] max-h-[60px] sm:max-w-[80px] sm:max-h-[80px] object-contain"
        />
      )}
      <div>
        {/* Heading */}
        <h1 className="text-base sm:text-lg lg:text-xl font-bold uppercase py-3">
          {heading}
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-sm sm:text-sm lg:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};
