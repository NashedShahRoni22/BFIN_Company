import React, { useState } from "react";
import {
  BiChevronDown,
  BiChevronRight,
  BiChevronRightCircle,
  BiChevronUp,
} from "react-icons/bi";
import { BsArrow90DegRight } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

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
          name: "Bitss Wrap",
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
    {
      name: "Contact Us",
      link: "/",
    },
  ];
  return (
    <nav className="py-2.5 mx-5 md:container md:mx-auto flex justify-between">
      <p className="text-[20px] text-primary font-semibold">BFIN IT</p>
      {/* desktop view  */}
      <div className="hidden lg:flex lg:gap-8">
        {MenuItems.map((mi, i) => (
          <>
            {mi.child ? (
              <div key={i} className="relative group text-[20px]">
                <span className="flex items-center gap-1 cursor-pointer font-semibold">
                  {mi.name}
                  <BiChevronDown />
                </span>
                <div className="absolute bg-white left-5 p-5 shadow rounded min-w-[350px] hidden group-hover:flex flex-col gap-2">
                  {mi.child.map((mc, i) => (
                    <Link
                      to={mc.link}
                      key={i}
                      className="flex gap-1.5"
                    >
                      <BiChevronRight className="text-2xl" />
                      <span className="flex-1">{mc.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link to={mi.link} key={i} className="text-[20px] font-semibold">
                {mi.name}
              </Link>
            )}
          </>
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
        <div className="lg:hidden p-5 flex flex-col gap-4 absolute top-20 left-0 bg-white min-w-full min-h-screen">
          {MenuItems.map((mi, i) => (
            <>
              {mi.child ? (
                <div key={i}>
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
                <Link to={mi.link} key={i} className="text-[20px]">
                  {mi.name}
                </Link>
              )}
            </>
          ))}
        </div>
      )}
    </nav>
  );
}