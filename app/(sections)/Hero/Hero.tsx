import React from "react";

const Hero = () => {
  interface heroContent {
    title: string;
    heroText: string;
  }

  const heroContent: heroContent = {
    title: "A full customer service team, powered by AI",
    heroText: `Don't settle for a basic chatbot - your customers deserve better. Get
          a fully stocked, AI-powered customer serviceautomation platform that
          resolves more inquiries with the least amount of effort`,
  };

  return (
    <section className="w-full bg-[#1B1E23] pt-40 pb-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-center text-[36px] md:text-[48px] lg:text-[58px] leading-tight text-white">
          {heroContent.title}
        </h1>

        {/* Paragraph */}
        <p className="mt-6 text-center text-[20px] md:text-[16px] text-white max-w-[620px] mx-auto">
          {heroContent.heroText}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          {/* Primary Gradient Button */}
          <button className="bg-linear-to-r from-[#9977D4] to-[#6337AE] text-white font-semibold px-6 py-3 rounded-md hover:opacity-90 transition cursor-pointer">
            Get Started
          </button>

          {/* Secondary Button */}
          <button className="border border-[#9977D4] text-white font-semibold px-6 py-3 rounded-md hover:opacity-90 transition cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
