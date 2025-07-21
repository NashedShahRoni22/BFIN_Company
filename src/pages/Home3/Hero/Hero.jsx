import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { LuArrowRight, LuZap } from "react-icons/lu";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import Container from "../../../shared/Container";
import bitssLogo from "../../../assets/logo/bitss.png";
import omadaLogo from "../../../assets/logo/omada.png";
import ifgaapLogo from "../../../assets/logo/ifgaap-accounting.png";
import bobosohoLogo from "../../../assets/logo/bobosoho.jpg";

const freeTools = [
  {
    logo: bitssLogo,
    title: "Bitss Cyber Security",
  },
  {
    logo: omadaLogo,
    title: "Omada Payroll",
  },
  {
    logo: ifgaapLogo,
    title: "IFGaap Invoicing",
  },
  {
    logo: bobosohoLogo,
    title: "Bobosoho Mail",
  },
];

export default function HeroWithNavbar() {
  return (
    <section className="min-h-screen w-full px-2 py-10 md:py-20">
      <Container>
        <div className="flex flex-col items-center text-dark">
          {/* Badge */}
          <div className="mx-auto inline-flex items-center gap-1 rounded-full border border-gray-200/50 bg-background px-4 py-2 text-sm font-medium backdrop-blur-sm">
            <div className="items-center justify-center rounded-full bg-dark/85 p-1">
              <LuZap className="size-4 text-primary" />
            </div>
            <p>All-in-One Ecommerce Builder</p>
          </div>

          {/* title */}
          <h1 className="font-sora mt-6 text-balance text-center text-4xl font-bold md:text-6xl">
            Build. Launch. Sell. <br />
            <span className="relative inline-block text-white">
              <span className="relative z-10 mt-2 inline-block">
                e-commerce for{" "}
                <Typewriter
                  words={[
                    "entrepreneurs",
                    "freelancers",
                    "micro-businesses",
                    "SMEs",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle=""
                  typeSpeed={50}
                  deleteSpeed={40}
                  delaySpeed={2000}
                />
              </span>
              <div className="absolute inset-0 rotate-1 transform rounded-lg bg-primary opacity-80"></div>
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-balance text-center leading-relaxed md:text-xl">
            e-Bfinit is a Global all-in-one ecommerce platform for independent
            businesses. Built to grow without relying on expensive, centralized
            platforms.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="group flex items-center rounded-lg border border-transparent bg-primary px-6 py-3 font-medium text-white transition-all duration-300 ease-linear hover:border-primary/15 hover:bg-accent hover:text-dark"
            >
              Get Started Now
              <LuArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/"
              className="rounded-lg border border-gray-300 px-6 py-3 font-medium transition-all duration-200 hover:border-primary/15 hover:bg-accent"
            >
              Why Choose Bfinit?
            </Link>
          </div>
        </div>

        <p className="mt-10 flex items-center justify-center gap-2.5 text-sm text-gray-700">
          Enjoy powerful tools & features free with your Ecommerce pack.{" "}
          <Link
            to="/our-technologies"
            className="group flex items-center gap-0.5 font-semibold hover:text-primary"
          >
            See all{" "}
            <LuArrowRight className="transition-all duration-200 ease-linear group-hover:translate-x-0.5" />
          </Link>
        </p>

        <div className="flex items-center justify-center gap-6">
          <div className="group relative w-10">
            <img
              src={bitssLogo}
              className="w-full grayscale transition-all duration-200 ease-linear group-hover:grayscale-0"
            />
            <div className="absolute bottom-[115%] left-1/2 -translate-x-1/2 scale-0 text-nowrap rounded-lg bg-secondary p-1 text-xs opacity-0 transition-opacity duration-200 ease-linear group-hover:scale-100 group-hover:opacity-100">
              <div className="relative">
                Bitss Cyber Security
                <TbTriangleInvertedFilled className="absolute left-1/2 -translate-x-1/2 text-secondary" />
              </div>
            </div>
          </div>

          <div className="group relative w-10">
            <img
              src={omadaLogo}
              className="w-full grayscale transition-all duration-200 ease-linear group-hover:grayscale-0"
            />
            <div className="absolute bottom-[115%] left-1/2 -translate-x-1/2 scale-0 text-nowrap rounded-lg bg-secondary p-1 text-xs opacity-0 transition-opacity duration-200 ease-linear group-hover:scale-100 group-hover:opacity-100">
              <div className="relative">
                Omada Payroll
                <TbTriangleInvertedFilled className="absolute left-1/2 -translate-x-1/2 text-secondary" />
              </div>
            </div>
          </div>

          <div className="group relative w-20">
            <img
              src={ifgaapLogo}
              className="w-full grayscale transition-all duration-200 ease-linear group-hover:grayscale-0"
            />
            <div className="absolute bottom-[115%] left-1/2 -translate-x-1/2 scale-0 text-nowrap rounded-lg bg-secondary p-1 text-xs opacity-0 transition-opacity duration-200 ease-linear group-hover:scale-100 group-hover:opacity-100">
              <div className="relative">
                IFGaap Invoicing
                <TbTriangleInvertedFilled className="absolute left-1/2 -translate-x-1/2 text-secondary" />
              </div>
            </div>
          </div>

          <div className="group relative w-24">
            <img
              src={bobosohoLogo}
              className="w-full grayscale transition-all duration-200 ease-linear group-hover:grayscale-0"
            />
            <div className="absolute bottom-[115%] left-1/2 -translate-x-1/2 scale-0 text-nowrap rounded-lg bg-secondary p-1 text-xs opacity-0 transition-opacity duration-200 ease-linear group-hover:scale-100 group-hover:opacity-100">
              <div className="relative">
                Bobosoho Mail
                <TbTriangleInvertedFilled className="absolute left-1/2 -translate-x-1/2 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
