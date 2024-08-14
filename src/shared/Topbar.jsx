import React, { useState } from "react";
import { BiChevronDown, BiChevronRight, BiChevronUp } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import logo from "../assets/bfin.png";

export default function Topbar() {
  const [showNav, setShowNav] = useState(false);
  const [showChild, setShowChild] = useState("");
  const MenuItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Hosting Products",
      child: [
        {
          name: "Fully Managed Dedicated Server",
          link: "/",
        },
        {
          name: "Fully Managed Virtual Dedicated Server",
          link: "/",
        },
        {
          name: "Self Managed Dedicated Server",
          link: "/",
        },
        {
          name: "Fully Managed Pure Website Hosting",
          link: "/",
        },
        {
          name: "Self Managed Pure Website Hosting",
          link: "/",
        },
        {
          name: "Vault Cloud Storage",
          link: "/",
        },
      ],
    },
    {
      name: "Products",
      child: [
        {
          name: "Kcoral",
          link: "/",
        },
        {
          name: "Omada",
          link: "/",
        },
        {
          name: "Ifgaap",
          link: "/",
        },
        {
          name: "Pensaki",
          link: "/",
        },
        {
          name: "Bitss Cyber Security",
          link: "/",
        },
      ],
    },
    // {
    //   name: "Pensaki Office Apps",
    //   child: [
    //     {
    //       name: "Advance Business Pack",
    //       link: "/",
    //     },
    //     {
    //       name: "Fixed Business Pack",
    //       link: "/",
    //     },
    //     {
    //       name: "Family Pack",
    //       link: "/",
    //     },
    //     {
    //       name: "Email Pack",
    //       link: "/",
    //     },
    //   ],
    // },
    // {
    //   name: "Other Sollutions",
    //   child: [
    //     {
    //       name: "Bobosoho SaaS Software",
    //       link: "/",
    //     },
    //     {
    //       name: "Bobosoho White Label",
    //       link: "/",
    //     },
    //     {
    //       name: "Bobosoho Website Hosting",
    //       link: "/",
    //     },
    //   ],
    // },
    // {
    //   name: "Retail",
    //   link: "/",
    // },
    {
      name: "About Us",
      link: "/",
    },
    {
      name: "Career",
      link: "/",
    },
  ];
  return (
    <nav className="sticky top-0 bg-white z-50">
      <section className="py-2.5 mx-5 md:container md:mx-auto flex justify-between items-center">
        {/* logo here  */}
        <Link to={"/"} className="flex items-center">
          <img src={logo} className="h-[40px] md:h-[80px]" alt="" />
          <span className="text-xl font-extrabold text-primary">BFINIT</span>
        </Link>
        {/* desktop view  */}
        <div className="hidden lg:flex lg:gap-8 lg:items-center">
          {MenuItems.map((mi, i) => (
            <div key={i}>
              {mi.child ? (
                <div className="relative group text-[20px]">
                  <span className="flex items-center gap-1 cursor-pointer font-semibold">
                    {mi.name}
                    <BiChevronDown className="text-2xl" />
                  </span>
                  <div className="absolute bg-white left-5 p-5 shadow rounded min-w-[350px] hidden group-hover:flex flex-col gap-2">
                    {mi.child.map((mc, i) => (
                      <Link to={mc.link} key={i} className="flex gap-1.5">
                        <BiChevronRight className="text-2xl" />
                        <span className="flex-1">{mc.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={mi.link}
                  key={i}
                  className="text-[20px] font-semibold flex items-center gap-2.5"
                >
                  {mi.name}
                  <MdArrowOutward />
                </Link>
              )}
            </div>
          ))}
        </div>
        {/* mobile view  */}
        {showNav ? (
          <button className="lg:hidden" onClick={() => setShowNav(!showNav)}>
            <CgClose className="text-2xl" />
          </button>
        ) : (
          <button className="lg:hidden" onClick={() => setShowNav(!showNav)}>
            <FaBars className="text-xl" />
          </button>
        )}

        {showNav && (
          <div className="lg:hidden p-5 md:px-14 flex flex-col gap-4 absolute top-16 md:top-28 left-0 bg-white min-w-full min-h-screen">
            {MenuItems.map((mi, i) => (
              <div key={i}>
                {mi.child ? (
                  <div>
                    <div className="text-[20px] flex justify-between items-center">
                      {mi.name}

                      {showChild !== i ? (
                        <button
                          onClick={() => setShowChild(i)}
                          className="flex items-center gap-1 cursor-pointer"
                        >
                          <BiChevronDown className="text-3xl" />
                        </button>
                      ) : (
                        <button
                          onClick={() => setShowChild("")}
                          className="flex items-center gap-1 cursor-pointer"
                        >
                          <BiChevronUp className="text-3xl" />
                        </button>
                      )}
                    </div>

                    {showChild === i && (
                      <div className="ml-4 mt-4 flex flex-col gap-4">
                        {mi.child.map((mc, i) => (
                          <Link
                            to={mc.link}
                            key={i}
                            className="text-[20px] flex gap-1.5"
                          >
                            <BiChevronRight className="text-2xl" />
                            {mc.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link to={mi.link} key={i} className="text-[20px] flex justify-between items-center">
                    {mi.name}
                    <MdArrowOutward />
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}

        <Link to={"/contact"} className="px-4 py-2 bg-primary rounded shadow text-white hidden lg:flex gap-2.5 items-center group h-fit">
          Contact{" "}
          <MdArrowOutward className="group-hover:rotate-45 duration-300 ease-linear" />
        </Link>
      </section>
      <div className="bg-primary w-full h-0.5"></div>
    </nav>
  );
}
