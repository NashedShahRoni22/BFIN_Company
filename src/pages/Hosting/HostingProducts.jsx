import React, { useEffect, useState } from "react";
import { BiCheckDouble } from "react-icons/bi";
import image from "../../assets/managed-server.png";
import HostingPackages from "./HostingPackages";
import Loader from "../../shared/Loader";
import { useParams } from "react-router-dom";

export default function HostingProducts() {
  const { id } = useParams();
  const [loader, setLoader] = useState(false);
  const [servers, setServers] = useState([]);

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
        <div className="py-10 md:py-20 grid gap-8 lg:grid-cols-2 place-items-center">
            <div className="flex flex-col gap-5">
            <h5 className="text-xl md:text-2xl">
                Vault Cloud Storage including BITSS WAP
            </h5>
            <p className="text-2xl md:text-4xl text-primary font-semibold">
                Get {servers[0]?.category?.name}
            </p>
            <p className="flex gap-2">
                <BiCheckDouble className="text-xl text-primary" />
                <span className="flex-1">Continued support 24/7</span>
            </p>
            <p className="flex gap-2">
                <BiCheckDouble className="text-xl text-primary" />
                <span className="flex-1">
                Available SSD or HDD disc selection for flexible server
                configurations according to client needs.
                </span>
            </p>
            <p className="flex gap-2">
                <BiCheckDouble className="text-xl text-primary" />
                <span className="flex-1">
                All servers include free Pensaki Blackboard Account, giving direct
                access to clients hosting panel, also give acces to clients office
                tools doc writer, pdf convertor, anti spam email and other related
                products in a secured enviiroment.
                </span>
            </p>
            <p className="flex gap-2">
                <BiCheckDouble className="text-xl text-primary" />
                <span className="flex-1">
                Includes hosting vault for documents videos photos storage and
                email – all for 1 or up to 100 users and each user depending on
                hosting subsription all with own dedicated secured dashboard.
                </span>
            </p>
            </div>
            <div>
            <img src={image} alt="" loading="lazy" />
            </div>
        </div>
        <h5 className="text-xl md:text-3xl font-semibold">Explore Our Packages</h5>
        <div className="py-5 md:py-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {servers?.map((s, i) => {
            return <HostingPackages key={i} s={s} />;
          })}
        </div>
        </>
      )}
    </section>
  );
}
