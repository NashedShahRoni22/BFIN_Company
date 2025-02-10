import { useState } from "react";
import { Link } from "react-router-dom";
import { LuMinus, LuPlus } from "react-icons/lu";
import { ecommerceFeat } from "../../../data/ecommerceFeat";
import ecommerceImg from "../../../assets/home/e-commerce.webp";

export default function Ecommerce() {
  const [open, setOpen] = useState("");

  return (
    <>
      <section className="mx-5 flex flex-col justify-between gap-8 py-10 md:container md:mx-auto md:flex-row md:gap-16 md:py-20">
        <div className="w-full md:h-auto md:w-1/2">
          <img
            src={ecommerceImg}
            alt="bfinit ecommerce sass"
            loading="lazy"
            className="max-w-auto mx-auto h-auto max-h-full w-auto rounded-xl object-contain md:mx-0 md:h-full md:w-full md:object-cover"
          />
          <div className="mt-2.5 flex justify-center">
            <Link
              to={"hosting-products/7"}
              className="rounded bg-[#186bb5] px-5 py-2.5 text-lg font-medium text-white shadow transition-all duration-200 ease-linear hover:bg-[#145d9c]"
            >
              Get your Ecommerce website builder now
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-balance text-3xl font-extrabold text-primary md:text-5xl">
            Build your business with BFINIT Ecommerce custom built websites.
          </h2>
          <p className="my-8 md:text-xl">
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
                <p className="flex cursor-pointer items-center justify-between gap-2.5 text-xl font-medium text-primary">
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
