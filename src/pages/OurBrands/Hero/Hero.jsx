import { BiSolidDownArrow } from "react-icons/bi";
import { ourBrands } from "../../../data/ourBrands";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Hero() {
  return (
    <section className="mx-5 py-10 md:container md:mx-auto md:py-20">
      <h2 className="text-center text-3xl font-bold md:text-4xl">
        Explore Our Brands
      </h2>
      <p className="mt-6 text-balance text-center text-lg leading-relaxed">
        Discover solutions for security, payroll, accounting, social media and
        more.
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
        <div className="w-full flex flex-wrap justify-center md:justify-normal gap-5 md:w-2/3">
          {ourBrands.map((service, i) => (
            <div key={i} className="group relative size-32 bg-white">
              <Link
                to={service.url}
                target="_blanck"
                className="flex h-full items-center justify-center p-4 rounded border shadow hover:border-primary transition-all duration-200 ease-linear"
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-16 w-auto object-contain"
                />
              </Link>
              <BiSolidDownArrow className="absolute bottom-full left-1/2 hidden -translate-x-1/2 text-primary group-hover:block" />
              <p className="absolute bottom-[109%] left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded bg-primary px-4 py-1 font-medium text-white group-hover:block">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
