import Hero from "./Hero/Hero";
import Products from "./Products/Products";
import HighlightedFeats from "./HighlightedFeats/HighlightedFeats";

const DataCenter = () => {
  return (
    <section className="mx-5 md:container md:mx-auto">
      <Hero />
      <Products />
      <HighlightedFeats />
    </section>
  );
};

export default DataCenter;
