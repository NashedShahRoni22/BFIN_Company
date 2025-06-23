import { MdOutlineArrowDownward } from "react-icons/md";
import ecommerce from "../../../assets/ecommerce/banner.webp";
import { Link } from "react-router-dom";
import { HiOutlineEye } from "react-icons/hi";

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

        <div className="flex flex-col items-center gap-4 md:flex-row">
          <button
            onClick={handleScrollToSection}
            className="group mx-auto flex w-full items-center justify-center gap-2 rounded bg-primary px-4 py-2.5 font-medium text-white transition-all duration-200 ease-linear hover:bg-[#145d9c] md:mx-0 md:w-fit"
          >
            Learn More About Our Solutions
            <MdOutlineArrowDownward className="animate-bounce text-xl group-hover:animate-none" />
          </button>
          <Link
            to="https://shop.bfinit.com/preview/6857bc3e4205851792ca088a"
            target="_blank"
            className="mx-auto flex w-full items-center justify-center gap-1.5 rounded bg-primary px-4 py-2.5 font-medium text-white transition-all duration-200 ease-linear hover:bg-[#145d9c] md:mx-0 md:w-fit"
          >
            <HiOutlineEye className="min-w-fit text-lg" /> Live Preview
          </Link>
        </div>
      </div>
      <div className="h-[220px] w-full md:h-[440px] md:w-1/2">
        <img
          src={ecommerce}
          alt="bfinit reseller program"
          loading="lazy"
          className="h-[228px] w-full rounded-lg object-cover md:h-full"
        />
      </div>
    </section>
  );
}
