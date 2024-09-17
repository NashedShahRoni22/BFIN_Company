import React, { useEffect, useState } from "react";
import { BiCheckDouble } from "react-icons/bi";
import image from "../../assets/managed-server.png";
import HostingPackages from "./HostingPackages";
import Loader from "../../shared/Loader";
import { useParams } from "react-router-dom";

export default function SelftPureHosting() {
  const {id} = useParams();
  const [loader, setLoader] = useState(false);
  const [servers, setServers] = useState([]);

  // Get data
  useEffect(() => {
    setLoader(true);
    fetch(`https://hpanel.bfinit.com/api/product/list/5`)
      .then((res) => res.json())
      .then((data) => {
        setServers(data);
        setLoader(false);
      });
  }, [id]);

  return (
    <section className="mx-5 md:container md:mx-auto py-5 md:py-10">
      <div className="mt-5 md:mt-10 grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <h5 className="text-xl md:text-2xl">
            Self Managed Pure Web Hosting including BITSS WAP
          </h5>
          <p className="text-2xl md:text-4xl text-primary font-semibold">
            Get Self Managed Pure Web Hosting.
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
              All servers include free upload of WP (word press web site) Free
              bobosoho office suits software including wordsxtra, notesxtra,
              worksheets, hosting vault for documents videos photos storage and
              email – all for up to 100 users and each user with own dedicated
              secured dashboard.
            </span>
          </p>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </div>

      {loader ? (
        <Loader/>
      ) : (
        <div className="mt-5 md:mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {servers?.map((s, i) => {
            return <HostingPackages key={i} s={s} />;
          })}
        </div>
      )}
    </section>
  );
}
