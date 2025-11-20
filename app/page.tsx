import Navbar from "./(sections)/Navbar/Navbar";
import Hero from "./(sections)/Hero/Hero";
import ShowCaseSection from "./(sections)/ShowCaseSection/ShowCaseSection";
import Footer from "./(sections)/Footer/Footer";
import Features from "./(sections)/Features/Features";
import TestimonialSection from "./(sections)/Testimonials/TestimonialSection";
import { testimonials } from "./(sections)/Testimonials/testimonialsData";

export default function Home() {
  return (
    <>
      <header aria-label="Main navigation" className="bg-[#FC4B37]">
        <Navbar />
        <Hero />
      </header>

      <main aria-label="Main Content">
        <ShowCaseSection />
        <Features />
        <TestimonialSection testimonials={testimonials} />
      </main>

      <footer aria-label="site footer">
        <Footer />
      </footer>
    </>
  );
}
