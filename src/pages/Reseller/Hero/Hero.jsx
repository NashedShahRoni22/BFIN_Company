import { BsArrowRight } from "react-icons/bs";
import heroImg from "../../../assets/reseller/hero.jpg";

export default function Hero({ handleScrollToSection }) {
  return (
    <section className="mx-5 py-10 flex flex-col items-center gap-8 md:container md:mx-auto md:py-20 md:flex-row md:gap-16">
      <div className="w-full md:w-1/2">
        <h6 className="text-primary font-bold">Become a Reseller</h6>
        <h1 className="text-3xl mt-2 font-bold md:text-4xl">
          Your Brand, Powered by Us
        </h1>
        <p className="my-6 leading-relaxed text-balance text-lg">
          Deliver exceptional value to your customers with our products. Resell
          hosting, domains, and more under your own brand.
        </p>
        <button
          onClick={handleScrollToSection}
          className="group shadow bg-primary text-white inline-flex items-center rounded px-4 py-2 font-medium"
        >
          <span className="flex items-center px-3">
            <span className="transition-transform duration-300 group-hover:-translate-x-2">
              See Plans & Pricing
            </span>
          </span>
          <BsArrowRight className="-ml-3 opacity-0 scale-0 group-hover:scale-125 transition-all duration-300 group-hover:opacity-100" />
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src={heroImg}
          alt="bfinit reseller program"
          loading="lazy"
          className="w-full h-fit  rounded-tl-[96px] rounded-br-[96px] rounded-2xl"
        />
      </div>
    </section>
  );
}
