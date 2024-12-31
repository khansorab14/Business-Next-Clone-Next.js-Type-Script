import Image from "next/image";
import BlackArrow from "../../../assets/bl-arrow.png";
import PinkArrow from "../../../assets/arrow-icon.png";

export const ExpeCard = ({ cardImage, title, description }) => {
  return (
    <div className="h-auto lg:h-[470px] w-full sm:w-[300px] border border-gray-300 overflow-hidden  duration-300 group">
      <div className="relative overflow-hidden">
        <Image
          alt="card-image"
          src={cardImage}
          className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="w-full h-auto p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[16px] lg:text-[20px] leading-[1.1] font-light">
              {title.split(" ")[0]}{" "}
              <span className="block font-bold">{title.split(" ")[1]}</span>
            </h1>
          </div>
          <div className="transform transition-transform duration-300 group-hover:rotate-[-60deg]">
            <Image
              src={PinkArrow} // Replace with the black version
              alt="black arrow"
              className="w-5 h-4 hidden group-hover:block"
            />
            <Image
              src={BlackArrow} // Replace with the pink version
              alt="pink arrow"
              className="w-5 h-4 block group-hover:hidden"
            />
          </div>
        </div>
        <div className="mt-3">
          <p className="text-[12px] lg:text-[14px] break-words">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
