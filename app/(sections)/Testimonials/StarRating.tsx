import { Testimonial } from "./testimonialsData";

export function StarRating({ rating} : Testimonial) {
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);

  return (
    <div className="flex gap-1 my-2">
      {stars.map((filled, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`w-3 h-3 ${
            filled ? "text-yellow-500" : "text-gray-300"
          }`}
          fill="currentColor"
        >
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.79 1.548 8.257L12 18.897l-7.484 4.456 1.548-8.257L0 9.306l8.332-1.151z" />
        </svg>
      ))}
    </div>
  );
}
