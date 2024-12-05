import React from "react";
import HomeLanding from "../components/HomeLanding";
import OurServices from "../components/OurServices";
import DigitalEconomy from "../components/DigitalEconomy";
import OurWorkingProcess from "../components/OurWorkingProcess";
import KeywordsMerque from "../components/KeywordsMerque";
import Testimonials from "../components/Testimonials";
import Question from "../components/Question";
import Products from "../components/Products";
import hostingImage from "../assets/hosting.png";
import hostingImage2 from "../assets/hosting-N2.png";
import { Dialog, DialogBody } from "@material-tailwind/react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import Hero from "./Home/Hero/Hero";
import Businessproof from "../components/Businessproof";
import Ecommerce from "./Home/Ecommerce/Ecommerce";

export default function Home() {
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => setOpen(!open);
  return (
    <main>
      <Hero />
      {/* <HomeLanding /> */}
      {/* <KeywordsMerque /> */}
      <Businessproof />
      <Ecommerce />
      <Products />
      <OurServices />
      <DigitalEconomy />
      <OurWorkingProcess />
      <Testimonials />
      <Question />

      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogBody className="relative p-8 rounded-lg bg-black text-white shadow-lg">
          <button
            onClick={handleOpen}
            className="absolute top-2 right-2 p-1 rounded-full bg-red-100 text-red-600"
          >
            <IoMdClose className="text-xl" />
          </button>
          <div className="text-center mt-12 flex flex-col items-center gap-8">
            <p className="text-5xl md:text-7xl lg:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#186BB5] via-white to-[#186BB5] animate-pulse">
              28% Off
            </p>
            <div className="flex items-center justify-center gap-4">
              <img className="h-[80px]" src={hostingImage} alt="" />
              <img className="h-[80px]" src={hostingImage2} alt="" />
            </div>
            <p className="text-2xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#186BB5] via-white to-[#186BB5]">
              Enjoy on yearly hosting plan
            </p>
            <Link
              to={"fully-managed-dedicated-server"}
              className="px-6 py-3 bg-primary text-white font-semibold rounded shadow w-fit flex items-center gap-4 group"
            >
              <span className="md:text-xl">Explore</span>
              <MdArrowOutward className="md:text-xl group-hover:rotate-45 duration-300 ease-linear" />
            </Link>
          </div>
        </DialogBody>
      </Dialog>
    </main>
  );
}
