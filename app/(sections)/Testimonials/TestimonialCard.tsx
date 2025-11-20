import Image from "next/image";
import { StarRating } from "./StarRating";
import { Testimonial } from "./testimonialsData";

export function TestimonialCard({ name, text, rating, image }: Testimonial) {
  return (
    <div className="bg-[#222629] shadow-md p-6 sm:p-8 rounded-xl flex flex-col w-full">
      {/* Review Text */}
      <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed mb-6 text-center">
        {text}
      </p>

      {/* Avatar + Name + Stars */}
      <div className="flex items-center gap-4 w-full">
        <Image
          src={image}
          alt={name}
          width={60}
          height={60}
          className="rounded-full object-cover"
        />

        <div className="flex flex-col">
          <h4 className="text-[18px] sm:text-[22px] md:text-[26px] font-normal text-white leading-tight">
            {name}
          </h4>

          <StarRating rating={rating} name={""} text={""} image={""} />
        </div>
      </div>
    </div>
  );
}
