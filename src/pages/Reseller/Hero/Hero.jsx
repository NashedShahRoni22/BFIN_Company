import { BsArrowRight } from "react-icons/bs";
import heroImg from "../../../assets/reseller/hero.webp";

export default function Hero({ handleScrollToSection }) {
  return (
    <section className="mx-5 flex flex-col items-center gap-8 py-10 md:container md:mx-auto md:flex-row md:gap-16 md:py-20">
      <div className="w-full md:w-1/2">
        <h6 className="font-bold text-primary">Become a Reseller</h6>
        <h1 className="mt-2 text-3xl font-bold md:text-4xl">
          Your Brand, Powered by Us
        </h1>
        <p className="my-6 text-balance text-lg leading-relaxed">
          Deliver exceptional value to your customers with our products. Resell
          hosting, domains, and more under your own brand.
        </p>
        <button
          onClick={handleScrollToSection}
          className="group inline-flex items-center rounded bg-primary px-4 py-2 font-medium text-white shadow"
        >
          <span className="flex items-center px-3">
            <span className="transition-transform duration-300 group-hover:-translate-x-2">
              See Plans & Pricing
            </span>
          </span>
          <BsArrowRight className="-ml-3 scale-0 opacity-0 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100" />
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src={heroImg}
          alt="bfinit reseller program"
          loading="lazy"
          className="h-[260px] w-full rounded-2xl rounded-br-[96px] rounded-tl-[96px] object-cover md:h-fit"
        />
      </div>
    </section>
  );
}
