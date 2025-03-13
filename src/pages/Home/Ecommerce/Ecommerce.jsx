import { useState } from "react";
import { Link } from "react-router-dom";
import { LuMinus, LuPlus } from "react-icons/lu";
import { ecommerceFeat } from "../../../data/ecommerceFeat";
import ecommerceImg from "../../../assets/home/e-commerce.webp";

export default function Ecommerce() {
  const [open, setOpen] = useState("");

  return (
    <>
      <section className="mx-5 flex flex-col justify-between gap-8 py-10 md:container md:mx-auto lg:flex-row lg:gap-16 md:py-20">
        <div className="lg:w-2/5">
          <img
            src={ecommerceImg}
            alt="bfinit ecommerce sass"
            loading="lazy"
            className="w-full object-contain rounded-t"
          />
          <div className="flex justify-center">
            <Link
              to={"hosting-products/7"}
              className="w-full rounded-b bg-[#bcbfc1] px-5 py-2.5 text-center text-lg font-medium text-white shadow transition-all duration-200 ease-linear hover:bg-[#145d9c]"
            >
              Get your Ecommerce website builder now
            </Link>
          </div>
        </div>

        <div className="lg:w-3/5">
          <h2 className="text-balance text-2xl font-extrabold text-primary md:text-4xl">
            Build your business with BFINIT Ecommerce custom built websites.
          </h2>
          <p className="my-8">
            Scale your business effortlessly with our flexible Ecommerce
            solutions. From custom designs to all kinds of products and services
            ensuring for seamless integrations, we provide everything you need
            for success.
          </p>
          <div>
            {ecommerceFeat.map((data) => (
              <div
                key={data.id}
                onClick={() => setOpen(data.id)}
                className="rounded border-b py-5 last:border-b-0"
              >
                <p className="flex cursor-pointer items-center justify-between gap-2.5 font-semibold text-primary">
                  {data.name}
                  {data.id === open ? <LuMinus /> : <LuPlus />}
                </p>
                <p
                  className={`max-w-[95%] transition-all duration-500 ease-in-out ${
                    data.id === open
                      ? "mt-4 max-h-96"
                      : "max-h-0 overflow-hidden"
                  }`}
                >
                  {data.overview}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
