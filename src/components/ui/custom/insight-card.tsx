import Image, { StaticImageData } from "next/image";

interface InsightCardProps {
  cardImage: string | StaticImageData; // Can be a URL or StaticImageData
  buttonText: string;
  title: string;
  description: string;
  icon: string | StaticImageData; // Can be a URL or StaticImageData
}

export const InsightCard: React.FC<InsightCardProps> = ({
  cardImage,
  buttonText,
  title,
  description,
  icon,
}) => {
  return (
    <div className="h-auto lg:min-h-[600px] w-full sm:w-[430px] gap-4 bg-[#EDEDED] overflow-hidden duration-300 group">
      <div className="overflow-hidden">
        <Image
          alt="card-image"
          src={cardImage}
          width={430} // Add appropriate width
          height={270} // Add appropriate height
          className="w-full h-[45vh]"
        />
      </div>
      <div className="w-full h-auto p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[20px] lg:text-[24px] leading-[1.1] font-light">
              <button className="w-[135px] border border-black h-[45px] text-[10px] sm:text-[11px] md:text-[11px] lg:text-[13px] my-1 rounded-full flex items-center justify-center gap-2">
                <Image
                  src={icon}
                  alt="icon"
                  width={16} // Icon size width
                  height={16} // Icon size height
                  className="w-4 h-4"
                />
                <span className="font-semibold">{buttonText}</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <h1 className="font-bold text-xl">{title}</h1>
          <p className="text-[14px] text-gray-400 lg:text-[16px] break-words">
            {description}
          </p>
          <div className="py-4 ">
            <a
              href="#"
              className="uppercase relative font-extrabold text-sm text-customPink-500 group"
            >
              Learn More
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-customPink-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
