"use client";

import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

export const Stats: React.FC = () => {
  const achievementList = [
    {
      metric: "User base",
      value: 1,
      postfix: "Million+",
      description: "In Banking & insurance industry",
    },
    {
      metric: "Customer base",
      description: "Managed On Platform",
      value: 1,
      postfix: "Billion+",
    },
    {
      description: "Using the platform in every implementation",
      metric: "User engagement",
      value: 85,
      postfix: "%",
    },
  ];

  return (
    <div className="bg-pink-50 w-full py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black text-gray-800">
          HIGH IMPACT DELIVERED
        </h1>
      </div>
      <div className="py-8 px-4 xl:gap-16 xl:px-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 py-8 px-4">
          {achievementList.map((achievement, index) => (
            <div
              key={index}
              className={`flex flex-col gap-5 items-center justify-center text-center ${
                index === 1 ? "border-x-[1px] border-gray-400" : ""
              }`}
            >
              <h2 className="text-6xl font-medium text-gray-800 flex items-baseline">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={achievement.value}
                  locale="en-US"
                  className="text-6xl font-medium text-gray-800"
                  configs={(_, index) => ({
                    mass: 1,
                    friction: 100,
                    tension: 140 * (index + 1),
                  })}
                />
                <span className="text-5xl font-medium ">
                  {achievement.postfix}
                </span>
              </h2>
              <p className="text-lg font-extrabold text-customPink-500 mt-2 uppercase">
                {achievement.metric}
              </p>
              <p className="text-base font-normal text-gray-500 mt-2 ">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
