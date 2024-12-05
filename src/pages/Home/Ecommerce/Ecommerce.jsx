import { useState } from "react";
import ecommerceImg from "../../../assets/ecommerce/e-commerce.jpeg";
import { LuMinus, LuPlus } from "react-icons/lu";

export default function Ecommerce() {
  const ecomFeatures = [
    {
      id: 1,
      name: "Custom Branding",
      details:
        "Build your unique identity with tailored designs that reflect your business vision.",
    },
    {
      id: 2,
      name: "Market Insights",
      details:
        "Access expert analysis to target the right audience and identify market opportunities.",
    },
    {
      id: 3,
      name: "Pre-Built Tools",
      details:
        "Ready-to-use templates and hosting solutions that simplify setup and save time.",
    },
    {
      id: 4,
      name: "Personalized Payment Gateway Integration",
      details:
        "Integrate with global payment gateways to offer flexibility for customers worldwide, allowing you to choose and integrate your preferred payment methods easily.",
    },
    {
      id: 5,
      name: "Cost-Effective Solutions",
      details:
        "Affordable, scalable solutions designed to grow with your business without high upfront costs.",
    },
  ];

  const [open, setOpen] = useState("");

  return (
    <>
      <section className="mx-5 py-10 flex flex-col items-center justify-between gap-8 md:container md:mx-auto md:py-20 md:flex-row md:gap-16">
        <div className="w-full md:w-1/2">
          <img src={ecommerceImg} alt="" className="h-fit w-full rounded-xl" />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl text-primary font-extrabold md:text-5xl">
            Start Your Online Business with BFINIT
          </h2>
          <p className="my-8 md:text-xl">
            Scale your business effortlessly with our flexible e-commerce
            solutions. From custom designs to seamless integrations, we provide
            everything you need for success.
          </p>
          <div>
            {ecomFeatures.map((data) => (
              <div
                key={data.id}
                className="py-5 border-b rounded last:border-b-0"
              >
                <p
                  onClick={() => setOpen(data.id)}
                  className="flex cursor-pointer items-center justify-between gap-2.5 text-xl text-primary font-medium"
                >
                  {data.name}
                  {data.id === open ? <LuMinus /> : <LuPlus />}
                </p>
                <p
                  className={`max-w-[95%] transition-all duration-500 ease-in-out md:text-lg ${
                    data.id === open
                      ? "mt-4 max-h-96"
                      : "max-h-0 overflow-hidden"
                  }`}
                >
                  {data.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
