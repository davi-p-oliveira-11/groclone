export type Testimonial = {
  name: string;
  rating: number; 
  text: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Alice Johnson",
    rating: 5,
    text: "This changed how we handle clients. The support and design are unmatched.",
    image: "/images/man1.png",
  },  
  {
    name: "James Carter",
    rating: 4,
    text: "Excellent UX, very smooth integration. Highly recommended.",
    image: "/images/man2.png",
  },
  {
    name: "Lena Park",
    rating: 5,
    text: "We increased conversions by 37% after adding this!",
    image: "/images/man1.png",
  },
  {
    name: "Michael Reyes",
    rating: 5,
    text: "The onboarding was insanely fast. We deployed in under 48 hours and saw instant adoption.",
    image: "/images/man2.png",
  },
  {
    name: "Sofia Martins",
    rating: 5,
    text: "Beautiful UI and blazing performance. Our team loves using it daily.",
    image: "/images/man1.png",
  },
  {
    name: "Ethan Brooks",
    rating: 4,
    text: "Solid features and responsive support. A few tweaks could make it perfect.",
    image: "/images/man2.png",
  },
  {
    name: "Carolina Vega",
    rating: 5,
    text: "The design quality is premium. It elevated our brand experience instantly.",
    image: "/images/man1.png",
  },
  {
    name: "Daniel Foster",
    rating: 5,
    text: "The codebase is clean, well-structured, and easy to extend. A developer’s dream.",
    image: "/images/man2.png",
  },
  {
    name: "Priya Singh",
    rating: 5,
    text: "The insights we gained from this helped us refine our entire customer funnel.",
    image: "/images/man1.png",
  },
  {
    name: "Marcus Leone",
    rating: 5,
    text: "Our investors were impressed with the results. This was a game-changing decision.",
    image: "/images/man2.png",
  }
];
