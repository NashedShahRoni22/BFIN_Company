import { Link } from "react-router-dom";
import bg from "../../../assets/reseller/contact-bg.png";
import { BsArrowRight } from "react-icons/bs";

export default function Contact() {
  return (
    <section className="relative bg-[#d7e4f7] flex items-center md:min-h-[500px] md:bg-transparent">
      <img
        src={bg}
        alt=""
        className="absolute w-full h-full object-cover -z-10"
      />
      <div className="mx-5 py-10 md:container md:mx-auto md:py-20">
        <div className="w-full md:w-1/2 md:ml-auto">
          <p className="mb-7 font-bold text-lg">Reach Out Today</p>
          <h2 className="text-2xl font-bold md:text-4xl">
            Got Questions? <br />
            <span className="mt-1.5 inline-block">We&apos;re Here to Help</span>
          </h2>
          <p className="my-6 text-pretty leading-relaxed tracking-wide">
            If you’ve still got questions, contact us today! Whether you’re
            exploring options or need support, we’re here to help. Reach out to
            get the answers you need.
          </p>
          <Link
            to="/contact"
            className="group shadow bg-primary text-white inline-flex items-center rounded px-4 py-2 font-medium"
          >
            <span className="flex items-center px-3">
              <span className="transition-transform duration-300 group-hover:-translate-x-2">
                Get in Touch
              </span>
            </span>
            <BsArrowRight className="-ml-3 opacity-0 scale-0 group-hover:scale-125 transition-all duration-300 group-hover:opacity-100" />
          </Link>
        </div>
      </div>
    </section>
  );
}
