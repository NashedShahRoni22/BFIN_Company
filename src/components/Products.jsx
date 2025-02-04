import { Link } from "react-router-dom";
import { ourBrands } from "../data/ourBrands";
import { BiSolidDownArrow } from "react-icons/bi";

export default function Products() {
  return (
    <section className="mx-5 overflow-hidden py-10 md:container md:mx-auto md:py-20">
      <h5 className="text-2xl font-extrabold text-primary md:text-4xl">
        Our Brands
      </h5>
      <div className="mt-10 grid w-full grid-cols-2 gap-5 sm:grid-cols-4 md:justify-around lg:grid-cols-5 xl:grid-cols-6">
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
              <p className="absolute bottom-[106%] left-1/2 hidden w-full -translate-x-1/2 text-balance rounded bg-primary px-4 py-1 text-center text-sm font-medium text-white group-hover:block md:text-base">
                {service.title}
              </p>
            </div>
            <p className="mt-2.5 text-center text-sm font-semibold">
              {service.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
