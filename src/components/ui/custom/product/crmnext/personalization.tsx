import React from "react";

import cover1 from "../../../../../assets/product/switch4.png";
import cover3 from "../../../../../assets/product/switch3.png";
import cover2 from "../../../../../assets/customer/cus1.png";
import playIcon from "../../../../../assets/white-arrow.png";
import { SwitchSection } from "../../switch-section";

const selectedImage = [
  { src: cover1, alt: "Acquire Relationships" },
  { src: cover2, alt: "Deepen Relationships" },
  { src: cover3, alt: "Retention Service" },
];

const buttonData = [
  "Acquire Relationships",
  "Deepen Relationships",
  "Retention Service",
];

export const Personalization: React.FC = () => {
  return (
    <>
      <SwitchSection
        bgColor="#F5F7D3"
        mediaType="image"
        staticImages={selectedImage[0]}
        src={playIcon}
        alt="Play Icon"
        className="w-4 h-4"
        topheading="Deploy a personalization Layer"
        topdescription="Convert a higher percentage of journeys with personalization and embedded decisioning engines. "
        heading=" Account Opening"
        buttonLabel="See full demo"
        description="   Activate fast account opening journeys that gather appropriate documentation based on ownership and account type. Open accounts successfully and error-free’s
every move."
        imageStyle={{ borderRadius: "8px", width: "800", height: "600px" }}
        autoSlide={true}
        slideInterval={5000}
      />

      {/*  opposite section */}
      <SwitchSection
        bgColor="#F5F7D3"
        mediaType="image"
        staticImages={selectedImage[2]}
        src={playIcon}
        alt="Play Icon"
        className="w-4 h-4"
        heading="  Financial Wellness"
        buttonLabel="See full demo"
        description=" Optimize wellness journeys for all customers and use cases. Deliver journeys that assist customers with appropriate products and services to help them navigate through a variety of financial situations "
        imageStyle={{ borderRadius: "8px", width: "800", height: "600px" }}
        autoSlide={true}
        slideInterval={5000}
        switch={true}
      />
    </>
  );
};
