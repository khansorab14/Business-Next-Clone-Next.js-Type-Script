import Image, { StaticImageData } from "next/image";
import { ValueInfoBox } from "./value-info-box";

interface valueProps {
  topheading?: string;
  topdescription?: string;
  leftimage?: { src: StaticImageData | string; alt: string };
  className?: string;
  icon?: {
    src: StaticImageData | string;
    alt: string;
    boxheading?: string;
    boxdescription?: string;
  }[];
}

export const ValueMain: React.FC<valueProps> = ({
  topheading,
  topdescription,
  leftimage,
  className,
  icon,
}) => {
  return (
    <div className="global-margin h-[75vh] ">
      <div>
        <h1 className="text-4xl font-extrabold text-gray-900 uppercase">
          {topheading}
        </h1>
        <p className="text-lg text-gray-600 py-5">{topdescription}</p>
      </div>
      <div className="flex justify-between gap-14 ">
        <div className="w-full lg:w-1/2">
          <Image
            src={leftimage?.src}
            alt="bhhh"
            height={1000}
            // width={400}
            className={className}
          />
        </div>
        <div className="w-full  flex justify-center items-center ">
          <ValueInfoBox icon={icon} />
        </div>
      </div>
    </div>
  );
};
