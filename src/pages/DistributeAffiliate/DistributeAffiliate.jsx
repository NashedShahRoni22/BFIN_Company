import Hero from "./Hero/Hero";
import Benefits from "./Benefits/Benefits";
import Features from "./Features/Features";
import Partner from "./Partner/Partner";
import Contact from "./Contact/Contact";
import Container from "../../shared/Container";

export default function DistributeAffiliate() {
  return (
    <Container>
      <section className="mx-5 py-10 font-roboto md:container md:mx-auto md:py-20">
        <Hero />
        <Benefits />
        <Features />
        <Partner />
        <Contact />
      </section>
    </Container>
  );
}
