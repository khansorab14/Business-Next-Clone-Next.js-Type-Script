import { ReactNode } from "react";
import { CustomerCard } from "./customer-card";

import icon1 from "../../../../../assets/product/icon1.png";

interface PurposeProps {
  topHeading?: ReactNode;
  topDescription?: ReactNode;
}

export const MainCustomerJourney: React.FC<PurposeProps> = ({
  topHeading,
  topDescription,
}) => {
  const cardData = [
    {
      icon: { src: icon1, alt: "Customer 360 Icon" },
      heading: "Customer 360",
      description:
        "A configurable single pane of glass to view all information on your customer. In a role-based system, we layout all fields of data from your core, and other banking technology to efficiently service customers.",
    },
    {
      icon: { src: icon1, alt: "Relationship Tools Icon" },
      heading: "Relationship Tools",
      description:
        "Comprehensive tools to deepen your customer relationships, including actionable insights and automation for personalized interactions.",
    },
    {
      icon: { src: icon1, alt: "Customer Insights Icon" },
      heading: "Customer Insights",
      description:
        "Real-time insights to help you make better decisions and offer the right products and services at the right time.",
    },
    {
      icon: { src: icon1, alt: "Customer 360 Icon" },
      heading: "Customer 360",
      description:
        "A configurable single pane of glass to view all information on your customer. In a role-based system, we layout all fields of data from your core, and other banking technology to efficiently service customers.",
    },
    {
      icon: { src: icon1, alt: "Relationship Tools Icon" },
      heading: "Relationship Tools",
      description:
        "Comprehensive tools to deepen your customer relationships, including actionable insights and automation for personalized interactions.",
    },
    {
      icon: { src: icon1, alt: "Customer Insights Icon" },
      heading: "Customer Insights",
      description:
        "Real-time insights to help you make better decisions and offer the right products and services at the right time.",
    },
  ];

  return (
    <div className="bg-[#ffffff] w-full h-auto py-10">
      <div className="global-margin">
        {/* Top Heading and Description */}
        <div className="lg:w-2/3 w-full">
          <div>
            <div className="text-2xl md:text-3xl lg:text-4xl font-black uppercase">
              {topHeading}
            </div>
          </div>
          <div>
            <div className="text-gray-500 pt-3 text-sm md:text-base lg:text-lg">
              {topDescription}
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 pt-6">
          {cardData.map((card, index) => (
            <CustomerCard
              key={index}
              icon={card.icon}
              heading={card.heading}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
