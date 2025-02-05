import { MdOutlineArrowDownward } from "react-icons/md";
import ecommerce from "../../../assets/ecommerce/banner.jpeg";

export default function Hero({ handleScrollToSection }) {
  return (
    <section className="flex h-full w-full flex-col-reverse items-center justify-center gap-8 py-10 md:flex-row md:py-20">
      <div className="w-full md:w-1/2">
        <h1 className="text-balance text-center text-3xl font-bold text-primary md:text-left md:text-5xl">
          Take your Business into Next Level with BFINIT E-Commerece
        </h1>
        <p className="mb-12 mt-8 text-center text-xl leading-relaxed md:text-left">
          Effortlessly Grow Your Business with pre-built templates or fully
          customized designs. With market insights to seamless payment
          integration, cost-effective tools and dedicated SEO control.
        </p>
        <button
          onClick={handleScrollToSection}
          className="group mx-auto flex items-center justify-center gap-2 rounded bg-primary px-4 py-2.5 font-medium text-white transition-all duration-200 ease-linear hover:bg-[#145d9c] md:mx-0"
        >
          Learn More About Our Solutions
          <MdOutlineArrowDownward className="animate-bounce text-xl group-hover:animate-none" />
        </button>
      </div>
      <div className="h-[220px] w-full md:h-[440px] md:w-1/2">
        <img
          src={ecommerce}
          alt="bfinit reseller program"
          loading="lazy"
          className="max-w-auto mx-auto h-auto max-h-full w-auto rounded-lg object-contain md:mx-0 md:h-full md:w-full md:object-cover"
        />
      </div>
    </section>
  );
}
