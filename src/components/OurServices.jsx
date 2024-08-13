import React from "react";
import hosting from "../assets/hosting.png";
import retail from "../assets/retail.png";
import white from "../assets/white-label.png";
import wp from "../assets/wordpress-development.png";
import web from "../assets/web-development.png";
import security from "../assets/Cyber-Security.png";

export default function OurServices() {
  const items = [
    {
      image: hosting,
      title: "Web Hosting & Server",
      desc: "Bobosoho offers comprehensive WordPress website services, including development, management, and maintenance, with expertise in WooCommerce and other related platforms. We provide reliable WordPress maintenance services, ensuring your website runs smoothly, efficiently, and securely.",
    },
    {
      image: wp,
      title: "Wordpress Security & Development",
      desc: "Our SaaS team specializes in WordPress development, offering full-service management and maintenance. We provide tailored solutions for WooCommerce and other plugins, ensuring your WordPress site meets your specific needs with robust support and consistent performance.",
    },
    {
      image: web,
      title: "Custom Website Development",
      desc: "Bobosoho delivers customized web design and development services, offering flexibility in framework or language selection. We build websites that are tailored to your vision, ensuring they are both functional and affordable.",
    },
    {
      image: security,
      title: "Bitss Cyber Security",
      desc: "Protect your website with Bobosoho's cybersecurity plugin, offering real-time monitoring, automated threat detection, and comprehensive protection against malware, DDoS attacks, and data breaches. Our easy-to-deploy solution includes firewall integration, secure login systems, and vulnerability assessments.",
    },
    {
      image: white,
      title: "BFINIT SaaS White Label",
      desc: "Bobosoho offers affordable white-label SaaS design and development services, allowing you to start your own branded IT SaaS business. We provide the tools and support needed to build and launch your unique SaaS platform.",
    },
    {
      image: retail,
      title: "BFIN Retail",
      desc: "For confidential 3D manufacturing, send us your prototype. We manage the entire process, including scanning, production, licensing, IT distribution, secure hosting, online sales management, and product support. Explore our retail brands, Kcorral and Cameleasy, for specialized products like saddles for camels and more.",
    },
  ];
  return (
    <section className="mx-5 md:container md:mx-auto py-10 md:py-20">
      <h5 className="text-2xl md:text-4xl text-primary font-extrabold">
        Our Services
      </h5>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 md:mt-20">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col gap-2.5 p-8 rounded-xl shadow-xl md:hover:-translate-y-5 ease-linear duration-300">
            <img src={item.image} className="h-[80px] w-[80px]" alt="" />
            <h5 className="text-[20px] md:text-[26px] font-semibold text-primary">
              {item.title}
            </h5>
            <p className="text-[12px] md:text-[16px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
