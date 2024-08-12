import React from "react";
import { BiCopyright } from "react-icons/bi";
import { BsSkype, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";

export default function Bottombar() {
  const hostingProducts = [
    {
      name: "Fully Managed Dedicated Server",
      link: "/",
    },
    {
      name: "Fully Managed Virtual Dedicated Server",
      link: "/",
    },
    {
      name: "Self Managed Dedicated Server",
      link: "/",
    },
    {
      name: "Fully Managed Pure Website Hosting",
      link: "/",
    },
    {
      name: "Self Managed Pure Website Hosting",
      link: "/",
    },
    {
      name: "Vault Cloud Storage",
      link: "/",
    },
  ];

  const Products = [
    {
      name: "Kcoral",
      link: "/",
    },
    {
      name: "Omada",
      link: "/",
    },
    {
      name: "Ifgaap",
      link: "/",
    },
    {
      name: "Pensaki",
      link: "/",
    },
    {
      name: "Bitss Cyber Security",
      link: "/",
    },
  ];

  const Pages = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/",
    },
    {
      name: "Career",
      link: "/",
    },
    {
      name: "Contact Us",
      link: "/",
    },
  ];

  return (
    <footer className="bg-primary text-white p-10 md:p-20">
      <section className="grid lg:grid-cols-2 gap-4 lg:gap-8">
        <div>
          <h5 className="text-2xl md:text-4xl font-extrabold">BFIN IT</h5>
          <p className="mt-5">
            BFIN IT to fuel your growth goals. We build world-class digital
            products, software and branding.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          <div>
            <h5 className="font-semibold">Hosting Products</h5>
            <div className="flex flex-col gap-2 ml-2 mt-2">
              {hostingProducts.map((product, i) => (
                <Link to={product.link} key={i} className="flex gap-2.5">
                  <FaLocationArrow/> {product.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-semibold">Products</h5>
            <div className="flex flex-col gap-2 ml-2 mt-2">
              {Products.map((product, i) => (
                <Link to={product.link} key={i} className="flex gap-2.5">
                  <FaLocationArrow/> {product.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-semibold">Quick Links</h5>
            <div className="flex flex-col gap-2 ml-2 mt-2">
              {Pages.map((product, i) => (
                <Link to={product.link} key={i} className="flex gap-2.5">
                  <FaLocationArrow/> {product.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="h-0.5 w-full bg-white my-5"></div>
      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        <p className="flex gap-2 items-center">
          <BiCopyright className="lg:text-xl" />
          2024 BFIN Company All rights Reserved | 8 rue de Dublin, 34200, Sète,
          France.
        </p>
        <div className="flex justify-center gap-4">
          <FaFacebook className="lg:text-xl" />
          <BsSkype className="lg:text-xl" />
          <BsYoutube className="lg:text-xl" />
        </div>
      </div>
    </footer>
  );
}
