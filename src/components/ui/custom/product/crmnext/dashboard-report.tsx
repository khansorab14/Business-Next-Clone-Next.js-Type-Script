import React from "react";

import cover1 from "../../../../../assets/product/switch.png";
import cover3 from "../../../../../assets/product/switch2.png";
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

export const DashboardReport: React.FC = () => {
  return (
    <>
      <SwitchSection
        bgColor="#EDF7FD"
        mediaType="image"
        staticImages={selectedImage[0]}
        src={playIcon}
        alt="Play Icon"
        className="w-4 h-4"
        topheading="Total Visibility"
        topdescription="Deliver key insights with a dynamic and complete view of account holders to every customer facing role in your organization."
        heading="  360 view"
        buttonLabel="LEARN MORE"
        description="   Aggregate, unify and organize disparate sources of customer data from your core and critical solutions technology stack to support your account holder’s
every move."
        imageStyle={{ borderRadius: "8px", width: "800", height: "600px" }}
        autoSlide={true}
        slideInterval={5000}
      />

      {/*  opposite section */}
      <SwitchSection
        bgColor="#EDF7FD"
        mediaType="image"
        staticImages={selectedImage[2]}
        src={playIcon}
        alt="Play Icon"
        className="w-4 h-4"
        heading="  360 view"
        buttonLabel="LEARN MORE"
        description="   Aggregate, unify and organize disparate sources of customer data from your core and critical solutions technology stack to support your account holder’s
every move."
        imageStyle={{ borderRadius: "8px", width: "800", height: "600px" }}
        autoSlide={true}
        slideInterval={5000}
        switch={true}
      />
    </>
  );
};
