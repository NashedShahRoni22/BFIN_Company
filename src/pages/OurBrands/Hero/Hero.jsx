import { ourBrands } from "../../../data/ourBrands";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";
import OurBrandCards from "../../../components/OurBrandCards/OurBrandCards";

export default function Hero() {
  return (
    <section className="mx-5 py-10 md:container md:mx-auto md:py-20">
      <h2 className="text-center text-3xl font-bold md:text-4xl">
        Explore Our Leading Brands
      </h2>
      <p className="mt-6 text-center text-lg leading-relaxed md:text-balance">
        Each of our brands adds integrated value, offering features that benefit
        both private and business users. <br /> We strive to enhance our brands,
        continually adding new technologies to ensure their utility remains
        infinite.
      </p>

      <div className="mt-20 flex gap-8 md:gap-16">
        {/* Left Side Services Name */}
        <div className="hidden w-1/3 flex-col gap-4 md:flex">
          {ourBrands.map((brand, i) => (
            <Link
              key={i}
              to={brand.websiteUrl}
              target="_blanck"
              className="group flex items-center gap-1 transition-all duration-200 ease-linear hover:font-semibold hover:text-primary"
            >
              <MdOutlineArrowOutward className="min-w-fit text-lg transition-all duration-200 ease-linear group-hover:rotate-45" />
              {brand.title}
            </Link>
          ))}
        </div>

        {/* Services Image Card Container */}
        <OurBrandCards />
      </div>
    </section>
  );
}
