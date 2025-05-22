import { FaServer, FaStore, FaUserTie } from "react-icons/fa";
import bitssLogo from "../../../assets/logo/bitss.png";

const products = [
  {
    icon: FaServer,
    title: "BFINIT Hosting",
    intro: "We offer our hosting from these solutions:",
    details:
      "Our hosting solutions include Web Hosting for reliable and affordable service, VPS Hosting for scalable and secure virtual servers, Custom VPS tailored to your exact needs, and the Starter Webpack for blazing fast web access.",
    price: "From $4.90/month",
  },
  {
    icon: FaStore,
    title: "E-commerce Web Builder",
    intro:
      "Get free e-commerce web builder with purchase of e-commerce hosting pack.",
    details:
      "Build up to 4 fully functional e-commerce websites at no extra cost when you purchase our e-commerce hosting pack. This offer enables startups and small businesses to establish an online presence without added expenses.",
    price: "Free",
  },
  {
    icon: FaUserTie,
    title: "Omada HR Payroll",
    intro:
      "Empower your workflow with comprehensive HR management starting at:",
    details:
      "Omada HR Payroll simplifies employee management with features like unlimited payslip runs, time and attendance tracking, holiday scheduling, and task assignments. It also includes a private staff panel, multilingual payslips in 16 languages, and unlimited training and support to ensure smooth operations.",
    price: "From €5/month",
  },
  {
    logo: bitssLogo,
    title: "Bitss Cybersecurity",
    intro: "Multi-layered protection solutions for websites and databases.",
    details:
      "Bitss Cybersecurity offers comprehensive tools including the C Contact Form for anti-spam and virus filtering, WAP for login protection, and VWAR for database security and code filtering. These tools are available across multiple platforms such as WordPress, JavaScript, Windows, and Server—many already supported, with continuous upgrades for wider coverage.",
    price: "From €7.50",
  },
];

const DistributorProducts = () => {
  return (
    <section className="mx-4 py-10 md:container md:mx-auto md:py-20">
      <div className="text-center">
        <h2 className="text-center text-2xl font-bold md:text-4xl">
          Partner-Ready Products to <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Empower Your Clients
          </span>
        </h2>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col rounded-xl border border-gray-200 p-6"
          >
            <div className="mb-5 flex gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {product.icon ? (
                  <product.icon className="size-6" />
                ) : (
                  <img src={product.logo} alt="" className="size-6" />
                )}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {product.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-gray-700">
                  {product.intro}
                </p>
              </div>
            </div>

            <p className="mb-6 flex-1 text-sm text-gray-700">
              {product.details}
            </p>

            <div className="mt-auto flex flex-col border-t pt-4">
              <span className="text-sm font-medium text-gray-600">
                Starting at
              </span>
              <span className="text-lg font-bold text-gray-900">
                {product.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DistributorProducts;
