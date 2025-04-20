import { useRef } from "react";
import Hero from "./Hero/Hero";
import Pricing from "./Pricing/Pricing";
import VpsFeats from "./VpsFeats/VpsFeats";
import { Helmet } from "react-helmet";

export default function CustomVps() {
  const sectionRef = useRef(null);

  const handleScrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="font-roboto">
      <Helmet>
        <title>Custom VPS Hosting | Build Your Own High Speed Server</title>
        <meta
          name="description"
          content="Design your own VPS server with BFINIT. Choose your RAM, CPU and more. High speed, secure, scalable hosting built to fit your business needs."
        />
      </Helmet>

      <Hero handleScrollToSection={handleScrollToSection} />
      <Pricing sectionRef={sectionRef} />
      <VpsFeats />
    </section>
  );
}
