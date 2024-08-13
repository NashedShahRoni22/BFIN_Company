import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Businessproof from "./Businessproof";
import { MdArrowOutward } from "react-icons/md";

export default function HomeLanding() {
  return (
    <section className="banner">
      <div className="mx-5 md:container md:mx-auto py-10 md:py-20 flex flex-col items-center gap-8 md:gap-16">
        <h1 className="text-4xl md:text-6xl text-center">
          Welcome to BFIN IT GROUP - Pioneers in IT Security and Development.
        </h1>
        <p className="text-center md:text-xl">
          Delivering cutting-edge cybersecurity, SaaS hosting, and research
          services with Bitss and Bobosoho for unparalleled network, server, and
          database protection.
        </p>
        {/* <h5 className="font-extrabold text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 text-center">
          <Typewriter
            words={[
              "IT research",
              "Software Development",
              "IT Security",
              "Hosting Provider",
            ]}
            loop={true}
            cursor={true}
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h5> */}
        <button className="px-6 py-3 bg-secondary font-semibold rounded shadow w-fit flex items-center gap-4 group md:hover:scale-110 duration-300 ease-linear">
          <span className="md:text-xl">Explore</span>
          <MdArrowOutward className="md:text-xl group-hover:rotate-45 duration-300 ease-linear" />
        </button>
      </div>
      <Businessproof />
    </section>
  );
}
