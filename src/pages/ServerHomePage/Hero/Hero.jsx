import { Link } from "react-router-dom";
import { IoMdArrowDropup } from "react-icons/io";
import heroImg from "../../../assets/server-home/hero-bg.jpg";

const heroKeyFeats = [
  "Unlimited Bandwidth",
  "Unlimited Backup",
  "Free Website Builder",
];

export default function Hero() {
  return (
    <div className="text-primary flex w-full flex-col items-center gap-8 px-5 py-10 md:container md:mx-auto md:flex-row md:px-0">
      <div className="w-full md:w-1/2">
        <p className="text-xl font-bold">
          Up to <span className="text-accent">34%</span> off Web Hosting
        </p>
        <h1 className="font-urbanist mt-2 text-4xl font-bold">
          Secure, Speedy & Customizable <br /> the way your website should be!
        </h1>
        <ul className="mt-4 space-y-1">
          {heroKeyFeats.map((feat, i) => (
            <li key={i} className="flex items-center gap-0.5 tracking-wider">
              <IoMdArrowDropup className="text-accent min-w-fit text-lg" />
              {feat}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xl">
          from $<span className="text-3xl font-bold">4.99</span>/month
        </p>
        <p className="text-lg font-bold">
          + $0 Setup Fee & No Extra Renewal Charge
        </p>
        <Link
          to="/"
          className="bg-royal-blue hover:bg-royal-blue-hover mt-4 inline-block w-full cursor-pointer rounded-md px-5 py-2.5 text-center font-semibold text-white transition-all duration-200 ease-in-out md:w-fit"
        >
          Get Started
        </Link>
      </div>

      {/* image container */}
      <div className="w-full md:w-1/2 relative">
        <img
          src={heroImg}
          alt="bfinit hosting dashboard"
          className="w-full h-full absolute top-0 left-0"
        />
      </div>
    </div>
  );
}
