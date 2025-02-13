import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { BiCheck } from "react-icons/bi";
import img1 from "../../assets/hosting-packages/1.webp";
import img2 from "../../assets/hosting-packages/2.jpeg";
import img3 from "../../assets/hosting-packages/3.webp";
import img4 from "../../assets/hosting-packages/4.webp";
import img5 from "../../assets/hosting-packages/5.webp";
import img7 from "../../assets/hosting-packages/7.webp";
import img8 from "../../assets/hosting-packages/8.jpeg";
import HostingPackages from "./HostingPackages";
import Loader from "../../shared/Loader";
import { dataCenterSupport } from "../../data/dataCenterSupport";

const hostingImg = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
  7: img7,
  8: img8,
};

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
          <div className="flex flex-col gap-8 py-10 md:gap-16 md:py-20 lg:flex-row">
            <div className="flex w-full flex-col gap-5 md:w-1/2">
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
            <div className="w-full md:w-1/2">
              <img
                src={hostingImg[id]}
                loading="lazy"
                className="h-[200px] w-full rounded-lg object-cover md:h-[440px]"
              />
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
