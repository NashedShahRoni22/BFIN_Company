import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogBody } from "@material-tailwind/react";
import { MdArrowOutward } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import OurServices from "../../components/OurServices";
import DigitalEconomy from "../../components/DigitalEconomy";
import OurWorkingProcess from "../../components/OurWorkingProcess";
import KeywordsMerque from "../../components/KeywordsMerque";
import Testimonials from "../../components/Testimonials";
import Question from "../../components/Question";
import Products from "../../components/Products";
import hostingImage from "../../assets/hosting.png";
import hostingImage2 from "../../assets/hosting-N2.png";
import Hero from "./Hero/Hero";
import Businessproof from "../../components/Businessproof";
import Ecommerce from "./Ecommerce/Ecommerce";
import Blogs from "../Blog/Blogs";
import DataCenter from "./DataCenter/DataCenter";
import Gdpr from "./Gdpr/Gdpr";

export default function Home() {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setOpen(false);
  return (
    <main>
      <Hero />
      {/* <KeywordsMerque /> */}
      <Ecommerce />
      <DataCenter />
      <Gdpr />
      <Products />
      {/* <Businessproof /> */}
      <OurServices />
      <DigitalEconomy />
      <OurWorkingProcess />
      <Testimonials />
      <Blogs />
      <Question />

      <Dialog
        open={open}
        handler={handleClose}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogBody className="relative rounded-lg p-8 shadow-lg">
          <button
            onClick={handleClose}
            className="absolute right-2 top-2 rounded-full bg-red-100 p-1 text-red-600"
          >
            <IoMdClose className="text-xl" />
          </button>
          <div className="mt-12 flex flex-col items-center gap-8 text-center">
            <p className="animate-pulse text-5xl font-extrabold text-primary md:text-7xl lg:text-8xl">
              28% Off
            </p>
            <div className="flex items-center justify-center gap-4">
              <img
                className="h-[80px]"
                src={hostingImage}
                alt=""
                loading="lazy"
              />
              <img
                className="h-[80px]"
                src={hostingImage2}
                alt=""
                loading="lazy"
              />
            </div>
            <p className="bg-clip-text text-2xl font-semibold text-primary md:text-4xl">
              Enjoy on yearly hosting plan
            </p>
            <Link
              to={"fully-managed-dedicated-server"}
              className="group flex w-fit items-center gap-4 rounded border border-primary px-6 py-3 font-semibold text-primary shadow duration-300 ease-linear hover:bg-primary hover:text-white"
            >
              <span className="md:text-xl">Explore</span>
              <MdArrowOutward className="duration-300 ease-linear group-hover:rotate-45 md:text-xl" />
            </Link>
          </div>
        </DialogBody>
      </Dialog>
    </main>
  );
}
