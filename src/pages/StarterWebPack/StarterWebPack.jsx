import ProductHero from "../../components/ProductHero";
import Pricing from "./Pricing";
import { Helmet } from "react-helmet";

export default function StarterWebPack() {
  return (
    <section>
      <Helmet>
        <title>Starter Web Pack</title>
        <meta
          name="description"
          content="Powerful VPS hosting from just $14.50/mo. Choose fully or self-managed plans with SSD storage, DDR4 RAM and 0 setup fee. Scale your server easily!"
        />
      </Helmet>

      <ProductHero
        title="Starter Web Pack"
        subTitle="If you're looking for a fast, flexible and affordable solution, our VPS
        Hosting are ready to meet your demands!"
      />

      <Pricing />
    </section>
  );
}
