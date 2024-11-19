import React, { useEffect, useState } from "react";
import { BiChevronDown, BiChevronRight, BiChevronUp } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import logo from "../assets/logo.png";

export default function Topbar() {
  const [showNav, setShowNav] = useState(false);
  const [showChild, setShowChild] = useState("");
  // Function to handle scroll event
  const handleScroll = () => {
    setShowNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          link: "/fully-managed-dedicated-server",
        },
        {
          name: "Fully Managed Virtual Dedicated Server",
          link: "/fully-managed-virtual-dedicated-server",
        },
        {
          name: "Self Managed Dedicated Server",
          link: "/self-managed-dedicated-server",
        },
        {
          name: "Fully Managed Pure Website Hosting",
          link: "fully-managed-pure-web-hosting",
        },
        {
          name: "Self Managed Pure Website Hosting",
          link: "/self-managed-pure-web-hosting",
        },
      ],
    },
    {
      name: "Other Technologies",
      child: [
        {
          header: "IT Cyber Security",
          subChild: [
            {
              name: "Bitss Cyber Security",
              link: "https://bitss.fr/",
            },
          ],
        },
        {
          header: "Build Business",
          subChild: [
            {
              name: "SaaS Software",
              link: "/software",
            },
            {
              name: "White Label",
              link: "/white-label",
            },
          ],
        },
        {
          header: "Social Communication",
          subChild: [
            {
              name: "Sosay Social Media",
              link: "https://sosay.org/",
            },
            {
              name: "Bobosoho",
              link: "https://bobosoho.com/",
            },
          ],
        },
        {
          header: "Expand Business",
          subChild: [
            {
              name: "Pensaki Blackboard",
              link: "https://pensaki.org/",
            },
            {
              name: "Omada HR Payroll",
              link: "https://omada-clasico.org/omada-hr-payroll",
            },
            {
              name: "Omada Project Management",
              link: "https://omada-clasico.org/project-management",
            },
            {
              name: "Clasico Payslips",
              link: "https://omada-clasico.org/clasico-payslip",
            },
            {
              name: "Ifgaap Mobile Invoicing",
              link: "https://ifgaap.org/",
            },
            {
              name: "Ifgaap GL Accounting",
              link: "https://ifgaap.org/",
            },
          ],
        },
      ],
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Career",
      link: "/career",
    },
  ];
  return (
    <nav className="sticky top-0 bg-white z-50">
      <section className="py-5 mx-5 md:container md:mx-auto flex justify-between items-center relative">
        {/* logo here  */}
        <Link to={"/"} className="flex items-center">
          <img src={logo} className="h-[40px]" alt="" />
        </Link>
        {/* desktop view  */}
        <div className="hidden lg:flex lg:gap-8 lg:items-center">
          {MenuItems.map((mi, i) => (
            <div key={i}>
              {mi.child ? (
                <div className="group text-[18px]">
                  <span className="flex items-center gap-1 cursor-pointer font-semibold">
                    {mi.name}
                    <BiChevronDown className="text-2xl" />
                  </span>
                  <div className="flex-1 absolute bg-white left-0 p-5 shadow rounded min-w-full hidden group-hover:grid grid-cols-3 gap-2">
                    {mi.child.map((mc, i) => (
                      <>
                        {mc.header ? (
                          <div>
                            <span className="font-semibold">{mc.header}</span>
                            <ul className="flex flex-col gap-2 ml-2 mt-2">
                              {mc.subChild.map((mcc, i) => (
                                <Link
                                  key={i}
                                  className="flex gap-1.5 hover:font-semibold hover:translate-x-3 hover:text-primary duration-300 ease-linear"
                                >
                                  <BiChevronRight className="text-2xl" />
                                  {mcc.name}
                                </Link>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <Link
                            to={mc.link}
                            key={i}
                            className="flex gap-1.5 hover:font-semibold hover:translate-x-3 hover:text-primary duration-300 ease-linear"
                          >
                            <BiChevronRight className="text-2xl" />
                            {mc.name}
                          </Link>
                        )}
                      </>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={mi.link}
                  key={i}
                  className="text-[18px] font-semibold flex items-center gap-2.5"
                >
                  {mi.name}
                  {/* <MdArrowOutward /> */}
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

        {/* desktop mode contact button */}
        <Link
          to={"/contact"}
          className="px-4 py-2 bg-primary rounded shadow text-white hidden lg:flex gap-2.5 items-center group h-fit"
        >
          Contact{" "}
          <MdArrowOutward className="group-hover:rotate-45 duration-300 ease-linear" />
        </Link>
      </section>
      {showNav && (
        <div className="lg:hidden p-5 md:px-14 flex flex-col gap-4 absolute top-18 md:top-28 left-0 bg-white min-w-full h-[80vh] overflow-y-scroll">
          {MenuItems.map((mi, i) => (
            <div key={i}>
              {mi.child ? (
                <div>
                  <div className="text-[18px] flex justify-between items-center">
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
                    <div className="ml-2 mt-2 flex flex-col gap-4">
                      {mi.child.map((mc, i) => (
                        <>
                          {mc.header ? (
                            <div>
                              <span className="font-semibold text-primary">{mc.header}</span>
                              <ul className="flex flex-col gap-2 ml-2 mt-2">
                                {mc.subChild.map((mcc, i) => (
                                  <Link
                                    key={i}
                                    to={mcc.link}
                                    className="flex gap-1.5 hover:font-semibold hover:translate-x-3 hover:text-primary duration-300 ease-linear"
                                  >
                                    <BiChevronRight className="text-2xl" />
                                    {mcc.name}
                                  </Link>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <Link
                              to={mc.link}
                              key={i}
                              onClick={() => setShowNav(!showNav)}
                              className="flex gap-1.5 hover:font-semibold hover:translate-x-3 hover:text-primary duration-300 ease-linear"
                            >
                              <BiChevronRight className="text-2xl" />
                              {mc.name}
                            </Link>
                          )}
                        </>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={mi.link}
                  key={i}
                  onClick={() => setShowNav(!showNav)}
                  className="text-[18px] flex justify-between items-center"
                >
                  {mi.name}
                  {/* <MdArrowOutward /> */}
                </Link>
              )}
            </div>
          ))}
          <Link
            to={"/contact"}
            onClick={() => setShowNav(!showNav)}
            className="px-4 py-2 bg-primary rounded shadow text-white w-fit"
          >
            Contact Us
          </Link>
        </div>
      )}
      <div className="bg-primary w-full h-0.5"></div>
    </nav>
  );
}
