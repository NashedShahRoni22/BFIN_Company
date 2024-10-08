import React from "react";
import bitss from "../assets/Bitss-cyber-security.png";
import omada from "../assets/Omada.png";
import ifgaap from "../assets/Ifgaap.png";
// import kcorral from "../assets/kcorral.png";
import pensaki from "../assets/Pensaki-Blackboard.png";
import sosay from "../assets/Sosay.png";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

export default function Products() {
  const products = [
    {
      image: omada,
      title: "Omada HR Payroll",
      desc: "Omada simplifies HR tasks with comprehensive payroll management, payslip generation, project management, and holiday tracking. Its user-friendly interface ensures accurate payroll processing, reducing errors and boosting efficiency, making it an essential tool for businesses aiming to automate HR processes.",
      link: "https://omada-clasico.org/",
    },
    {
      image: pensaki,
      title: "Pensaki Blackboard",
      desc: "Pensaki Blackboard offers secure document solutions, including a doc writer, PDF converter, and agenda management. It provides a private, ad-free environment, ensuring your communication and documentation are handled efficiently and securely.",
      link: "https://pensaki.org/",
    },
    {
      image: sosay,
      title: "Sosay",
      desc: "Sosay is a social media platform that enables real-time communication through audio/video calls, photo/video sharing, and social posts. It keeps you connected and engaged, making it ideal for personal or professional interaction.",
      link: "https://sosay.org/",
    },
    {
      image: bitss,
      title: "Bitss",
      desc: "Bitss provides robust website protection with real-time monitoring against data theft and unauthorized access. It secures websites, admin panels, and video content, ensuring a safe digital environment for businesses of all sizes.",
      link: "https://bitss.fr/",
    },
    {
      image: ifgaap,
      title: "IFGAAP Accounting and Invoicing",
      desc: "IFGAAP offers advanced accounting features like multi-user access, tax management, and real-time processing. It streamlines invoicing, financial reporting, and compliance, making it essential for efficient financial management.",
      link: "https://ifgaap.org/",
    },
  ];

  return (
    <section className="mx-5 md:container md:mx-auto py-10 md:py-20">
      <h5 className="text-2xl md:text-4xl text-primary font-extrabold">
        Our Products
      </h5>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 md:mt-20">
        {products.map((product, i) => (
          <div
            key={i}
            className="flex flex-col justify-between p-5 h-full md:hover:-translate-y-5 duration-300 ease-linear rounded-xl shadow-xl"
          >
            <img src={product.image} className="" alt="" />
            <h5 className="text-xl mt-5 md:text-2xl text-primary font-extrabold">
              {product.title}
            </h5>
            <p className="my-2.5">{product.desc}</p>
            <Link to={product.link} target="_blank" className="px-4 py-2 flex items-center gap-2 border rounded border-primary w-fit hover:bg-primary hover:text-white group duration-300 ease-linear">
              <span>Learn more</span>
              <MdArrowOutward className="group-hover:rotate-45 duration-300 ease-linear text-xl" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
