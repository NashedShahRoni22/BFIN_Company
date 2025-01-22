import { BiSolidDownArrow } from "react-icons/bi";
import { ourBrands } from "../../../data/ourBrands";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";

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
              to={brand.url}
              target="_blanck"
              className="group flex items-center gap-1 transition-all duration-200 ease-linear hover:font-semibold hover:text-primary"
            >
              <MdOutlineArrowOutward className="min-w-fit text-lg transition-all duration-200 ease-linear group-hover:rotate-45" />
              {brand.title}
            </Link>
          ))}
        </div>

        {/* Services Image Card Container */}
        <div className="flex w-full flex-wrap justify-center gap-5 md:w-2/3 md:justify-normal">
          {ourBrands.map((service, i) => (
            <div key={i} className="w-32 md:w-44">
              <div className="group relative size-32 bg-white md:size-44">
                <Link
                  to={service.url}
                  target="_blanck"
                  className="flex h-full items-center justify-center rounded border p-4 shadow transition-all duration-200 ease-linear hover:border-primary"
                >
                  <img src={service.icon} alt={service.title} />
                </Link>
                <BiSolidDownArrow className="absolute bottom-full left-1/2 hidden -translate-x-1/2 text-primary group-hover:block" />
                <p className="absolute bottom-[106%] left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded bg-primary px-4 py-1 text-sm font-medium text-white group-hover:block md:text-base">
                  {service.title}
                </p>
              </div>
              <p className="mt-2.5 text-center text-sm font-semibold">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
