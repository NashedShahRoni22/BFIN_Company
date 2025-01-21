import { useEffect, useState } from "react";
import { BiChevronDown, BiChevronRight, BiChevronUp } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import logo from "../assets/logo.png";

export default function Topbar() {
  const [showNav, setShowNav] = useState(false);
  const [showChild, setShowChild] = useState("");
  const [showSubMenu, setShowSubMenu] = useState(null);

  // Function to handle scroll event
  const handleScroll = () => {
    setShowNav(false);
    setShowSubMenu(false);
  };

  // Toggle Submenu in Destop View
  const toggleSubMenu = (index) => {
    setShowSubMenu((prev) => (prev === index ? null : index));
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
      name: "Our Technologies",
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
            {
              name: "Become a Reseller",
              link: "/reseller-program",
            },
            {
              name: "E-commerce Platform",
              link: "/bfinit-ecomerce-platform",
            },
            {
              name: "E-commerce Guide",
              link: "/ecommerce-guide",
            },
          ],
        },
        {
          header: "Social Communication",
          subChild: [
            {
              name: "Sosay",
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
              name: "hPanel Hosting Manager",
              link: "/fully-managed-dedicated-server",
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
      name: "Company",
      child: [
        {
          name: "About Us",
          link: "/about",
        },
        {
          name: "Our Brands",
          link: "/our-brands",
        },
      ],
    },
    {
      name: "Career",
      link: "/career",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <section className="relative mx-5 flex items-center justify-between py-5 md:container md:mx-auto">
        {/* logo here  */}
        <Link to={"/"} className="flex items-center">
          <img src={logo} className="h-[40px]" alt="" loading="lazy" />
        </Link>
        {/* desktop view  */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {MenuItems.map((mi, i) => (
            <div key={i}>
              {mi.child ? (
                <div className="group text-[18px]">
                  <span
                    onClick={() => toggleSubMenu(i)}
                    className="flex cursor-pointer items-center gap-1 font-semibold"
                  >
                    {mi.name}
                    <BiChevronDown className="text-2xl" />
                  </span>
                  {showSubMenu === i && (
                    <div className="absolute left-1/2 top-full grid h-auto max-h-[calc(100vh-80px)] w-7/12 flex-1 -translate-x-1/2 grid-cols-3 gap-2 overflow-y-auto rounded border border-primary bg-white p-5 shadow">
                      {mi.child.map((mc, i) => (
                        <>
                          {mc.header ? (
                            <div key={i}>
                              <span className="font-semibold">{mc.header}</span>
                              <ul className="ml-2 mt-2 flex flex-col gap-2">
                                {mc.subChild.map((mcc, i) => (
                                  <Link
                                    onClick={() => setShowSubMenu(null)}
                                    key={i}
                                    to={mcc.link}
                                    className="flex gap-1.5 duration-300 ease-linear hover:translate-x-3 hover:font-semibold hover:text-primary"
                                  >
                                    <BiChevronRight className="text-2xl" />
                                    {mcc.name}
                                  </Link>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <Link
                              onClick={() => setShowSubMenu(null)}
                              to={mc.link}
                              key={i}
                              className="flex gap-1.5 duration-300 ease-linear hover:translate-x-3 hover:font-semibold hover:text-primary"
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
                  className="flex items-center gap-2.5 text-[18px] font-semibold"
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
          className="group hidden h-fit items-center gap-2.5 rounded bg-primary px-4 py-2 text-white shadow lg:flex"
        >
          Contact{" "}
          <MdArrowOutward className="duration-300 ease-linear group-hover:rotate-45" />
        </Link>
      </section>
      {showNav && (
        <div className="top-18 absolute left-0 flex h-[80vh] min-w-full flex-col gap-4 overflow-y-scroll bg-white p-5 md:px-14 lg:hidden">
          {MenuItems.map((mi, i) => (
            <div key={i}>
              {mi.child ? (
                <div>
                  <div className="flex items-center justify-between text-[18px]">
                    {mi.name}

                    {showChild !== i ? (
                      <button
                        onClick={() => setShowChild(i)}
                        className="flex cursor-pointer items-center gap-1"
                      >
                        <BiChevronDown className="text-3xl" />
                      </button>
                    ) : (
                      <button
                        onClick={() => setShowChild("")}
                        className="flex cursor-pointer items-center gap-1"
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
                              <span className="font-semibold text-primary">
                                {mc.header}
                              </span>
                              <ul className="ml-2 mt-2 flex flex-col gap-2">
                                {mc.subChild.map((mcc, i) => (
                                  <Link
                                    key={i}
                                    to={mcc.link}
                                    onClick={() => setShowNav(!showNav)}
                                    className="flex gap-1.5 duration-300 ease-linear hover:translate-x-3 hover:font-semibold hover:text-primary"
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
                              className="flex gap-1.5 duration-300 ease-linear hover:translate-x-3 hover:font-semibold hover:text-primary"
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
                  className="flex items-center justify-between text-[18px]"
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
            className="w-fit rounded bg-primary px-4 py-2 text-white shadow"
          >
            Contact Us
          </Link>
        </div>
      )}
      <div className="h-0.5 w-full bg-primary"></div>
    </nav>
  );
}
