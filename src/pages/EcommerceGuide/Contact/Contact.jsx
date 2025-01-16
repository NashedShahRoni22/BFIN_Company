import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="mx-5 md:container md:mx-auto py-20 md:py-20">
      <h2 className="text-3xl mb-4 font-bold text-center md:text-4xl">
        Ready to Start Your E-Commerce Journey?
      </h2>
      <p className="mx-auto w-full max-w-3xl text-center text-sm text-primary">
        <span className=" font-medium">* Disclaimer:</span> While this guide
        provides a comprehensive overview of E-Commerce strategies, we encourage
        users to conduct their own research tailored to their specific business
        needs.
      </p>
      <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8">
        <Link
          to="/bfinit-ecomerce-platform"
          className="group shadow border-primary border text-primary transition-all duration-200 ease-linear hover:bg-primary hover:text-white inline-flex items-center px-6 py-3 font-semibold rounded"
        >
          <span className="flex items-center px-3">
            <span className="transition-transform duration-300 group-hover:-translate-x-2">
              Get Started with BFINIT
            </span>
          </span>
          <BsArrowRight className="-ml-3 opacity-0 scale-0 group-hover:scale-125 transition-all duration-300 group-hover:opacity-100" />
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 group border hover:bg-[#135996] border-primary bg-primary text-white font-semibold rounded shadow w-fit transition-all duration-200 ease-linear"
        >
          Contact Us for Support
        </Link>
      </div>
    </section>
  );
}
