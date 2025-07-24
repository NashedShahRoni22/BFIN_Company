import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="mx-5 py-20 md:container md:mx-auto md:py-28">
      <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
        Ready to Start Your E-Commerce Journey?
      </h2>
      <p className="mx-auto w-full max-w-3xl text-center text-sm text-primary">
        <span className="font-medium">* Disclaimer:</span> While this guide
        provides a comprehensive overview of E-Commerce strategies, we encourage
        users to conduct their own research tailored to their specific business
        needs.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-8 md:flex-row">
        <Link
          to="/bfinit-ecomerce-platform"
          className="group inline-flex items-center rounded border border-primary px-6 py-3 font-semibold text-primary shadow transition-all duration-200 ease-linear hover:bg-primary hover:text-white"
        >
          <span className="flex items-center px-3">
            <span className="transition-transform duration-300 group-hover:-translate-x-2">
              Get Started with BFINIT
            </span>
          </span>
          <BsArrowRight className="-ml-3 scale-0 opacity-0 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100" />
        </Link>
        <Link
          to="/contact"
          className="group w-fit rounded border border-primary bg-primary px-6 py-3 font-semibold text-white shadow transition-all duration-200 ease-linear hover:bg-[#135996]"
        >
          Contact Us for Support
        </Link>
      </div>
    </section>
  );
}
