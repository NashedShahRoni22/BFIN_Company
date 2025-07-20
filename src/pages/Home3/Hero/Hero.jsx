import { Link } from "react-router-dom";
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
        <div className="text-dark flex flex-col items-center">
          {/* Badge */}
          <div className="bg-background mx-auto inline-flex items-center gap-1 rounded-full border border-gray-200/50 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            <div className="bg-dark/85 items-center justify-center rounded-full p-1">
              <LuZap className="size-4 text-secondary" />
            </div>
            <p>All-in-One Ecommerce Builder – Free to Start</p>
          </div>

          {/* title */}
          <h1 className="mt-6 text-balance text-center text-4xl font-bold md:text-6xl lg:text-7xl">
            Build. Launch. Sell. <br />
            <span className="relative">
              <span className="relative z-10 mt-2 inline-block">
                Your Store for Free
              </span>
              <div className="absolute inset-0 rotate-1 transform rounded-lg bg-secondary opacity-80"></div>
            </span>
          </h1>

          <p className="mx-auto mt-8 text-balance text-center leading-relaxed md:text-xl">
            Launch a fully integrated ecommerce platform with enterprise-grade
            hosting,{" "}
            <span className="underline decoration-secondary">
              secure payments
            </span>
            ,{" "}
            <span className="underline decoration-secondary">advanced SEO</span>{" "}
            &{" "}
            <span className="underline decoration-secondary">
              streamlined invoicing
            </span>{" "}
            all in one solution.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="hover:bg-accent hover:text-dark group flex items-center rounded-lg border border-transparent bg-primary px-6 py-3 font-medium text-white transition-all duration-300 ease-linear hover:border-primary/15"
            >
              Sign up for free
              <LuArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/"
              className="hover:bg-accent rounded-lg border border-gray-300 px-6 py-3 font-medium transition-all duration-200 hover:border-primary/15"
            >
              Is Bfinit right for me?
            </Link>
          </div>
        </div>

        <p className="mt-10 flex items-center justify-center gap-2.5 text-sm">
          Integrate with nearly any tool or framework under the sun{" "}
          <Link
            to="/our-technologies"
            className="group flex items-center gap-0.5 font-semibold text-primary"
          >
            View all{" "}
            <LuArrowRight className="transition-all duration-200 ease-linear group-hover:translate-x-0.5" />
          </Link>
        </p>

        <div className="mt-5 flex items-center justify-center gap-2">
          {freeTools.map((tool, i) => (
            <div key={i} className="group relative w-9">
              <img
                src={tool.logo}
                className="w-full grayscale transition-all duration-200 ease-linear group-hover:grayscale-0"
              />
              <div className="absolute bottom-[115%] left-1/2 -translate-x-1/2 scale-0 text-nowrap rounded-lg bg-secondary p-1 text-xs opacity-0 transition-opacity duration-200 ease-linear group-hover:scale-100 group-hover:opacity-100">
                <div className="relative">
                  {tool.title}
                  <TbTriangleInvertedFilled className="absolute left-1/2 -translate-x-1/2 text-secondary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
