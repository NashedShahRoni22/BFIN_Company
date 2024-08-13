import React from "react";
import digitaleconomyImg from "../assets/digital-economy.png";

export default function DigitalEconomy() {
  return (
    <section className="mx-5 md:container md:mx-auto py-10 md:py-20 flex flex-col gap-8 md:flex-row md:items-center md:gap-16">
      <div className="md:w-1/2">
        <img src={digitaleconomyImg} alt="" className="" />
      </div>
      <div className="md:w-1/2 flex flex-col gap-8 md:gap-16">
        <h5 className="text-3xl md:text-5xl text-primary font-extrabold">
          We’re building business for your digital economy
        </h5>
        <p className="md:text-xl">
          We are building business, banking products and services to support the
          next generation of entrepreneurs. The world as we know it is no longer
          the same, and changes now occur in days and months, not years. Get
          started!
        </p>
        <div className="grid grid-cols-2">
          <div>
            <p className="text-3xl md:text-5xl text-primary font-extrabold">100k</p>
            <p className="text-xl md:text-3xl mt-2.5 text-primary font-semibold">Customers</p>
          </div>
          <div>
            <p className="text-3xl md:text-5xl text-primary font-extrabold">5+</p>
            <p className="text-xl md:text-3xl mt-2.5 text-primary font-semibold">Products</p>
          </div>
        </div>
      </div>
    </section>
  );
}
