import React from "react";
import { BiHome, BiPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import animData from "../assets/contact-anim.json";
import Lottie from "react-lottie";
import { Input, Option, Select, Textarea } from "@material-tailwind/react";
import { MdArrowOutward } from "react-icons/md";

export default function Contact() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animData,
  };
  return (
    <section className="mx-5 md:container md:mx-auto py-10 md:py-20">
      <div className="grid gap-8 lg:grid-cols-2 md:gap-16">
        <div className="flex flex-col gap-4 md:gap-8">
          <h5 className="md:text-2xl font-semibold">Contact Us</h5>
          <p className="text-xl md:text-3xl text-primary font-semibold">
            To make requests for further information, contact us via our social
            channels.{" "}
          </p>

          <div className="flex gap-5">
            <div className="p-4 shadow text-primary bg-gray-100 rounded-xl h-fit w-fit flex justify-center items-center">
              <BiHome className="text-xl md:text-2xl" />
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="font-semibold">Address</h5>
              <p>8 rue de Dublin, 34200, Sète, France</p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="p-4 shadow text-primary bg-gray-100 rounded-xl h-fit w-fit flex justify-center items-center">
              <BiPhone className="text-xl md:text-2xl" />
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="font-semibold">Phone</h5>
              <p>+0033666100010</p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="p-4 shadow text-primary bg-gray-100 rounded-xl h-fit w-fit flex justify-center items-center">
              <MdEmail className="text-xl md:text-2xl" />
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="font-semibold">Email</h5>
              <p>support@bobosohomail.com</p>
              <p>bfin@bobosohomail.com</p>
            </div>
          </div>
        </div>
        <div className="">
          <Lottie options={defaultOptions} />
        </div>
      </div>

      <h5 className="md:text-2xl font-semibold text-end mt-10 md:mt-20">Send Messsage</h5>
      <p className="text-xl md:text-3xl text-primary font-semibold text-end mt-4 md:mt-8">
        Get in touch
      </p>

      <div className="grid gap-8 lg:grid-cols-2 md:gap-16 mt-10 md:mt-20">

        <form action="" className="flex flex-col gap-8 shadow rounded p-8">
          <Input
            variant="static"
            label="Enter Name"
            placeholder="Enter Name"
            type="text"
            required
          />
          <Input
            variant="static"
            label="Enter Email"
            placeholder="Enter Email"
            type="email"
            required
          />
          <Input
            variant="static"
            label="Enter Phone"
            placeholder="Enter Phone"
            type="number"
            required
          />
          <Select variant="static" label="How do you hear about us?" required>
            <Option>Search engine (Google, Bing etc) </Option>
            <Option>Social media (Facebook, Twitter etc)</Option>
            <Option>Reccommend by others</Option>
            <Option>Others</Option>
          </Select>
          <Input variant="static" label="Skype Id" placeholder="Skype Id" />
          <Input
            variant="static"
            label="Subject/Querey for"
            placeholder="Subject/Querey for"
            type="text"
            required
          />
          <Textarea
            variant="static"
            label="Enter Message"
            placeholder="Enter Message"
            type="text"
            required
          />
          <button
            type="submit"
            className="px-8 py-2 rounded border border-primary hover:bg-primary text-primary hover:text-white font-semibold w-fit flex items-center gap-4 duration-300 ease-linear group"
          >
            <span>Send Message</span>
            <MdArrowOutward className="text-xl group-hover:rotate-45 duration-300 ease-linear" />
          </button>
        </form>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5795.795980198256!2d3.708454!3d43.420958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b1357c2efa6fbb%3A0xddfc93666aef9f37!2s8%20Rue%20de%20Dublin%2C%2034200%20S%C3%A8te%2C%20France!5e0!3m2!1sen!2sbd!4v1723619506631!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
