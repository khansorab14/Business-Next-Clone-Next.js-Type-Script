"use client"; // Required to make Swiper work in Next.js

import React from "react";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

interface CustomSwiperProps extends SwiperProps {
  children: React.ReactNode;
  style: React.CSSProperties;
}

const CustomSwiper: React.FC<CustomSwiperProps> = ({ children, ...rest }) => {
  SwiperCore.use([Pagination, Navigation, Autoplay]);
  return (
    <Swiper {...rest}>
      {React.Children.map(children, (child, index) => (
        <SwiperSlide key={index}>{child} </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomSwiper;
