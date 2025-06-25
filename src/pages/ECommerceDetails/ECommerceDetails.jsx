import { useRef } from "react";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import Pricing from "./Pricing/Pricing";
import FreeWebBuilderHero from "./FreeWebBuilderHero/FreeWebBuilderHero";
import DesignShowCase from "./DesignShowCase/DesignShowCase";
import LaunchFeatures from "./LaunchFeatures/LaunchFeatures";

export default function ECommerceDetails() {
  const sectionRef = useRef();
  const pricingSection = useRef();

  const handleScrollToSection = () => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleScrollToPricing = () => {
    pricingSection.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="mx-5 font-roboto md:container md:mx-auto">
      <Hero handleScrollToSection={handleScrollToSection} />
      <Pricing pricingSection={pricingSection} />
      <Features sectionRef={sectionRef} />
      <FreeWebBuilderHero handleScrollToPricing={handleScrollToPricing} />
      <DesignShowCase />
      <LaunchFeatures handleScrollToPricing={handleScrollToPricing} />
    </main>
  );
}
