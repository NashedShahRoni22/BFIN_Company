import React from "react";
import { BiLocationPlus, BiPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

export default function ContactBar() {
  return (
    <section className="py-2.5 bg-primary text-white">
      <div className="mx-5 md:container md:mx-auto flex justify-between">
        <div className="flex items-center gap-2.5">
          <BiLocationPlus className="text-xl" />
          Mohammadpur, Dhaka
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2.5">
            <BiPhoneCall className="text-xl" />
            <span className="hidden md:block">01318214398</span>
          </div>
          <div className="flex items-center gap-2.5">
            <MdEmail className="text-xl" />
            <span className="hidden md:block">contact@bfin.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
