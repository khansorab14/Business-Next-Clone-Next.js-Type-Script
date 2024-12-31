import Image from "next/image";
import React from "react";
import { FooterColumn } from "./ui/custom/footer/footer-column";
import { OfficeLocation } from "./ui/custom/footer/office-location";
import Logo from "../assets/logo.webp";
import vec1 from "../assets/footer/Vector.png";
import vec2 from "../assets/footer/Vector1.png";
import vec3 from "../assets/footer/Vector2.png";
import vec4 from "../assets/footer/Vector3.png";

export const Footer = () => {
  const columns = [
    {
      title: "PRODUCT",
      links: ["CRM NEXT", "CUSTOMER NEXT", "DATA NEXT", "PRODUCT", "PRODUCT"],
    },
    {
      title: "PLATFORM",
      links: ["Open Communication", "PRODUCT", "PRODUCT", "PRODUCT", "PRODUCT"],
    },
    {
      title: "SERVICES",
      links: ["PRODUCT", "PRODUCT", "PRODUCT", "PRODUCT", "PRODUCT"],
    },
    {
      title: "COMPANY",
      links: [
        "About Us",
        "Careers",
        "Contact",
        "Blog",
        "Press",
        "Careers",
        "Contact",
        "Blog",
        "Press",
      ],
    },
  ];

  const officeLocations = [
    {
      title: "Asia HO",
      address:
        "Candor Tech Space Tower 1, Ground Floor, Block B, Plot No.2, Sector 62, Noida - 201303, INDIA",
    },
    {
      title: "Ghatkoper",
      address:
        "Candor Tech Space Tower 1, Ground Floor, Block B, Plot No.2, Sector 62, Noida - 201303, INDIA",
    },
    {
      title: "Kurla",
      address:
        "Candor Tech Space Tower 1, Ground Floor, Block B, Plot No.2, Sector 62, Noida - 201303, INDIA",
    },
    {
      title: "Viklroli",
      address:
        "Candor Tech Space Tower 1, Ground Floor, Block B, Plot No.2, Sector 62, Noida - 201303, INDIA",
    },
  ];

  return (
    <div className="w-screen border-y-[1px] border-gray-200">
      <div className="global-margin border-gray-200">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row border-b-[1px] border-gray-200 justify-between items-center py-10">
          {/* Logo Section */}
          <div className="mb-8 lg:mb-0  ">
            <Image src={Logo} width={220} height={220} alt="Company Logo" />
          </div>

          {/* Footer Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-32">
            {columns.map((column, index) => (
              <FooterColumn
                key={index}
                title={column.title}
                links={column.links}
              />
            ))}
          </div>
        </div>

        {/* Office Locations */}
        <div className="w-full my-10 px-4">
          <h1 className="uppercase text-lg font-extrabold text-star mb-6">
            Office Locations
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {officeLocations.map((location, index) => (
              <OfficeLocation
                key={index}
                title={location.title}
                address={location.address}
              />
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full h-auto py-6 px-4 flex flex-col lg:flex-row justify-between items-center">
          {/* Social Media and Connect */}
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <h1 className="uppercase text-lg font-extrabold">
              Connect with us
            </h1>
            <div className="flex gap-4">
              <Image src={vec1} alt="Social Icon" width={24} height={24} />
              <Image src={vec2} alt="Social Icon" width={24} height={24} />
              <Image src={vec3} alt="Social Icon" width={24} height={24} />
              <Image src={vec4} alt="Social Icon" width={24} height={24} />
            </div>
          </div>

          {/* Copyright Text */}
          <div className="mt-6 lg:mt-0">
            <p className="text-sm font-light text-gray-400 text-center">
              © 2024 BUSINESSNEXT, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
