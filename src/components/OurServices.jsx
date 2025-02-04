import hosting from "../assets/hosting-N2.png";
import retail from "../assets/retail.png";
import white from "../assets/white-label.png";
import ecomSass from "../assets/ecommerce-sass.png";
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
      image: ecomSass,
      title: "E-commerce SaaS Platform",
      desc: "BFINIT delivers a powerful E-commerce SaaS solution, enabling businesses to launch and manage online stores effortlessly. Our platform ensures top-tier security with Bitss Cyber Protection, while offering seamless scalability, payment integrations, and robust store management features.",
    },
    {
      image: web,
      title: "Create Your Online Store",
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
    <section className="mx-5 py-10 md:container md:mx-auto md:py-20">
      <h5 className="text-2xl font-extrabold text-primary md:text-4xl">
        Our Software & Services
      </h5>
      <div className="mt-10 grid gap-5 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="rounded-xl p-5 shadow-xl duration-300 ease-linear md:hover:-translate-y-5"
          >
            <img
              src={item.image}
              className="size-[80px]"
              alt=""
              loading="lazy"
            />
            <h5 className="mt-5 text-[20px] font-semibold text-primary md:text-[26px]">
              {item.title}
            </h5>
            <p className="mt-2.5 text-[12px] md:text-[16px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
