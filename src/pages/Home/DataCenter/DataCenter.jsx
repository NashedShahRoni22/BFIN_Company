import { Link } from "react-router-dom";
import dataCenterImg from "../../../assets/data-center/data-center.webp";

export default function DataCenter() {
  return (
    <section className="mx-5 py-10 md:container md:mx-auto md:py-20">
      <h2 className="text-center text-2xl font-extrabold text-primary md:text-4xl">
        BFINIT - Secure, Scalable and Redundant
      </h2>
      <p className="mt-6 text-center text-lg md:text-xl">
        Safeguard Your Servers or Hosting Space Across Multiple Locations for
        Unmatched Protection.
      </p>
      <div className="mt-12 flex flex-col items-center justify-between gap-8 md:flex-row-reverse md:gap-16">
        <div className="h-[390px] w-full md:w-1/2">
          <img
            src={dataCenterImg}
            alt="bfinit data center"
            loading="lazy"
            className="h-[390px] w-full rounded-xl object-cover md:h-full"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold">Data Center&apos;s Mission</h2>
          <p className="mt-4 text-lg md:mt-8">
            Bfinit - Next-Gen Data Center Solutions for Speed, Reliability &
            Security, Backed by Multi-Site Infrastructure and Secure Data
            Redundancy for Unmatched Protection.
          </p>
          <p className="mt-4 text-lg">
            Our state-of-the-art facilities ensure top-tier security, constant
            uptime and resilience against unforeseen circumstances, making us a
            trusted partner in safeguarding your critical data assets.
          </p>
          <Link
            to="/data-center"
            className="mt-8 inline-block rounded bg-blue-600 px-6 py-3 font-medium text-white shadow transition-all duration-200 ease-linear hover:bg-primary"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
