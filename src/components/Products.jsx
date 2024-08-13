import React from "react";
import bitss from "../assets/Bitss-png.png";
import omada from "../assets/Omada.jpg";
import ifgaap from "../assets/IFGaap-app.png";
import kcorral from "../assets/Kcorral.png";
import pensaki from "../assets/Pensaki-red.jpg";
import sosay from "../assets/Sasay.jpg";

export default function Products() {
  const products = [
    {
      image: bitss,
    },
    {
      image: omada,
    },
    {
      image: ifgaap,
    },
    {
      image: kcorral,
    },
    {
      image: pensaki,
    },
    {
      image: sosay,
    },
  ];
  return (
    <section className="mx-5 md:container md:mx-auto py-10 md:py-20">
      <h5 className="text-2xl md:text-4xl text-primary font-extrabold">
        Our Products
      </h5>
      <div  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 mt-10 md:mt-20">
        {products.map((product,i) => (
          <div key={i} className="flex flex-col items-center">
            <img src={product.image} className="h-[100px] shadow-xl" alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}
