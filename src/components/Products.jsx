import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import bitss from "../assets/Bitss-cyber-security.png";
import omada from "../assets/Omada.png";
import ifgaap from "../assets/Ifgaap.png";
// import kcorral from "../assets/kcorral.png";
import pensaki from "../assets/Pensaki-Blackboard.png";
import sosay from "../assets/Sosay.png";
import dataCenter from "../assets/hosting.png";

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
    {
      image: dataCenter,
      title: "Data Center Solutions",
      desc: "Data Center Solutions provide secure, high-performance hosting with scalable infrastructure for businesses. Our data centers ensure 24/7 uptime, robust cybersecurity, and optimized performance for eCommerce, cloud computing, and enterprise applications.",
      link: "https://bfinit-datacenter.org/",
    },
  ];

  return (
    <section className="mx-5 py-10 md:container md:mx-auto md:py-20">
      <h5 className="text-2xl font-extrabold text-primary md:text-4xl">
        Our Products
      </h5>
      <div className="mt-10 grid gap-5 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, i) => (
          <div
            key={i}
            className="flex h-full flex-col justify-between rounded-xl p-5 shadow-xl duration-300 ease-linear md:hover:-translate-y-5"
          >
            <img
              src={product.image}
              alt={product.title}
              loading="lazy"
              className="h-24 w-auto object-contain"
            />
            <h5 className="mt-5 text-xl font-extrabold text-primary md:text-2xl">
              {product.title}
            </h5>
            <p className="my-2.5">{product.desc}</p>
            <Link
              to={product.link}
              target="_blank"
              className="group flex w-fit items-center gap-2 rounded border border-primary px-4 py-2 duration-300 ease-linear hover:bg-primary hover:text-white"
            >
              <span>Learn more</span>
              <MdArrowOutward className="text-xl duration-300 ease-linear group-hover:rotate-45" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
