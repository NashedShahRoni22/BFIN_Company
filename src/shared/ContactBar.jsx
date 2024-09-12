import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function ContactBar() {
  return (
    <section className="py-2.5 bg-primary text-white">
      <div className="mx-5 md:container md:mx-auto flex justify-between">
        <div className="flex items-center gap-2.5">
          <FaLocationDot className="text-xl" />8 rue de Dublin, 34200, Sète,
          France.
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <a href="tel:+33666100010" className="flex items-center gap-2.5">
            <BiPhoneCall className="text-xl" />
            <span className="hidden lg:block">+ 33 6 66 10 00 10</span>
          </a>

          <a
            href="mailto:support@bobosohomail.com"
            className="flex items-center gap-2.5"
          >
            <MdEmail className="text-xl" />
            <span className="hidden lg:block">support@bobosohomail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
