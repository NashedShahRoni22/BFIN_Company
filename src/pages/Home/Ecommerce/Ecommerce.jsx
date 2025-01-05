import { useState } from "react";
import ecommerceImg from "../../../assets/ecommerce/e-commerce.jpeg";
import { LuMinus, LuPlus } from "react-icons/lu";
import { ecommerceFeat } from "../../../data/ecommerceFeat";

export default function Ecommerce() {
  const [open, setOpen] = useState("");

  return (
    <>
      <section className="mx-5 py-10 flex flex-col items-center justify-between gap-8 md:container md:mx-auto md:py-20 md:flex-row md:gap-16">
        <div className="w-full h-[390px] md:h-auto md:w-1/2">
          <img
            src={ecommerceImg}
            alt=""
            className="w-auto max-w-auto mx-auto md:mx-0 max-h-full object-contain rounded-xl h-auto md:h-full md:w-full md:object-cover"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl text-primary text-balance font-extrabold md:text-5xl">
            Build Your Business with BFINIT Ecommerce
          </h2>
          <p className="my-8 md:text-xl">
            Scale your business effortlessly with our flexible Ecommerce
            solutions. From custom designs to seamless integrations, we provide
            everything you need for success.
          </p>
          <div>
            {ecommerceFeat.map((data) => (
              <div
                key={data.id}
                onClick={() => setOpen(data.id)}
                className="py-5 border-b rounded last:border-b-0"
              >
                <p className="flex cursor-pointer items-center justify-between gap-2.5 text-xl text-primary font-medium">
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
