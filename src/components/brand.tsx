import Image from "next/image";
import img1 from "../assets/brand-image/img1.png";
import img2 from "../assets/brand-image/img2.png";
import img3 from "../assets/brand-image/img3.png";
import CustomSwiper from "./ui/custom/swiper";

export const PartnershipBrand = ({
  images = [img1, img2, img3, img1, img2, img3],
}) => {
  return (
    <div className="w-screen h-auto bg-white my-20">
      <div className="flex justify-center font-bold py-5">
        <h1 className="text-black text-3xl uppercase p-2">
          Trusted Partnership with
        </h1>
      </div>
      <div className="w-full px-4">
        <CustomSwiper
          slidesPerView={5}
          spaceBetween={10}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
          }}
          style={{ textAlign: "center" }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-full"
            >
              <Image
                src={img}
                height={100}
                width={100}
                alt={`brand image ${index + 1}`}
                className="object-contain"
              />
            </div>
          ))}
        </CustomSwiper>
      </div>
    </div>
  );
};
