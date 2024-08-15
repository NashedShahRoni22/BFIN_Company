import React from "react";
import { MdArrowOutward } from "react-icons/md";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import philosopy from "../assets/philosopy.png";
import vision from "../assets/vision.png";
import mission from "../assets/mission.png";
import OurOffices from "../components/OurOffices";

export default function About() {
  const items = [
    {
      image: philosopy,
      title: "Philosophy",
      desc: "Our philosophy is based on proactive defense and innovation, ensuring the highest levels of cybersecurity. We believe in continuous learning, ethical practices, and collaboration to develop resilient solutions that protect digital environments. By upholding excellence and integrity, we aim to build lasting trust with our clients, making their security our top priority.",
    },
    {
      image: vision,
      title: "Vision",
      desc: "We envision delivering the finest security solutions to ensure our customers' safety and peace of mind. Our commitment to excellence, innovation, and personalized service empowers businesses to securely navigate the ever-changing digital landscape, fostering growth and resilience.",
    },
    {
      image: mission,
      title: "Mission",
      desc: "Our mission is to deploy advanced technology to combat hacking, piracy, and cybercrime. With a team of skilled research engineers, we focus on staying ahead of emerging threats, ensuring continuous protection for our clients in an evolving digital world.",
    },
  ];

  return (
    <section className="pt-10 md:pt-20">
      {/* about us content  */}
      <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 place-items-center mx-5 md:container md:mx-auto">
        <div className="flex flex-col gap-4 md:gap-8">
          <h5 className="md:text-2xl font-semibold">About Us</h5>
          <p className="text-2xl md:text-4xl text-primary font-semibold">
            This is Who We Are
          </p>
          <p>
            BFIN SASU, a French research company in IT security, with Bitss
            providing ultimate cyber security for networks, dedicated servers,
            WP database protection including the Bitss secured client contact
            page that prevents scamming and other threats, and Bobosoho SaaS
            software and soho hosting services.
          </p>
          <div className="flex gap-4">
            <Link
              to={"/contact"}
              className="px-4 py-2 bg-primary border border-primary hover:bg-transparent hover:text-primary text-white font-semibold rounded shadow w-fit flex items-center gap-4 group duration-300 ease-linear"
            >
              <span className="md:text-xl">Explore</span>
              <MdArrowOutward className="md:text-xl group-hover:rotate-45 duration-300 ease-linear" />
            </Link>
            <Link
              to={"/contact"}
              className="px-4 py-2 bg-primary border border-primary hover:bg-transparent hover:text-primary text-white font-semibold rounded shadow w-fit flex items-center gap-4 group duration-300 ease-linear"
            >
              <span className="md:text-xl">Contact</span>
              <MdArrowOutward className="md:text-xl group-hover:rotate-45 duration-300 ease-linear" />
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=NDiltUHXMCE&t=21s"
            loop
            controls
            // width="100%"
            // height="100%"
          />
        </div>
      </div>
      {/* mission & vision  */}
      <div className="my-20 lg:my-40 flex flex-col gap-4 md:gap-8 mx-5 md:container md:mx-auto">
        <h5 className="md:text-2xl font-semibold text-primary">
          When you are more prepared, your future will be brighter
        </h5>
        <p>
          Since 2018 we’ve been working with amazing organisations to create
          meaningful impact and compelling experiences.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {items.map((item, i) => (
            <div key={i}>
              <div
                className={`p-4 shadow roundex-xl w-fit bg-gray-100 ${
                  i == 0 && "bg-secondary"
                }`}
              >
                <img src={item.image} className="" alt="" />
              </div>
              <div className="mt-5">
                <h5 className="font-semibold text-primary text-xl">
                  {item.title}
                </h5>
                <p className="mt-2.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <OurOffices/>
    </section>
  );
}
