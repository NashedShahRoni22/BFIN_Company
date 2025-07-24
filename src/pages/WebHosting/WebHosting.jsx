import { Helmet } from "react-helmet";
import ProductHero from "../../components/ProductHero";
import Pricing from "./Pricing";
import BonusProductHighlight from "../../components/BonusProductHighlight";
import Container from "../../shared/Container";

export default function WebHosting() {
  return (
    <Container>
      <section className="py-10 md:py-20">
        <Helmet>
          <title>Affordable & Fast Web Hosting | Plans from $4.99/mo</title>
          <meta
            name="description"
            content="Launch your website with high speed SSD hosting from just $4.99/month. Free website builder, 0 setup fee, unlimited mailboxes & 24/7 support."
          />
        </Helmet>

        <ProductHero
          title="Your Web Hosting Needs? Covered!"
          subTitle="If you're looking for a fast, flexible and affordable solution, our Web Hosting are ready to meet your demands!"
        />
        <Pricing />
        <BonusProductHighlight />
      </section>
    </Container>
  );
}
