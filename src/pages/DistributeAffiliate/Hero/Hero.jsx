import { FiDollarSign, FiStar, FiUserPlus } from "react-icons/fi";
import heroImg from "../../../assets/distributor-affiliate/hero.jpg";

export default function Hero() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gray-100">
      {/* Decorative elements */}
      <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-primary opacity-20"></div>
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-indigo-800 opacity-10"></div>

      <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-6 py-16 md:flex-row">
        <div className="relative z-10 w-full md:w-1/2">
          <div className="mb-4 inline-flex items-center rounded-full bg-primary/5 px-4 py-1.5">
            <span className="mr-2 text-sm font-medium text-primary">
              Partner Program
            </span>
            <FiStar className="h-4 w-4 text-[#31c5f4]" />
          </div>

          <h1 className="mb-4 bg-gradient-to-r from-primary to-[#31c5f4] bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
            Earn Recurring
            <br />
            Commissions
          </h1>

          <p className="mb-8 text-lg font-light text-gray-600 md:text-xl">
            Join our elite partner network and earn up to 30% recurring
            commissions. We provide premium hosting solutions and the marketing
            tools you need to succeed.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 font-medium text-white transition-all hover:shadow-lg">
              <FiUserPlus className="mr-2" />
              Become a Partner
            </button>
            <button className="rounded-lg border-2 border-primary/5 bg-primary/10 px-8 py-3.5 font-medium backdrop-blur-sm transition-all hover:bg-primary/20">
              Learn More
            </button>
          </div>
        </div>

        <div className="relative w-full md:w-1/2">
          {/* Floating card elements */}
          <div className="absolute -left-8 top-1/4 z-0 h-40 w-40 rounded-2xl bg-amber-300/10 backdrop-blur-sm"></div>
          <div className="absolute -bottom-8 right-0 z-0 h-32 w-32 rounded-full bg-indigo-400/20 backdrop-blur-sm"></div>

          {/* Main image with floating effect */}
          <div className="relative z-10 transform transition-all duration-500 hover:scale-105">
            <img
              src={heroImg}
              alt="Happy partners collaborating"
              className="mx-auto w-full max-w-md rounded-xl shadow-2xl"
            />
            {/* Decorative badge on image */}
            <div className="absolute -bottom-5 -right-5 flex items-center rounded-xl bg-white px-4 py-2 shadow-lg">
              <FiDollarSign className="mr-2 text-green-500" />
              <span className="font-bold text-gray-800">30% Commission</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
