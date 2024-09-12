import React from "react";
import hosting from "../assets/hosting-N2.png";
import retail from "../assets/retail.png";
import white from "../assets/white-label.png";
import wp from "../assets/wordpress-development.png";
import web from "../assets/web-development.png";
import security from "../assets/Cyber-Security-N2.png";

export default function OurServices() {
  const items = [
    {
      image: hosting,
      title: "Soho Hosting & Server",
      desc: "BFINIT offers Soho server hosting with comprehensive security, including Bitss protection against natural disasters, data theft, and hackers. Our fully managed hosting services ensure 100% uptime, with backups to another data center and Bitss cloud protection, safeguarding your websites from unforeseen threats.",
    },
    {
      image: wp,
      title: "WordPress Security & Development",
      desc: "BFINIT provides comprehensive WordPress development with Bitss Cyber Security, safeguarding your site against hackers and intrusions. Secure your online presence with Bitss WAP and Vwar frontline virus defenders, ensuring robust protection and long-term security for your WordPress site.",
    },
    {
      image: web,
      title: "Custom Website Development",
      desc: "BFINIT delivers custom-built websites designed for ease of management and security. Enhance your online business with our bespoke solutions, fortified by Bitss security add-ons to protect your online revenue and ensure your digital operations are secure and efficient.",
    },
    {
      image: security,
      title: "Bitss Cyber Security",
      desc: "Protect your website with BFINIT’s Bitss Cyber Security plugin. Offering real-time monitoring, automated threat detection, and robust defense against malware, DDoS attacks, and data breaches. Our solution ensures comprehensive security with firewall integration, secure logins, and vulnerability assessments.",
    },
    {
      image: white,
      title: "BFINIT SaaS White Label",
      desc: "BFINIT offers cost-effective SaaS white-label solutions, encouraging business development and supporting startups. Launch your branded SaaS platform with our expert design and development services, providing all the tools and support needed for successful business growth.",
      link: "https://bfin.company/software/white_label/",
    },
    {
      image: retail,
      title: "BFINIT Retail",
      desc: "Kcorral Market is a secure eCommerce platform for deluxe fashion, retail, and equestrian sectors. It connects sellers and buyers directly, offering tools for product management and order tracking, ensuring a seamless, profitable online business experience.",
    },
  ];

  return (
    <section className="mx-5 md:container md:mx-auto py-10 md:py-20">
      <h5 className="text-2xl md:text-4xl text-primary font-extrabold">
        Our Software & Services
      </h5>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 md:mt-20">
        {items.map((item, i) => (
          <div
            key={i}
            className="p-5 rounded-xl shadow-xl md:hover:-translate-y-5 ease-linear duration-300"
          >
            <img src={item.image} className="h-[80px] w-[80px]" alt="" />
            <h5 className="mt-5 text-[20px] md:text-[26px] font-semibold text-primary">
              {item.title}
            </h5>
            <p className="mt-2.5 text-[12px] md:text-[16px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
