import Image from "next/image";

interface ShowcaseBlockProps {
  title: string;
  subtitle: string;
  subtext: string;
  image: string;
  reverse?: boolean;
  points: string[];
}

export function ShowcaseBlock({
  title,
  subtitle,
  subtext,
  image,
  reverse = false,
  points,
}: ShowcaseBlockProps) {
  return (
    <div
      className={`flex flex-col items-center 
                 gap-16 md:gap-20 lg:gap-32 
                 md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}
    >
      {/* Image */}
      <div className="flex-1 flex justify-center relative">
        {/* Background Panel (offset) */}
        <div
          className={`absolute inset-0 bg-[#D8D8D8] rounded-xl -z-10
      ${
        reverse ? "-translate-x-4 translate-y-4" : "translate-x-4 translate-y-4"
      }
    `}
        />

        <Image
          src={image}
          alt={title}
          width={761}
          height={580}
          className="w-full max-w-[761px] h-auto rounded-xl"
        />
      </div>

      {/* Text */}
      <div className="flex-1 max-w-[669px]">
        <span className="text-[#FC4B37] font-medium text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] ">
          {subtitle}
        </span>

        <h3
          className="mt-3 font-bold text-black leading-tight 
          text-[32px] sm:text-[42px] md:text-[56px] lg:text-[64px] 
          leading-snug xl:leading-[80px]"
        >
          {title}
        </h3>

        <p
          className="mt-4 text-black font-normal 
          text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] 
          leading-[26px] sm:leading-[30px] md:leading-[34px] lg:leading-[36px]"
        >
          {subtext}
        </p>

        <ul className="mt-6 space-y-3">
          {points.map((point, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-black font-medium
              text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] 
              leading-[28px] sm:leading-[36px] md:leading-[44px] lg:leading-[50px]"
            >
              <span className="text-lg">✅</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
