import useScrollToSection from "../../hooks/useScrollToSection";
import Contact from "./Contact/Contact";
import Guidelines from "./Guidelines/Guidelines";
import Hero from "./Hero/Hero";

const EcommerceGuide = () => {
  const { sectionRef, handleScrollToSection } = useScrollToSection();

  return (
    <main>
      <Hero handleScrollToSection={handleScrollToSection} />
      <Guidelines sectionRef={sectionRef} />
      <Contact />
    </main>
  );
};

export default EcommerceGuide;
