import { MdOutlineArrowDownward } from "react-icons/md";
import ecommerce from "../../../assets/ecommerce/e-commerce-2.jpeg";

export default function Hero({ handleScrollToSection }) {
  return (
    <section className="py-10 h-full w-full flex flex-col-reverse items-center justify-center gap-8 md:py-20 md:flex-row">
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl text-center text-balance text-primary font-bold md:text-5xl md:text-left">
          Take your Business into Next Level with BFINIT E-Commerece
        </h1>
        <p className="mt-8 mb-12 leading-relaxed text-xl text-center md:text-left">
          Effortlessly Grow Your Business with pre-built templates or fully
          customized designs. With market insights to seamless payment
          integration, cost-effective tools and dedicated SEO control.
        </p>
        <button
          onClick={handleScrollToSection}
          className="group mx-auto px-4 py-2.5 rounded flex items-center justify-center gap-2 bg-primary text-white font-medium transition-all duration-200 ease-linear hover:bg-[#145d9c] md:mx-0"
        >
          Learn More About Our Solutions
          <MdOutlineArrowDownward className="text-xl animate-bounce group-hover:animate-none" />
        </button>
      </div>
      <div className="w-full h-[220px] md:h-auto md:w-1/2">
        <img
          src={ecommerce}
          alt="bfinit reseller program"
          loading="lazy"
          className="w-auto max-w-auto mx-auto md:mx-0 max-h-full object-contain rounded-lg h-auto md:h-full md:w-full md:object-cover"
        />
      </div>
    </section>
  );
}
