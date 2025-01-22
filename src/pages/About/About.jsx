import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { MdArrowOutward } from "react-icons/md";
import philosopy from "../../assets/philosopy.png";
import vision from "../../assets/vision.png";
import mission from "../../assets/mission.png";
import OurOffices from "./OurOffices/OurOffices";

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
    <section className="">
      {/* about us content  */}
      <div className="mx-5 my-10 grid place-items-center gap-4 md:container md:mx-auto lg:my-20 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col gap-4 md:gap-8">
          <h5 className="font-semibold md:text-2xl">About Us</h5>
          <p className="text-2xl font-semibold text-primary md:text-4xl">
            This is Who We Are
          </p>
          <div>
            <p className="mb-1.5">
              BFIN SASU, a French research company in IT security, with Bitss
              providing ultimate cyber security, with bitss wap login
              enforcement protection for websites, Bitss C secured anti spam and
              virus website contact form, and Bitss Vway Malware a software that
              identifies, neutralises, removes and destroys MALWARE coding sent
              to destroy a website server or laptop with specific objects.
            </p>
            <p>
              Bfinit in addition provides server hosting, ecommerce platform,
              white label, and SaaS software products with ongoing research to
              improve its technology and giving infinit value to our brands
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              to={"/contact"}
              className="group flex w-fit items-center gap-4 rounded border border-primary bg-primary px-4 py-2 font-semibold text-white shadow duration-300 ease-linear hover:bg-transparent hover:text-primary"
            >
              <span className="md:text-xl">Explore</span>
              <MdArrowOutward className="duration-300 ease-linear group-hover:rotate-45 md:text-xl" />
            </Link>
            <Link
              to={"/contact"}
              className="group flex w-fit items-center gap-4 rounded border border-primary bg-primary px-4 py-2 font-semibold text-white shadow duration-300 ease-linear hover:bg-transparent hover:text-primary"
            >
              <span className="md:text-xl">Contact</span>
              <MdArrowOutward className="duration-300 ease-linear group-hover:rotate-45 md:text-xl" />
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
      <div className="mx-5 my-10 flex flex-col gap-4 md:container md:mx-auto md:gap-8 lg:my-20">
        <h5 className="font-semibold text-primary md:text-2xl">
          When you are more prepared, your future will be brighter
        </h5>
        <p>
          Since 2018 we’ve been working with amazing organisations to create
          meaningful impact and compelling experiences.
        </p>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {items.map((item, i) => (
            <div key={i}>
              <div className="roundex-xl w-fit bg-gray-100 p-4 shadow">
                <img src={item.image} alt="" loading="lazy" />
              </div>
              <div className="mt-5">
                <h5 className="text-xl font-semibold text-primary">
                  {item.title}
                </h5>
                <p className="mt-2.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <OurOffices />
    </section>
  );
}
