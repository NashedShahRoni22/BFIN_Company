import img1 from "../../../assets/ecommerce/mockup-3.webp";
import img2 from "../../../assets/ecommerce/mockup-2.webp";
import img3 from "../../../assets/ecommerce/mockup-4.webp";

export default function DesignShowCase() {
  return (
    <section className="py-10 md:py-20">
      <div className="text-center text-[#202124]">
        <p className="text-lg font-semibold text-primary">Design</p>
        <h2 className="mt-3 text-2xl font-bold md:text-4xl">
          Crafted for clarity.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl leading-relaxed tracking-wide text-[#5F6368]">
          Every layout is intentionally designed to guide users seamlessly—from
          browsing products to checkout. See how our clean interfaces and
          thoughtful interactions elevate your store.
        </p>
      </div>

      <img
        src={img2}
        className="mx-auto w-full max-w-4xl"
        alt="Website mockup"
      />

      <div className="mt-8 grid grid-cols-12 items-center gap-8">
        <div className="col-span-12 md:col-span-7">
          <img src={img1} />
        </div>
        <div className="col-span-12 md:col-span-5">
          <img
            src={img3}
            className="ml-auto h-auto max-h-[235px] w-auto md:h-full md:max-h-full md:w-full"
          />
        </div>
      </div>
    </section>
  );
}
