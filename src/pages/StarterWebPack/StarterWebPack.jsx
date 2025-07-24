import ProductHero from "../../components/ProductHero";
import Container from "../../shared/Container";
import Pricing from "./Pricing";
import { Helmet } from "react-helmet";

export default function StarterWebPack() {
  return (
    <Container>
      <section className="py-10 md:py-20">
        <Helmet>
          <title>Starter Micro Hosting</title>
          <meta
            name="description"
            content="Get best performance cost effective web hosting for you mico business, Fresetup, 24/7 support, web builder, and free upgrade."
          />
        </Helmet>

        <ProductHero
          title="Starter Micro Hosting"
          subTitle="Get best performance cost effective web hosting for you mico business, Fresetup, 24/7 support, web builder, and free upgrade"
        />
        <Pricing />
      </section>
    </Container>
  );
}
