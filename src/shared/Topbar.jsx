import { useEffect, useState } from "react";
import { BiChevronDown, BiChevronRight, BiChevronUp } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import logo from "../assets/logo.png";

const MenuItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Hosting & Servers",
    child: [
      {
        icon: "https://img.icons8.com/ios/50/domain.png",
        name: "Web Hosting",
        link: "/web-hosting",
        description: "Reliable and affordable web hosting solutions.",
      },
      {
        icon: "https://img.icons8.com/ios/50/database--v1.png",
        name: "VPS Hosting",
        link: "/vps-hosting",
        description: "Scalable and secure virtual private servers.",
      },
      {
        icon: "https://img.icons8.com/badges/50/server.png",
        name: "Dedicated Server",
        link: "/dedicated-server",
        description: "High-performance servers for demanding applications.",
      },
      {
        icon: "https://img.icons8.com/windows/50/maintenance.png",
        name: "Custom VPS",
        link: "/build-your-own-vps",
        description: "Customize resources for your exact needs.",
      },
      {
        icon: "https://img.icons8.com/ios/100/reseller.png",
        name: "Distributeurs Affiliation",
        link: "/distributeurs-affiliation",
        description:
          "Start your own hosting business with our distributeurs affiliation program.",
      },
    ],
  },

  {
    name: "Our Technologies",
    link: "/our-technologies",
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
  /* {
    name: "Our Technologies",
    child: [
      {
        header: "Bitss Cyber Security",
        subChild: [
          {
            name: "Bitss WAP",
            link: "https://bitss.fr/products/wap-website-protection/wp",
          },
          {
            name: "Bitss C",
            link: "https://bitss.fr/products/c-contact-form/wp",
          },
          {
            name: "Bitss VWAR",
            link: "https://bitss.fr/products/vwar-frontline/wp",
          },
        ],
      },
      {
        header: "Database Hosting & Security",
        subChild: [
          {
            name: "Data Center",
            link: "/data-center",
          },
          {
            name: "Hosting",
            link: "/hosting-products/7",
          },
          {
            name: "H Panel",
            link: "https://hpanel.bfinit.com/login",
          },
        ],
      },
      {
        header: "Build Business",
        subChild: [
          // {
          //   name: "Old SaaS Software",
          //   link: "/old-software",
          // },
          {
            name: "SaaS Software",
            link: "/sass-software",
          },
          // {
          //   name: "Old White Label",
          //   link: "/old-white-label",
          // },
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
        header: "Expand Business",
        subChild: [
          {
            name: "Pensaki Blackboard",
            link: "https://pensaki.org/",
          },
          {
            name: "Omada HR Payroll",
            link: "https://omada-clasico.com/omada-hr-payroll",
          },
          {
            name: "Omada Project Management",
            link: "https://omada-clasico.com/project-management",
          },
          {
            name: "Clasico Payslips",
            link: "https://omada-clasico.com/clasico-payslip",
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
    ],
  }, */
];

export default function Topbar() {
  const [showNav, setShowNav] = useState(false);
  const [showChild, setShowChild] = useState("");
  const [showSubMenu, setShowSubMenu] = useState(null);
  const [hostingProducts, setHostingProducts] = useState([]);
  const [updatedMenuItems, setUpdatedMenuItems] = useState(MenuItems);

  // fetching hosting products
  useEffect(() => {
    const fetchHostingProducts = async () => {
      const response = await fetch(
        "https://hpanel.bfinit.com/api/product/categories",
      );
      const data = await response.json();
      setHostingProducts(data.data);
    };

    fetchHostingProducts();
  }, []);

  // Update the MenuItems when hostingProducts changes
  useEffect(() => {
    if (hostingProducts.length > 0) {
      // Define categories and their respective product IDs
      const categories = {
        "Bare Metal Servers": [1, 3],
        "Virtual Machine": [2, 8],
        Hosting: [4, 5, 7],
      };

      // Map hosting products to categories
      const categorizedProducts = Object.keys(categories).map((category) => {
        const productIds = categories[category];
        const products = hostingProducts.filter((product) =>
          productIds.includes(product.id),
        );
        return {
          header: category,
          subChild: products.map((product) => ({
            name: product.name,
            link: `/hosting-products/${product.id}`,
          })),
        };
      });

      // Add "Build your own VPS" to the "Virtual Machine" category
      const virtualMachineCategory = categorizedProducts.find(
        (cat) => cat.header === "Virtual Machine",
      );
      if (virtualMachineCategory) {
        virtualMachineCategory.subChild.push({
          name: "Build Your Own VPS",
          link: "/build-your-own-vps",
        });
      }

      // Update the MenuItems
      const updatedMenu = updatedMenuItems.map((item) => {
        if (item.name === "Hosting Products") {
          return {
            ...item,
            child: categorizedProducts,
          };
        }
        return item;
      });

      setUpdatedMenuItems(updatedMenu);
    }
  }, [hostingProducts]);

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

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <section className="relative mx-5 flex items-center justify-between py-5 md:container md:mx-auto">
        {/* logo here  */}
        <Link onClick={toggleSubMenu} to={"/"} className="flex items-center">
          <img src={logo} className="h-[40px]" alt="" loading="lazy" />
        </Link>
        {/* desktop view  */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {updatedMenuItems.map((mi, i) => (
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
                    <div className="absolute left-1/2 top-full grid h-auto max-h-[calc(100vh-80px)] w-7/12 flex-1 -translate-x-1/2 grid-cols-3 gap-4 overflow-y-auto rounded border border-primary bg-white p-5 shadow">
                      {mi.child.map((mc, i) => (
                        <div key={i}>
                          {mc.header ? (
                            <div>
                              <span className="font-semibold">{mc.header}</span>
                              <ul className="ml-2 mt-2 flex flex-col gap-2">
                                {mc.subChild.map((mcc, i) => (
                                  <Link
                                    onClick={() => setShowSubMenu(null)}
                                    key={i}
                                    to={mcc.link}
                                    className="flex gap-1.5 duration-300 ease-linear hover:translate-x-3 hover:font-semibold hover:text-primary"
                                  >
                                    <BiChevronRight className="min-w-fit text-2xl" />
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
                              className="flex gap-1.5 duration-300 ease-linear hover:translate-x-3"
                            >
                              {mc.icon ? (
                                <img
                                  src={mc.icon}
                                  className="size-8 rounded bg-blue-100 p-1"
                                  alt=""
                                />
                              ) : (
                                <BiChevronRight className="text-2xl" />
                              )}
                              <div>
                                <p className="font-semibold">{mc.name}</p>
                                <p className="mt-1 text-xs text-gray-800">
                                  {mc.description}
                                </p>
                              </div>
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  onClick={toggleSubMenu}
                  key={i}
                  to={mi.link}
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

      {/* mobile view  */}
      {showNav && (
        <div className="top-18 absolute left-0 flex h-[80vh] min-w-full flex-col gap-4 overflow-y-scroll bg-white p-5 md:px-14 lg:hidden">
          {updatedMenuItems.map((mi, i) => (
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
                        <div key={i}>
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
                              {mc.icon ? (
                                <img
                                  src={mc.icon}
                                  className="size-8 rounded bg-blue-100 p-1"
                                  alt=""
                                />
                              ) : (
                                <BiChevronRight className="text-2xl" />
                              )}
                              <div>
                                <p className="">{mc.name}</p>
                                <p className="mt-1 text-xs text-gray-800">
                                  {mc.description}
                                </p>
                              </div>
                            </Link>
                          )}
                        </div>
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
