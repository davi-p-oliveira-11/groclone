"use client";

import Image from "next/image";

const featuresData = [
  {
    icon: "/icons/analytics-icon.svg",
    title: "Advance analytics",
    text: "Unlock the full potential of your data with our advanced analytics. Empower yourself with insights and make informed decisions for your business growth.",
  },
  {
    icon: "/icons/settings-icon.svg",
    title: "100+ integrations",
    text: "Streamline your workflow with ease. Choose from over 100+ integrations and seamlessly connect your tools, for a unified and efficient process.",
  },
  {
    icon: "/icons/journey-icon.svg",
    title: "User Journey",
    text: "Experience the journey from a user's perspective. Get a deeper understanding of their behavior and needs, and optimize customer journey for aseamless experience.",
  },
  {
    icon: "/icons/reports-icon.svg",
    title: "Automated Reports",
    text: "Effortlessly track your success. Generate automated reports, and stay on top of your key metrics without any manual effort.",
  },
  {
    icon: "/icons/machine-icon.svg",
    title: "Machine Learning",
    text: "Power up your decision-making with machine learning. Let our cutting-edge technology help you drive success and stay ahead in the game.",
  },
  {
    icon: "/icons/grid-icon.svg",
    title: "A/B Testing",
    text: "Make informed decisions with A/B testing. Experiment with different variations, and use data-driven insights to optimize and drive success for your business.",
  },
];

const Features = () => {
  return (
    <section className="max-w-[1440px] mx-auto py-24 px-6 md:px-12">
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2
          className="font-bold text-black leading-tight
          text-[32px] sm:text-[42px] md:text-[56px] lg:text-[64px] text-nowrap"
        >
          Simple yet powerful features
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresData.map((feature, i) => (
          <div
            key={i}
            className="bg-[#F4F4F4] p-8 rounded-md flex flex-col gap-4 items-start"
          >
            <Image
              src={feature.icon}
              alt={feature.title}
              width={80}
              height={80}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
            />

            <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold text-black">
              {feature.title}
            </h3>

            <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-black leading-tight">
              {feature.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button className="bg-[#fc4b37] text-white font-semibold px-6 py-3 rounded-full hover:bg-opacity-90 transition cursor-pointer">
          Get Started
        </button>

        <button className="border border-black text-black font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition cursor-pointer">
          See more features
        </button>
      </div>
    </section>
  );
};

export default Features;
