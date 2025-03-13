import { useRef } from "react";
import Hero from "./Hero/Hero";
import Pricing from "./Pricing/Pricing";
import VpsFeats from "./VpsFeats/VpsFeats";

export default function CustomVps() {
  const sectionRef = useRef(null);

  const handleScrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="font-roboto">
      <Hero handleScrollToSection={handleScrollToSection} />
      <Pricing sectionRef={sectionRef} />
      <VpsFeats />
    </section>
  );
}
