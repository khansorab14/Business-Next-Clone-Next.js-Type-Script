"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import banner from "../../assets/about/glob.jpg";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

export const WorldWide: React.FC = () => {
  const achievementList = [
    {
      metric: "User base",
      value: 1,
      postfix: "Million+",
      description: "User Base",
    },
    {
      metric: "Countries base",
      description: "Countries",
      value: 50,
      postfix: "+",
    },
    {
      description: "Countries",
      metric: "User engagement",
      value: 10,
      postfix: "+",
    },
  ];

  return (
    <div className="relative w-full h-[85vh]">
      <Image
        src={banner}
        alt="Worldwide Coverage"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      {/* Content Over Image */}
      <div className="absolute inset-0 flex-1 items-center gap-10 justify-center z-10 px-4 xl:px-16 py-8">
        <div className="flex justify-center text-center  py-10">
          <h1 className="text-6xl uppercase w-1/2 font-black text-white">
            our worldwide presence
          </h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {achievementList.map((achievement, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 items-center justify-center text-center bg-opacity-60 rounded-lg p-6 shadow-lg"
            >
              <p className="text-xl font-black text-customPink-500 mt-2 uppercase">
                {achievement.metric}
              </p>
              <h2 className="text-6xl font-extrabold text-white flex items-baseline">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={achievement.value}
                  locale="en-US"
                  className="text-6xl font-extrabold text-white"
                  configs={(_, index) => ({
                    mass: 1,
                    friction: 100,
                    tension: 140 * (index + 1),
                  })}
                />
                <span className="text-5xl font-medium">
                  {achievement.postfix}
                </span>
              </h2>

              <p className="text-base font-normal text-white mt-2">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
