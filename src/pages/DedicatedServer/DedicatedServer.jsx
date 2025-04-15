import ProductHero from "../../components/ProductHero";
import Pricing from "./Pricing";

export default function DedicatedServer() {
  return (
    <section>
      <ProductHero
        title="Your Dedicated Server Needs? Covered!"
        subTitle="If you're looking for a fast, flexible, and affordable solution, our
        dedicated servers are ready to meet your demands!"
      />
      <Pricing />
    </section>
  );
}
