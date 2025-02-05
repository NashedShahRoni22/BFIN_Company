import OurBrandCards from "./OurBrandCards/OurBrandCards";

export default function Products() {
  return (
    <section className="mx-5 overflow-hidden py-10 md:container md:mx-auto md:py-20">
      <h5 className="text-2xl font-extrabold text-primary md:text-4xl">
        Our Brands
      </h5>
      <OurBrandCards />
    </section>
  );
}
