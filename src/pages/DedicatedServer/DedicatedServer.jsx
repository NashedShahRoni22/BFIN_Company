import { Helmet } from "react-helmet";
import ProductHero from "../../components/ProductHero";
import Pricing from "./Pricing";

export default function DedicatedServer() {
  return (
    <section>
      <Helmet>
        <title>Powerful Dedicated Servers | Fast, Flexible, Affordable</title>
        <meta
          name="description"
          content="Get fully or self managed dedicated servers from $66/mo. High RAM, multiple IPs, SSD/HDD storage & 0 setup fees. Boost performance with BFINIT servers!"
        />
      </Helmet>

      <ProductHero
        title="Your Dedicated Server Needs? Covered!"
        subTitle="If you're looking for a fast, flexible, and affordable solution, our
        dedicated servers are ready to meet your demands!"
      />
      <Pricing />
    </section>
  );
}
