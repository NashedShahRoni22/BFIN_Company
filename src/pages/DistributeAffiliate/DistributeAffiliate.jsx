import Hero from "./Hero/Hero";
import Benefits from "./Benefits/Benefits";
import Features from "./Features/Features";

export default function DistributeAffiliate() {
  return (
    <section className="mx-5 py-10 font-roboto md:container md:mx-auto md:py-20">
      <Hero />
      <Benefits />
      <Features />
    </section>
  );
}
