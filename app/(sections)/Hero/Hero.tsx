import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-[#FC4B37] pt-40 pb-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-center text-[32px] sm:text-[40px] md:text-[48px] lg:text-[58px] xl:text-[64px] leading-tight text-white">
          Presenting the next-gen <br /> analytics software
        </h1>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          {/* Primary Button — White, black text, pill */}
          <button
            className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-opacity-90 transition cursor-pointer"
          >
            Lets talk
          </button>

          {/* Secondary Button — Transparent, white text, white border */}
          <button
            className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
