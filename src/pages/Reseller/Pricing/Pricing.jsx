import { Link } from "react-router-dom";
import { BsCheck2 } from "react-icons/bs";
import { resellerPricing } from "../../../data/resellerPricing";

export default function Pricing({ sectionRef }) {
  return (
    <section
      ref={sectionRef}
      className="mx-4 py-10 grid grid-cols-1 gap-8 md:container md:mx-auto md:py-20 md:grid-cols-2 md:gap-0"
    >
      {resellerPricing.map((price, i) => (
        <div
          key={i}
          className={`border border-[#D4DBE0] rounded p-7 ${
            i % 2 === 0
              ? "md:border-r-0 md:rounded-r-none"
              : "md:rounded-l-none"
          }`}
        >
          <p className="text-sm font-bold text-primary tracking-wider my-8">
            {price.name}
          </p>
          <p className="tracking-wide text-sm font-semibold">
            {price.description}
          </p>
          <p className="mt-8 mb-1.5 text-[13px] font-medium">Starting at</p>
          <h3 className="text-3xl font-bold">
            {price.pricing.current}{" "}
            <span className="text-lg font-light">/yr</span>
          </h3>
          <p className="text-xs font-medium mt-2 text-[#a1a1aa]">
            {price.pricing.renewal}
          </p>
          <Link
            to="/"
            className="my-6 text-sm font-semibold rounded block border-2 border-black py-3 w-full text-center transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
          >
            Buy Now
          </Link>
          <ul className="space-y-3">
            {price.features.map((feat, i) => (
              <li key={i} className="flex items-center gap-2 font-medium">
                <BsCheck2 className="min-w-fit text-[#31c5f4]" />
                {feat}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
