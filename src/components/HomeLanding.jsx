import React from "react";
import Businessproof from "./Businessproof";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

export default function HomeLanding() {
  return (
    <section className="banner">
      <div className="mx-5 md:container md:mx-auto py-10 md:py-20 flex flex-col items-center gap-8 md:gap-16">
        <h1 className="text-4xl md:text-6xl text-center">
          Welcome to <span className="font-semibold text-primary">BFINIT</span> - Pioneers in IT Security and Development
        </h1>
        <p className="text-center md:text-xl">
          Delivering cutting-edge cybersecurity, SaaS hosting, and research
          services with Bitss and Bobosoho for unparalleled network, server, and
          database protection.
        </p>
        <Link to={"our-products"} className="px-6 py-3 bg-primary text-white font-semibold rounded shadow w-fit flex items-center gap-4 group md:hover:scale-110 duration-300 ease-linear">
          <span className="md:text-xl">Explore</span>
          <MdArrowOutward className="md:text-xl group-hover:rotate-45 duration-300 ease-linear" />
        </Link>
      </div>
      <Businessproof />
    </section>
  );
}
