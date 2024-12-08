import { useRef } from "react";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import Pricing from "./Pricing/Pricing";

export default function ECommerceDetails() {
  const sectionRef = useRef();

  const handleScrollToSection = () => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="mx-5 md:container md:mx-auto">
      <Hero handleScrollToSection={handleScrollToSection} />
      <Features sectionRef={sectionRef} />
      {/* <Pricing /> */}
    </main>
  );
}
