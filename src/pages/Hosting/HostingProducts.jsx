import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { BiCheck } from "react-icons/bi";
import hostingImg11 from "../../assets/hosting-packages/hosting-1.1.png";
import hostingImg1 from "../../assets/hosting-packages/hosting-1.jpeg";
import hostingImg2 from "../../assets/hosting-packages/hosting-2.jpeg";
import hostingImg5 from "../../assets/hosting-packages/hosting-5.jpeg";
import hostingImg7 from "../../assets/hosting-packages/hosting-7.jpeg";
import proBalanceHosting from "../../assets/hosting-packages/pro-balanced.png";
import HostingPackages from "./HostingPackages";
import Loader from "../../shared/Loader";
import { dataCenterSupport } from "../../data/dataCenterSupport";

export default function HostingProducts() {
  const { id } = useParams();
  const packageRef = useRef(null);
  const [loader, setLoader] = useState(false);
  const [servers, setServers] = useState([]);

  const handleScrollToPackageRef = () => {
    if (packageRef.current) {
      packageRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // Get data
  useEffect(() => {
    setLoader(true);
    fetch(`https://hpanel.bfinit.com/api/product/list/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setServers(data?.data);
        setLoader(false);
      });
  }, [id]);

  return (
    <section className="mx-5 md:container md:mx-auto">
      {loader ? (
        <Loader />
      ) : (
        <>
          <div className="grid place-items-center gap-8 py-10 md:py-20 lg:grid-cols-2">
            <div className="flex flex-col gap-5">
              <h5 className="text-xl font-bold text-primary">
                Up to 34% off Web hosting with eCommerce Website Builder
              </h5>
              <p className="text-2xl font-semibold md:text-4xl">
                Get {servers[0]?.category?.name}
              </p>
              {dataCenterSupport.map((data, i) => (
                <p key={i} className="flex gap-2">
                  <BiCheck className="text-xl text-primary" />
                  <span className="flex-1">{data}</span>
                </p>
              ))}
              <p>
                From{" "}
                <span className="text-xl font-bold text-primary">
                  US$ {servers[0]?.defaultStorage?.price.toFixed(2)}
                </span>{" "}
                / mo{" "}
              </p>
              <button
                onClick={handleScrollToPackageRef}
                className="w-fit rounded-lg bg-primary px-12 py-3 font-bold text-white transition-all duration-200 ease-linear hover:bg-[#145c9b]"
              >
                Start Now
              </button>
            </div>
            <div>
              {id === "1" && (
                <img
                  src={hostingImg11}
                  loading="lazy"
                  className="h-full w-full rounded-lg object-cover md:h-[440px]"
                />
              )}
              {id === "2" && (
                <img
                  src={hostingImg1}
                  loading="lazy"
                  className="h-full w-full rounded-lg object-cover md:h-[440px]"
                />
              )}
              {id === "3" && (
                <img
                  src={hostingImg1}
                  loading="lazy"
                  className="h-full w-full rounded-lg object-cover md:h-[440px]"
                />
              )}
              {id === "4" && (
                <img
                  src={proBalanceHosting}
                  loading="lazy"
                  className="h-full w-full rounded-lg object-cover md:h-[440px]"
                />
              )}
              {id === "5" && (
                <img
                  src={hostingImg5}
                  loading="lazy"
                  className="h-full w-full rounded-lg object-cover md:h-[440px]"
                />
              )}
              {id === "7" && (
                <img
                  src={hostingImg7}
                  loading="lazy"
                  className="h-full w-full rounded-lg object-cover md:h-[440px]"
                />
              )}
              {id === "8" && (
                <img
                  src={hostingImg2}
                  loading="lazy"
                  className="h-full w-full rounded-lg object-cover md:h-[440px]"
                />
              )}
            </div>
          </div>
          <h5 ref={packageRef} className="text-xl font-semibold md:text-3xl">
            Explore Our Packages
          </h5>
          <div className="grid gap-5 py-5 md:grid-cols-2 md:py-10 lg:grid-cols-4">
            {servers?.map((s, i) => {
              return <HostingPackages key={i} s={s} />;
            })}
          </div>
        </>
      )}
    </section>
  );
}
