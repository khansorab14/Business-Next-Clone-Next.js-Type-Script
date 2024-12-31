import Image, { StaticImageData } from "next/image";

interface IconItem {
  src: StaticImageData | string;
  alt: string;
  boxheading?: string;
  boxdescription?: string;
}

interface ValueInfoBoxProps {
  icon: IconItem[]; // Always an array
  className?: string;
}

export const ValueInfoBox: React.FC<ValueInfoBoxProps> = ({
  icon,
  className,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {icon.map((item, index) => (
        <div key={index} className=" p-4  flex flex-col ">
          <Image
            src={item.src}
            alt="bvuuhvhuv"
            className={`w-20 h-20 object-contain mb-2 ${className}`}
          />
          <h3 className="text-xl font-semibold py-4 text-gray-800">
            {item.boxheading}
          </h3>
          <p className="text-base text-gray-600">{item.boxdescription}</p>
        </div>
      ))}
    </div>
  );
};
