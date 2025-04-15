import ProductHero from "../../components/ProductHero";
import Pricing from "./Pricing";

export default function WebHosting() {
  return (
    <section>
      <ProductHero
        title="Your Web Hosting Needs? Covered!"
        subTitle="If you're looking for a fast, flexible and affordable solution, our Web
          Hosting are ready to meet your demands!"
      />
      <Pricing />
    </section>
  );
}
