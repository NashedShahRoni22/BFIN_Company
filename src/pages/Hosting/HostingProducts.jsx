import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BiCheckDouble } from "react-icons/bi";
import image from "../../assets/managed-server.png";
import HostingPackages from "./HostingPackages";
import Loader from "../../shared/Loader";
import { dataCenterSupport } from "../../data/dataCenterSupport";

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
          <div className="grid place-items-center gap-8 py-10 md:py-20 lg:grid-cols-2">
            <div className="flex flex-col gap-5">
              <h5 className="text-xl md:text-2xl">
                Vault Cloud Storage including BITSS WAP
              </h5>
              <p className="text-2xl font-semibold text-primary md:text-4xl">
                Get {servers[0]?.category?.name}
              </p>
              {dataCenterSupport.map((data, i) => (
                <p key={i} className="flex gap-2">
                  <BiCheckDouble className="text-xl text-primary" />
                  <span className="flex-1">{data}</span>
                </p>
              ))}
            </div>
            <div>
              <img src={image} alt="" loading="lazy" />
            </div>
          </div>
          <h5 className="text-xl font-semibold md:text-3xl">
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
