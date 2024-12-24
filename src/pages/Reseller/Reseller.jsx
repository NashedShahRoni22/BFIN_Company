import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import Pricing from "./Pricing/Pricing";
import useScrollToSection from "../../hooks/useScrollToSection";
import Overview from "./Overview/Overview";
import Proudcts from "./Prouducts/Proudcts";
import Contact from "./Contact/Contact";
import Faq from "./Faq/Faq";

export default function Reseller() {
  const { sectionRef, handleScrollToSection } = useScrollToSection();
  return (
    <main>
      <Hero handleScrollToSection={handleScrollToSection} />
      <Features />
      <Pricing sectionRef={sectionRef} />
      <Overview />
      <Proudcts />
      <Contact />
      <Faq />
    </main>
  );
}
