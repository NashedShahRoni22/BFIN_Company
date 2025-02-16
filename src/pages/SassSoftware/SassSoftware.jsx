import { useRef } from "react";
import Hero from "./Hero/Hero";
import Info from "./Info/Info";
import Products from "./Products/Products";

export default function SassSoftware() {
  const productRefs = useRef({});

  const scrollToProduct = (id) => {
    if (productRefs.current[id]) {
      productRefs.current[id].scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section>
      <Hero scrollToProduct={scrollToProduct} />
      <Info />
      <Products productRefs={productRefs} />
    </section>
  );
}
