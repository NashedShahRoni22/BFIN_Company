import React from "react";
import HagiaSophia from "../assets/Hagia-sophia.png";
import SangsadBhaban from "../assets/Sangsad-Bhaban.png";
import Ifel from "../assets/ifel.png";
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
      location: "Remote Office.",
    },
    {
      image: HagiaSophia,
      name: "Turkey",
      location: "Remote Office.",
    },
  ];
  return (
    <section className="bg-black/95 relative mt-10 md:mt-20">
      <div className="py-10 md:py-20 lg:pb-0 mx-5 md:container md:mx-auto">
        <h5 className="md:text-2xl font-semibold text-white">Our Offices</h5>
        <div className="py-5 md:py-10 grid md:grid-cols-2 gap-4 md:gap-8 lg:w-1/2">
          {offices.map((office, i) => (
            <div
              key={i}
              className="shadow-xl rounded-xl flex flex-col justify-between items-center p-8 bg-black/90 text-white"
            >
              <img src={office.image} alt="" className="w-[140px]" />
              <div>
                <h5 className="font-semibold">{office.name}</h5>
                {/* <p className="my-2.5">{office.location}</p> */}
                <button className="px-4 py-2 border border-secondary mt-5 w-fit rounded flex items-center gap-2 group">
                  <span>Contact Now</span>
                  <MdArrowOutward className="text-xl group-hover:rotate-45 duration-300 ease-linear" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <img
            src={OfficeBanner}
            alt=""
            className="absolute right-0 bottom-0"
          />
        </div>
      </div>
    </section>
  );
}
