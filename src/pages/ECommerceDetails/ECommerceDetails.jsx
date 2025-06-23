import { useRef } from "react";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import Pricing from "./Pricing/Pricing";
import img1 from "../../assets/ecommerce/ecommerce-1.webp";
import img2 from "../../assets/ecommerce/ecommerce-2.png";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export default function ECommerceDetails() {
  const sectionRef = useRef();

  const handleScrollToSection = () => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="mx-5 font-roboto md:container md:mx-auto">
      <Hero handleScrollToSection={handleScrollToSection} />
      <Pricing />
      <Features sectionRef={sectionRef} />

      {/* ecommerce gallery shots */}
      <section className="my-10 flex flex-col gap-8 rounded-3xl bg-[#F5F3EF] p-6 md:flex-row md:gap-16 md:pb-0">
        <div className="min-w-fit">
          <h2 className="text-2xl font-bold text-[#202124] md:text-4xl">
            <span className="text-primary">Free!</span> <br />
            Ecommerce Web Builder
          </h2>
          <p className="mt-3 max-w-xl text-[#3C4043]">
            Build and manage your online store with ease. From adding products
            to customizing your storefront — everything you need to launch is
            included.
          </p>
          <p className="mt-2 text-sm text-[#5F6368]">
            Included free with your hosting plan. Optimized for performance,
            security, and mobile devices.
          </p>
          <button className="mt-4 rounded-lg bg-primary px-5 py-2 text-white transition hover:bg-blue-700">
            Launch My Store
          </button>
        </div>
        <div className="hidden max-h-96 min-h-96 overflow-hidden md:block">
          <img src={img1} alt="iPad Mockup" className="md:scale-125" />
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="text-center text-[#202124]">
          <p className="text-lg font-semibold">Design</p>
          <h2 className="mt-6 text-2xl font-bold md:text-4xl">
            Crafted for clarity.
          </h2>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed tracking-wide">
            Every layout is intentionally designed to guide users
            seamlessly—from browsing products to checkout. See how our clean
            interfaces and thoughtful interactions elevate your store.
          </p>
        </div>

        <div className="mx-auto mt-16 w-full max-w-6xl rounded-3xl bg-[#F5F3EF] px-6 py-10">
          <img
            src={img2}
            className="h-auto max-h-[540px] w-full object-contain"
            alt="Website mockup"
          />
        </div>

        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-12 gap-8">
          <div className="col-span-5 border">
            <img src={img2} />
          </div>
          <div className="col-span-7 border">
            <img src={img1} />
          </div>
        </div>
      </section>

      <section className="my-12 text-center">
        <h2 className="text-2xl font-bold text-[#202124] md:text-3xl">
          Everything You Need to <br /> Launch & Grow.
        </h2>
        <Link className="mt-2 inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-primary hover:underline">
          Buy a Pack Now <IoIosArrowForward />
        </Link>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {/* Card 1 */}
          <div className="rounded-2xl bg-[#F8F9FA] px-6 py-8 text-left shadow-sm">
            <img
              src="/icons/store.svg"
              alt="Store Icon"
              className="mb-4 h-6 w-6"
            />
            <h3 className="mb-1 text-lg font-semibold text-[#202124]">
              Complete Ecommerce Store
            </h3>
            <p className="text-sm text-[#5F6368]">
              Pre-built templates, up to 500 products, and custom branding — no
              extra cost.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-[#F8F9FA] px-6 py-8 text-left shadow-sm">
            <img
              src="/icons/performance.svg"
              alt="Performance Icon"
              className="mb-4 h-6 w-6"
            />
            <h3 className="mb-1 text-lg font-semibold text-[#202124]">
              Fast & Secure Hosting
            </h3>
            <p className="text-sm text-[#5F6368]">
              4GB DDR4 RAM, 100GB SSD, unlimited bandwidth, free SSL, and weekly
              backups.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-[#F8F9FA] px-6 py-8 text-left shadow-sm">
            <img src="/icons/seo.svg" alt="SEO Icon" className="mb-4 h-6 w-6" />
            <h3 className="mb-1 text-lg font-semibold text-[#202124]">
              Business Growth Tools
            </h3>
            <p className="text-sm text-[#5F6368]">
              SEO control, market insights, blog panel, and 3 months free on
              yearly plans.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
