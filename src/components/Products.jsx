import React from "react";
import bitss from "../assets/Bitss-N.png";
import omada from "../assets/Omada.jpg";
import ifgaap from "../assets/IFGaap-app.png";
import kcorral from "../assets/Kcorral.png";
import pensaki from "../assets/Pensaki-Vault-storage.png";
import sosay from "../assets/Sasay.jpg";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { Card } from "@material-tailwind/react";

export default function Products() {
  const products = [
    {
      image: bitss,
      title: "Bitss",
      desc: "Database website protection: Bitss secures your website, admin site, and video content with real-time protection against data theft and unauthorized access. Safeguard your digital assets effectively.",
    },
    {
      image: omada,
      title: "Omada",
      desc: "Payroll management system: Omada offers comprehensive solutions for payroll management, payslip generation, project management, and holiday tracking, streamlining your business operations.",
    },
    {
      image: ifgaap,
      title: "IFGAAP",
      desc: "Accounting Software: IFGAAP provides robust accounting features, including multi-user access, multi-currency support, tax management, reporting, and real-time processing, ensuring your financials are efficiently managed.",
    },
    {
      image: kcorral,
      title: "Kcorral",
      desc: "Ecommerce Website: Kcorral specializes in building ecommerce platforms that are secure, user-friendly, and tailored to meet your specific business needs, enhancing your online sales experience  33 6 66 10 00 10 call this one Kcorral Market - where all sellers, retailers, suppliers manufactures in deluxe fashion retail, and equestrian and polo suppliers get together to sell their brands direct on Kcorral Market, join Kcorral market ",
    },
    {
      image: pensaki,
      title: "Pensaki",
      desc: "Document Solutions: Pensaki offers a doc writer, PDF converter, agenda management, and secure email services without advertisements, ensuring your communication and documentation needs are met securely.",
    },
    {
      image: sosay,
      title: "Sosay",
      desc: "Social Media Platform: Sosay provides a real-time communication platform with features like audio/video calls, photo/video sharing, and social media posts, keeping you connected and engaged.",
    },
  ];
  return (
    <section className="mx-5 md:container md:mx-auto py-10 md:py-20">
      <h5 className="text-2xl md:text-4xl text-primary font-extrabold">
        Our Products
      </h5>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 mt-10 md:mt-20">
        {products.map((product, i) => (
          <div key={i} className="flex flex-col gap-2.5 p-4 h-fit md:hover:-translate-y-5 duration-300 ease-linear rounded-xl shadow-xl">
            <img src={product.image} className="" alt="" />
            <h5 className="text-xl md:text-2xl text-primary font-extrabold">
              {product.title}
            </h5>
            <p>{product.desc}</p>
            <Link className="px-4 py-2 flex items-center gap-2 border rounded border-primary w-fit hover:bg-primary hover:text-white group duration-300 ease-linear">
              <span>Learn more</span>
              <MdArrowOutward className="group-hover:rotate-45 duration-300 ease-linear text-xl" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
