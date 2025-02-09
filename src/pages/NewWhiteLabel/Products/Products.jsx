import { AiOutlineArrowRight } from "react-icons/ai";
import { MdArrowDownward, MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const pricingOptions = [
  {
    title: "One Year Hosting",
    description: "Hosting of your website, customer software, and admin panel.",
    price: "€480.00",
    required: true,
  },
  {
    title: "Website Design (One-time)",
    description: "Professional website design included in your package.",
    price: "€350.00",
    optional: true,
  },
  {
    title: "WordPress Payment Integration",
    description: "Seamless payment gateway integration for WordPress.",
    price: "€25.00",
    optional: true,
  },
  {
    title: "Website Payment Integration + Backend Automation",
    description: "Advanced payment integration with automation.",
    price: "€375.00",
    optional: true,
  },
  {
    title: "Custom Branded Login Page",
    description: "Unique login page with your branding.",
    price: "€350.00",
    optional: true,
  },
  {
    title: "Branded Mobile App (iOS & Android)",
    description: "Fully branded mobile application with maintenance.",
    price: "€750.00",
    optional: true,
  },
];

export default function Products({ sectionRef }) {
  return (
    <div
      ref={sectionRef}
      className="relative mx-5 flex flex-col justify-between gap-8 py-10 font-roboto md:container md:mx-auto md:flex-row md:gap-16 md:py-20"
    >
      <div className="h-fit md:sticky md:top-28 md:w-1/2">
        <p>
          Join the BFIN Program and reserve your prodcut now, limited version
        </p>
        <h2 className="mt-2 font-montserrat text-2xl font-bold md:text-4xl">
          White Label Payroll Software
        </h2>
        <p className="mt-8 text-xl text-gray-800">
          Payroll software typically includes a range of features designed to
          help businesses manage their payroll processes.
        </p>
        <Link
          to="/"
          className="group mt-8 inline-flex items-center rounded bg-primary px-6 py-3 font-medium text-white shadow"
        >
          <span className="flex items-center px-3">
            <span className="transition-transform duration-300 group-hover:-translate-x-2">
              Buy Payroll Software
            </span>
          </span>
          <AiOutlineArrowRight className="-ml-3 scale-0 opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100" />
        </Link>
      </div>

      <div className="md:w-1/2">
        <div className="grid gap-6">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className="relative rounded-lg border border-gray-300 bg-white p-4 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{option.title}</h3>
                <span className="text-lg font-bold">{option.price}</span>
              </div>
              <p className="mt-2 text-gray-600">{option.description}</p>
              {option.optional && (
                <span className="absolute right-2 top-2 hidden rounded bg-yellow-500 px-2 py-1 text-xs text-white">
                  Can be added at checkout
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
