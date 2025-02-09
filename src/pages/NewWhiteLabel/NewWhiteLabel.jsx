import { useRef } from "react";
import Hero from "./Hero/Hero";
import KeyFeats from "./KeyFeats/KeyFeats";
import Products from "./Products/Products";

export default function NewWhiteLabel() {
  const sectionRef = useRef(null);

  const handleScrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section>
      <Hero handleScrollToSection={handleScrollToSection} />
      <KeyFeats />
      <Products sectionRef={sectionRef} />
    </section>
  );
}
