import Image from "next/image";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import CustomSwiper from "./swiper";

// Customer Card Data Interface
interface CustomerData {
  image: string;
  name: string;
  position: string;
  feedback: string;
}

// Customer Component Props Interface
interface CustomerProps {
  title: string;
  subTitle: string;
  customers: CustomerData[];
  icon: string;
  slidesPerView?: number;
  spaceBetween?: number;
  breakpoints?: Record<number, { slidesPerView: number; spaceBetween: number }>;
}

export const CustomerCardCustom: React.FC<CustomerProps> = ({
  title,
  subTitle,
  customers,
  icon,
  slidesPerView = 2,
  spaceBetween = 20,
  breakpoints = {
    640: { slidesPerView: 2, spaceBetween: 10 },
    768: { slidesPerView: 4, spaceBetween: 20 },
    1024: { slidesPerView: 4, spaceBetween: 20 },
  },
}) => {
  return (
    <div className="bg-black w-full h-auto py-10">
      <div className="global-margin ">
        {/* Heading Section */}
        <HeadingSection title={title} subTitle={subTitle} />

        {/* Swiper Section */}
        <SwiperSection
          customers={customers}
          icon={icon}
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          breakpoints={breakpoints}
        />
      </div>
    </div>
  );
};

// Heading Section Component
interface HeadingSectionProps {
  title: string;
  subTitle: string;
}

const HeadingSection: React.FC<HeadingSectionProps> = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10">
      <div className="w-full lg:w-[500px] py-8">
        <h1 className="text-[24px] lg:text-[40px] uppercase text-white leading-8 lg:leading-10 font-extrabold mb-2">
          {title}
        </h1>
        <h1 className="text-[24px] lg:text-[40px] uppercase text-white leading-8 lg:leading-10 font-extrabold">
          {subTitle}
        </h1>
      </div>
    </div>
  );
};

// Swiper Section Component
interface SwiperSectionProps {
  customers: CustomerData[];
  icon: string;
  slidesPerView: number;
  spaceBetween: number;
  breakpoints: Record<number, { slidesPerView: number; spaceBetween: number }>;
}

const SwiperSection: React.FC<SwiperSectionProps> = ({
  customers,
  icon,
  slidesPerView,
  spaceBetween,
  breakpoints,
}) => {
  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <div className="absolute top-[-50] right-0 flex  z-10">
        <div className="absolute top-0 right-32 flex  z-10">
          <button className="bg-green-700">
            <CiCircleChevLeft
              style={{ width: "40px" }}
              className="  swiper-button-prev fill-white  "
            />
          </button>
        </div>
        <div className="absolute top-0 right-0 flex  z-10">
          <button>
            <CiCircleChevRight
              style={{ width: "40px" }}
              className="text-4xl  fill-white swiper-button-next "
            />
          </button>
        </div>
      </div>

      {/* Custom Swiper */}
      <CustomSwiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={breakpoints}
      >
        {customers.map((customer, index) => (
          <div
            key={index}
            className="bg-white h-[350px] w-[350px] sm:w-[320px] md:w-[400px] lg:w-[450px] flex flex-col p-6"
          >
            {/* Header Section */}
            <div className="flex items-center gap-6 mb-4">
              <Image
                src={customer.image}
                alt={`${customer.name}'s Image`}
                width={80}
                height={80}
              />
              <div>
                <h1 className="text-xl font-bold text-black">
                  {customer.name}
                </h1>
                <p className="text-md text-gray-600">{customer.position}</p>
              </div>
            </div>

            {/* Icon Section */}
            <div className="py-4">
              <Image src={icon} alt="Icon" width={50} height={50} />
            </div>

            {/* Feedback Section */}
            <div>
              <p className="text-lg text-gray-800 leading-relaxed">
                {customer.feedback}
              </p>
            </div>
          </div>
        ))}
      </CustomSwiper>
    </div>
  );
};
