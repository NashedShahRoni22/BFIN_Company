import React, { useEffect, useState } from "react";
import { BiCopyright, BiX } from "react-icons/bi";
import { BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/bfin.png";

export default function Bottombar() {
  const [hostingProducts, setHostingProducts] = useState([]);

  const Products = [
    {
      name: "Bitss Cyber Security",
      link: "https://bitss.fr/",
    },
    {
      name: "Pensaki Blackboard",
      link: "https://pensaki.org/",
    },
    {
      name: "Omada HR Payroll",
      link: "https://omada-clasico.org/",
    },
    {
      name: "Ifgaap Acounting & Invoicing",
      link: "https://ifgaap.org/",
    },
    {
      name: "BFINIT Sass Software",
      link: "https://officetools.bobosoho.com/special-software/",
    },
    {
      name: "BFINIT White Label",
      link: "https://bfin.company/software/white_label/",
    },
    {
      name: "Sosay Social Media",
      link: "https://sosay.org/",
    },
  ];

  const Pages = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About us",
      link: "/about",
    },
    {
      name: "Career",
      link: "/career",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
    {
      name: "Our blogs",
      link: "/blogs",
    },
  ];

  // fetching hosting products
    useEffect(() => {
      const fetchHostingProducts = async () => {
        const response = await fetch("https://hpanel.bfinit.com/api/product/categories");
        const data = await response.json();
        setHostingProducts(data.data);
      };
  
      fetchHostingProducts();
    }, []);

  return (
    <footer className="bg-primary text-white p-10 md:p-20">
      <section className="grid lg:grid-cols-2 gap-4 lg:gap-8">
        <div className="flex flex-col gap-4 md:gap-8">
          <Link
            to={"/"}
            className="flex items-center bg-white w-fit pr-2 rounded-xl"
          >
            <img
              src={logo}
              className="h-[40px] md:h-[80px]"
              alt=""
              loading="lazy"
            />
            <span className="text-xl font-extrabold text-primary">BFINIT</span>
          </Link>
          <p>
            BFIN IT to fuel your growth goals. We build world-class digital
            products, software and branding.
          </p>
          <h5 className="font-semibold">Join BFINIT Cosmopolitan </h5>
          <form className="flex items-center">
            <input
              className="px-4 py-2 outline-none text-primary border border-white rounded-l-xl"
              placeholder="Enter your email"
              type="email"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 border border-white rounded-r-xl"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          <div>
            <h5 className="font-semibold">Hosting Products</h5>
            <div className="flex flex-col gap-2 ml-2 mt-2">
              {hostingProducts.map((product, i) => (
                <Link to={`/hosting-products/${product.id}`} key={i} className="flex gap-2.5">
                  {product.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-semibold">Products</h5>
            <div className="flex flex-col gap-2 ml-2 mt-2">
              {Products.map((product, i) => (
                <Link
                  to={product.link}
                  target="_blank"
                  key={i}
                  className="flex gap-2.5"
                >
                  {product.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-semibold">Quick Links</h5>
            <div className="flex flex-col gap-2 ml-2 mt-2">
              {Pages.map((product, i) => (
                <Link to={product.link} key={i} className="flex gap-2.5">
                  {product.name}
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
          <FaSquareXTwitter className="lg:text-xl" />
          <BsLinkedin className="lg:text-xl" />
          <BsInstagram className="lg:text-xl" />
          <BsYoutube className="lg:text-xl" />
        </div>
      </div>
    </footer>
  );
}
