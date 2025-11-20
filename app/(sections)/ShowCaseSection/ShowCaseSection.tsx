"use client";

import React from "react";
import { ShowcaseBlock } from "./ShowCaseBlock";

const ShowCaseSection = () => {
  const showcaseData = [
    {
      title: "Monitor Marketing Campaings",
      subtitle: "Advanced Campaing Monitor",
      subtext: '"Stay ahead of the game. Monitor yout marketing campaings in real-time with our intuitive tools, and make data-driven decisions for optimal results"',
      image: "/images/show-case1.svg",
      reverse: false,
      points: [
        "Realtime analytics",
        "Best Campaign manager",
        "Detailed contact data",
      ],
    },
    {
      title: "Details User Analytics",
      subtitle: "Have all customer data in one place",
      subtext: 'Streamline your customer insights. Keep all your customer data in one place, and get a complete view of their behavior and preferences no personalized engagement',
      image: "/images/show-case2.svg",
      reverse: true,
      points: [
        "Advance reports",
        "Us path analyitics",
        "Productive user trends",
      ],
    },
  ];

  return (
    <section className="max-w-[1440px] mx-auto py-24 px-6 md:px-12">
      {/* Section Heading */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2
          className="mt-3 font-bold text-black 
        text-[32px] sm:text-[42px] md:text-[56px] lg:text-[64px] 
        leading-tight xl:leading-[80px]"
        >
          All-in-one analytics tool
        </h2>

        <p
          className="mt-4 text-black font-normal
        text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]
        leading-[26px] sm:leading-[30px] md:leading-[34px] lg:leading-[36px]"
        >
          Maximize your decision making capabilities with our powerful
          analytical tools.
          <br />
          Harness the power of your data to drive growth and success.
        </p>
      </div>

      {/* Showcase Blocks */}
      <div className="flex flex-col gap-30">
        {showcaseData.map((item, i) => (
          <ShowcaseBlock key={i} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ShowCaseSection;
