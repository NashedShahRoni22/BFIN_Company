import BonusProductHighlight from "../../components/BonusProductHighlight";
import ProductHero from "../../components/ProductHero";
import Pricing from "./Pricing";
import { Helmet } from "react-helmet";

export default function VpsHosting() {
  return (
    <section>
      <Helmet>
        <title>Affordable VPS Hosting | Fully Managed & Self Managed</title>
        <meta
          name="description"
          content="Powerful VPS hosting from just $14.50/mo. Choose fully or self-managed plans with SSD storage, DDR4 RAM and 0 setup fee. Scale your server easily!"
        />
      </Helmet>

      <ProductHero
        title="Your VPS Hosting Needs? Covered!"
        subTitle="If you're looking for a fast, flexible and affordable solution, our VPS
        Hosting are ready to meet your demands!"
      />

      <Pricing />
      <BonusProductHighlight />
    </section>
  );
}
