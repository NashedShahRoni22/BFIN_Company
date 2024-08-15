import React from "react";
import HagiaSophia from "../assets/Hagia-sophia.png";
import SangsadBhaban from "../assets/Sangsad-Bhaban.png";
import Ifel from "../assets/Ifel.png";
import India from "../assets/india.png";
import OfficeBanner from "../assets/office-banner.png";
import { MdArrowOutward } from "react-icons/md";

export default function OurOffices() {
  const offices = [
    {
      image: Ifel,
      name: "France",
      location: "8 rue de Dublin, 34200, Sète, France.",
    },
    {
      image: SangsadBhaban,
      name: "Bangladesh",
      location: "2/23, Rajia Sultana Road, Mohammadpur, Dhaka.",
    },
    {
      image: India,
      name: "India",
    },
    {
      image: HagiaSophia,
      name: "Turkey",
    },
  ];
  return (
    <section className="bg-black/95 relative">
      <div className="pt-10 md:pt-20 mx-5 md:container md:mx-auto">
        <h5 className="md:text-2xl font-semibold text-white">Our Offices</h5>
        <div className="my-10 md:my-20 grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {offices.map((office, i) => (
            <div
              key={i}
              className="shadow-xl rounded-xl flex flex-col gap-4 p-8 bg-black/90 text-white"
            >
              <img src={office.image} alt="" className="w-[140px]" />
              <h5 className="">{office.name}</h5>
              <p>{office.location}</p>
              <button className="px-4 py-2 border border-secondary w-fit rounded flex items-center gap-2 group">
                <span>Contact Now</span>
                <MdArrowOutward className="text-xl group-hover:rotate-45 duration-300 ease-linear" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <img src={OfficeBanner} alt="" className="" />
      </div>
    </section>
  );
}
