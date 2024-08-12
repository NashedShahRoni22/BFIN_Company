import React from "react";
import hosting from "../assets/hosting-server.png";
import retail from "../assets/retail.png";
import white from "../assets/white-label.png";
import wp from "../assets/wp.png";
import web from "../assets/web.png";

export default function OurServices() {
  const items = [
    {
      image: hosting,
      title: "Web Hosting & Server",
      desc: "Bobosoho has vast experience in WordPress website development, management, maintenance, woo commerce and more. Alongside, WordPress Maintenance Services.We are experienced in WordPress website development, management, maintenance, woo commerce and more. Alongside, WordPress Maintenance Services.",
    },
    {
      image: wp,
      title: "Wordpress Development",
      desc: "Bobosoho SaaS team is experienced in WordPress website development, management, maintenance, woo commerce and more. Alongside, WordPress Maintenance Services.",
    },
    {
      image: web,
      title: "Website Development",
      desc: "Bobosoho provides flexible, and affordable web design and development services for you. You can choose your dream framework/language with us for the development.",
    },
    {
      image: white,
      title: "SaaS White Label",
      desc: "Bobosoho provides flexible, and affordable SaaS design and development services for you. Try the Bobosoho white label products a cost effective way of starting your IT SaaS business online from anywhere. You can choose your own branded SaaS business dream and build your own branded business.",
    },
    {
      image: retail,
      title: "BFIN Retail",
      desc: "For 3 D manufacturing Contact us or send us your prototype we will under strict confidentiality contract, scan, produce it until it is exactly what your require, we will then manufacture under licence and manage all IT distribution, this is website creation, maintenance, secured hosting with bfin firewall and cyber verification system, and provide online sales management and client and product support. Includes shipping to your clients. Visit Bfin retail for our cameleasy products, saddles for droamdaires, camels, lama, cow etc. Our retail brands kcorral and cameleasy.",
    },
  ];
  return (
    <section className="mx-5 md:container md:mx-auto py-10 md:py-20">
      <h5 className="text-2xl md:text-4xl text-primary font-extrabold">
        Our Services
      </h5>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 md:mt-20">
        {items.map((item) => (
          <div className="flex flex-col gap-2.5 p-8 rounded-xl shadow-xl md:hover:-translate-y-5 ease-linear duration-300">
            <img src={item.image} className="h-[80px] w-[80px]" alt="" />
            <h5 className="text-[20px] md:text-[26px] font-semibold text-primary">{item.title}</h5>
            <p className="text-[12px] md:text-[16px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
