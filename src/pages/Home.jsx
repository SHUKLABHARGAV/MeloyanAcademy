import Hero from "../components/Hero";
import About from "../components/About";
import Counts from "../components/Counts";
import ProgramsSection from "../components/ProgramsSection";
import Testimonials from "../components/Testimonials";
import FounderSection from "../components/FounderSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProgramsSection />
      <About />
      <FounderSection/>
      <Counts />
      <Testimonials/>
    </>
  );
}
