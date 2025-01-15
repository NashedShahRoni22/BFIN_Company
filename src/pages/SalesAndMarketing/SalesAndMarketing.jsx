import useScrollToSection from "../../hooks/useScrollToSection";
import Guidelines from "./Guidelines/Guidelines";
import Hero from "./Hero/Hero";

const SalesAndMarketing = () => {
  const { sectionRef, handleScrollToSection } = useScrollToSection();

  return (
    <main>
      <Hero handleScrollToSection={handleScrollToSection} />
      <Guidelines sectionRef={sectionRef} />
    </main>
  );
};

export default SalesAndMarketing;
