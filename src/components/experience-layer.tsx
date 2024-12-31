import Image from "next/image";
import GreenArrow from "../assets/green-arrow.png";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";

import { ExpeCard } from "./ui/custom/experience-card";

export const ExperienceLayer = () => {
  const cards = [
    {
      cardImage: card1,
      title: "CRM NEXT",
      description:
        "A dynamic 360 View of Account Holder surfacing insights and recommended actions",
    },
    {
      cardImage: card2,
      title: "DATA NEXT",
      description:
        "A dynamic 360 View of Account Holder surfacing insights and recommended actions",
    },
    {
      cardImage: card3,
      title: "CUSTOMER NEXT",
      description:
        "A dynamic 360 View of Account Holder surfacing insights and recommended actions",
    },
    {
      cardImage: card1,
      title: "CRM NEXT",
      description:
        "A dynamic 360 View of Account Holder surfacing insights and recommended actions",
    },
  ];

  return (
    <div className="h-[100%] w-full bg-white ">
      <div className="global-margin  ">
        <div className="flex flex-col lg:flex-row justify-start  items-center">
          <div className="w-full lg:w-[786px] flex-col">
            <h1 className="text-[28px] lg:text-[40px] uppercase leading-10 font-bold">
              Differentiate your Financial Institution with a powerful
              experience layer
            </h1>
            <p className="py-5 text-sm lg:text-base">
              Take advantage of every interaction to advise in customers’
              financial moments of truth. Power human and digital experiences
              with key insights and recommended actions.
            </p>
          </div>
          <div className="lg:justify-start mb-10">
            <Image
              src={GreenArrow}
              alt="Green Arrow"
              width={196}
              height={163}
            />
          </div>
        </div>

        <div className="max-w-screen mx-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8">
            {cards.map((card, index) => (
              <ExpeCard
                key={index}
                cardImage={card.cardImage}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
