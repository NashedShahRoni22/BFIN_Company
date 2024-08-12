import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function HomeLanding() {
  return (
    <section className="">
      <div className="bg-primary w-full h-0.5"></div>
      <div className="mx-5 md:container md:mx-auto py-10 md:py-20 flex flex-col gap-8 md:gap-16">
        <h1 className="font-extrabold text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 text-center">
          Welcome to BFIN Company
        </h1>
        <p className="text-center md:text-xl ">
          BFIN SASU, a French research company in IT security, with Bitss
          providing ultimate cyber security for networks, dedicated servers, WP
          database protection including the Bitss secured client contact page
          that prevents scamming and other threats, and Bobosoho SaaS software
          and soho hosting services.
        </p>
        <div className="flex items-center justify-center gap-2">
          <input placeholder="Enter you email" className="py-1.5 px-4 border border-primary outline-none rounded shadow-xl" />
          <button className="py-1.5 px-4 bg-primary rounded text-white">
            Subscribe
          </button>
        </div>
        <h5 className="font-extrabold text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 text-center">
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
        </h5>
      </div>
    </section>
  );
}
